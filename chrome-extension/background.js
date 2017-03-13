
chrome.alarms.create("test0", {
	// 1分未満のアラームの実行は保障されない
	delayInMinutes: 0
});
chrome.alarms.create("test1", {
	delayInMinutes: 1,
	periodInMinutes: 1
});
chrome.alarms.create("test2", {
	// 小数指定可
	delayInMinutes: 1.2
	// 繰り返し間隔（小数可）
	periodInMinutes: 1.5
});

chrome.alarms.onAlarm.addListener(alarm => {
	const name = alarm.name;
	// scheduledTime: 繰り返しの場合でも初回設定時刻ではなく毎回更新される
	const scheduledTime = new Date(alarm.scheduledTime).toLocaleString();
	const periodInMinutes = alarm.periodInMinutes;
	console.log({
		name,
		scheduledTime,
		periodInMinutes,
		originalAlerm: alarm
	});
});

console.log("拡張起動");
