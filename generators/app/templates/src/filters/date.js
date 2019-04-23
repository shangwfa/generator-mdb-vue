import { format } from "date-fns";
/**
 *功能：距离当前时间
 * @param {*} timestamp  时间戳
 */
export function timeToNow(timestamp) {
  let result = "";
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;

  let now = new Date().getTime();
  let diffValue = now - timestamp;

  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;

  if (monthC >= 1) {
    result = parseInt(monthC) + "个月前";
  } else if (weekC >= 1) {
    result = parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = parseInt(hourC) + "个小时前";
  } else if (minC >= 1) {
    result = parseInt(minC) + "分钟前";
  } else {
    result = "刚刚";
  }
  return result;
}
/**
 * 功能格式化日期
 * 使用参考https://date-fns.org/
 */
export function dateFormat(value, fm) {
  return format(value, fm);
}
