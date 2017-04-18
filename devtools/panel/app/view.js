(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.view = {
    player: {
      "set": false,
      "name": null,
      "level": null
    },
    resource: {
      "set": false,
      "bill": null,
      "bonemeal": null,
      "charcoal": null,
      "steel": null,
      "coolant": null,
      "file": null,
      "max_resource": null,
      "money": null
    },
    party: {
      "set": false,
      "data": {}
    },
    equips: {
      "set": false,
      "data": {}
    }
  };
})(window);
