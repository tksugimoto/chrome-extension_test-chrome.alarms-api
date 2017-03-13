console.info("chrome.alarms.clearAll()");
chrome.alarms.clearAll();

chrome.alarms.create("test0", {
	// 過去指定の場合、実行は保証されない（実行されることもある）
	when: Date.now() - 100
});
chrome.alarms.create("test1", {
	// 現在時刻指定の場合、設定直後の実行は保証されない（実行されることもある）
	// 設定直後に実行されなくても繰り返しは実行される
	when: Date.now(),
	periodInMinutes: 1.5
});
chrome.alarms.create("test2", {
	when: Date.now() + 1 * 1000
});
chrome.alarms.create("test3", {
	when: Date.now() + 10 * 1000
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

const showAlarms = () => {
	chrome.alarms.getAll(alarms => {
		const formattedAlarms = alarms.map(alarm => {
			const name = alarm.name;
			// scheduledTime: 繰り返しの場合でも初回設定時刻ではなく毎回更新される
			const scheduledTime = new Date(alarm.scheduledTime).toLocaleString();
			const periodInMinutes = alarm.periodInMinutes;
			return {name, scheduledTime, periodInMinutes};
		});
		console.table(formattedAlarms);
	});
};

console.info("showAlarms();")
showAlarms();
