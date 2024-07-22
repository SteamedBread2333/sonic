document.addEventListener("DOMContentLoaded", function () {
  function addClickListener(classNames, event, handler) {
    var ele = document.querySelector(classNames);
    if (ele) {
      ele.addEventListener(event, async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: handler
          });
        }
      });
    }
  }

  addClickListener('.ended-btn', 'click', () => {
    applyfastEnded()
  })

  addClickListener('.call-btn', 'click', () => {
    applyCallSonic()
  })
});