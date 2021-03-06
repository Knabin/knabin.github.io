/*
 * Calculate the Timeago
 */

$(function() {

  const timeagoElem = $(".timeago");

  let toRefresh = timeagoElem.length;

  let intervalId = void 0;

  function timeago(iso, isLastmod) {
    let now = new Date();
    let past = new Date(iso);
console("timeago function");
    if (past.getFullYear() !== now.getFullYear()) {
      toRefresh -= 1;
      return past.toLocaleString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      });
    }

    if (past.getMonth() !== now.getMonth()) {
      toRefresh -= 1;
      return past.toLocaleString("ko-KR", {
        month: "numeric",
        day: "numeric"
      });
    }

    let seconds = Math.floor((now - past) / 1000);

    let day = Math.floor(seconds / 86400);
    if (day >= 1) {
      toRefresh -= 1;
      return day + "일" + " 전";
    }

    let hour = Math.floor(seconds / 3600);
    if (hour >= 1) {
      return hour + "시간" + " 전";
    }

    let minute = Math.floor(seconds / 60);
    if (minute >= 1) {
      return minute + "분" + " 전";
    }

    return (isLastmod ? "방금" : "방금") + " 전";
  }

  function updateTimeago() {
    $(".timeago").each(function() {
      if ($(this).children("i").length > 0) {
        $(this).text();
        let isLastmod = $(this).hasClass("lastmod");
        let node = $(this).children("i");
        let date = node.text(); /* ISO Date: "YYYY-MM-DDTHH:MM:SSZ" */
        $(this).text(timeago(date, isLastmod));
        $(this).append(node);
      }
    });

    if (toRefresh === 0 && typeof intervalId !== "undefined") {
      clearInterval(intervalId); /* stop interval */
    }
    return toRefresh;
  }

  if (toRefresh === 0) {
    return;
  }

  if (updateTimeago() > 0) { /* run immediately */
    intervalId = setInterval(updateTimeago, 60000); /* run every minute */
  }

});
