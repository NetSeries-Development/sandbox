/**
 * GDPR/AVG Cookie Consent Module voor GitHub Pages
 * Volledig self-contained (HTML, CSS, JS en Google Analytics integratie)
 * Premium Modern Design dat ALTIJD in Dark Mode wordt weergegeven.
 */

(function () {
  // ==========================================
  // 1. CONFIGURATIE (Hier kun je alles aanpassen!)
  // ==========================================
  const config = {
    gaId: "G-7S5RE8XJ9R", // Vul hier je eigen Google Analytics 4 ID in
    privacyUrl: "src/legal/privacy.html", // De link naar jouw privacy-pagina
    primaryColor: "#6366f1", // Moderne Indigo kleur
    buttonTextColor: "#ffffff", // De tekstkleur op de hoofdknop
    bannerStyle: "modal", // Kies 'modal' (midden van het scherm) of 'bar' (balk onderaan)

    // Teksten van de banner
    title: "Wij respecteren jouw privacy 🍪",
    description: "We gebruiken analytische cookies om anoniem te begrijzen hoe bezoekers onze website gebruiken. Dit helpt ons de ervaring te verbeteren. Je kunt zelf kiezen welke cookies je toestaat.",
  };

  // ==========================================
  // 2. GOOGLE CONSENT MODE & SCRIPT LOADING
  // ==========================================
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  // Laad de Google Analytics tag dynamisch
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaId}`;
  document.head.appendChild(gaScript);

  gtag("js", new Date());
  gtag("config", config.gaId);

  // ==========================================
  // 3. STYLING (CSS)
  // ==========================================
  const css = `
    :root {
      --cc-bg: #18181b;
      --cc-border: #4b5563;
      --cc-text-main: #f4f4f5;
      --cc-text-muted: #a1a1aa;
      --cc-card-bg: #202024;
      --cc-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);
      --cc-btn-sec-bg: #27272a;
      --cc-btn-sec-text: #e4e4e7;
      --cc-btn-sec-hover: #3f3f46;
    }

    #cookie-container {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    
    ${
      config.bannerStyle === "modal"
        ? `
      #cookie-container-bg {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(15, 23, 42, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        padding: 20px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      #cookie-box {
        max-width: 480px;
        border-radius: 20px;
        transform: scale(0.95);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `
        : `
      #cookie-container-bg {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        display: flex;
        justify-content: center;
        z-index: 999999;
        padding: 20px;
      }
      #cookie-box {
        max-width: 850px;
        border-radius: 16px;
        transform: translateY(20px);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `
    }

    #cookie-box {
      position: relative;
      background-color: var(--cc-bg);
      color: var(--cc-text-main);
      width: 100%;
      box-sizing: border-box;
      padding: 28px;
      border: 2px solid var(--cc-border);
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-shadow: var(--cc-shadow);
    }
    .c-close-btn {
      position: absolute;
      top: 16px;
      right: 18px;
      background: transparent;
      border: 1.5px solid var(--cc-border);
      color: var(--cc-text-muted);
      font-size: 20px;
      cursor: pointer;
      line-height: 1;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s, background-color 0.2s, border-color 0.2s, transform 0.2s;
    }
    .c-close-btn:hover {
      color: var(--cc-text-main);
      border-color: ${config.primaryColor};
      background-color: var(--cc-btn-sec-bg);
      transform: scale(1.05);
    }
    .c-header {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding-right: 32px;
    }
    .c-icon-wrapper {
      background-color: ${config.primaryColor}1A;
      border: 1.5px solid ${config.primaryColor}40;
      padding: 12px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .c-icon {
      font-size: 26px;
      line-height: 1;
    }
    .c-title {
      font-size: 19px;
      font-weight: 700;
      color: var(--cc-text-main);
      margin: 0;
      letter-spacing: -0.025em;
    }
    .c-desc {
      font-size: 13.5px;
      color: var(--cc-text-muted);
      line-height: 1.6;
      margin-top: 6px;
    }
    .c-preferences {
      display: none;
      border-top: 2px solid var(--cc-border);
      padding-top: 16px;
      font-size: 13px;
      animation: fadeIn 0.2s ease;
    }
    .c-pref-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--cc-card-bg);
      padding: 12px 16px;
      border-radius: 10px;
      margin-bottom: 10px;
      border: 1.5px solid var(--cc-border);
    }
    .c-pref-title {
      display: block;
      color: var(--cc-text-main);
      font-weight: 600;
      font-size: 13px;
    }
    .c-pref-desc {
      font-size: 11px;
      color: var(--cc-text-muted);
      display: block;
      margin-top: 2px;
    }
    .c-pref-item input {
      accent-color: ${config.primaryColor};
      cursor: pointer;
      width: 18px;
      height: 18px;
    }
    .c-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2px solid var(--cc-border);
      padding-top: 20px;
      flex-wrap: wrap-reverse;
      gap: 16px;
    }
    .c-privacy-link {
      font-size: 13px;
      color: ${config.primaryColor};
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.2s;
    }
    .c-privacy-link:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
    .c-btn-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .c-btn {
      padding: 10px 20px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: 1.5px solid transparent;
      transition: transform 0.1s ease, background-color 0.2s, border-color 0.2s, opacity 0.2s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .c-btn:active {
      transform: scale(0.97);
    }
    .c-btn-secondary {
      background-color: var(--cc-btn-sec-bg);
      color: var(--cc-btn-sec-text);
      border-color: var(--cc-border);
    }
    .c-btn-secondary:hover {
      background-color: var(--cc-btn-sec-hover);
      border-color: var(--cc-text-muted);
    }
    .c-btn-primary {
      background-color: ${config.primaryColor};
      color: ${config.buttonTextColor};
      border-color: ${config.primaryColor};
    }
    .c-btn-primary:hover {
      opacity: 0.93;
    }
    
    #cookie-trigger-btn {
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 999998;
      background-color: var(--cc-bg);
      border: 2px solid ${config.primaryColor};
      border-radius: 14px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--cc-shadow);
      font-size: 22px;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s, border-color 0.2s;
    }
    #cookie-trigger-btn:hover {
      transform: scale(1.08) rotate(15deg);
      border-color: #ffffff;
    }

    .cookie-status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      font-family: sans-serif;
      border: 1.5px solid transparent;
    }
    .cookie-status-active {
      background-color: #dcfce7;
      color: #166534;
      border-color: #bbf7d0;
    }
    .cookie-status-blocked {
      background-color: #fee2e2;
      color: #991b1b;
      border-color: #fca5a5;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ==========================================
  // 4. HTML INJECTIE EN LOGICA (Nu direct uitgevoerd zonder wachtkamer)
  // ==========================================
  function initCookieConsent() {
    // Check of we niet per ongeluk al een banner hebben gebouwd
    if (document.getElementById("cookie-container")) return;

    const container = document.createElement("div");
    container.id = "cookie-container";

    container.innerHTML = `
      <div id="cookie-container-bg">
        <div id="cookie-box">
          <button class="c-close-btn" id="c-btn-close" title="Sluiten">&times;</button>
          <div class="c-header">
            <div class="c-icon-wrapper">
              <span class="c-icon">🍪</span>
            </div>
            <div>
              <h4 class="c-title">${config.title}</h4>
              <p class="c-desc">${config.description}</p>
            </div>
          </div>
          <div class="c-preferences" id="c-prefs-box">
            <div class="c-pref-item">
              <div>
                <strong class="c-pref-title">Noodzakelijke Cookies</strong>
                <span class="c-pref-desc">Nodig om de basisfuncties van de site te laten werken.</span>
              </div>
              <input type="checkbox" checked disabled>
            </div>
            <div class="c-pref-item">
              <div>
                <strong class="c-pref-title">Analytische Cookies</strong>
                <span class="c-pref-desc">Anonieme statistieken over je websitebezoek (Google Analytics).</span>
              </div>
              <input type="checkbox" id="c-pref-analytics">
            </div>
          </div>
          <div class="c-actions">
            <a href="${config.privacyUrl}" class="c-privacy-link" target="_blank">Privacyverklaring</a>
            <div class="c-btn-group">
              <button class="c-btn c-btn-secondary" id="c-btn-manage">Instellingen</button>
              <button class="c-btn c-btn-secondary" id="c-btn-deny">Weigeren</button>
              <button class="c-btn c-btn-primary" id="c-btn-accept">Accepteren</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const triggerBtn = document.createElement("button");
    triggerBtn.id = "cookie-trigger-btn";
    triggerBtn.title = "Cookie-instellingen aanpassen";
    triggerBtn.innerHTML = "🍪";
    triggerBtn.style.display = "none";

    document.body.appendChild(container);
    document.body.appendChild(triggerBtn);

    const cookieBox = document.getElementById("cookie-box");
    const btnAccept = document.getElementById("c-btn-accept");
    const btnDeny = document.getElementById("c-btn-deny");
    const btnManage = document.getElementById("c-btn-manage");
    const btnClose = document.getElementById("c-btn-close");
    const prefsBox = document.getElementById("c-prefs-box");
    const analyticsCheckbox = document.getElementById("c-pref-analytics");

    function showBanner() {
      container.style.display = "block";
      setTimeout(() => {
        container.style.opacity = "1";
        if (config.bannerStyle === "modal") {
          cookieBox.style.transform = "scale(1)";
        } else {
          cookieBox.style.transform = "translateY(0)";
        }
      }, 50);
      triggerBtn.style.display = "none";
    }

    function hideBanner() {
      container.style.opacity = "0";
      if (config.bannerStyle === "modal") {
        cookieBox.style.transform = "scale(0.95)";
      } else {
        cookieBox.style.transform = "translateY(20px)";
      }
      setTimeout(() => {
        container.style.display = "none";
        triggerBtn.style.display = "flex";
      }, 300);
    }

    function updateLiveStatusBadges(analyticsGranted) {
      const badges = document.querySelectorAll(".cookie-status-display");
      badges.forEach((badge) => {
        if (analyticsGranted) {
          badge.innerHTML = '<span class="cookie-status-badge cookie-status-active">🟢 Analytische Cookies: Actief</span>';
        } else {
          badge.innerHTML = '<span class="cookie-status-badge cookie-status-blocked">🔴 Analytische Cookies: Geblokkeerd</span>';
        }
      });
    }

    function updateConsent(analyticsGranted) {
      const status = analyticsGranted ? "granted" : "denied";
      gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
      updateLiveStatusBadges(analyticsGranted);
    }

    const savedConsent = localStorage.getItem("user_cookie_consent");
    const sessionClosed = sessionStorage.getItem("cookie_banner_closed");

    if (savedConsent) {
      const consentData = JSON.parse(savedConsent);
      updateConsent(consentData.analytics);
      triggerBtn.style.display = "flex";
    } else if (sessionClosed === "true") {
      updateConsent(false);
      triggerBtn.style.display = "flex";
    } else {
      showBanner();
      updateLiveStatusBadges(false);
    }

    btnAccept.addEventListener("click", function () {
      const consentData = { analytics: true };
      localStorage.setItem("user_cookie_consent", JSON.stringify(consentData));
      updateConsent(true);
      hideBanner();
    });

    btnDeny.addEventListener("click", function () {
      const consentData = { analytics: false };
      localStorage.setItem("user_cookie_consent", JSON.stringify(consentData));
      updateConsent(false);
      hideBanner();
    });

    btnManage.addEventListener("click", function () {
      if (prefsBox.style.display === "block") {
        const consentData = { analytics: analyticsCheckbox.checked };
        localStorage.setItem("user_cookie_consent", JSON.stringify(consentData));
        updateConsent(analyticsCheckbox.checked);
        hideBanner();
        btnManage.innerText = "Instellingen";
        prefsBox.style.display = "none";
      } else {
        prefsBox.style.display = "block";
        btnManage.innerText = "Opslaan";
      }
    });

    btnClose.addEventListener("click", function () {
      sessionStorage.setItem("cookie_banner_closed", "true");
      updateConsent(false);
      hideBanner();
    });

    triggerBtn.addEventListener("click", function () {
      if (localStorage.getItem("user_cookie_consent")) {
        const consentData = JSON.parse(localStorage.getItem("user_cookie_consent"));
        analyticsCheckbox.checked = consentData.analytics;
      } else {
        analyticsCheckbox.checked = false;
      }
      showBanner();
    });
  }

  // Voer direct uit als de body al bestaat, anders wacht heel even tot de DOM klaar is
  if (document.body) {
    initCookieConsent();
  } else {
    window.addEventListener("DOMContentLoaded", initCookieConsent);
  }
})();
