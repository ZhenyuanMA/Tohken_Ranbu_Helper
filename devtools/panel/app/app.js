(function(exports) {
  Vue.config.debug = true;
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.control = new Vue({
    el: '#app',
    data: {
      version: '0.1.0',
      gaming: false,
      tab: 2,
      data: exports.tohken.data,
      view: exports.tohken.view,
      config: exports.tohken.config,
      vdata: true,
      dataExist: false,
      status: {
        "in_battle": false,
        "router": null,
        "last_router": null,
        "battle_id": null,
        "battle_episode": null,
        "battle_field": null,
        "battle_pos": null,
        "show_forge": false
      }
    },
    ready: function() {
      chrome.devtools.network.onRequestFinished.addListener((function(_this) {
        return function(request) {
          var tohken;
          tohken = request.request.url.match(/http:\/\/(.*?)\.touken-ranbu\.jp\/(.*)/);
          if (tohken !== null) {
            if (tohken[1] === "static") {
              return;
            }
            return _this.route(request, tohken[2]);
          }
        };
      })(this));
      return this.loadData();
    },
    filters: {
      conquest_time: function(finished_at) {
        var d;
        d = new Date();
        d.setTime(Date.parse(finished_at + " GMT+0900"));
        return d.toTimeString().slice(0, 8);
      },
      e2n: function(equip_id) {
        return exports.tohken.define.equip[equip_id] ? exports.tohken.define.equip[equip_id]['name'] : '';
      },
      ls2t: function(time) {
        var date, day, hour, minute, month, second, year;
        date = new Date();
        date.setTime(time);
        year = date.getFullYear();
        month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate();
        hour = date.getHours() < 10 ? "0" + (date.getHours()) : date.getHours();
        minute = date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes();
        second = date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds();
        return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
      },
      tt2lt: function(time) {
        var date, day, hour, minute, month, second, year;
        date = new Date();
        date.setTime(Date.parse(time + " GMT+0900"));
        year = date.getFullYear();
        month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate();
        hour = date.getHours() < 10 ? "0" + (date.getHours()) : date.getHours();
        minute = date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes();
        second = date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds();
        return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
      },
      ls2n: function(sword_id) {
        if (sword_id === null || parseInt(sword_id, 10) === 0) {
          return '未获得';
        }
        return exports.tohken.define.tohkens[sword_id] ? exports.tohken.define.tohkens[sword_id]['name'] : sword_id;
      },
      fs2n: function(sword_id) {
        if (!this.status['show_forge']) {
          return '???';
        }
        if (sword_id === null || parseInt(sword_id, 10) === 0) {
          return '未获得';
        }
        return exports.tohken.define.tohkens[sword_id] ? exports.tohken.define.tohkens[sword_id]['name'] : sword_id;
      },
      r2r: function(rank) {
        var r;
        r = ['S', 'A', 'B', 'C'];
        return r[rank - 2];
      },
      sid2n: function(sid) {
        return exports.tohken.define.tohkens[this.data['sword']['data'][sid]['sword_id']] ? exports.tohken.define.tohkens[this.data['sword']['data'][sid]['sword_id']]['name'] : this.data['sword']['data'][sid]['sword_id'];
      }
    },
    methods: {
      route: function(request, action) {
        exports.tohken.router.call(this, request, action);
        if (this.config['dataCache'] === 0) {
          return;
        }
        return exports.tohken.store.set("TRH_DataCache", JSON.stringify(this.data));
      },
      parser: function(request, callback) {
        var post, spost;
        spost = request['request']['postData']['text'].replace(/%5F/g, '_').split('&');
        post = {};
        _.forEach(spost, function(n) {
          var t;
          t = n.split('=');
          return post[t[0]] = t[1];
        });
        return request.getContent(function(content, encoding) {
          var con;
          con = JSON.parse(content);
          con['post_data'] = post;
          if (_.has(con, 'data') && _.has(con, 'iv')) {
            var e = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(
              {
                ciphertext: CryptoJS.enc.Hex.parse(con.data)
              },
              CryptoJS.enc.Utf8.parse("9ij8pNKv7qVJnpj4"),
              {
                iv: CryptoJS.enc.Hex.parse(con.iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.NoPadding
              }
            ));
            var f = e.lastIndexOf('}');
            var g = e.substr(0, f + 1);
            var h = JSON.parse(g);
            console.log(h);
            for (var k in h) {
              con[k] = h[k];
            }
          }
          return callback.call(this, con);
        });
      },
      applyConfig: function(key, value) {
        if (key === 'dataCache' && value === -1) {
          exports.tohken.store.remove("TRH_DataCache");
          this.dataExist = false;
          return;
        }
        this.config[key] = value;
        return exports.tohken.store.set("TRH_Config", JSON.stringify(this.config));
      },
      loadData: function() {
        var ex;
        this.config = exports.tohken.store.get("TRH_Config", exports.tohken.config, true);
        ex = exports.tohken.store.get("TRH_DataCache", "nil", true);
        if (ex !== "nil") {
          this.dataExist = true;
        }
        if (this.config['dataCache'] === 0) {
          return;
        }
        if (this.dataExist) {
          this.data = exports.tohken.store.get("TRH_DataCache", exports.tohken.data, true);
          exports.tohken.parse.view.call(this, 'player');
          exports.tohken.parse.view.call(this, 'resource');
          exports.tohken.parse.view.call(this, 'equip');
          exports.tohken.parse.view.call(this, 'party');
          exports.tohken.parse.conquest.call(this, this.data['party']['data']);
        }
        return 'done';
      },
      sendMessage: function(msg) {
        return chrome.runtime.sendMessage(msg);
      },
      grouter: function(s) {
        return this.status['router'] === s;
      },
      in_battle: function(p) {
        return this.status['in_battle'] && (parseInt(this.status['battle_id']) === parseInt(p, 10));
      },
      t2t: function(time) {
        var date, day, hour, minute, month, second, year;
        date = new Date();
        date.setTime(time);
        year = date.getFullYear();
        month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate();
        hour = date.getHours() < 10 ? "0" + (date.getHours()) : date.getHours();
        minute = date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes();
        second = date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds();
        return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
      },
      s2n: function(sword_id) {
        if (sword_id === null || parseInt(sword_id, 10) === 0) {
          return '未获得';
        }
        return exports.tohken.define.tohkens[sword_id] ? exports.tohken.define.tohkens[sword_id]['name'] : sword_id;
      },
      r2r: function(rank) {
        var r;
        r = ['S', 'A', 'B', 'C'];
        return r[rank - 2];
      },
      checkout: function(type) {
        var r;
        console.log(this.data['repair']['data']);
        switch (type) {
          case 'repair':
            r = 0;
            _.forEach(this.data['repair']['data'], function(v) {
              return r = r + 1;
            });
            return r;
          case 'forge':
            r = 0;
            _.forEach(this.data['forge']['data'], function(v) {
              return r = r + 1;
            });
            return r;
        }
        return 'done';
      },
      toggleForge: function() {
        return this.status['show_forge'] = !this.status['show_forge'];
      },
      saveLogs: function() {
        var battle, blob, forge;
        blob = new Blob([JSON.stringify(this.data['logs'])], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "TRHData" + (Date.now()) + ".json");
        forge = "\"时间\",\"结果\",\"耗时\",\"木炭\",\"玉鋼\",\"冷却材\",\"砥石\"";
        _.forEach(this.data['logs']['forge'], (function(_this) {
          return function(v, k) {
            if (v['resource']) {
              return forge += "\n\"'" + (_this.t2t(v['finish_at'])) + "\",\"'" + (_this.s2n(v['sword_id'])) + "\",\"'" + v['times'] + "\",\"'" + v['charcoal'] + "\",\"'" + v['steel'] + "\",\"'" + v['coolant'] + "\",\"'" + v['file'] + "\"";
            } else {
              return forge += "\n\"'" + (_this.t2t(v['finish_at'])) + "\",\"'" + (_this.s2n(v['sword_id'])) + "\",\"-\",\"-\",\"-\",\"-\",\"-\"";
            }
          };
        })(this));
        blob = new Blob([forge], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "TRHForge" + (Date.now()) + ".csv");
        battle = "\"时间\",\"队伍\",\"评分\",\"获得\",\"地图\",\"位置\"";
        _.forEach(this.data['logs']['battle'], (function(_this) {
          return function(v, k) {
            return battle += "\n\"'" + (_this.t2t(v['time'])) + "\",\"'" + v['party_no'] + "\",\"'" + (_this.r2r(v['rank'])) + "\",\"'" + (_this.s2n(v['get_sword_id'])) + "\",\"'" + v['battle_episode'] + "-" + v['battle_field'] + "\",\"'" + v['battle_pos'] + "\"";
          };
        })(this));
        blob = new Blob([battle], {
          type: "text/plain;charset=utf-8"
        });
        return saveAs(blob, "TRHBattle" + (Date.now()) + ".csv");
      }
    }
  });
})(window);
