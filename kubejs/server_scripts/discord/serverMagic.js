/*
This script checks every 10 seconds to see if one of the events inside of discordEvents.json 
matches one of the globally defined events and then checks the times of the events.
If the current time of the event is after the start of the event and before the end then it will set
the globally defined status for the event to true.
*/
ServerEvents.tick(event => {
    let refreshInterval = 10 // In seconds

    let level = event.server.getLevel('minecraft:overworld')
    if(level.time % (refreshInterval*20) == 0) {
        let discordEvents = JsonIO.read('kubejs/server_scripts/discord/discordEvents.json')
        discordEvents.events.forEach(event => {
            // Check each discord event's "location" to see if it matches the identifier
            if (event.entity_metadata.location == global.identifier) {
                // Check each of your events declared inside startup to see if the discord event's name matches one of them.
                global.discordEvents.forEach(type => {
                    if (event.name == type.name) {
                        // Converts start and end date strings to date class instance
                        let STS = String(event.scheduled_start_time) // Start Time String
                        let ETS = String(event.scheduled_end_time) // End Time String
                        let timeZoneOffset = new Date().getTimezoneOffset()*60*1000
                        let time = {
                            now: new Date(),
                            start: new Date(new Date(getYear(STS), getMonth(STS), getDay(STS), getHours(STS), getMinutes(STS)).getTime()-timeZoneOffset),
                            end: new Date(new Date(getYear(ETS), getMonth(ETS), getDay(ETS), getHours(ETS), getMinutes(ETS)).getTime()-timeZoneOffset)
                        }
                        // Checks to see if the current time is after the start time and before the end time
                        if (time.now.getTime() > time.start.getTime() && time.now.getTime() < time.end.getTime()) {
                            console.log(event.name)
                            console.log(type.description)
                            type.status = true
                        } else {
                            type.status = false
                        }
                        console.log(time.now.toString())
                        console.log(time.start.toString())
                        console.log(time.end.toString())
                    }
                })
            }
        })
    }
})

function getYear(dateString) {
    return parseInt(dateString.substring(0, 4), 10);
  }
  
  function getMonth(dateString) {
    return parseInt(dateString.substring(5, 7), 10) - 1;
  }
  
  function getDay(dateString) {
    return parseInt(dateString.substring(8, 10), 10);
  }
  
  function getHours(dateString) {
    return parseInt(dateString.substring(11, 13), 10);
  }
  
  function getMinutes(dateString) {
    return parseInt(dateString.substring(14, 16), 10);
  }
  
  // Example usage:
  const dateString = "2023-11-30T23:30:00+00:00";
  console.log(getYear(dateString));    // 2023
  console.log(getMonth(dateString));   // 10 (November, because January is 0)
  console.log(getDay(dateString));     // 30
  console.log(getHours(dateString));   // 23
  console.log(getMinutes(dateString)); // 30