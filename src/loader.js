(function () {
  // Geen schuine streep aan het begin, gewoon direct de map in!
  const jsFiles = ["/src/legal/cookie-consent.js"];

  jsFiles.forEach((file) => {
    const script = document.createElement("script");
    script.src = file;
    script.defer = true;
    document.head.appendChild(script);
  });
})();
