var enabled = true;
var list = "||sdasasyydd.com^$third-party\n||sdfsdvc.com^$third-party\n||seaofads.com^$third-party\n||search123.uk.com^$third-party";
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("blocking:", details.url);
		return {cancel: enabled};
	},
	//should change to pass filter() some other list
	//possibly some section of the fanboy list, instead of blocked_domains
	{urls: create_master_list(filter(list), filter(list), filter(list), filter(list))},
    ["blocking"]
);