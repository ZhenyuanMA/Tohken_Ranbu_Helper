$(document).ready(function() {
  return $('#loadwindow').on('click', function() {
    var popup;
    popup = {
      url: chrome.extension.getURL("./Popup/container.html"),
      left: 0,
      top: 0,
      width: 960,
      height: 580 + 20,
      focused: true,
      type: "popup"
    };
    return chrome.windows.create(popup);
  });
});
