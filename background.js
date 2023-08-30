browser.browserAction.onClicked.addListener(async () => { //manifest v2
//browser.action.onClicked.addListener(async () => { //manifest v3
    let tabs = await browser.tabs.query({ currentWindow: true });
    tabs.sort((a, b) => new Date(b.lastAccessed) - new Date(a.lastAccessed));
    browser.tabs.update(tabs[1].id, {active: true});
});
