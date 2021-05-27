import moment from 'moment';
/**
 * convert weeks to seconds
 */

function convertWeeksToSeconds(weeks: number) {
    return 604800 * weeks;
}

function convertSecondsToDays(seconds: number) {
    return seconds / 60 / 60 / 24;
}

function paymentIntervalConverter(valueInSeconds: number) {
    valueInSeconds = valueInSeconds * 1000; // milliseconds
    if (valueInSeconds < 60 * 60 * 1000) {
        const mins = moment.duration(valueInSeconds).minutes();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const intMins = mins.toFixed(2);
        return mins === 1 ? mins + ' min' : mins + ' mins';
    }

    if (valueInSeconds < 86400 * 1000) {
        // 86400 - 1 day
        const hours = moment.duration(valueInSeconds).hours();
        return hours === 1 ? hours + ' hour' : hours + ' hours';
    }

    if (valueInSeconds < 604800 * 1000) {
        const days = moment.duration(valueInSeconds).days();
        return days === 1 ? days + ' day' : days + ' days';
    } else {
        const weeks = moment.duration(valueInSeconds).weeks();
        return weeks === 1 ? weeks + ' week' : weeks + ' weeks';
    }
}

export { convertWeeksToSeconds, convertSecondsToDays, paymentIntervalConverter };
