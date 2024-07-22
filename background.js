// 这个示例中服务工作线程可能不需要做太多事情
chrome.runtime.onInstalled.addListener(() => {
  console.log('Sonic Ready!');
});