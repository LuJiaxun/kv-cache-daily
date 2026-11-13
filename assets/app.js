(function () {
  var input = document.getElementById("q");
  if (!input) return;
  var hits = document.getElementById("hits");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".day-card"));
  var items = Array.prototype.slice.call(document.querySelectorAll(".papers li"));

  function apply() {
    var q = input.value.trim().toLowerCase();
    var n = 0;
    items.forEach(function (li) {
      var title = (li.getAttribute("data-title") || li.textContent || "").toLowerCase();
      var ok = !q || title.indexOf(q) !== -1;
      li.hidden = !ok;
      if (ok) n++;
    });
    cards.forEach(function (card) {
      var any = Array.prototype.some.call(card.querySelectorAll(".papers li"), function (li) {
        return !li.hidden;
      });
      card.hidden = !any;
      var details = card.querySelector("details");
      if (details && q && any) details.open = true;
    });
    hits.textContent = q ? n + " 篇匹配" : "";
  }

  input.addEventListener("input", apply);
})();
