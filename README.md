# これはなに？
chrome.alarms APIの挙動テスト

# 公式ドキュメント
* [chrome.alarms - Google Chrome](https://developer.chrome.com/extensions/alarms "https://developer.chrome.com/extensions/alarms")

# 確認項目
* [ ] アラームの設定方法
* [ ] Chromeが閉じられている間のアラームはどうなるか
* [x] PCが休止状態のアラームはどうなるか？
	* Chromeは起動しておく
	* 結果
		* PC起動→ログイン後：Chrome拡張の準備ができたと思われるタイミングでalarm発火
		* 繰り返しも継続
* [ ] PC休止から復帰させてロックしたままだとどうか？
