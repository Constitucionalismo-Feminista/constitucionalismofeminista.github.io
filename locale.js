(function () {
  var path = location.pathname.replace(/\/index\.html$/, "");
  if (path.charAt(path.length - 1) !== "/") path += "/";
  var forceBrowser = path === "/-/";
  var stored = "";
  try {
    stored = sessionStorage.getItem("locale") || "";
  } catch (e) {}
  var lang = (navigator.language || "en").toLowerCase();
  var detected = lang.indexOf("pt") === 0 ? "br" : "en";
  var locale = !forceBrowser && (stored === "br" || stored === "en") ? stored : detected;
  window.location.replace("/" + locale + "/");
})();
