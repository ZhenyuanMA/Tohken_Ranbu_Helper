var alarmIt, alarms, notify;

notify = function(title, msg, cm) {
  var opt;
  opt = {
    type: "basic",
    title: title,
    message: msg,
    iconUrl: "assets/icon.png",
    contextMessage: cm
  };
  return chrome.notifications.create("trhn-" + (Date.now()), opt, function(notificationId) {
    return '';
  });
};

alarms = {};

alarmIt = function(id, finished_at, startmsg) {
  console.log("alarmIt", id);
  return chrome.alarms.get(id, function(alarm) {
    if (!alarm) {
      if (finished_at < Date.now()) {
        return;
      }
      chrome.alarms.create(id, {
        when: finished_at
      });
      return notify(startmsg['title'], startmsg['message'], startmsg['context']);
    }
  });
};

chrome.alarms.onAlarm.addListener(function(alarm) {
  var id, msg;
  console.log("onAlarm", alarm);
  id = alarm.name;
  if (typeof alarms[id] !== "undefined") {
    msg = alarms[id];
    return notify(msg['title'], msg['message'], msg['context']);
  }
});

chrome.runtime.onMessage.addListener(function(message) {
  var msg;
  console.log("onMessage", message);
  if (!message.type) {
    return;
  }
  switch (message.type) {
    case 'alarm':
      alarms[message['id']] = message['message'];
      return alarmIt(message['id'], message['time'], message['startmsg']);
    case 'notify':
      msg = message['message'];
      return notify(msg.title, msg.message, msg.context);
  }
});
