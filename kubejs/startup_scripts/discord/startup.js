/*
Formatting your events!
    name: A string which will match the title of your event on discord! If the names do not match this will not work properly
    id: The unique identifier incase you decide to change the name! Once you start using this id dont change it!
    description: Your description of the event, will appear in chat!
    status: keep as false, this is how the server can tell when the event is happening and when it is not!
*/

global.discordEvents = [
    {
        name: "Party Time!",
        id: 1,
        description: "It's Party Time! Confetti rains from the sky!",
        status: false
    },
    {
        name: "Dungeon Rush Hour",
        id: 2,
        description: "Dungeons spawn with exclusive loot and enemies drop more money",
        status: false
    }
]


// The identifier is used to identify is a discord event is meant to also be an in-game event!
// When creating the event on discord, put this as its location!
global.identifier = "[Rift Realms]"