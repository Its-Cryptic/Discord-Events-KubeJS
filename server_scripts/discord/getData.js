/*
This script uses NetJS to periodically retrieve the JSON data from a Gist
and save it to kubejs/server_scripts/discordEvents.json
*/

ServerEvents.tick(event => {

    let refreshInterval = 1440 // In seconds NOTE THAT YOU CAN ONLY MAKE 60 REQUESTS A DAY (1 every 24 minutes/1440 seconds)
    let gistID = "c29c6841e3442b2eff228ecdf798dcf6" // Replace with your own Gist ID
    
    let level = event.server.getLevel('minecraft:overworld')
    if(level.time % (refreshInterval*20) == 0) {
        console.log("Grabbing Scheduled Events Data")
        NetJS.getGists(gistID, result => {
            let discordEvents = JsonIO.parseRaw(result.files['scheduled-events.json'].content)
            JsonIO.write("kubejs/server_scripts/discord/discordEvents.json", {events: discordEvents})
        })
    }
})