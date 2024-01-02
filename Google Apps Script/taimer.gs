function timer() {
  const today = new Date();
  const Now = Utilities.formatDate(today,"JST","yyyy/MM/dd HH:mm:ss");
  const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
  const remainingTime = (endTime - today) / 60 /60 / 1000;
  const timer = `現在時刻は${Now} です。\n本日の残り時間は${remainingTime.toFixed(1)}hです。`;
  NotifyDiscord(timer) 
}
