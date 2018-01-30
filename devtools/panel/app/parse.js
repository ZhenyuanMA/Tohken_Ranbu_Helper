(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  if (!exports.tohken.parse) {
    exports.tohken.parse = {};
  }
  exports.tohken.parse.resource = function(resource) {
    if (!this.data['resource']['filling']) {
      this.data['resource']['filling'] = true;
    }
    this.data['resource']['charcoal'] = resource['charcoal'];
    this.data['resource']['steel'] = resource['steel'];
    this.data['resource']['coolant'] = resource['coolant'];
    this.data['resource']['file'] = resource['file'];
    this.data['resource']['bill'] = resource['bill'];
    this.data['resource']['max_resource'] = resource['max_resource'];
    this.data['resource']['last_update'] = Date.now();
    this.data['resource']['vcharcoal'] = 0;
    this.data['resource']['vsteel'] = 0;
    this.data['resource']['vcoolant'] = 0;
    this.data['resource']['vfile'] = 0;
    return 'done';
  };
  exports.tohken.parse.sword = function(sword) {
    var branch;
    if (!this.data['sword']['filling']) {
      this.data['sword']['filling'] = true;
    }
    branch = {};
    _.forEach(sword, (function(_this) {
      return function(v, k) {
        var pre;
        pre = _this.data['sword']['data'][k] ? _.clone(_this.data['sword']['data'][k]) : _.clone(exports.tohken.data['sword']['template']);
        _.forEach(pre, function(vi, ki) {
          if (_.has(v, ki)) {
            pre[ki] = v[ki];
          }
          if (ki === 'vfatigue') {
            pre[ki] = 0;
          }
          if (ki === 'next_exp') {
            if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 1){
                pre[ki] = exports.tohken.define.upexp[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 2){
                pre[ki] = exports.tohken.define.upexp2[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 3){
                pre[ki] = exports.tohken.define.upexp3[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 4){
              pre[ki] = exports.tohken.define.upexp4[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 5){
              pre[ki] = exports.tohken.define.upexp5[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 6){
              pre[ki] = exports.tohken.define.upexp6[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 7){
              pre[ki] = exports.tohken.define.upexp7[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 8){
              pre[ki] = exports.tohken.define.upexp8[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            else if(exports.tohken.define.tohkens[v['sword_id']]['symbol'] == 9){
              pre[ki] = exports.tohken.define.upexp9[parseInt(pre['level'], 10)] - parseInt(pre['exp'], 10);
            }
            if (parseInt(v['level'], 10) === 99) {
              return pre[ki] = 0;
            }
          }
        });
        branch[k] = pre;
        return 'done';
      };
    })(this));
    this.data['sword']['data'] = branch;
    this.data['sword']['last_update'] = Date.now();
    exports.tohken.parse.view.call(this, 'party');
    return 'done';
  };
  exports.tohken.parse.party = function(party) {
    if (!this.data['party']['filling']) {
      this.data['party']['filling'] = true;
    }
    this.data['party']['data'] = party;
    this.data['party']['last_update'] = Date.now();
    exports.tohken.parse.view.call(this, 'party');
    return 'done';
  };
  exports.tohken.parse.equip = function(equip) {
    if (!this.data['equip']['filling']) {
      this.data['equip']['filling'] = true;
    }
    this.data['equip']['data'] = equip;
    this.data['equip']['last_update'] = Date.now();
    exports.tohken.parse.view.call(this, 'party');
    exports.tohken.parse.view.call(this, 'equip');
    return 'done';
  };
  exports.tohken.parse.forge = function(forge) {
    if (!this.data['forge']['filling']) {
      this.data['forge']['filling'] = true;
    }
    this.data['forge']['data'] = forge;
    _.forEach(forge, (function(_this) {
      return function(v, k) {
        var has, id, time;
        time = Date.parse(v['finished_at'] + " GMT+0900");
        id = v['slot_no'] + "-" + time;
        has = _.has(_this.data['logs']['forge'], id);
        if (!has) {
          _this.data['logs']['forge'][id] = {};
        }
        _this.data['logs']['forge'][id]['slot_no'] = v['slot_no'];
        _this.data['logs']['forge'][id]['finish_at'] = time;
        _this.data['logs']['forge'][id]['sword_id'] = v['sword_id'];
        _this.data['logs']['forge'][id]['resource'] = _.has(_this.data['logs']['forge'][id], 'charcoal');
        if (!_this.data['logs']['forge'][id]['upload']) {
          exports.tohken.parse.upload.call(_this, id, _this.data['logs']['forge'][id]);
        }
        if (_this.config['dataCache'] === 1) {
          exports.tohken.store.set("TRH_DataCache", JSON.stringify(_this.data));
          exports.tohken.store.set("TRH_Logs", JSON.stringify(_this.data['logs']));
        }
        return 'done';
      };
    })(this));
    this.data['forge']['last_update'] = Date.now();
    console.log(JSON.stringify(this.data['logs']['forge']));
    return 'done';
  };
  exports.tohken.parse.repair = function(repair) {
    if (!this.data['repair']['filling']) {
      this.data['repair']['filling'] = true;
    }
    this.data['repair']['data'] = repair;
    this.data['repair']['last_update'] = Date.now();
    return 'done';
  };
  exports.tohken.parse.battle = function(battle) {
    var asia, europe, leader, notify, party, player, preupload, result, target;
    party = {};
    leader = null;
    _.forEach(battle.player.party, function(v, k) {
      var sword;
      sword = {};
      sword['sword_id'] = v['sword_id'];
      sword['hp'] = v['hp'];
      sword['hp_max'] = v['hp_max'];
      sword['equip_serial_id1'] = v['equip_serial_id1'];
      sword['soldier1'] = v['soldier1'];
      sword['equip_serial_id2'] = v['equip_serial_id2'];
      sword['soldier2'] = v['soldier2'];
      sword['equip_serial_id3'] = v['equip_serial_id3'];
      sword['soldier3'] = v['soldier3'];
      party[v['serial_id']] = sword;
      if (leader === null) {
        leader = v['serial_id'];
      }
      return 'done';
    });
    result = {};
    result['battle_episode'] = this.status['battle_episode'];
    result['battle_field'] = this.status['battle_field'];
    result['battle_pos'] = this.status['battle_pos'];
    result['battle_party'] = this.status['battle_id'];
    result['get_sword_id'] = battle.result['get_sword_id'];
    result['mvp'] = battle.result['mvp'];
    result['rank'] = battle.result['rank'];
    result['life'] = battle.result.player['life'];
    result['life_max'] = battle.result.player['life_max'];
    result['soldier'] = battle.result.player['soldier'];
    result['soldier_max'] = battle.result.player['soldier_max'];
    result['get_exp'] = battle.result.player['get_exp'];
    result['time'] = Date.parse(battle['now'] + " GMT+0900");
    result['id'] = result['battle_party'] + "-" + result['battle_episode'] + "-" + result['battle_field'] + "-" + result['battle_pos'] + "-" + result['time'];
    player = {};
    player['level'] = battle.result.player['level'];
    player['exp'] = battle.result.player['exp'];
    result['party_no'] = battle.result.player.party['party_no'];
    _.forEach(battle.result.player.party.slot, function(v, k) {
      party[v['serial_id']]['hp'] = v['hp'];
      party[v['serial_id']]['status'] = v['status'];
      party[v['serial_id']]['exp'] = v['exp'];
      party[v['serial_id']]['level'] = v['level'];
      party[v['serial_id']]['mvp'] = result['mvp'] === v['serial_id'] ? true : false;
      party[v['serial_id']]['get_exp'] = v['get_exp'];
      return 'done';
    });
    result['party'] = party;
    _.forEach(party, function(v, k) {
      party[k]['vfatigue'] = -3;
      return 'done';
    });
    if (parseInt(result['mvp'], 10) !== 0) {
      party[result['mvp']]['vfatigue'] += 10;
    }
    switch (parseInt(result['rank'], 10)) {
      case 2:
        _.forEach(party, function(v, k) {
          party[k]['vfatigue'] += 4;
          if (leader === k) {
            return party[k]['vfatigue'] += 3;
          }
        });
        break;
      case 3:
        _.forEach(party, function(v, k) {
          party[k]['vfatigue'] += 3;
          if (leader === k) {
            return party[k]['vfatigue'] += 3;
          }
        });
        break;
      case 4:
        _.forEach(party, function(v, k) {
          party[k]['vfatigue'] += 2;
          if (leader === k) {
            return party[k]['vfatigue'] += 3;
          }
        });
        break;
      case 5:
        _.forEach(party, function(v, k) {
          party[k]['vfatigue'] += 1;
          if (leader === k) {
            return party[k]['vfatigue'] += 3;
          }
        });
    }
    notify = [];
    _.forEach(party, function(v, k) {
      if (v['equip_serial_id1'] !== null && v['soldier1'] === 0) {
        notify.push({
          sword: v['sword_id'],
          type: 'equip',
          value: 1
        });
      }
      if (v['equip_serial_id2'] !== null && v['soldier2'] === 0) {
        notify.push({
          sword: v['sword_id'],
          type: 'equip',
          value: 2
        });
      }
      if (v['equip_serial_id3'] !== null && v['soldier3'] === 0) {
        notify.push({
          sword: v['sword_id'],
          type: 'equip',
          value: 3
        });
      }
      if (v['hp'] < v['hp_max'] && v['status'] === 0) {
        notify.push({
          sword: v['sword_id'],
          type: 'broken',
          value: 0
        });
      }
      if (v['status'] !== 0) {
        notify.push({
          sword: v['sword_id'],
          type: 'broken',
          value: v['status']
        });
      }
      return 'done';
    });
    if (result['get_sword_id'] !== 0) {
      notify.push({
        sword: result['get_sword_id'],
        type: 'get',
        value: result['get_sword_id']
      });
    }
    asia = [3, 5, 7, 9, 13, 17, 25, 31, 33, 35, 37, 43, 51, 53, 55, 57, 59, 65, 67, 69, 71, 79, 103, 105, 107, 112, 118, 120, 130, 132, 134, 136, 138, 140];
    europe = [3, 5, 13, 17, 31, 33, 35, 37, 43, 51, 53, 57, 67, 69, 71, 103, 105, 107, 112, 120, 136, 140];
    _.forEach(notify, (function(_this) {
      return function(n) {
        var has;
        switch (n['type']) {
          case 'equip':
            if (_this.config['notify_broken'] < 5) {
              return;
            }
            _this.sendMessage({
              type: 'notify',
              message: {
                title: (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']) + "刀装破碎！",
                message: "请注意损失情况避免碎刀情况发生！",
                context: "可以在设置中调整提醒等级"
              }
            });
            break;
          case 'broken':
            switch (n['value']) {
              case 0:
                if (_this.config['notify_broken'] < 4) {
                  return;
                }
                _this.sendMessage({
                  type: 'notify',
                  message: {
                    title: (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']) + "已经受到了伤害！",
                    message: "请注意损失情况避免碎刀情况发生！",
                    context: "可以在设置中调整提醒等级"
                  }
                });
                break;
              case 1:
                if (_this.config['notify_broken'] < 3) {
                  return;
                }
                _this.sendMessage({
                  type: 'notify',
                  message: {
                    title: (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']) + "已经轻伤！",
                    message: "请注意损失情况避免碎刀情况发生！",
                    context: "可以在设置中调整提醒等级"
                  }
                });
                break;
              case 2:
                if (_this.config['notify_broken'] < 2) {
                  return;
                }
                _this.sendMessage({
                  type: 'notify',
                  message: {
                    title: (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']) + "已经中伤！",
                    message: "请注意损失情况避免碎刀情况发生！",
                    context: "可以在设置中调整提醒等级"
                  }
                });
                break;
              case 3:
                if (_this.config['notify_broken'] < 1) {
                  return;
                }
                _this.sendMessage({
                  type: 'notify',
                  message: {
                    title: (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']) + "已经重伤！",
                    message: "请注意损失情况避免碎刀情况发生！",
                    context: "可以在设置中调整提醒等级"
                  }
                });
            }
            break;
          case 'get':
            if (_this.config['notify_getnew'] === 0) {
              return;
            }
            if (_this.config['notify_getnew'] === 1) {
              has = _.findIndex(asia, function(i) {
                if (i === parseInt(n['sword'])) {
                  return true;
                }
              });
              if (has === -1) {
                return;
              }
            }
            if (_this.config['notify_getnew'] === 2) {
              has = _.findIndex(europe, function(i) {
                if (i === parseInt(n['sword'])) {
                  return true;
                }
              });
              if (has === -1) {
                return;
              }
            }
            _this.sendMessage({
              type: 'notify',
              message: {
                title: "你捞到了一把新刀！",
                message: "" + (exports.tohken.define.tohkens[n['sword']] ? exports.tohken.define.tohkens[n['sword']]['name'] : n['sword']),
                context: "可以在设置中调整提醒等级"
              }
            });
        }
        return 'done';
      };
    })(this));
    this.view['player']['level'] = player['level'];
    this.data['player']['level'] = player['level'];
    this.data['player']['exp'] = player['exp'];
    target = this.view['party']['data'][result['party_no']]['slot'];
    _.forEach(target, (function(_this) {
      return function(v, k) {
        var fatigue, sword;
        if (v['serial_id'] === null) {
          return;
        }
        sword = target[k];
        sword['hp'] = party[v['serial_id']]['hp'];
        sword['hp_max'] = party[v['serial_id']]['hp_max'];
        sword['exp'] = party[v['serial_id']]['exp'];
        sword['level'] = party[v['serial_id']]['level'];
        sword['equip_serial_id1'] = party[v['serial_id']]['equip_serial_id1'];
        sword['equip_serial_id2'] = party[v['serial_id']]['equip_serial_id2'];
        sword['equip_serial_id3'] = party[v['serial_id']]['equip_serial_id3'];
        if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 1){
            sword['next_exp'] = exports.tohken.define.upexp[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 2){
            sword['next_exp'] = exports.tohken.define.upexp2[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 3){
            sword['next_exp'] = exports.tohken.define.upexp3[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 4){
          sword['next_exp'] = exports.tohken.define.upexp4[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 5){
            sword['next_exp'] = exports.tohken.define.upexp5[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 6){
          sword['next_exp'] = exports.tohken.define.upexp6[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 7){
            sword['next_exp'] = exports.tohken.define.upexp7[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 8){
          sword['next_exp'] = exports.tohken.define.upexp8[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }
        else if(exports.tohken.define.tohkens[party[v['serial_id']]['sword_id']]['symbol'] == 9){
            sword['next_exp'] = exports.tohken.define.upexp9[parseInt(sword['level'], 10)] - parseInt(sword['exp'], 10);
        }

        
        if (parseInt(sword['level'], 10) === 99) {
          sword['next_exp'] = 0;
        }
        fatigue = parseInt(sword['fatigue'], 10) + parseInt(party[v['serial_id']]['vfatigue'], 10);
        sword['fatigue'] = fatigue > 100 || fatigue < 0 ? 100 : fatigue;
        if (fatigue > 100) {
          sword['fatigue'] = 100;
        }
        if (fatigue < 0) {
          sword['fatigue'] = 0;
        }
        if (party[v['serial_id']]['equip_serial_id1'] !== null) {
          sword['equip_1']['soldier_now'] = party[v['serial_id']]['soldier1'];
        }
        if (party[v['serial_id']]['equip_serial_id2'] !== null) {
          sword['equip_2']['soldier_now'] = party[v['serial_id']]['soldier2'];
        }
        if (party[v['serial_id']]['equip_serial_id3'] !== null) {
          sword['equip_3']['soldier_now'] = party[v['serial_id']]['soldier3'];
        }
        return 'done';
      };
    })(this));
    _.forEach(party, (function(_this) {
      return function(v, k) {
        var sword;
        sword = _this.data['sword']['data'][k];
        sword['hp'] = v['hp'];
        sword['hp_max'] = v['hp_max'];
        sword['exp'] = v['exp'];
        sword['level'] = v['level'];
        sword['equip_serial_id1'] = v['equip_serial_id1'];
        sword['equip_serial_id2'] = v['equip_serial_id2'];
        sword['equip_serial_id3'] = v['equip_serial_id3'];
        sword['vfatigue'] += v['vfatigue'];
        return 'done';
      };
    })(this));
    this.data['logs']['battle'][result['id']] = result;
    console.log(this.data['logs']['battle']);
    if (this.config['dataCache'] === 1) {
      exports.tohken.store.set("TRH_DataCache", JSON.stringify(this.data));
      exports.tohken.store.set("TRH_Logs", JSON.stringify(this.data['logs']));
    }
    preupload = {
      "sword": "" + result['get_sword_id'],
      "episode": "" + result['battle_episode'],
      "field": "" + result['battle_field'],
      "pos": "" + result['battle_pos'],
      "rank": "" + result['rank']
    };
    exports.tohken.parse.uploadmap.call(this, preupload);
    return 'done';
  };
  exports.tohken.parse.view = function(type) {
    var equ, source, target;
    switch (type) {
      case 'player':
        source = this.data['player'];
        target = this.view['player'];
        exports.tohken.parse.fill(target, source);
        break;
      case 'resource':
        source = this.data['resource'];
        target = this.view['resource'];
        exports.tohken.parse.fill(target, source);
        target['charcoal'] = target['charcoal'] + source['vcharcoal'];
        target['steel'] = target['steel'] + source['vsteel'];
        target['coolant'] = target['coolant'] + source['vcoolant'];
        target['file'] = target['file'] + source['vfile'];
        target['set'] = true;
        break;
      case 'equip':
        if (this.data['equip']['filling'] === false) {
          return;
        }
        equ = _.groupBy(this.data['equip']['data'], function(n) {
          return n['equip_id'];
        });
        equ = _.mapValues(equ, function(n) {
          return n.length;
        });
        this.view['equips']['data'] = equ;
        this.view['equips']['set'] = true;
        break;
      case 'party':
        if (this.data['equip']['filling'] === false) {
          return;
        }
        if (this.data['sword']['filling'] === false) {
          return;
        }
        if (this.data['party']['filling'] === false) {
          return;
        }
        source = this.data['party'];
        target = _.clone(this.data['party']['data']);
        _.forEach(target, (function(_this) {
          return function(v, k) {
            var eqs, lvs, slot, ths;
            lvs = 0;
            eqs = 0;
            ths = 0;
            slot = _.clone(v['slot']);
            _.forEach(v['slot'], function(vi, ki) {
              var soldiers;
              soldiers = 0;
              if (vi['serial_id'] !== null) {
                ths += 1;
                slot[ki] = _.clone(_this.data['sword']['data'][vi['serial_id']]);
                if (slot[ki]['equip_serial_id1'] !== null) {
                  if (typeof _this.data['equip']['data'][slot[ki]['equip_serial_id1']] !== "undefined") {
                    slot[ki]['equip_1'] = _.clone(_this.data['equip']['data'][slot[ki]['equip_serial_id1']]);
                    slot[ki]['equip_1']['name'] = exports.tohken.define['equip'][slot[ki]['equip_1']['equip_id']]['name'];
                    slot[ki]['equip_1']['sname'] = exports.tohken.define.equiptype_s[exports.tohken.define['equip'][slot[ki]['equip_1']['equip_id']]['type']];
                    slot[ki]['equip_1']['soldier_now'] = exports.tohken.define['equip'][slot[ki]['equip_1']['equip_id']]['soldier'];
                    slot[ki]['equip_1']['soldier_max'] = exports.tohken.define['equip'][slot[ki]['equip_1']['equip_id']]['soldier'];
                    slot[ki]['equip_1']['level'] = parseInt(slot[ki]['equip_1']['equip_id'], 10) % 3;
                    soldiers += parseInt(slot[ki]['equip_1']['soldier'], 10);
                  } else {
                    slot[ki]['equip_serial_id1'] = null;
                  }
                }
                if (slot[ki]['equip_serial_id2'] !== null) {
                  if (typeof _this.data['equip']['data'][slot[ki]['equip_serial_id2']] !== "undefined") {
                    slot[ki]['equip_2'] = _.clone(_this.data['equip']['data'][slot[ki]['equip_serial_id2']]);
                    slot[ki]['equip_2']['name'] = exports.tohken.define['equip'][slot[ki]['equip_2']['equip_id']];
                    slot[ki]['equip_2']['sname'] = exports.tohken.define.equiptype_s[exports.tohken.define['equip'][slot[ki]['equip_2']['equip_id']]['type']];
                    slot[ki]['equip_2']['soldier_now'] = exports.tohken.define['equip'][slot[ki]['equip_2']['equip_id']]['soldier'];
                    slot[ki]['equip_2']['soldier_max'] = exports.tohken.define['equip'][slot[ki]['equip_2']['equip_id']]['soldier'];
                    slot[ki]['equip_2']['level'] = parseInt(slot[ki]['equip_2']['equip_id'], 10) % 3;
                    soldiers += parseInt(slot[ki]['equip_2']['soldier'], 10);
                  } else {
                    slot[ki]['equip_serial_id2'] === null;
                  }
                }
                if (slot[ki]['equip_serial_id3'] !== null) {
                  if (typeof _this.data['equip']['data'][slot[ki]['equip_serial_id3']] !== "undefined") {
                    slot[ki]['equip_3'] = _.clone(_this.data['equip']['data'][slot[ki]['equip_serial_id3']]);
                    slot[ki]['equip_3']['name'] = exports.tohken.define['equip'][slot[ki]['equip_3']['equip_id']];
                    slot[ki]['equip_3']['sname'] = exports.tohken.define.equiptype_s[exports.tohken.define['equip'][slot[ki]['equip_3']['equip_id']]['type']];
                    slot[ki]['equip_3']['soldier_now'] = exports.tohken.define['equip'][slot[ki]['equip_3']['equip_id']]['soldier'];
                    slot[ki]['equip_3']['soldier_max'] = exports.tohken.define['equip'][slot[ki]['equip_3']['equip_id']]['soldier'];
                    slot[ki]['equip_3']['level'] = parseInt(slot[ki]['equip_3']['equip_id'], 10) % 3;
                    soldiers += parseInt(slot[ki]['equip_3']['soldier'], 10);
                  } else {
                    slot[ki]['equip_serial_id3'] === null;
                  }
                }
                slot[ki]['name'] = exports.tohken.define['tohkens'][slot[ki]['sword_id']] ? exports.tohken.define['tohkens'][slot[ki]['sword_id']]['name'] : slot[ki]['sword_id'];
                slot[ki]['type'] = exports.tohken.define['tohkens'][slot[ki]['sword_id']] ? exports.tohken.define['type'][exports.tohken.define['tohkens'][slot[ki]['sword_id']]['type']] : '';
                slot[ki]['max_equip'] = exports.tohken.define['tohkens'][slot[ki]['sword_id']] ? exports.tohken.define['tohkens'][slot[ki]['sword_id']]['equip'] : 2;
                slot[ki]['soldiers'] = soldiers;
                lvs += parseInt(slot[ki]['level'], 10);
                eqs += soldiers;
                if (_this.config["cad"]) {
                  return slot[ki]['fatigue'] = parseInt(slot[ki]['fatigue'], 10) + parseInt(slot[ki]['vfatigue'], 10);
                } else {
                  return slot[ki]['fatigue'] = slot[ki]['fatigue'];
                }
              }
            });
            target[k]['slot'] = slot;
            target[k]['amount_lv'] = lvs;
            target[k]['avearge_lv'] = lvs ? (lvs / ths).toFixed(2) : 0;
            target[k]['soldiers'] = eqs;
            return 'done';
          };
        })(this));
        this.view['party']['set'] = true;
        this.view['party']['data'] = target;
    }
    return 'done';
  };
  exports.tohken.parse.conquest = function(party) {
    if (this.config['notify_conquest'] === 0) {
      return;
    }
    _.forEach(party, (function(_this) {
      return function(v, k) {
        var cmsg, context, earlier, f, fd, finish, message, title;
        f = v['finished_at'];
        if (f !== null) {
          finish = Date.parse(f + " GMT+0900");
          fd = new Date();
          fd.setTime(finish);
          earlier = 0;
          title = v['party_name'] + "远征结束";
          message = "结束时间 " + (fd.getHours()) + ":" + (fd.getMinutes()) + ":" + (fd.getSeconds());
          context = "请注意查收远征成果";
          cmsg = "将在结束时提醒";
          switch (_this.config['notify_conquest']) {
            case 0:
              return;
            case 1:
              title = v['party_name'] + "远征还有五分钟结束";
              cmsg = "将在结束五分钟前提醒";
              earlier = 5 * 60 * 1000;
              break;
            case 2:
              title = v['party_name'] + "远征还有两分钟结束";
              cmsg = "将在结束两分钟前提醒";
              earlier = 2 * 60 * 1000;
              break;
            case 3:
              title = v['party_name'] + "远征还有半分钟结束";
              cmsg = "将在结束半分钟前提醒";
              earlier = 0.5 * 60 * 1000;
          }
          _this.sendMessage({
            'type': 'alarm',
            'time': finish - earlier,
            'id': "conquest-" + v['party_no'] + "-" + finish,
            'message': {
              'title': title,
              'message': message,
              'context': context
            },
            'startmsg': {
              'title': v['party_name'] + "远征开始",
              'message': message,
              'context': cmsg
            }
          });
        }
        return 'done';
      };
    })(this));
    return 'done';
  };
  exports.tohken.parse.check_repair = function(repair) {
    if (this.config['notify_repair'] === 0) {
      return;
    }
    _.forEach(repair, (function(_this) {
      return function(v, k) {
        var cmsg, context, earlier, f, fd, finish, message, title;
        console.log(v);
        f = v['finished_at'];
        if (f !== null) {
          finish = Date.parse(f + " GMT+0900");
          fd = new Date();
          fd.setTime(finish);
          earlier = 0;
          title = (exports.tohken.define.tohkens[_this.data['sword']['data'][v['sword_serial_id']]] ? exports.tohken.define.tohkens[_this.data['sword']['data'][v['sword_serial_id']]['sword_id']]['name'] : _this.data['sword']['data'][v['sword_serial_id']]) + "手入结束";
          message = "结束时间 " + (_this.t2t(fd));
          context = "快去取刀吧！";
          cmsg = "将在结束时提醒";
          switch (_this.config['notify_conquest']) {
            case 0:
              return;
            case 1:
              title = v['party_name'] + "手入还有五分钟结束";
              cmsg = "将在结束五分钟前提醒";
              earlier = 5 * 60 * 1000;
              break;
            case 2:
              title = v['party_name'] + "手入还有两分钟结束";
              cmsg = "将在结束两分钟前提醒";
              earlier = 2 * 60 * 1000;
              break;
            case 3:
              title = v['party_name'] + "手入还有半分钟结束";
              cmsg = "将在结束半分钟前提醒";
              earlier = 0.5 * 60 * 1000;
          }
          _this.sendMessage({
            'type': 'alarm',
            'time': finish - earlier,
            'id': "conquest-" + v['party_no'] + "-" + finish,
            'message': {
              'title': title,
              'message': message,
              'context': context
            },
            'startmsg': {
              'title': (exports.tohken.define.tohkens[_this.data['sword']['data'][v['sword_serial_id']]] ? exports.tohken.define.tohkens[_this.data['sword']['data'][v['sword_serial_id']]['sword_id']]['name'] : _this.data['sword']['data'][v['sword_serial_id']]) + "手入开始",
              'message': message,
              'context': cmsg
            }
          });
        }
        return 'done';
      };
    })(this));
    return 'done';
  };
  exports.tohken.parse.upload = function(id, data) {
    $.post("http://api.toulove.org", JSON.stringify({
      "sword": data['sword_id'],
      "charcoal": data['charcoal'],
      "coolant": data['coolant'],
      "steel": data['steel'],
      "file": data['file'],
      "secretary": data['secretary'],
      "time": Date.now(),
      "username": this.data['player']['name'] !== null ? this.data['player']['name'] : 'empty',
      "server": this.data['player']['world'] !== null ? this.data['player']['world'] : 'empty'
    }), (function(_this) {
      return function(data, status) {
        if (status === 'success') {
          if (data['status'] === 'success') {
            console.log("" + status, data);
            _this.data['logs']['forge'][id]['upload'] = true;
            return console.log(_this.data['logs']['forge'][id]['upload']);
          }
        }
      };
    })(this));
    return 'done';
  };
  exports.tohken.parse.uploadmap = function(data) {
    $.post("http://api.toulove.org", JSON.stringify({
      "type": 'map',
      "sword": data['sword'],
      "episode": data['episode'],
      "field": data['field'],
      "pos": data['pos'],
      "rank": data['rank'],
      "time": Date.now(),
      "username": this.data['player']['name'] !== null ? this.data['player']['name'] : 'empty',
      "server": this.data['player']['world'] !== null ? this.data['player']['world'] : 'empty'
    }), (function(_this) {
      return function(data, status) {
        if (status === 'success') {
          return console.log('upload');
        }
      };
    })(this));
    return 'done';
  };
  return exports.tohken.parse.fill = function(target, source) {
    _.forEach(target, function(vi, ki) {
      if (_.has(source, ki)) {
        target[ki] = source[ki];
      }
      return 'done';
    });
    return 'done';
  };
})(window);
