browser.runtime.onMessage.addListener((_request, _sender, _sendResponse) => {
  console.log("Hello from the background");

  browser.tabs.executeScript({
    file: "js/content-script.js"
  });
});
