
chrome.alarms.create("test0", {
	// 1分未満のアラームの実行は保障されない
	delayInMinutes: 0
});
chrome.alarms.create("test1", {
	delayInMinutes: 1
});
chrome.alarms.create("test2", {
	// 小数指定可
	delayInMinutes: 1.2
});

chrome.alarms.onAlarm.addListener(alarm => {
	const name = alarm.name;
	const scheduledTime = new Date(alarm.scheduledTime).toLocaleString();
	console.log({
		name,
		scheduledTime,
		originalAlerm: alarm
	});
});

console.log("拡張起動");
