(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.data = {
    player: {
      "filling": false,
      "name": null,
      "level": null,
      "symbol": null,
      "exp": null,
      "max_sword": null,
      "now_sword": null,
      "equip_max": null,
      "equip_now": null,
      "secretary": null,
      "secretary_serial_id": null,
      "max_party": null,
      "forge_slot": null,
      "repair_slot": null,
      "world": null,
      "created_at": null,
      "complete": {
        "sword": null,
        "dagger": null,
        "short": null,
        "normal": null,
        "long": null,
        "large": null,
        "spear": null,
        "partisan": null,
        "equip": null,
        "horse": null,
        "scene": null,
        "furniture": null
      },
      "summary": {
        "battle": null,
        "battle_win": null,
        "practice": null,
        "practice_win": null,
        "conquest": null,
        "conquest_success": null
      },
      "last_update": null
    },
    resource: {
      "filling": false,
      "bill": null,
      "bonemeal": null,
      "charcoal": null,
      "steel": null,
      "coolant": null,
      "file": null,
      "max_resource": null,
      "money": null,
      "vcharcoal": null,
      "vsteel": null,
      "vcoolant": null,
      "vfile": null,
      "last_update": null
    },
    sword: {
      "filling": false,
      "template": {
        "serial_id": null,
        "sword_id": null,
        "rarity": null,
        "level": null,
        "exp": null,
        "next_exp": null,
        "evol_num": null,
        "hp": null,
        "hp_max": null,
        "atk": null,
        "def": null,
        "mobile": null,
        "back": null,
        "scout": null,
        "hide": null,
        "hp_up": null,
        "atk_up": null,
        "def_up": null,
        "mobile_up": null,
        "back_up": null,
        "scout_up": null,
        "hide_up": null,
        "loyalties": null,
        "fatigue": null,
        "vfatigue": null,
        "equip_serial_id1": null,
        "equip_serial_id2": null,
        "equip_serial_id3": null,
        "horse_serial_id": null,
        "item_id": null,
        "protect": null,
        "status": null,
        "recovered_at": null,
        "created_at": null
      },
      "data": {},
      "last_update": null
    },
    equip: {
      "filling": false,
      "template": {
        "serial_id": null,
        "equip_id": null,
        "soldier": null
      },
      "data": {},
      "last_update": null
    },
    party: {
      "filling": false,
      "template": {
        "party_no": null,
        "status": "2",
        "party_name": null,
        "finished_at": null,
        "slot": {
          "1": {
            "serial_id": null
          },
          "2": {
            "serial_id": null
          },
          "3": {
            "serial_id": null
          },
          "4": {
            "serial_id": null
          },
          "6": {
            "serial_id": null
          },
          "5": {
            "serial_id": null
          }
        }
      },
      "data": {},
      "last_update": null
    },
    forge: {
      "filling": false,
      "open": null,
      "data": {},
      "last_update": null
    },
    repair: {
      "filling": false,
      "open": null,
      "data": {},
      "last_update": null
    },
    conquest: {
      "filling": false,
      "template": {
        "party": null,
        "return": null
      },
      "data": {},
      "last_update": null
    },
    logs: {
      "forge": {},
      "battle": {},
      "error": {}
    }
  };
})(window);
