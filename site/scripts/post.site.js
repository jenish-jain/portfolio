// footnotes
const footnotes = document.querySelectorAll('.footnote-phrase');
Array.from(footnotes).forEach((fnLink) => {
  fnLink.addEventListener('click', (event) => {
    event.preventDefault();

    const [, id] = event.target.href.split('#');
    const footnote = document.querySelector(`#${id} .footnote-content`);
    const isVisible = footnote.dataset.visible !== 'false';
    footnote.dataset.visible = isVisible ? 'false' : 'true';
  });
});

const footnoteCloseLinks = document.querySelectorAll('.footnote-backref');
Array.from(footnoteCloseLinks).forEach((closeLink) => {
  closeLink.addEventListener('click', (event) => {
    event.preventDefault();

    const footnote = event.target.closest('.footnote-content');
    footnote.dataset.visible = 'false';
  });
});

// ToC section highlighting
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (
      entry.target.offsetTop - window.pageYOffset <
      window.innerHeight - window.innerHeight * 0.1
    ) {
      const tocLinks = document.querySelectorAll('.toc-content a');
      Array.from(tocLinks).forEach((l) => {
        l.classList.remove('active');
      });

      const activeLink = document.querySelector(
        `.toc-content a[href$=${entry.target.id}]`
      );
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

function updateActiveToCItem() {
  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: `-${window.innerHeight * 0.33}px 0px 0px 0px`,
    threshold: [0.75, 0.8, 0.85, 0.9, 0.95, 1],
  });

  const headings = document.querySelectorAll('.post-content h2');
  Array.from(headings).forEach((h2) => {
    observer.observe(h2);
  });
}

updateActiveToCItem();

function addGoogleAnalytics(trackingId) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingId);
  };
}

addGoogleAnalytics('G-BDVPDTHT3S');
