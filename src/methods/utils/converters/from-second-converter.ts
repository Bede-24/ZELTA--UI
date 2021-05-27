// import { ToolFilled } from '@ant-design/icons';
import {
    convertSecondsToHours,
    convertSecondsToDays,
    convertSecondsToWeeks,
    convertSecondsToMins,
    convertMinutesToSeconds,
    convertHoursToMinutes,
    convertDaysoHours,
    convertWeeksToDays,
} from './seconds-converter';

//this is the function that converts cycleDuration passed in seconds to its respective time equivalent
function secondsConverterFunc(props: any) {
    const duration = Number(props);
    let res;

    if (duration >= 60 && duration < 3600) {
        let mins = convertSecondsToMins(props);
        let secs = convertMinutesToSeconds(mins % 1);
        secs = Math.round(secs);

        if (isDecimal(mins)) {
            mins = Math.floor(mins);
            res = Number(mins) === 1 ? mins + ' min ' + secs + ' sec(s)' : mins + ' min(s) ' + secs + ' sec(s)';
        } else {
            res = Number(mins) === 1 ? mins + ' min' : mins + ' min(s)';
        }
    } else if (duration >= 3600 && duration < 86400) {
        let hours = convertSecondsToHours(props);
        let mins = convertHoursToMinutes(hours % 1);
        mins = Math.round(mins);

        if (isDecimal(hours)) {
            hours = Math.floor(hours);
            res = Number(hours) === 1 ? hours + ' hour ' + mins + ' min(s) ' : hours + ' hour(s) ' + mins + ' min(s) ';
        } else {
            res = Number(hours) === 1 ? hours + ' hour' : hours + ' hour(s)';
        }
    } else if (duration >= 86400 && duration < 604800) {
        let days = convertSecondsToDays(props);
        let hours = convertDaysoHours(days % 1);
        hours = Math.round(hours);

        if (isDecimal(days)) {
            days = Math.floor(days);
            res = Number(days) === 1 ? days + ' day ' + hours + ' hour(s)' : days + ' day(s) ' + hours + ' hour(s)';
        } else {
            res = Number(days) === 1 ? days + ' day' : days + ' day(s)';
        }
    } else if (duration >= 604800) {
        let weeks = convertSecondsToWeeks(props);
        let days = convertWeeksToDays(weeks % 1);
        days = Math.round(days);

        if (isDecimal(weeks)) {
            weeks = Math.floor(weeks);
            res = Number(weeks) === 1 ? weeks + ' week ' + days + ' day(s)' : weeks + ' week(s) ' + days + ' day(s)';
        } else {
            res = Number(weeks) === 1 ? weeks + ' week' : weeks + ' week(s)';
        }
    }

    return res;
}

function isDecimal(num: number) {
    let e = 1;
    while (Math.round(num * e) / e !== num) e *= 10;
    const result = Math.log(e) / Math.LN10;
    if (result > 0) {
        return true;
    } else {
        return false;
    }
}

export { secondsConverterFunc };
