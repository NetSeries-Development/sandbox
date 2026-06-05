var cookiebotScript = document.createElement("script");
cookiebotScript.src = "https://consent.cookiebot.com/uc.js";
cookiebotScript.id = "Cookiebot";
cookiebotScript.setAttribute("data-cbid", "e5f5dde6-af40-4a58-96f1-3bfa022e8809"); //
cookiebotScript.setAttribute("data-blockingmode", "auto");
cookiebotScript.type = "text/javascript";
document.head.appendChild(cookiebotScript);

var gaScript = document.createElement("script");
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-7S5RE8XJ9R";
gaScript.setAttribute("data-cookieconsent", "statistics");
document.head.appendChild(gaScript);

var gaInit = document.createElement("script");
gaInit.type = "text/plain";
zz;
gaInit.setAttribute("data-cookieconsent", "statistics");
gaInit.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7S5RE8XJ9R');
`;
document.head.appendChild(gaInit);
