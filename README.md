# Discord-Events-KubeJS
A set of scripts that allows you to synchronize your community server's discord events with your own in-game events!
DO NOT USE ANY FILE INSIDE THE "updateGist" FOLDER INSIDE OF YOUR MODPACK, THIS HAS SENSITIVE DATA ON IT.

How to use:

**Gather data from Discord and upload it to gist.**
Inside of the updateGist folder you will find the file updateGistDiscordEvents.js and run.bat,
1. Open a terminal inside this folder and run the command "npm install axios".
2. Create a new discord bot at https://discord.com/developers/applications and make sure it has the permission to manage events
3. Invite your bot to the discord server
4. Open the updateGistDiscordEvents.js file and enter in your Bot token, your discord server ID, your gist ID, and github token
5. When creating a GitHub personal access key/token, make sure it has the ability to create gists.
6. If you are using windows you can use Task Scheduler to run the batch file on regular intervals

**Download data from Gist and use it**
Inside the kubejs folder you will find startup_scripts and server_scripts
In startup_scripts, startup.js allows you to define types of events that can be called as well as the overall event identifier.

