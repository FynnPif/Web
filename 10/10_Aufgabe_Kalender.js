var calenderConfig = {
    monthName: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",],
    monthLength: [30, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30],
    weekDays: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
}

var globalVariables = {
    currentMonth: 0,
    currentDay: 0,
    daysOffsetPerMonth: 4,
    maxDaysPerMonth: 35,
}

function printCalender(){
    for (x = 0; x < 12; x++){
        document.write(calenderConfig.monthName[globalVariables.currentMonth] + "<br>")
        globalVariables.currentMonth++;
        for(z = 0; z < 7; z++){
            document.write(" | " + calenderConfig.weekDays[z])
            if (z == 6){
                document.write(" | " + "<br>")
            }
        }
    }
}


printCalender();

