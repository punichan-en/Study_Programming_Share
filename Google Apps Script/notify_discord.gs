function NotifyDiscord(message) {
  const WEBHOOK_URL = "xxxxxx";

  const payload = {
    username: "あいさつくん",
    content:message
  };

  UrlFetchApp.fetch(WEBHOOK_URL,{
    method: "post",
    contentType:"application/json",
    payload:JSON.stringify(payload)
  });
}