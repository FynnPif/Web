var calenderConfig = {
    monthName: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",],
    monthLength: [30, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30],
    weekDays: ["MO", "DI", "MI", "DO", "FR", "SA", "SO "],
}

var globalVariables = {
    currentMonth: 0,
    currentDay: 1,
    daysOffsetPerMonth: 4,
    maxDaysPerMonth: 35
}

function printCalender(){
    document.write("Kalender 2021" + "<br>")

    for (x = 0; x < 12; x++){
        document.write(calenderConfig.monthName[globalVariables.currentMonth] + "<br>")
        globalVariables.currentMonth++;  
        
        for(z = 0; z < 7; z++){
            document.write(" | " + calenderConfig.weekDays[z])
            
            if (z == 6){
                document.write(" | " + "<br>")
            }
        }

        for(v=0; v < 5; v++){    
            for(y=0; y < 7; y++){
                document.write(" | " + globalVariables.currentDay)
                globalVariables.currentDay++
                if (globalVariables.currentDay > calenderConfig.monthLength[x]){
                    globalVariables.currentDay = 1;
                }
                /*if(globalVariables.currentDay == calenderConfig.monthLength[x]){
                    var xy = globalVariables.maxDaysPerMonth - globalVariables.currentDay;
                    for(xy; xy < 5; xy++){
                        document.write(" | " + "-")
                    }
                }*/
            }
            document.write("<br>")
        }   
    }
}

printCalender();

//next Steps:
//  max days per month
//  offset
            