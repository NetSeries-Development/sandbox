// analytics-config.js

// 1. Cookiebot Script dynamisch laden
var cookiebotScript = document.createElement("script");
cookiebotScript.src = "https://consent.cookiebot.com/uc.js";
cookiebotScript.id = "Cookiebot";
cookiebotScript.setAttribute("data-cbid", "e5f5dde6-af40-4a58-96f1-3bfa022e8809"); //
cookiebotScript.setAttribute("data-blockingmode", "auto");
cookiebotScript.type = "text/javascript";
document.head.appendChild(cookiebotScript);

// 2. Google Analytics Base Script laden (wacht op toestemming 'statistics')
var gaScript = document.createElement("script");
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-K184EY8SB4";
gaScript.setAttribute("data-cookieconsent", "statistics");
document.head.appendChild(gaScript);

// 3. Google Analytics initialiseren (wacht op toestemming 'statistics')
var gaInit = document.createElement("script");
gaInit.type = "text/plain";
gaInit.setAttribute("data-cookieconsent", "statistics");
gaInit.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-K184EY8SB4');
`;
document.head.appendChild(gaInit);
