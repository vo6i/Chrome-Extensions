chrome.action.onClicked.addListener(async function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const oldIframe = document.getElementById('cm-frame');

      if (oldIframe) {
        oldIframe.remove();
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.setAttribute('id', 'cm-frame');
      iframe.setAttribute(
        'style',
        'top: 10px;right: 10px;width: 400px;height: calc(100% - 20px);z-index: 2147483650;border: none; position:fixed;'
      );
      iframe.setAttribute('allow', '');
      iframe.src = chrome.runtime.getURL('popup.html');

      document.body.appendChild(iframe);
    },
  });
});
