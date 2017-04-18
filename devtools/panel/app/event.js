(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  if (!exports.tohken.event) {
    exports.tohken.event = {};
  }
  exports.tohken.event.handle = null;
  exports.tohken.event.start = function(environment) {
    exports.tohken.event.fatigue.call(environment);
    return exports.tohken.event.handle = setInterval(function() {
      return exports.tohken.event.action.call(environment);
    }, 1000);
  };
  exports.tohken.event.stop = function() {
    if (exports.tohken.event.handle === null) {
      return;
    }
    return clearInterval(exports.tohken.event.handle);
  };
  exports.tohken.event.action = function() {
    exports.tohken.event.fatigue.call(this);
    return 'done';
  };
  return exports.tohken.event.fatigue = function() {
    var change;
    if (this.status['in_battle']) {
      return;
    }
    if (this.status['last_router'] === 'battle/battle') {
      return;
    }
    if (this.status['last_router'] === 'sally/forward') {
      return;
    }
    if (this.config['cadOffList'] === 1) {
      if (this.status['router'] === 'party/list') {
        return;
      }
    }
    change = false;
    _.forEach(this.data['sword']['data'], (function(_this) {
      return function(v, k) {
        var fatigue, last, now, status, sword, time, vfatigue, vfix;
        sword = _this.data['sword']['data'][k];
        status = parseInt(sword['status'], 10);
        if (status === 3) {
          return;
        }
        fatigue = parseInt(sword['fatigue'], 10);
        if (fatigue >= 49) {
          return;
        }
        last = Date.parse(sword['recovered_at'] + " GMT+0900");
        now = Date.now();
        time = now - last;
        vfatigue = Math.floor(time / 60000);
        if ((fatigue + vfatigue) >= 49) {
          vfatigue = 49 - fatigue;
        }
        if (parseInt(sword['vfatigue'], 10) !== parseInt(vfatigue, 10)) {
          vfix = vfatigue - (vfatigue % 3);
          if ((fatigue + vfatigue) >= 49) {
            change = true;
            sword['vfatigue'] = vfatigue;
          } else {
            change = true;
            sword['vfatigue'] = vfix;
          }
        }
        return 'done';
      };
    })(this));
    if (change) {
      return exports.tohken.parse.view.call(this, 'party');
    }
  };
})(window);
