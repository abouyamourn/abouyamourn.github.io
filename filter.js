(function () {
  // Two independent filter bars (area, methods). An entry is shown when it
  // matches the active choice in every bar; "all" matches everything.
  var bars = Array.prototype.slice.call(document.querySelectorAll('#research .filter-bar'));
  if (!bars.length) return;

  var groups = Array.prototype.slice.call(document.querySelectorAll('#research .year-group'));
  var active = {};
  bars.forEach(function (bar) { active[bar.dataset.dim] = 'all'; });

  function matches(entry) {
    return bars.every(function (bar) {
      var dim = bar.dataset.dim;
      var want = active[dim];
      if (want === 'all') return true;
      var have = (entry.dataset[dim] || '').split('|');
      return have.indexOf(want) !== -1;
    });
  }

  function apply() {
    groups.forEach(function (group) {
      var entries = Array.prototype.slice.call(group.querySelectorAll('.entry'));
      var anyVisible = false;
      entries.forEach(function (entry) {
        var ok = matches(entry);
        entry.hidden = !ok;
        if (ok) anyVisible = true;
      });
      group.hidden = !anyVisible;
    });
  }

  bars.forEach(function (bar) {
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      active[bar.dataset.dim] = btn.dataset.filter;
      Array.prototype.forEach.call(bar.querySelectorAll('.filter-btn'), function (b) {
        b.classList.toggle('active', b === btn);
      });
      apply();
    });
  });
})();
