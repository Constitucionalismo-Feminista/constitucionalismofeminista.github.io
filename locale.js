(function () {
  var path = location.pathname.replace(/\/index\.html$/, "");
  if (path.charAt(path.length - 1) !== "/") path += "/";
  var forceBrowser = path === "/-/";
  var stored = "";
  try {
    stored = sessionStorage.getItem("locale") || "";
  } catch (e) {}
  var lang = (navigator.language || "en").toLowerCase();
  var detected = lang.indexOf("pt") === 0 ? "br" : lang.indexOf("es") === 0 ? "es" : "en";
  var known = stored === "br" || stored === "es" || stored === "en";
  var locale = !forceBrowser && known ? stored : detected;
  window.location.replace("/" + locale + "/");
})();
