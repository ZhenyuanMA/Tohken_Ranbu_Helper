(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  if (!exports.tohken.define) {
    exports.tohken.define = {};
  }
  exports.tohken.define.type = {
    "1": "大太刀",
    "2": "太刀",
    "3": "薙刀",
    "4": "脇差",
    "5": "打刀",
    "6": "槍",
    "7": "短刀"
  };
  exports.tohken.define.group = {
    "1": "無",
    "2": "三条",
    "3": "兼定",
    "4": "古備前",
    "5": "堀川",
    "6": "左文字",
    "7": "村正",
    "8": "来",
    "9": "粟田口",
    "10": "虎徹",
    "11": "長船",
    "12": "青江"
    //"13": "贞宗"
    //"14": "三池"
  };
  exports.tohken.define.area = {
    "1": "狭",
    "2": "広",
    "3": "横",
    "4": "縦"
  };
  exports.tohken.define.tohkens = {
    "3": {
      "name": "三日月宗近",
      "id": 3,
      "rarity": 5,
      "type": 2,
      "group": 2,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "5": {
      "name": "小狐丸",
      "id": 5,
      "rarity": 3,
      "type": 2,
      "group": 2,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "7": {
      "name": "石切丸",
      "id": 7,
      "rarity": 3,
      "type": 1,
      "group": 2,
      "equip": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "9": {
      "name": "岩融",
      "id": 9,
      "rarity": 3,
      "type": 3,
      "group": 2,
      "equip": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "11": {
      "name": "今剣",
      "id": 11,
      "rarity": 1,
      "type": 7,
      "group": 2,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "12": {
      "name": "今剣·极",
      "id": 12,
      "rarity": 2,
      "type": 7,
      "group": 2,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "13": {
      "name": "大典太光世",
      "id": 13,
      "rarity": 5,
      "type": 2,
      "group": 14,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "15": {
      "name": "ソハヤノシルキ",
      "id": 15,
      "rarity": 3,
      "type": 2,
      "group": 14,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "17": {
      "name": "数珠丸恒次",
      "id": 17,
      "rarity": 5,
      "type": 2,
      "group": 12,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "19": {
      "name": "にっかり青江",
      "id": 19,
      "rarity": 2,
      "type": 4,
      "group": 12,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "20": {
      "name": "にっかり青江·极",
      "id": 20,
      "rarity": 3,
      "type": 4,
      "group": 12,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 3
    },
    "23": {
      "name": "鳴狐",
      "id": 23,
      "rarity": 2,
      "type": 5,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "24": {
      "name": "鳴狐·极",
      "id": 24,
      "rarity": 3,
      "type": 5,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "25": {
      "name": "一期一振",
      "id": 25,
      "rarity": 4,
      "type": 2,
      "group": 9,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "27": {
      "name": "鯰尾藤四郎",
      "id": 27,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "28": {
      "name": "鯰尾藤四郎·极",
      "id": 28,
      "rarity": 3,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "29": {
      "name": "骨喰藤四郎",
      "id": 29,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "30": {
      "name": "骨喰藤四郎·极",
      "id": 30,
      "rarity": 3,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "31": {
      "name": "平野藤四郎",
      "id": 31,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "32": {
      "name": "平野藤四郎·极",
      "id": 32,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "33": {
      "name": "厚藤四郎",
      "id": 33,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "34": {
      "name": "厚藤四郎·极",
      "id": 34,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "35": {
      "name": "後藤藤四郎",
      "id": 35,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "36": {
      "name": "後藤藤四郎·极",
      "id": 36,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "37": {
      "name": "信濃藤四郎",
      "id": 37,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "38": {
      "name": "信濃藤四郎·极",
      "id": 38,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "39": {
      "name": "前田藤四郎",
      "id": 39,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "40": {
      "name": "前田藤四郎·极",
      "id": 40,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "41": {
      "name": "秋田藤四郎",
      "id": 41,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "42": {
      "name": "秋田藤四郎·极",
      "id": 42,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "43": {
      "name": "博多藤四郎",
      "id": 43,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "44": {
      "name": "博多藤四郎·极",
      "id": 44,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "45": {
      "name": "乱藤四郎",
      "id": 45,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "46": {
      "name": "乱藤四郎·极",
      "id": 46,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "47": {
      "name": "五虎退",
      "id": 47,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "48": {
      "name": "五虎退·极",
      "id": 48,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "49": {
      "name": "薬研藤四郎",
      "id": 49,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "50": {
      "name": "薬研藤四郎·极",
      "id": 50,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "51": {
      "name": "包丁藤四郎",
      "id": 51,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "52": {
      "name": "包丁藤四郎·极",
      "id": 52,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
  },
    "53": {
      "name": "大包平",
      "id": 53,
      "rarity": 5,
      "type": 2,
      "group": 4,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "55": {
      "name": "鶯丸",
      "id": 55,
      "rarity": 4,
      "type": 2,
      "group": 4,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "57": {
      "name": "明石国行",
      "id": 57,
      "rarity": 3,
      "type": 2,
      "group": 8,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "59": {
      "name": "蛍丸",
      "id": 59,
      "rarity": 4,
      "type": 1,
      "group": 8,
      "equip": 3,
      "upgrade": 25,
      "symbol": 1
    },
    "61": {
      "name": "愛染国俊",
      "id": 61,
      "rarity": 1,
      "type": 7,
      "group": 8,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "62": {
      "name": "愛染国俊·极",
      "id": 62,
      "rarity": 2,
      "type": 7,
      "group": 8,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "63": {
      "name": "千子村正",
      "id": 63,
      "rarity": 3,
      "type": 5,
      "group": 7,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    }, 
    "65": {
      "name": "蜻蛉切",
      "id": 65,
      "rarity": 3,
      "type": 6,
      "group": 7,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },    
    "67": {
      "name": "物吉贞宗",
      "id": 67,
      "rarity": 2,
      "type": 4,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "68": {
      "name": "物吉贞宗·极",
      "id": 68,
      "rarity": 3,
      "type": 4,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "69": {
      "name": "太鼓钟贞宗",
      "id": 69,
      "rarity": 1,
      "type": 7,
      "group": 13,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "70": {
      "name": "太鼓钟贞宗·极",
      "id": 70,
      "rarity": 2,
      "type": 7,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "71": {
      "name": "龟甲贞宗",
      "id": 71,
      "rarity": 2,
      "type": 5,
      "group": 13,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "73": {
      "name": "燭台切光忠",
      "id": 73,
      "rarity": 3,
      "type": 2,
      "group": 11,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "75": {
      "name": "大般若长光",
      "id": 75,
      "rarity": 4,
      "type": 2,
      "group": 11,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "77": {
      "name": "小竜景光",
      "id": 77,
      "rarity": 4,
      "type": 2,
      "group": 11,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "79": {
      "name": "江雪左文字",
      "id": 79,
      "rarity": 4,
      "type": 2,
      "group": 6,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "81": {
      "name": "宗三左文字",
      "id": 81,
      "rarity": 2,
      "type": 5,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "82": {
      "name": "宗三左文字·极",
      "id": 82,
      "rarity": 3,
      "type": 5,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "83": {
      "name": "小夜左文字",
      "id": 83,
      "rarity": 1,
      "type": 7,
      "group": 6,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "84": {
      "name": "小夜左文字·极",
      "id": 84,
      "rarity": 2,
      "type": 7,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "85": {
      "name": "加州清光",
      "id": 85,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "87": {
      "name": "大和守安定",
      "id": 87,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "88": {
      "name": "大和守安定·极",
      "id": 88,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 4
    },
    "89": {
      "name": "歌仙兼定",
      "id": 89,
      "rarity": 2,
      "type": 5,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "91": {
      "name": "和泉守兼定",
      "id": 91,
      "rarity": 3,
      "type": 2,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "92": {
      "name": "和泉守兼定·极",
      "id": 92,
      "rarity": 4,
      "type": 2,
      "group": 3,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 9
    },
    "93": {
      "name": "陸奥守吉行",
      "id": 93,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "95": {
      "name": "山姥切国広",
      "id": 95,
      "rarity": 2,
      "type": 5,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "97": {
      "name": "山伏国広",
      "id": 97,
      "rarity": 3,
      "type": 2,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "99": {
      "name": "堀川国広",
      "id": 99,
      "rarity": 2,
      "type": 4,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "100": {
      "name": "堀川国広·极",
      "id": 100,
      "rarity": 3,
      "type": 4,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "101": {
      "name": "蜂須賀虎徹",
      "id": 101,
      "rarity": 2,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "103": {
      "name": "浦島虎徹",
      "id": 103,
      "rarity": 2,
      "type": 4,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "104": {
      "name": "浦島虎徹·极",
      "id": 104,
      "rarity": 3,
      "type": 4,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 3
    },
    "105": {
      "name": "長曽祢虎徹",
      "id": 105,
      "rarity": 2,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "106": {
      "name": "長曽祢虎徹·极",
      "id": 106,
      "rarity": 3,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 4
    },
    "107": {
      "name": "髭切",
      "id": 107,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "108": {
      "name": "髭切",
      "id": 108,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "109": {
      "name": "髭切",
      "id": 109,
      "rarity": 3,
      "type": 3,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 75,
      "symbol": 1
    },
    "110": {
      "name": "髭切",
      "id": 110,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 75,
      "symbol": 1
    },
    "112": {
      "name": "膝丸",
      "id": 112,
      "rarity": 2,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "113": {
      "name": "膝丸",
      "id": 113,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "114": {
      "name": "膝丸",
      "id": 114,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 50,
      "symbol": 1
    },
    "116": {
      "name": "大倶利伽羅",
      "id": 116,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "117": {
      "name": "大倶利伽羅·极",
      "id": 117,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 20,
      "symbol": 9
    },
    "118": {
      "name": "へし切長谷部",
      "id": 118,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "119": {
      "name": "へし切長谷部·极",
      "id": 119,
      "rarity": 3,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 4
    },
    "120": {
      "name": "不動行光",
      "id": 120,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "121": {
      "name": "不動行光·极",
      "id": 121,
      "rarity": 2,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 2
    },
    "122": {
      "name": "獅子王",
      "id": 122,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "124": {
      "name": "小烏丸",
      "id": 124,
      "rarity": 5,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "128": {
      "name": "同田貫正国",
      "id": 128,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "129": {
      "name": "同田貫正国·极",
      "id": 129,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 9
    },
    "130": {
      "name": "鶴丸国永",
      "id": 130,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    },
    "132": {
      "name": "太郎太刀",
      "id": 132,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "134": {
      "name": "次郎太刀",
      "id": 134,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "136": {
      "name": "日本号",
      "id": 136,
      "rarity": 3,
      "type": 6,
      "group": 1,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },
    "138": {
      "name": "御手杵",
      "id": 138,
      "rarity": 3,
      "type": 6,
      "group": 1,
      "equip": 2,
      "area": 4,
      "upgrade": 25,
      "symbol": 1
    },
    "140": {
      "name": "巴形薙刀",
      "id": 140,
      "rarity": 3,
      "type": 3,
      "group": 1,
      "equip": 2,
      "upgrade": 25,
      "symbol": 1
    },
    "142": {
      "name": "毛利藤四郎",
      "id": 142,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "144": {
      "name": "篭手切江",
      "id": 144,
      "rarity": 2,
      "type": 4,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "146": {
      "name": "謙信景光",
      "id": 146,
      "rarity": 1,
      "type": 7,
      "group": 11,
      "equip": 1,
      "area": 1,
      "upgrade": 20,
      "symbol": 1
    },
    "148": {
      "name": "小豆長光",
      "id": 148,
      "rarity": 3,
      "type": 2,
      "group": 11,
      "equip": 2,
      "area": 1,
      "upgrade": 25,
      "symbol": 1
    }
  };
  exports.tohken.define.equiptype = {
    "1": "投石兵",
    "2": "槍兵",
    "3": "軽歩兵",
    "4": "重歩兵",
    "5": "盾兵",
    "6": "軽騎兵",
    "7": "重騎兵",
    "8": "精鋭兵",
    "9": "弓兵",
    "10": "銃兵",
    "-1": "馬"
  };
  exports.tohken.define.equiptype_s = {
    "1": "投石",
    "2": "槍兵",
    "3": "軽歩",
    "4": "重歩",
    "5": "盾兵",
    "6": "軽騎",
    "7": "重騎",
    "8": "精鋭",
    "9": "弓兵",
    "10": "銃兵"
  };
  exports.tohken.define.equip = {
    "1": {
      "name": "投石兵・並",
      "soldier": 8,
      "type": 1
    },
    "2": {
      "name": "投石兵・上",
      "soldier": 9,
      "type": 1
    },
    "3": {
      "name": "投石兵・特上",
      "soldier": 10,
      "type": 1
    },
    "4": {
      "name": "槍兵・並",
      "soldier": 7,
      "type": 2
    },
    "5": {
      "name": "槍兵・上",
      "soldier": 7,
      "type": 2
    },
    "6": {
      "name": "槍兵・特上",
      "soldier": 8,
      "type": 2
    },
    "7": {
      "name": "軽歩兵・並",
      "soldier": 8,
      "type": 3
    },
    "8": {
      "name": "軽歩兵・上",
      "soldier": 9,
      "type": 3
    },
    "9": {
      "name": "軽歩兵・特上",
      "soldier": 10,
      "type": 3
    },
    "10": {
      "name": "重歩兵・並",
      "soldier": 10,
      "type": 4
    },
    "11": {
      "name": "重歩兵・上",
      "soldier": 11,
      "type": 4
    },
    "12": {
      "name": "重歩兵・特上",
      "soldier": 12,
      "type": 4
    },
    "13": {
      "name": "盾兵・並",
      "soldier": 11,
      "type": 5
    },
    "14": {
      "name": "盾兵・上",
      "soldier": 13,
      "type": 5
    },
    "15": {
      "name": "盾兵・特上",
      "soldier": 15,
      "type": 5
    },
    "16": {
      "name": "軽騎兵・並",
      "soldier": 9,
      "type": 6
    },
    "17": {
      "name": "軽騎兵・上",
      "soldier": 10,
      "type": 6
    },
    "18": {
      "name": "軽騎兵・特上",
      "soldier": 12,
      "type": 6
    },
    "19": {
      "name": "重騎兵・並",
      "soldier": 11,
      "type": 7
    },
    "20": {
      "name": "重騎兵・上",
      "soldier": 12,
      "type": 7
    },
    "21": {
      "name": "重騎兵・特上",
      "soldier": 13,
      "type": 7
    },
    "22": {
      "name": "精鋭兵・並",
      "soldier": 11,
      "type": 8
    },
    "23": {
      "name": "精鋭兵・上",
      "soldier": 12,
      "type": 8
    },
    "24": {
      "name": "精鋭兵・特上",
      "soldier": 13,
      "type": 8
    },
    "25": {
      "name": "弓兵・並",
      "soldier": 6,
      "type": 9
    },
    "26": {
      "name": "弓兵・上",
      "soldier": 7,
      "type": 9
    },
    "27": {
      "name": "弓兵・特上",
      "soldier": 8,
      "type": 9
    },
    "28": {
      "name": "銃兵・並",
      "soldier": 5,
      "type": 10
    },
    "29": {
      "name": "銃兵・上",
      "soldier": 6,
      "type": 10
    },
    "30": {
      "name": "銃兵・特上",
      "soldier": 6,
      "type": 10
    },
    "10001": {
      "name": "王庭",
      "soldier": 0,
      "type": -1
    },
    "10002": {
      "name": "三国黒",
      "soldier": 0,
      "type": -1
    },
    "10003": {
      "name": "松風",
      "soldier": 0,
      "type": -1
    },
    "10004": {
      "name": "小雲雀",
      "soldier": 0,
      "type": -1
    },
    "10005": {
      "name": "高楯黒",
      "soldier": 0,
      "type": -1
    },
    "10006": {
      "name": "花柑子",
      "soldier": 0,
      "type": -1
    },
    "10007": {
      "name": "青海波",
      "soldier": 0,
      "type": -1
    },
    "10008": {
      "name": "望月",
      "soldier": 0,
      "type": -1
    },
    "11011": {
      "name": "白毛",
      "soldier": 0,
      "type": -1
    },
    "11021": {
      "name": "鹿毛",
      "soldier": 0,
      "type": -1
    },
    "11031": {
      "name": "青毛",
      "soldier": 0,
      "type": -1
    },
    "11041": {
      "name": "祝一号",
      "soldier": 0,
      "type": -1
    }
  };
  exports.tohken.define.area = {
    "1": "維新の記憶",
    "2": "江戸の記憶",
    "3": "織豊の記憶",
    "4": "戦国の記憶",
    "5": "武家の記憶"
  };
  exports.tohken.define.map = {
    "1": {
      "id": "1-1",
      "no": "1",
      "area": "1",
      "name": "函館",
      "star": "1",
      "resource": "-",
      "max_lv": "11",
      "sence": ""
    },
    "2": {
      "id": "1-2",
      "no": "2",
      "area": "1",
      "name": "会津",
      "star": "1",
      "resource": "木炭",
      "max_lv": "12",
      "sence": ""
    },
    "3": {
      "id": "1-3",
      "no": "3",
      "area": "1",
      "name": "宇都宮",
      "star": "1",
      "resource": "砥石",
      "max_lv": "13",
      "sence": ""
    },
    "4": {
      "id": "1-4",
      "no": "4",
      "area": "1",
      "name": "鳥羽",
      "star": "2",
      "resource": "木炭・冷却材",
      "max_lv": "20",
      "sence": ""
    },
    "5": {
      "id": "2-1",
      "no": "5",
      "area": "2",
      "name": "鳥羽",
      "star": "1",
      "resource": "玉鋼・砥石",
      "max_lv": "23",
      "sence": ""
    },
    "6": {
      "id": "2-2",
      "no": "6",
      "area": "2",
      "name": "江戸",
      "star": "1",
      "resource": "木炭",
      "max_lv": "26",
      "sence": ""
    },
    "7": {
      "id": "2-3",
      "no": "7",
      "area": "2",
      "name": "江戸(元禄)",
      "star": "2",
      "resource": "冷却材",
      "max_lv": "29",
      "sence": ""
    },
    "8": {
      "id": "2-4",
      "no": "8",
      "area": "2",
      "name": "江戸(大坂冬の陣)",
      "star": "2",
      "resource": "依頼札",
      "max_lv": "32",
      "sence": ""
    },
    "9": {
      "id": "3-1",
      "no": "9",
      "area": "3",
      "name": "関ヶ原",
      "star": "2",
      "resource": "砥石",
      "max_lv": "40",
      "sence": ""
    },
    "10": {
      "id": "3-2",
      "no": "10",
      "area": "3",
      "name": "本能寺",
      "star": "2",
      "resource": "玉鋼・依頼札",
      "max_lv": "42",
      "sence": ""
    },
    "11": {
      "id": "3-3",
      "no": "11",
      "area": "3",
      "name": "越前",
      "star": "2",
      "resource": "木炭・玉鋼",
      "max_lv": "47",
      "sence": ""
    },
    "12": {
      "id": "3-4",
      "no": "12",
      "area": "3",
      "name": "安土",
      "star": "3",
      "resource": "砥石・依頼札",
      "max_lv": "51",
      "sence": ""
    },
    "13": {
      "id": "4-1",
      "no": "13",
      "area": "4",
      "name": "長篠",
      "star": "2",
      "resource": "冷却材、依頼札",
      "max_lv": "55",
      "sence": ""
    },
    "14": {
      "id": "4-2",
      "no": "14",
      "area": "4",
      "name": "三方ヶ原",
      "star": "3",
      "resource": "砥石",
      "max_lv": "59",
      "sence": ""
    },
    "15": {
      "id": "4-3",
      "no": "15",
      "area": "4",
      "name": "桶狭間",
      "star": "3",
      "resource": "木炭、冷却材、玉鋼",
      "max_lv": "63",
      "sence": ""
    },
    "16": {
      "id": "4-4",
      "no": "16",
      "area": "4",
      "name": "京都(椿寺)",
      "star": "4",
      "resource": "冷却材、依頼札",
      "max_lv": "68",
      "sence": ""
    },
    "17": {
      "id": "5-1",
      "no": "17",
      "area": "5",
      "name": "鎌倉",
      "star": "3",
      "resource": "木炭",
      "max_lv": "78",
      "sence": ""
    },
    "18": {
      "id": "5-2",
      "no": "18",
      "area": "5",
      "name": "元寇(博多湾)",
      "star": "4",
      "resource": "冷却材、木炭、玉鋼",
      "max_lv": "82",
      "sence": ""
    },
    "19": {
      "id": "5-3",
      "no": "19",
      "area": "5",
      "name": "墨俣(承久の乱)",
      "star": "5",
      "resource": "砥石・玉鋼",
      "max_lv": "88",
      "sence": ""
    },
    "20": {
      "id": "5-4",
      "no": "20",
      "area": "5",
      "name": "阿津賀志山(厚樫山)",
      "star": "5",
      "resource": "木炭、冷却材",
      "max_lv": "99",
      "sence": ""
    }
  };
  exports.tohken.define.conquest = {
    "1": {
      "id": "A1",
      "no": "1",
      "area": "1",
      "name": "鳥羽・伏見の戦い",
      "desc": "合計レベル5以上の部隊を自由に編成し、戦いに勝利しよう！",
      "time": "0:10:00",
      "lv": 5,
      "need": [],
      "get": {
        "player_exp": "5(10)",
        "sword_exp": "5",
        "bill": null,
        "bonemeal": null,
        "charcoal": "10(15)",
        "steel": "15(22)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "2": {
      "id": "A2",
      "no": "2",
      "area": "1",
      "name": "世直し一揆",
      "desc": "合計レベル10以上の短刀を中心とした部隊を結成し、世直しを鎮静させよう！",
      "time": "0:30:00",
      "lv": "10",
      "need": [7],
      "get": {
        "player_exp": "15(30)",
        "sword_exp": "15",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "30(45)",
        "file": "30(45)",
        "money": null
      }
    },
    "3": {
      "id": "A3",
      "no": "3",
      "area": "1",
      "name": "甲州勝沼の戦い",
      "desc": "合計レベル20以上の脇差を中心とした部隊を結成し、江戸へ向けて進軍しよう！",
      "time": "0:20:00",
      "lv": "20",
      "need": [4],
      "get": {
        "player_exp": "10(20)",
        "sword_exp": "10",
        "bill": null,
        "bonemeal": null,
        "charcoal": "20(30)",
        "steel": null,
        "coolant": "20(30)",
        "file": null,
        "money": null
      }
    },
    "4": {
      "id": "A4",
      "no": "4",
      "area": "1",
      "name": "白河戦線",
      "desc": "合計レベル30以上の短刀、脇差を中心とした部隊を結成し、白河城へ向かえ！",
      "time": "1:00:00",
      "lv": "30",
      "need": [4, 7],
      "get": {
        "player_exp": "30(60)",
        "sword_exp": "30",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "60(90)",
        "coolant": null,
        "file": "60(90)",
        "money": null
      }
    },
    "5": {
      "id": "B1",
      "no": "5",
      "area": "2",
      "name": "公武合体運動",
      "desc": "合計レベル50以上の部隊を自由に編成し、見回りを行おう！",
      "time": "1:30:00",
      "lv": "50",
      "need": [4],
      "get": {
        "player_exp": "50(100)",
        "sword_exp": "50",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "90(135)",
        "file": "90(135)",
        "money": "小判箱(小)"
      }
    },
    "6": {
      "id": "B2",
      "no": "6",
      "area": "2",
      "name": "加役方人足寄場",
      "desc": "合計レベル60以上の打刀を中心とした部隊を結成し、自立支援を行おう！",
      "time": "3:00:00",
      "lv": "60",
      "need": [5],
      "get": {
        "player_exp": "100(200)",
        "sword_exp": "120",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "50(75)",
        "coolant": null,
        "file": "250(375)",
        "money": "小判箱(小)"
      }
    },
    "7": {
      "id": "B3",
      "no": "7",
      "area": "2",
      "name": "享保の大飢饉",
      "desc": "合計レベル80以上の太刀を中心とした部隊を結成し、人々を助けよう！",
      "time": "2:00:00",
      "lv": "80",
      "need": [2],
      "get": {
        "player_exp": "70(140)",
        "sword_exp": "70",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "120(180)",
        "steel": null,
        "coolant": "120(180)",
        "file": null,
        "money": null
      }
    },
    "8": {
      "id": "B4",
      "no": "8",
      "area": "2",
      "name": "天下泰平",
      "desc": "合計レベル100以上の打刀、太刀を中心とした部隊を編制し、見回りを行おう！",
      "time": "2:30:00",
      "lv": "100",
      "need": [2, 5],
      "get": {
        "player_exp": "85(170)",
        "sword_exp": "100",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "180(270)",
        "coolant": null,
        "file": "120(180)",
        "money": null
      }
    },
    "9": {
      "id": "C1",
      "no": "9",
      "area": "3",
      "name": "美濃国の決戦",
      "desc": "合計レベル110以上の部隊を自由に編成し、関ヶ原の戦いに加勢しよう！",
      "time": "4:00:00",
      "lv": "110",
      "need": [],
      "get": {
        "player_exp": "130(260)",
        "sword_exp": "135",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "130(195)",
        "steel": "240(360)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "10": {
      "id": "C2",
      "no": "10",
      "area": "3",
      "name": "反旗を翻した原因",
      "desc": "合計レベル120以上の大太刀を中心とした部隊を編成し、本能寺の調査を行おう！",
      "time": "3:00:00",
      "lv": "120",
      "need": [],
      "get": {
        "player_exp": "100(200)",
        "sword_exp": "110",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "100(150)",
        "coolant": "60(90)",
        "file": "150(225)",
        "money": null
      }
    },
    "11": {
      "id": "C3",
      "no": "11",
      "area": "3",
      "name": "安土城の警備",
      "desc": "合計レベル130以上の部隊を自由に編成し、安土城を警備しよう！",
      "time": "10:00:00",
      "lv": "130",
      "need": [1],
      "get": {
        "player_exp": "300(600)",
        "sword_exp": "260",
        "bill": null,
        "bonemeal": null,
        "charcoal": "200(300)",
        "steel": null,
        "coolant": "500(750)",
        "file": null,
        "money": "小判箱(中)"
      }
    },
    "12": {
      "id": "C4",
      "no": "12",
      "area": "3",
      "name": "天下布武",
      "desc": "合計レベル140以上の部隊を自由に編成し、足利体制の存続を調査しよう！",
      "time": "8:00:00",
      "lv": "140",
      "need": [],
      "get": {
        "player_exp": "250(500)",
        "sword_exp": "220",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "200(300)",
        "coolant": null,
        "file": "500(750)",
        "money": null
      }
    },
    "13": {
      "id": "D1",
      "no": "13",
      "area": "4",
      "name": "長篠城攻城戦",
      "desc": "合計レベル150以上の部隊を自由に編成し、鳥居を援護しよう！",
      "time": "2:00:00",
      "lv": "150",
      "need": [],
      "get": {
        "player_exp": "75(150)",
        "sword_exp": "75",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "80(120)",
        "coolant": "100(150)",
        "file": "60(90)",
        "money": null
      }
    },
    "14": {
      "id": "D2",
      "no": "14",
      "area": "4",
      "name": "西上作戦",
      "desc": "合計レベル180以上の部隊を自由に編成し、遠江国・三河国・美濃国へ向かえ！",
      "time": "5:00:00",
      "lv": "180",
      "need": [],
      "get": {
        "player_exp": "160(320)",
        "sword_exp": "155",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "380(570)",
        "coolant": null,
        "file": null,
        "money": "小判箱(中)"
      }
    },
    "15": {
      "id": "D3",
      "no": "15",
      "area": "4",
      "name": "甲相駿三国同盟",
      "desc": "合計レベル200以上の部隊を自由に結成し、和平協定の手助けをしよう！",
      "time": "12:00:00",
      "lv": "200",
      "need": [],
      "get": {
        "player_exp": "350(700)",
        "sword_exp": "310",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "200(300)",
        "coolant": "500(750)",
        "file": null,
        "money": null
      }
    },
    "16": {
      "id": "D4",
      "no": "16",
      "area": "4",
      "name": "比叡山延暦寺",
      "desc": "合計レベル220以上の部隊を自由に結成し、延暦寺の見回りをしよう！",
      "time": "6:00:00",
      "lv": "220",
      "need": [],
      "get": {
        "player_exp": "200(400)",
        "sword_exp": "170",
        "bill": null,
        "bonemeal": null,
        "charcoal": "150(225)",
        "steel": null,
        "coolant": null,
        "file": "400(600)",
        "money": "小判箱(大)"
      }
    },
    "17": {
      "id": "E1",
      "no": "17",
      "area": "5",
      "name": "鎌倉防衛戦",
      "desc": "合計レベル240以上の部隊を自由に結成し、鎌倉へ向かえ！",
      "time": "12:00:00",
      "lv": "240",
      "need": [],
      "get": {
        "player_exp": "340(680)",
        "sword_exp": "310",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "250(375)",
        "steel": "250(375)",
        "coolant": "250(375)",
        "file": null,
        "money": null
      }
    },
    "18": {
      "id": "E2",
      "no": "18",
      "area": "5",
      "name": "元寇防塁",
      "desc": "合計レベル260以上の槍を中心とした部隊を結成し、防塁の見回りをしろ！",
      "time": "18:00:00",
      "lv": "260",
      "need": [6],
      "get": {
        "player_exp": "530(1060)",
        "sword_exp": "460",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "200(300)",
        "steel": "500(750)",
        "coolant": "300(450)",
        "file": null,
        "money": "小判箱(大)"
      }
    },
    "19": {
      "id": "E3",
      "no": "19",
      "area": "5",
      "name": "流鏑馬揃え",
      "desc": "合計レベル280以上の薙刀を中心とした部隊を編成し、諸国の兵を集めよう！",
      "time": "15:00:00",
      "lv": "280",
      "need": [3],
      "get": {
        "player_exp": "430(860)",
        "sword_exp": "385",
        "bill": null,
        "bonemeal": null,
        "charcoal": "350(525)",
        "steel": "200(300)",
        "coolant": "100(150)",
        "file": "250(375)",
        "money": "小判箱(大)"
      }
    },
    "20": {
      "id": "E4",
      "no": "20",
      "area": "5",
      "name": "奥州合戦",
      "desc": "合計レベル300以上の各刀剣を1本ずつ配置した部隊を出陣させよ！",
      "time": "24:00:00",
      "lv": "300",
      "need": [-1],
      "get": {
        "player_exp": "700(1400)",
        "sword_exp": "610",
        "bill": "3",
        "bonemeal": null,
        "charcoal": "300(450)",
        "steel": "400(600)",
        "coolant": "500(750)",
        "file": null,
        "money": "小判箱(大)"
      }
    }
  };
  //普刀
  exports.tohken.define.upexp = [0, 100, 300, 700, 1300, 2100, 3100, 4300, 5700, 7300, 9100, 11100, 13300, 15700, 18300, 21100, 24100, 27300, 30700, 34300, 38200, 42400, 46900, 51700, 56800, 62200, 67900, 73900, 80200, 86800, 93700, 100900, 108400, 116200, 124300, 132700, 141400, 150400, 159700, 169300, 179300, 189700, 200500, 211700, 223300, 235300, 247700, 260500, 273700, 287300, 301300, 315700, 330500, 345700, 361300, 377300, 393700, 410500, 427700, 445300, 463400, 482000, 501100, 520700, 540800, 561400, 582500, 604100, 626200, 648800, 672000, 695800, 720200, 745200, 770800, 797000, 823800, 851200, 879200, 907800, 937200, 967400, 998400, 1030200, 1062800, 1096200, 1130400, 1165400, 1201200, 1237800, 1277800, 1327800, 1387800, 1457800, 1537800, 1627800, 1727800, 1827800, 1927800, 0];
  //极短
  exports.tohken.define.upexp2 = [0,588,1305,2194,3296,4653,6307,8300,10673,13468,16727,20491,24802,29702,35233,41436,48354,56027,64498,73808,84000,95114,107193,120278,134411,149634,165989,183517,202260,222260,307195,454335,660950,924310,1241685,1610345,2027560,2490600,2996735,3543235,4127370,4746410,5397625,6078285,6785660,7517020,8269635,9040775,9827710,10627710,11429400,12233306,13039953,13849865,14663567,15481584,16304441,17132662,17966772,18807296,19654759,20509686,21372601,22244029,23124495,24014524,24914640,25825368,26747233,27680760,28626474,29584899,30556560,31541982,32541690,33556208,34586062,35631776,36693875,37772883,38869326,39983728,41116614,42268509,43439937,44631423,45843492,47076669,48331479,49608446,50908096,52230953,53577541,54948386,56344012,57764944,59211707,60684826,62184826,0];
  //极胁
  exports.tohken.define.upexp3 = [0,588,1305,2194,3296,4653,6307,8300,10673,13468,16727,20491,24802,29702,35233,41436,48354,56027,64498,73808,84000,95114,107193,120278,134411,149634,165989,183517,202260,222260,307195,454335,660950,924310,1241685,1771379,2230316,2739660,3296408,3897558,4540107,5221051,5937387,6686113,7464226,8268722,9096598,9944852,10810481,11690481,12572340,13456636,14343948,15234851,16129923,17029742,17934885,18845928,19763449,20688025,21620235,22560654,23509861,24468432,25436944,26415976,27406104,28407904,29421956,30448836,31489121,32543389,33612216,34696180,35795859,36911829,38044668,39194953,40363262,41550171,42756258,43982101,45228275,46495360,47783930,49094565,50427841,51784336,53164627,54569290,55998905,57454048,58935295,60443224,61978413,63541438,65132878,66753308,68403309,0];
  //极打
  exports.tohken.define.upexp4 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1932413, 2433071, 2988719, 3596081, 4251881, 4952843, 5695691, 6477149, 7293941, 8142791, 9020423, 9923561, 10848929, 11793251, 12753251, 13715279, 14679967, 15647943, 16619837, 17596280, 18577900, 19565329, 20559194, 21560126, 22568755, 23585710, 24611623, 25647121, 26692834, 27749393, 28817428, 29897567, 30990441, 32096679, 33216911, 34351768, 35501878, 36667871, 37850378, 39050027, 40267449, 41503274, 42758131, 44032649, 45327459, 46643191, 47980473, 49339936, 50722210, 52127924, 53557707, 55012190, 56492002, 57997774, 59530135, 61089715, 62677143, 64293049, 65938063, 67612814, 69317932, 71054048, 72821791, 74621791];
  //疑似极太
  exports.tohken.define.upexp5 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1635366, 2309392, 3057451, 3875131, 4758022, 5701714, 6701797, 7753859, 8853491, 9996282, 11177821, 12393699, 13639505, 14910828, 16203258, 17498419, 18797159, 20100328, 21408771, 22723337, 24044875, 25374231, 26712253, 28059789, 29417688, 30786796, 32167963, 33562035, 34969859, 36392285, 37830161, 39284332, 40755647, 42244955, 43753103, 45280940, 46829311, 48399066, 49991053, 51606119, 53245111, 54908879, 56598269, 58314130, 60057308, 61828653, 63629011, 65459231, 67320161, 69212647, 71137538, 73095681, 75087925, 77115118, 79178106, 81277739, 83414865, 85590328, 87804980, 90059666, 92355236, 94692536, 97072415, 99495722];
  //疑似极大太
  exports.tohken.define.upexp6 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1643706, 2403336, 3246401, 4167930, 5162951, 6226496, 7353592, 8539270, 9778560, 11066489, 12398089, 13768388, 15172415, 16605201, 18061775, 19521425, 20985110, 22453786, 23928407, 25409928, 26899305, 28397495, 29905451, 31424129, 32954485, 34497475, 36054055, 37625179, 39211803, 40814882, 42435373, 44074229, 45732407, 47410862, 49110551, 50832428, 52577449, 54346568, 56140743, 57960928, 59808078, 61683151, 63587100, 65520881, 67485450, 69481762, 71510772, 73573437, 75670712, 77803550, 79972909, 82179744, 84425010, 86709664, 89034659, 91400954, 93809502, 96261257, 98757178, 101298218, 103885333, 106519479, 109201611, 111932687];
  //疑似极枪
  exports.tohken.define.upexp7 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1635366, 2309392, 3057451, 3875131, 4758022, 5701714, 6701797, 7753859, 8853491, 9996282, 11177821, 12393699, 13639505, 14910828, 16203258, 17498419, 18797159, 20100328, 21408771, 22723337, 24044875, 25374231, 26712253, 28059789, 29417688, 30786796, 32167963, 33562035, 34969859, 36392285, 37830161, 39284332, 40755647, 42244955, 43753103, 45280940, 46829311, 48399066, 49991053, 51606119, 53245111, 54908879, 56598269, 58314130, 60057308, 61828653, 63629011, 65459231, 67320161, 69212647, 71137538, 73095681, 75087925, 77115118, 79178106, 81277739, 83414865, 85590328, 87804980, 90059666, 92355236, 94692536, 97072415, 99495722];
  //疑似极薙
  exports.tohken.define.upexp8 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 1631195, 2262420, 2962975, 3728731, 4555557, 5439323, 6375899, 7361153, 8390956, 9461178, 10567688, 11706355, 12873050, 14063642, 15274000, 16486915, 17703184, 18923599, 20148953, 21380042, 22617659, 23862599, 25115655, 26377620, 27649289, 28931456, 30224917, 31530462, 32848887, 34180987, 35527554, 36889383, 38267267, 39662001, 41074379, 42505195, 43955242, 45425315, 46916207, 48428714, 49963627, 51521742, 53103853, 54710754, 56343237, 58002098, 59688130, 61402128, 63144885, 64917195, 66719852, 68553649, 70419382, 72317844, 74249829, 76216132, 78217546, 80254863, 82328881, 84440390, 86590187, 88779064, 91007816, 93277239];
  //极打（太改打
  exports.tohken.define.upexp9 = [0, 588, 1305, 2194, 3296, 4653, 6307, 8300, 10673, 13468, 16727, 20491, 24802, 29702, 35233, 41436, 48354, 56027, 64498, 73808, 84000, 95114, 107193, 120278, 134411, 149634, 165989, 183517, 202260, 222260, 307195, 454335, 660950, 924310, 1241685, 2093448, 2635828, 3237780, 3895755, 4606205, 5365581, 6170333, 7016912, 7901770, 8821358, 9772126, 10750525, 11753007, 12776023, 13816023, 14858220, 15903297, 16951938, 18004824, 19062637, 20126059, 21195773, 22272460, 23356803, 24449484, 25551186, 26662591, 27784381, 28917237, 30061843, 31218881, 32389032, 33572978, 34771402, 35984988, 37214416, 38460368, 39723528, 41004576, 42304197, 43623070, 44961880, 46321308, 47702037, 49104748, 50530123, 51978846, 53451598, 54949061, 56471918, 58020850, 59596539, 61199669, 62830922, 64490979, 66180524, 67900239, 69650803, 71432901, 73247215, 75094427, 76975219, 78890273, 80840274];
})(window);

