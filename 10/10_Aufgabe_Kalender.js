var calenderConfig = {
    monthName: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",],
    monthLength: [30, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30],
    weekDays: ["MO", "DI", "MI", "DO", "FR", "SA", "SO "],
}

var globalVariables = {
    currentMonth: 0,
    currentDay: 1,
    //daysOffsetPerMonth: 4,
    maxDaysPerMonth: 35,
}

function printCalender(){
    for (x = 0; x < 12; x++){
        document.write(calenderConfig.monthName[globalVariables.currentMonth] + "<br>")
        globalVariables.currentMonth++;
        for(y2 = 0; y2 < 13; y2++){
            for(y1 = 0; y1 < calenderConfig.monthLength[x]; y1++){
                globalVariables.currentDay++
            }     
        }
        
        for(z = 0; z < 7; z++){
            document.write(" | " + calenderConfig.weekDays[z])
            
            if (z == 6){
                document.write(" | " + "<br>")
            }
        }
        for(v=0; v < 6; v++){    
            for(y=0; y < 8; y++){
                    document.write(" | " + globalVariables.currentDay[y1])
                }
            document.write("<br>")
        }    
    }
}
function printMonths(){
   
}


printCalender();
printMonths();
