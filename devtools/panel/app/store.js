(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.store = {
    get: function(key, pre, json) {
      var data;
      if (json == null) {
        json = false;
      }
      data = localStorage.getItem(key);
      if (data !== null) {
        if (json) {
          return JSON.parse(data);
        } else {
          return data;
        }
      } else {
        return pre;
      }
    },
    set: function(key, value) {
      return localStorage.setItem(key, value);
    },
    remove: function(key) {
      return localStorage.removeItem(key);
    },
    reset: function() {
      return localStorage.clear();
    }
  };
})(window);
