var dataKeys = ["Old Testament", "New Testament", "Psalm", "Proverbs"];
var data = null;

function readingPlanDataForDay(day) {
    var planData = Papa.parse(biblePlanCSV, { header: true });
    return planData.data[daysFromPlanStartTo(day)];
}

function setupReadingPlanWithData(data, isAuthorized) {
    $("#old_testament_button").html(data[dataKeys[0]]);
    $("#new_testament_button").html(data[dataKeys[1]]);
    $("#psalm_button").html(data[dataKeys[2]]);
    $("#proverbs_button").html(data[dataKeys[3]]);
    if (isAuthorized) {
        $("#old_testament_iframe")[0].src = esvBibleLinkFromReference(data[dataKeys[0]]);
        setTimeout(function() {
            if (!$("#new_testament_iframe")[0].src) {
                $("#new_testament_iframe")[0].src = esvBibleLinkFromReference(data[dataKeys[1]]);
            }
        }, 15000);
        setTimeout(function() {
            if (!$("#psalm_iframe")[0].src) {
                $("#psalm_iframe")[0].src = esvBibleLinkFromReference(data[dataKeys[2]]);
            }
        }, 30000);
        setTimeout(function() {
            if (!$("#proverbs_iframe")[0].src) {
                $("#proverbs_iframe")[0].src = esvBibleLinkFromReference(data[dataKeys[3]]);
            }
        }, 45000);
    }
}

function daysFromPlanStartTo(day) {
    var startingDay = moment([2017, 0, 1]);
    return Math.floor(day.diff(startingDay, 'day'));
}

function dayAdjustedForLateBedtime(day) {
    return day.clone().subtract(extraTimeToAccountForLateBedtimes(), 'hours');
}

function dayFormatted(day) {
    return day.format('MMMM D, YYYY');
}

function isAuthorized() {
    return getParameterByName("authorized") === "true";
}

function isAfterMidnightButBeforeBedtime(day) {
    return day.hour() < extraTimeToAccountForLateBedtimes();
}

function extraTimeToAccountForLateBedtimes() {
    var queryBedtime = getParameterByName("bedtime");
    if (queryBedtime) {
        return parseInt(queryBedtime);
    }
    return 4;
}

function openESVBibleTabForReference(reference) {
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

function hideInfoDetails() {
    $("#info_details").removeClass("info_details_showing");
    $(document).off("click");
}

function showInfoDetails(event) {
    $("#info_details").addClass("info_details_showing");
    event.stopPropagation();
    $(document).on("click", function(e) {
        var infoDetailsElement = $("#info_details")[0];
        if (e.target != infoDetailsElement &&
            !$.contains(infoDetailsElement, e.target)) {
            hideInfoDetails();
        }
    });
}

function showESVIframe(button, firstButtonClicked, data) {
    $("#date").addClass("show_top_bar");
    $("#reading_buttons").addClass("show_top_bar");
    $("#top_bar").addClass("show_top_bar");
    $("#date_has_been_adjusted_explanation").hide();
    $(".previous_day").remove();
    $(".next_day").remove();
    var buttonIndex = $(".reading_button").index(button);
    var associatedIframe = $(".esv_bible_iframe").get(buttonIndex);
    if (!associatedIframe.src) {
        associatedIframe.src = esvBibleLinkFromReference(data[dataKeys[buttonIndex]]);
    }
    if (!firstButtonClicked) {
        $(".reading_button").addClass("no_animation");
    }
    $(".esv_bible_iframe").removeClass("iframe_showing");
    $(".reading_button").removeClass("active active_first");
    setTimeout(function() {
        $(".reading_button").removeClass("no_animation");
    }, 500);
    if (firstButtonClicked) {
        button.addClass("active_first");
    } else {
        button.addClass("active");
    }
    setTimeout(function() {
        $($(".esv_bible_iframe").get($(".reading_button").index(button))).addClass("iframe_showing");
    }, firstButtonClicked ? 500 : 0);
}

function esvBibleLinkFromReference(reference) {
    return "http://www.esvbible.org/" + encodeURIComponent(reference);
}

function setupDateDisplay(adjustedDay, actualDay) {
    $("#date span").remove();
    $("#date button:nth-child(1)").after("<span>" + dayFormatted(adjustedDay) + "</span>");
}

function updateAllWithDay(day) {
    var adjustedDay = dayAdjustedForLateBedtime(day);
    data = readingPlanDataForDay(adjustedDay);
    setupReadingPlanWithData(data, isAuthorized);
    setupDateDisplay(adjustedDay, day);
    daysFromPlanStartTo(adjustedDay) > 0 ? $(".previous_day").show() : $(".previous_day").hide();
    daysFromPlanStartTo(adjustedDay) < 729 ? $(".next_day").show() : $(".next_day").hide();
}

$(function() {
    var actualDay = moment();
    updateAllWithDay(actualDay);
    $(".previous_day").click(function() {
        $("#date_has_been_adjusted_explanation").hide();
        actualDay = actualDay.clone().subtract(1, "day");
        updateAllWithDay(actualDay);
    });
    $(".next_day").click(function() {
        $("#date_has_been_adjusted_explanation").hide();
        actualDay = actualDay.clone().add(1, "day");
        updateAllWithDay(actualDay);
    });

    if (isAfterMidnightButBeforeBedtime(actualDay)) {
        $("#date span").append("*");
        $("#date_has_been_adjusted_explanation").show();
    }

    $("#info_button").click(function(event) {
        if ($("#info_details").hasClass("info_details_showing")) {
            hideInfoDetails(event);
        } else {
            showInfoDetails(event);
        }
    });

    var firstButtonClicked = true;
    $(".reading_button").click(function() {
        if (isAuthorized()) {
            showESVIframe($(this), firstButtonClicked, data);
            firstButtonClicked = false;
        } else {
            window.open(esvBibleLinkFromReference($(this).text()), "_blank");
        }
    });
});
