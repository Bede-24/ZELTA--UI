// formats numbers as currency using javascrips toLocaleString function on a string value
function commas(x: any) {
    if (x) {
        return parseFloat(String(x)).toLocaleString('en', { maximumFractionDigits: 4, minimumFractionDigits: 4 });
    } else return '0.0000';
}

export default commas;

//parseFloat(String(x)).toLocaleString('en', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
