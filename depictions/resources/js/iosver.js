function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}
ver = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p>Your device is supported.</p>';
}
if (ver[0] >= 11) {
	document.getElementById('version').innerHTML='<p>Custom Message for iOS 11</p>';
}
else {
	document.getElementById('version').innerHTML='<p>Your device is not supported.</p>';
}
