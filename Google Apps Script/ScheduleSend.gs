function ScheduleSend() {

  const today = new Date();
  const calendar = CalendarApp.getCalendarById('xxxxxx')
  const events = calendar.getEventsForDay(today);

  let schedule = "**📅 今日の予定 📅**" + "\n " ; 
  events.forEach(function (event) {
  schedule += Utilities.formatDate(event.getStartTime(), "JST", "HH:mm") + "~" + Utilities.formatDate(event.getEndTime(), "JST", "HH:mm") + " " + event.getTitle() + "\n " ;
});
NotifyDiscord(schedule)
}