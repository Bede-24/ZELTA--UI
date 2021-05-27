/**
 * convert seconds to minutes
 */

// import { HourglassFilled } from '@ant-design/icons';

function convertSecondsToMins(seconds: number) {
    const oneMinute = 60;
    return seconds / oneMinute;
}

/**
 * convert seconds to hours
 */

function convertSecondsToHours(seconds: number) {
    const oneHour = 60 * 60;
    return seconds / oneHour;
}

/**
 * convert seconds to days
 */
function convertSecondsToDays(seconds: number) {
    const oneDay = 60 * 60 * 24;
    return seconds / oneDay;
}

/**
 * convert seconds to weeks
 */

function convertSecondsToWeeks(seconds: number) {
    const oneWeek = 60 * 60 * 24 * 7;
    return seconds / oneWeek;
}

/**
 * convert minutes to sec
 */

function convertMinutesToSeconds(minutes: number) {
    const oneSecond = 60; //1min equivallent in secs
    return minutes * oneSecond;
}

/**
 * convert hours to minutes
 */
function convertHoursToMinutes(hours: number) {
    const minutes = 60; //1hour equivallent in mins
    return hours * minutes;
}

/**
 * convert days to hours
 */
function convertDaysoHours(days: number) {
    const hours = 24; //1day equivallent in hours
    return days * hours;
}

/**
 * converts weeks to days
 */
function convertWeeksToDays(weeks: number) {
    const days = 7; //1 week equivalent in days
    return weeks * days;
}

export {
    convertSecondsToHours,
    convertSecondsToDays,
    convertSecondsToWeeks,
    convertSecondsToMins,
    convertMinutesToSeconds,
    convertHoursToMinutes,
    convertDaysoHours,
    convertWeeksToDays,
};
