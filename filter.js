(function () {
  // Two independent filter bars (area, methods). A paper is shown when it
  // matches the active choice in every bar; "all" matches everything.
  var bars = Array.prototype.slice.call(document.querySelectorAll('#research .filter-bar'));
  if (!bars.length) return;

  var pubs = Array.prototype.slice.call(document.querySelectorAll('#research .pub'));
  var active = {};
  bars.forEach(function (bar) { active[bar.dataset.dim] = 'all'; });

  function matches(pub) {
    return bars.every(function (bar) {
      var dim = bar.dataset.dim;
      var want = active[dim];
      if (want === 'all') return true;
      var have = (pub.dataset[dim] || '').split('|');
      return have.indexOf(want) !== -1;
    });
  }

  function apply() {
    pubs.forEach(function (pub) { pub.hidden = !matches(pub); });
    // Hide a group heading when none of its papers match.
    Array.prototype.forEach.call(document.querySelectorAll('#research .pub-group'), function (group) {
      group.hidden = !group.querySelector('.pub:not([hidden])');
    });
  }

  function select(bar, btn) {
    active[bar.dataset.dim] = btn.dataset.filter;
    Array.prototype.forEach.call(bar.querySelectorAll('.filter-btn'), function (b) {
      b.classList.toggle('active', b === btn);
    });
    apply();
  }

  bars.forEach(function (bar) {
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (btn) select(bar, btn);
    });
  });

  // Tagged phrases in the bio set the Area filter, then scroll to the papers.
  var areaBar = document.querySelector('#research .filter-bar[data-dim="area"]');
  Array.prototype.forEach.call(document.querySelectorAll('[data-area-link]'), function (link) {
    link.addEventListener('click', function () {
      var btn = areaBar.querySelector('.filter-btn[data-filter="' + link.dataset.areaLink + '"]');
      if (btn) select(areaBar, btn);
    });
  });
})();
