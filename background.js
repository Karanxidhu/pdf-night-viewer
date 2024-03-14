chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.endsWith(".pdf")) {
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
      });
    }
  });
  