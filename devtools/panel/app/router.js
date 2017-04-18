(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.router = function(request, action) {
    var parse;
    parse = exports.tohken.parse;
    if (!this.gaming) {
      this.gaming = true;
    }
    action = action.split('?')[0];
    this.status['last_router'] = this.status['router'];
    this.status['router'] = action;
    console.log(this.status['router']);
    switch (action) {
      case 'home':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            exports.tohken.parse.view.call(_this, 'resource');
            _this.status['in_battle'] = false;
            exports.tohken.event.fatigue.call(_this);
            if (exports.tohken.event.handle === null) {
              return exports.tohken.event.start(_this);
            }
          };
        })(this));
      case 'user/profile':
        return this.parser(request, (function(_this) {
          return function(data) {
            return _this.data['player']['world'] = data['world'];
          };
        })(this));
      case 'forge':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            parse.equip.call(_this, data['equip']);
            parse.sword.call(_this, data['sword']);
            parse.party.call(_this, data['party']);
            parse.forge.call(_this, data['forge']);
            return exports.tohken.parse.view.call(_this, 'resource');
          };
        })(this));
      case 'forge/start':
        return this.parser(request, (function(_this) {
          return function(data) {
            var forge, id, time;
            if (!_this.data['forge']['filling']) {
              _this.data['forge']['filling'] = true;
            }
            time = Date.parse(data['finished_at'] + " GMT+0900");
            id = data['slot_no'] + "-" + time;
            forge = {};
            forge['slot_no'] = data['slot_no'];
            forge['finish_at'] = time;
            forge['sword_id'] = data['sword_id'];
            forge['resource'] = true;
            forge['times'] = Math.ceil((time - Date.now()) / 1000 / 60);
            forge['charcoal'] = data['post_data']['charcoal'];
            forge['coolant'] = data['post_data']['coolant'];
            forge['file'] = data['post_data']['file'];
            forge['steel'] = data['post_data']['steel'];
            forge['secretary'] = _this.data['player']['secretary'] === null ? 0 : _this.data['player']['secretary'];
            forge['upload'] = false;
            _this.data['logs']['forge'][id] = forge;
            return '';
          };
        })(this));
      case 'repair':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            parse.sword.call(_this, data['sword']);
            parse.party.call(_this, data['party']);
            parse.repair.call(_this, data['repair']);
            exports.tohken.parse.view.call(_this, 'resource');
            return exports.tohken.parse.check_repair.call(_this, data['repair']);
          };
        })(this));
      case 'repair/repair':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            parse.repair.call(_this, data['repair']);
            exports.tohken.parse.view.call(_this, 'resource');
            return exports.tohken.parse.check_repair.call(_this, data['repair']);
          };
        })(this));
      case 'party/list':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.equip.call(_this, data['equip']);
            parse.sword.call(_this, data['sword']);
            parse.party.call(_this, data['party']);
            return parse.conquest.call(_this, data['party']);
          };
        })(this));
      case 'party/setsword':
        return this.parser(request, (function(_this) {
          return function(data) {
            return parse.party.call(_this, data);
          };
        })(this));
      case 'party/removesword':
        return this.parser(request, (function(_this) {
          return function(data) {
            return parse.party.call(_this, data);
          };
        })(this));
      case 'login/start':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            parse.equip.call(_this, data['equip']);
            parse.party.call(_this, data['party']);
            _this.data['player']['name'] = data['name'];
            _this.data['player']['level'] = data['level'];
            _this.data['player']['exp'] = data['exp'];
            _this.data['player']['max_sword'] = data['max_sword'];
            _this.data['player']['secretary'] = data['secretary'];
            _this.data['player']['secretary_serial_id'] = data['secretary_serial_id'];
            _this.data['player']['max_party'] = data['max_party'];
            _this.data['player']['forge_slot'] = data['forge_slot'];
            _this.data['player']['repair_slot'] = data['repair_slot'];
            if (data['item']["8"]) {
              _this.data['resource']['bonemeal'] = data['item']["8"]["num"];
            }
            _this.data['resource']['money'] = data['currency']['money'];
            _this.data['forge']['open'] = data['forge_slot'];
            _this.data['repair']['open'] = data['repair_slot'];
            exports.tohken.parse.view.call(_this, 'player');
            exports.tohken.parse.view.call(_this, 'resource');
            return parse.conquest.call(_this, data['party']);
          };
        })(this));
      case 'repair/repair':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.resource.call(_this, data['resource']);
            _this.data['repair']['data'] = data['repair'];
            return exports.tohken.parse.view.call(_this, 'resource');
          };
        })(this));
      case 'sally':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.equip.call(_this, data['equip']);
            parse.sword.call(_this, data['sword']);
            return parse.party.call(_this, data['party']);
          };
        })(this));
      case 'sally/sally':
        return this.parser(request, (function(_this) {
          return function(data) {
            exports.tohken.event.fatigue.call(_this);
            _this.status['in_battle'] = true;
            _this.status['battle_id'] = data['post_data']['party_no'];
            _this.status['battle_episode'] = data['post_data']['episode_id'];
            _this.status['battle_field'] = data['post_data']['field_id'];
            return _.forEach(_this.data['party']['data'][_this.status['battle_id']]['slot'], function(v, k) {
              if (v['serial_id'] === null) {
                return;
              }
              v['fatigue'] = parseInt(v['fatigue'], 10) - 10;
              return _this.data['sword']['data'][v['serial_id']]['vfatigue'] = parseInt(_this.data['sword']['data'][v['serial_id']]['vfatigue'], 10) - 10;
            });
          };
        })(this));
      case 'sally/eventsally':
        return this.parser(request, (function(_this) {
          return function(data) {
            exports.tohken.event.fatigue.call(_this);
            _this.status['in_battle'] = true;
            _this.status['battle_id'] = data['post_data']['party_no'];
            _this.status['battle_episode'] = '-' + data['post_data']['event_id'];
            _this.status['battle_field'] = data['post_data']['event_field_id'];
            return _.forEach(_this.data['party']['data'][_this.status['battle_id']]['slot'], function(v, k) {
              if (v['serial_id'] === null) {
                return;
              }
              v['fatigue'] = parseInt(v['fatigue'], 10) - 10;
              return _this.data['sword']['data'][v['serial_id']]['vfatigue'] = parseInt(_this.data['sword']['data'][v['serial_id']]['vfatigue'], 10) - 10;
            });
          };
        })(this));
      case 'sally/forward':
        return this.parser(request, (function(_this) {
          return function(data) {
            return _this.status['battle_pos'] = data.square_id;
          };
        })(this));
      case 'sally/eventforward':
        return this.parser(request, (function(_this) {
          return function(data) {
            return _this.status['battle_pos'] = data.square_id;
          };
        })(this));
      case 'conquest/start':
        return this.parser(request, (function(_this) {
          return function(data) {
            parse.party.call(_this, data['party']);
            return parse.conquest.call(_this, data['party']);
          };
        })(this));
      case 'battle/battle':
        return this.parser(request, (function(_this) {
          return function(data) {
            return parse.battle.call(_this, data);
          };
        })(this));
    }
  };
})(window);
