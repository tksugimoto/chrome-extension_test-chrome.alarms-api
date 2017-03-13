console.info("chrome.alarms.clearAll()");
chrome.alarms.clearAll();

chrome.alarms.create("each-hour:34:56", {
	// 毎時34分56秒
	// 過去を指定しても繰り返し間隔を考慮して適切なタイミングを自動計算してくれる
	when: new Date("2017/01/01 12:34:56").getTime(),
	periodInMinutes: 60
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
