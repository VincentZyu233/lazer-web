// /docs — navigation, scroll position and code affordances.
//
// The page is deliberately framework-free like the rest of the site: this file
// only adds behaviour that is absent without it (a sticky section marker, a
// table-of-contents filter, and copy buttons). Every section stays readable
// with the script blocked.

const docs = {
  navLinks: [],
  headings: [],
  activeId: '',

  init() {
    this.wireRailToggle();
    this.wireFilter();
    this.wireCodeBlocks();
    this.collectTargets();
    this.observe();
    this.wireShortcuts();
    this.syncFromHash();
  },

  // Mobile: the rail becomes a <details>-like disclosure.
  wireRailToggle() {
    const toggle = document.querySelector('[data-rail-toggle]');
    const body = document.querySelector('[data-rail-body]');
    if (!toggle || !body) return;

    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      const state = toggle.querySelector('[data-rail-state]');
      if (state) state.textContent = open ? '收起' : '展开';
    });
  },

  // Table-of-contents filter. Matches the link text and its href.
  wireFilter() {
    const input = document.querySelector('[data-docs-filter]');
    const nav = document.querySelector('.docs-nav');
    if (!input || !nav) return;

    const empty = nav.querySelector('.docs-nav-empty');
    const groups = [...nav.querySelectorAll('.docs-nav-group')];
    const links = [...nav.querySelectorAll('a')].map((a) => ({
      el: a,
      haystack: `${a.textContent} ${a.getAttribute('href') || ''}`.toLowerCase(),
    }));

    const apply = () => {
      const query = input.value.trim().toLowerCase();
      let visible = 0;

      for (const link of links) {
        const match = query === '' || link.haystack.includes(query);
        link.el.classList.toggle('is-hidden', !match);
        if (match) visible += 1;
      }

      for (const group of groups) {
        const any = group.querySelector('a:not(.is-hidden)');
        group.classList.toggle('is-hidden', !any);
      }

      if (empty) empty.classList.toggle('is-visible', visible === 0);
    };

    input.addEventListener('input', apply);
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        input.value = '';
        apply();
        input.blur();
      }
    });
    apply();
  },

  // Copy buttons. The head line is injected so the markup stays terse.
  wireCodeBlocks() {
    const blocks = document.querySelectorAll('.docs-main .code-block');

    for (const block of blocks) {
      const pre = block.querySelector('pre');
      if (!pre) continue;

      if (!block.querySelector('.code-head')) {
        const head = document.createElement('div');
        head.className = 'code-head';

        const label = document.createElement('span');
        label.textContent = block.dataset.lang || 'code';

        const copy = document.createElement('button');
        copy.type = 'button';
        copy.className = 'code-copy';
        copy.textContent = '复制';

        head.append(label, copy);
        block.insertBefore(head, pre);

        copy.addEventListener('click', async () => {
          const text = pre.innerText.replace(/\n+$/, '');
          const done = () => {
            copy.textContent = '已复制';
            copy.classList.add('is-done');
            setTimeout(() => {
              copy.textContent = '复制';
              copy.classList.remove('is-done');
            }, 1600);
          };

          try {
            await navigator.clipboard.writeText(text);
            done();
          } catch {
            // Clipboard API needs a secure context; fall back to a selection so
            // the reader can still copy by hand.
            const range = document.createRange();
            range.selectNodeContents(pre);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            copy.textContent = '请按 Ctrl+C';
          }
        });
      }

      if (!pre.hasAttribute('tabindex')) pre.setAttribute('tabindex', '0');
    }
  },

  // Every element that the table of contents points at, in document order.
  collectTargets() {
    const nav = document.querySelector('.docs-nav');
    if (!nav) return;

    const byId = new Map();
    for (const link of nav.querySelectorAll('a[href^="#"]')) {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      if (id && !byId.has(id)) byId.set(id, link);
    }

    this.navLinks = [...byId.entries()];

    const seen = new Set();
    this.headings = [];
    for (const [id, link] of this.navLinks) {
      const target = document.getElementById(id);
      if (!target || seen.has(id)) continue;
      seen.add(id);
      this.headings.push({ id, target, link });
    }

    // Keep them in visual order so scroll-spy picks the topmost match.
    this.headings.sort((a, b) =>
      a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );
  },

  observe() {
    if (this.headings.length === 0) return;

    const setActive = (id) => {
      if (id === this.activeId) return;
      this.activeId = id;

      for (const item of this.headings) {
        const isActive = item.id === id;
        item.link.classList.toggle('is-active', isActive);
        if (isActive) item.link.setAttribute('aria-current', 'true');
        else item.link.removeAttribute('aria-current');
      }

      this.revealActive();
    };

    // The marker follows the last heading that has crossed the reading line.
    const line = 96;
    let scheduled = false;

    const measure = () => {
      scheduled = false;
      let current = this.headings[0].id;

      for (const item of this.headings) {
        if (item.target.getBoundingClientRect().top - line <= 0) current = item.id;
        else break;
      }

      // At the very bottom of the page the last entry should win even when it
      // cannot reach the reading line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = this.headings[this.headings.length - 1].id;

      setActive(current);
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    measure();
  },

  // Keep the active entry visible inside the rail without touching the page's
  // own scroll position — the table of contents is taller than the viewport.
  revealActive() {
    const link = this.headings.find((item) => item.id === this.activeId)?.link;
    if (!link) return;

    const nav = link.closest('.docs-nav');
    if (!nav || nav.scrollHeight <= nav.clientHeight + 4) return;

    const box = nav.getBoundingClientRect();
    const row = link.getBoundingClientRect();
    const pad = 16;

    if (row.top < box.top + pad) {
      nav.scrollTop -= box.top + pad - row.top;
    } else if (row.bottom > box.bottom - pad) {
      nav.scrollTop += row.bottom - (box.bottom - pad);
    }
  },

  wireShortcuts() {
    const input = document.querySelector('[data-docs-filter]');
    if (!input) return;

    document.addEventListener('keydown', (event) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      const tag = (event.target && event.target.tagName) || '';
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
      event.preventDefault();
      if (window.matchMedia('(max-width: 900px)').matches) {
        const toggle = document.querySelector('[data-rail-toggle]');
        const body = document.querySelector('[data-rail-body]');
        if (toggle && body && !body.classList.contains('is-open')) toggle.click();
      }
      input.focus();
      input.select();
    });
  },

  // Landing directly on /docs#stream should mark the right entry even before
  // any scrolling happens.
  syncFromHash() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const item = this.headings.find((entry) => entry.id === hash);
    if (item) item.link.classList.add('is-active');
  },
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => docs.init());
} else {
  docs.init();
}
