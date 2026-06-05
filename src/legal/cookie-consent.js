/**
 * GDPR/AVG Cookie Consent Module voor GitHub Pages
 * Volledig self-contained (HTML, CSS, JS en Google Analytics integratie)
 */

(function () {
  // ==========================================
  // 1. CONFIGURATIE (Hier kun je alles aanpassen!)
  // ==========================================
  const config = {
    gaId: "G-7S5RE8XJ9R", // Vul hier je eigen Google Analytics 4 ID in
    privacyUrl: "/privacy.html", // De link naar jouw privacy-pagina
    primaryColor: "#4f46e5", // De hoofdkleur (bijv. voor de knoppen)
    buttonTextColor: "#ffffff", // De tekstkleur op de hoofdknop
    bannerStyle: "modal", // Kies 'modal' (midden van het scherm) of 'bar' (balk onderaan)

    // Teksten van de banner
    title: "Wij respecteren jouw privacy 🍪",
    description: "We gebruiken analytische cookies om te begrijzen hoe bezoekers onze website gebruiken. Dit helpt ons de website te verbeteren. Je kunt zelf kiezen welke cookies je toestaat.",
  };

  // ==========================================
  // 2. GOOGLE CONSENT MODE & SCRIPT LOADING
  // ==========================================
  // We zetten de standaard tracking op 'denied' (AVG vereiste!)
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
  // 3. STYLING (CSS toevoegen aan head)
  // ==========================================
  const css = `
    #cookie-container {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      transition: opacity 0.3s ease-in-out;
    }
    
    /* Layout styling op basis van gekozen stijl */
    ${
      config.bannerStyle === "modal"
        ? `
      #cookie-container-bg {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(15, 23, 42, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        padding: 16px;
        backdrop-filter: blur(4px);
      }
      #cookie-box {
        max-width: 450px;
        border-radius: 16px;
      }
    `
        : `
      #cookie-container-bg {
        position: fixed;
        left: 0; right: 0; bottom: 0;
        display: flex;
        justify-content: center;
        z-index: 999999;
        padding: 16px;
      }
      #cookie-box {
        max-width: 800px;
        border-radius: 12px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
      }
    `
    }

    #cookie-box {
      background-color: #ffffff;
      width: 100%;
      box-sizing: border-box;
      padding: 24px;
      border: 1px solid #e2e8f0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    }
    .c-header {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .c-icon {
      font-size: 24px;
      background-color: ${config.primaryColor}1A; /* 10% opaciteit van de hoofdkleur */
      padding: 10px;
      border-radius: 50%;
      line-height: 1;
    }
    .c-title {
      font-size: 18px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
    .c-desc {
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
      margin-top: 6px;
    }
    .c-preferences {
      display: none;
      border-top: 1px solid #e2e8f0;
      padding-top: 12px;
      font-size: 12px;
    }
    .c-pref-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f8fafc;
      padding: 10px 14px;
      border-radius: 8px;
      margin-bottom: 8px;
      border: 1px solid #f1f5f9;
    }
    .c-pref-item input {
      accent-color: ${config.primaryColor};
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
    .c-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .c-privacy-link {
      font-size: 12px;
      color: ${config.primaryColor};
      text-decoration: none;
      font-weight: 500;
    }
    .c-privacy-link:hover {
      text-decoration: underline;
    }
    .c-btn-group {
      display: flex;
      gap: 8px;
    }
    .c-btn {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: background-color 0.2s, opacity 0.2s;
    }
    .c-btn-secondary {
      background-color: #f1f5f9;
      color: #475569;
    }
    .c-btn-secondary:hover {
      background-color: #e2e8f0;
    }
    .c-btn-primary {
      background-color: ${config.primaryColor};
      color: ${config.buttonTextColor};
    }
    .c-btn-primary:hover {
      opacity: 0.95;
    }
    
    /* Zwevende knop om instellingen terug te openen (Verplicht voor AVG) */
    #cookie-trigger-btn {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 999998;
      background-color: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      font-size: 20px;
      transition: transform 0.2s;
    }
    #cookie-trigger-btn:hover {
      transform: scale(1.1);
    }

    /* Live status badge stijlen */
    .cookie-status-badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: bold;
      font-family: sans-serif;
    }
    .cookie-status-active {
      background-color: #dcfce7;
      color: #15803d;
    }
    .cookie-status-blocked {
      background-color: #fee2e2;
      color: #b91c1c;
    }
  `;

  // Voeg CSS toe aan het document
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ==========================================
  // 4. HTML INJECTIE EN LOGICA
  // ==========================================
  window.addEventListener("DOMContentLoaded", function () {
    // Bouw de HTML-structuur op
    const container = document.createElement("div");
    container.id = "cookie-container";
    container.style.display = "none";

    container.innerHTML = `
      <div id="cookie-container-bg">
        <div id="cookie-box">
          <div class="c-header">
            <div class="c-icon">🍪</div>
            <div>
              <h4 class="c-title">${config.title}</h4>
              <p class="c-desc">${config.description}</p>
            </div>
          </div>
          
          <div class="c-preferences" id="c-prefs-box">
            <div class="c-pref-item">
              <div>
                <strong style="display:block; color:#1e293b;">Noodzakelijke Cookies</strong>
                <span style="font-size:10px; color:#64748b;">Nodig om de basisfuncties van de site te laten werken.</span>
              </div>
              <input type="checkbox" checked disabled>
            </div>
            <div class="c-pref-item">
              <div>
                <strong style="display:block; color:#1e293b;">Analytische Cookies</strong>
                <span style="font-size:10px; color:#64748b;">Anonieme statistieken over je websitebezoek (Google Analytics).</span>
              </div>
              <input type="checkbox" id="c-pref-analytics">
            </div>
          </div>

          <div class="c-actions">
            <a href="${config.privacyUrl}" class="c-privacy-link" target="_blank">Privacy Policy</a>
            <div class="c-btn-group">
              <button class="c-btn c-btn-secondary" id="c-btn-manage">Instellingen</button>
              <button class="c-btn c-btn-secondary" id="c-btn-deny">Weigeren</button>
              <button class="c-btn c-btn-primary" id="c-btn-accept">Accepteren</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bouw de zwevende knop op
    const triggerBtn = document.createElement("button");
    triggerBtn.id = "cookie-trigger-btn";
    triggerBtn.title = "Cookie-instellingen aanpassen";
    triggerBtn.innerHTML = "🍪";
    triggerBtn.style.display = "none";

    // Voeg elementen toe aan de body
    document.body.appendChild(container);
    document.body.appendChild(triggerBtn);

    // DOM selectors voor de acties
    const btnAccept = document.getElementById("c-btn-accept");
    const btnDeny = document.getElementById("c-btn-deny");
    const btnManage = document.getElementById("c-btn-manage");
    const prefsBox = document.getElementById("c-prefs-box");
    const analyticsCheckbox = document.getElementById("c-pref-analytics");

    // Functie: Toon de banner
    function showBanner() {
      container.style.display = "block";
      triggerBtn.style.display = "none";
    }

    // Functie: Verberg de banner en toon de zwevende knop
    function hideBanner() {
      container.style.display = "none";
      triggerBtn.style.display = "flex";
    }

    // Functie: Update de live status badges op de website zelf
    function updateLiveStatusBadges(analyticsGranted) {
      const badges = document.querySelectorAll(".cookie-status-display");
      badges.forEach((badge) => {
        if (analyticsGranted) {
          badge.innerHTML = '<span class="cookie-status-badge cookie-status-active">Analytische Cookies: Actief</span>';
        } else {
          badge.innerHTML = '<span class="cookie-status-badge cookie-status-blocked">Analytische Cookies: Geblokkeerd</span>';
        }
      });
    }

    // Functie: Geef toestemming door aan Google Analytics
    function updateConsent(analyticsGranted) {
      const status = analyticsGranted ? "granted" : "denied";
      gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
      // Update ook direct de badges op de website
      updateLiveStatusBadges(analyticsGranted);
    }

    // Controleer of de gebruiker al eerder een keuze heeft gemaakt
    const savedConsent = localStorage.getItem("user_cookie_consent");

    if (savedConsent) {
      const consentData = JSON.parse(savedConsent);
      updateConsent(consentData.analytics);
      triggerBtn.style.display = "flex";
    } else {
      showBanner();
      updateLiveStatusBadges(false); // Standaard uit totdat er keuze is gemaakt
    }

    // Klikactie: Alles accepteren
    btnAccept.addEventListener("click", function () {
      const consentData = { analytics: true };
      localStorage.setItem("user_cookie_consent", JSON.stringify(consentData));
      updateConsent(true);
      hideBanner();
    });

    // Klikactie: Alles weigeren
    btnDeny.addEventListener("click", function () {
      const consentData = { analytics: false };
      localStorage.setItem("user_cookie_consent", JSON.stringify(consentData));
      updateConsent(false);
      hideBanner();
    });

    // Klikactie: Instellingen openen of selectie opslaan
    btnManage.addEventListener("click", function () {
      if (prefsBox.style.display === "block") {
        // Sla de geselecteerde vinkjes op
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

    // Klikactie: Zwevende knop opent de banner opnieuw
    triggerBtn.addEventListener("click", function () {
      // Zet het vinkje van analytics alvast goed op basis van de opgeslagen keuze
      if (savedConsent) {
        const consentData = JSON.parse(localStorage.getItem("user_cookie_consent"));
        analyticsCheckbox.checked = consentData.analytics;
      }
      showBanner();
    });
  });
})();
