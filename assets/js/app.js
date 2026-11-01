// JavaScript for Hafia.dev Showcase (Clean Light Theme & Mobile Optimized)

// 1. Initialize Icons
if (window.lucide) {
  lucide.createIcons();
}

// 2. Interactive Device View Switcher (Desktop vs Mobile)
function setDeviceView(mode) {
  const mockup = document.getElementById('device-mockup');
  const btnDesktop = document.getElementById('btn-desktop');
  const btnMobile = document.getElementById('btn-mobile');

  if (mode === 'mobile') {
    mockup.style.maxWidth = 'min(380px, 100%)';
    mockup.style.borderRadius = '2.25rem';
    btnMobile.className = 'flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-sm border border-slate-200 transition-all';
    btnDesktop.className = 'flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all';
  } else {
    mockup.style.maxWidth = '1024px';
    mockup.style.borderRadius = '1rem';
    btnDesktop.className = 'flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-sm border border-slate-200 transition-all';
    btnMobile.className = 'flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all';
  }
}

// 3. Mobile Hamburger Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (icon) icon.setAttribute('data-lucide', 'x');
    } else {
      menu.classList.add('hidden');
      if (icon) icon.setAttribute('data-lucide', 'menu');
    }
    if (window.lucide) lucide.createIcons();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    if (icon) icon.setAttribute('data-lucide', 'menu');
    if (window.lucide) lucide.createIcons();
  }
}

// 4. Theme & Iframe Demo Switcher
const themeUrls = {
  corporate: {
    src: './demos/corporate/index.html',
    url: 'https://pt-solusi-investasi.com',
    title: 'The Executive Pillar (Corporate B2B)'
  },
  tech: {
    src: './demos/tech-saas/index.html',
    url: 'https://nexus-cloud.io',
    title: 'Nexus CyberTech (Modern Clean IT)'
  },
  luxury: {
    src: './demos/luxury-creative/index.html',
    url: 'https://atelier-studio.design',
    title: 'Atelier Spatial (Editorial Luxury)'
  }
};

let currentTheme = 'corporate';

function selectTheme(themeKey) {
  const data = themeUrls[themeKey];
  if (!data) return;
  currentTheme = themeKey;

  const iframe = document.getElementById('mockup-iframe');
  const urlBar = document.getElementById('mockup-url');

  iframe.style.opacity = '0';
  setTimeout(() => {
    iframe.src = data.src;
    if (urlBar) urlBar.innerText = data.url;
    iframe.onload = () => {
      iframe.style.opacity = '1';
    };
    // Scroll smoothly to mockup
    const mockupEl = document.getElementById('device-mockup');
    if (mockupEl) {
      mockupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);
}

function refreshMockupAnimation() {
  const iframe = document.getElementById('mockup-iframe');
  if (!iframe) return;
  iframe.style.opacity = '0';
  setTimeout(() => {
    iframe.src = iframe.src;
    iframe.onload = () => {
      iframe.style.opacity = '1';
    };
  }, 120);
}

// 5. Fullscreen Live Demo Modal
function openFullscreenDemo() {
  const modal = document.getElementById('demo-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-demo-title');
  const data = themeUrls[currentTheme];

  if (modalTitle) modalTitle.innerText = data.title;
  if (modalIframe) modalIframe.src = data.src;
  if (modal) modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenDemo() {
  const modal = document.getElementById('demo-modal');
  const modalIframe = document.getElementById('modal-iframe');
  if (modal) modal.classList.add('hidden');
  if (modalIframe) modalIframe.src = 'about:blank';
  document.body.style.overflow = 'auto';
}

// 6. Terms & Privacy Modals
function openTermsModal() {
  const modal = document.getElementById('terms-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeTermsModal() {
  const modal = document.getElementById('terms-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function openPrivacyModal() {
  const modal = document.getElementById('privacy-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closePrivacyModal() {
  const modal = document.getElementById('privacy-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// 7. Click-Outside Handlers & Keyboard Accessibility
document.addEventListener('click', function(event) {
  // Auto-close mobile menu when clicking outside
  const menu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (menu && !menu.classList.contains('hidden')) {
    if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      closeMobileMenu();
    }
  }

  // Auto-close modals when clicking backdrop
  ['terms-modal', 'privacy-modal'].forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal && !modal.classList.contains('hidden') && event.target === modal) {
      if (modalId === 'terms-modal') closeTermsModal();
      if (modalId === 'privacy-modal') closePrivacyModal();
    }
  });
});

// Close open elements with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeMobileMenu();
    closeFullscreenDemo();
    closeTermsModal();
    closePrivacyModal();
  }
});
