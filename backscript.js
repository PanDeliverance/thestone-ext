let aler = () => {
	alert("Notice this!");
};

browser.browserAction.onClicked.addListener(aler);