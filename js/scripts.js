function openESVBibleTabsForToday(date) {
    var planData = Papa.parse(biblePlanCSV, { header: true });
    var dayData = planData.data[daysFromPlanStartTo(date)];
    $("#old_testament_button").html(dayData["Old Testament"]);
    $("#new_testament_button").html(dayData["New Testament"]);
    $("#psalm_button").html(dayData["Psalm"]);
    $("#proverbs_button").html(dayData["Proverbs"]);
}

function daysFromPlanStartTo(date) {
    var startingDay = moment([2017, 0, 1]);
    return Math.floor(startingDay.diff(currentDayAdjustedForLateBedtime(), 'day'));
}

function currentDayAdjustedForLateBedtime() {
    return moment().subtract(extraTimeToAccountForLateBedtimes(), 'hours');
}

function currentDayFormatted() {
    return moment().format('MMMM D, YYYY');
}

function isAfterMidnightButBeforeBedtime() {
    return moment().hour() < extraTimeToAccountForLateBedtimes();
}

function extraTimeToAccountForLateBedtimes() {
    var queryBedtime = getParameterByName("bedtime");
    return parseInt(queryBedtime) || 4;
}

function openESVBibleTabForReference(reference) {
    var encodedUrl = "http://www.esvbible.org/" + encodeURIComponent(reference);
    var iframe = document.createElement('iframe');
    iframe.src = encodedUrl;
    document.body.appendChild(iframe);
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function() {
    openESVBibleTabsForToday();
    $("#date").html(currentDayFormatted());
    if (isAfterMidnightButBeforeBedtime()) {
        $("#date").append("*");
        $("#date_has_been_adjusted_explanation").show();
    }
});
