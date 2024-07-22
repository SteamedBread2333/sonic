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

  addClickListener && addClickListener('.ended-btn', 'click', () => {
    applyfastEnded()
  })
  addClickListener && addClickListener('.call-btn', 'click', () => {
    applyCallSonic()
  })
  // var eb = document.querySelector(".ended-btn");
  // if (eb) {
  //   eb.addEventListener('click', async () => {
  //     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //     if (tab) {
  //       chrome.scripting.executeScript({
  //         target: { tabId: tab.id },
  //         func: () => {
  //           applyfastEnded();
  //         }
  //       });
  //     }
  //   });

  //   var cb = document.querySelector(".call-btn");
  //   if (cb) {
  //     cb.addEventListener('click', async () => {
  //       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //       if (tab) {
  //         chrome.scripting.executeScript({
  //           target: { tabId: tab.id },
  //           func: () => {
  //             applyCallSonic();
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
});