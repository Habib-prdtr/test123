// JavaScript for Hafia.dev Showcase (Clean Light Theme)

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
    mockup.style.maxWidth = '380px';
    mockup.style.borderRadius = '2.5rem';
    btnMobile.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-sm border border-slate-200 transition-all';
    btnDesktop.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all';
  } else {
    mockup.style.maxWidth = '1024px';
    mockup.style.borderRadius = '1rem';
    btnDesktop.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 shadow-sm border border-slate-200 transition-all';
    btnMobile.className = 'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all';
  }
}

// 3. Theme & Iframe Demo Switcher
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
    urlBar.innerText = data.url;
    iframe.onload = () => {
      iframe.style.opacity = '1';
    };
    // Scroll smoothly to mockup
    document.getElementById('device-mockup').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 120);
}

function refreshMockupAnimation() {
  const iframe = document.getElementById('mockup-iframe');
  iframe.style.opacity = '0';
  setTimeout(() => {
    iframe.src = iframe.src;
    iframe.onload = () => {
      iframe.style.opacity = '1';
    };
  }, 120);
}

// 4. Fullscreen Live Demo Modal
function openFullscreenDemo() {
  const modal = document.getElementById('demo-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-demo-title');
  const data = themeUrls[currentTheme];

  modalTitle.innerText = data.title;
  modalIframe.src = data.src;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenDemo() {
  const modal = document.getElementById('demo-modal');
  const modalIframe = document.getElementById('modal-iframe');
  modal.classList.add('hidden');
  modalIframe.src = 'about:blank';
  document.body.style.overflow = 'auto';
}

// 5. Terms & Privacy Modals
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
