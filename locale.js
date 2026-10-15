(function () {
  var lang = (navigator.language || "en").toLowerCase();
  var target = lang.indexOf("pt") === 0 ? "/br/" : "/en/";
  window.location.replace(target);
})();
