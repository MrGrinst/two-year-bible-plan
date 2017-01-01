function openESVBibleTabsForDate(date) {
    var dayData = data[daysFromPlanStartTo(date)];
    for (var key in dayData) {
        if (key !== "Date") {
            var references = dayData[key].split(",");
            for (var referenceIndex in references) {
                openESVBibleTabForReference(references[referenceIndex].trim());
            }
        }
    }
}

function daysFromPlanStartTo(date) {
    var oneDay = 24 * 60 * 60 * 1000;
    var dateAdjustedForLateBedtime = new Date(date.getTime() - 4 * 60 * 60 * 1000);
    var startingDay = new Date(2017, 0, 1);
    return Math.floor(Math.abs((startingDay.getTime() - dateAdjustedForLateBedtime.getTime())/(oneDay)));
}

function openESVBibleTabForReference(reference) {
    var encodedUrl = "http://www.esvbible.org/" + encodeURIComponent(reference);
    var iframe = document.createElement('iframe');
    iframe.src = encodedUrl;
    document.body.appendChild(iframe);
}

var currentDay = new Date();
openESVBibleTabsForDate(currentDay);
