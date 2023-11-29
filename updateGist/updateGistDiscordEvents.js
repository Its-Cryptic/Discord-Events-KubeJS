/*
THIS IS NOT A KubeJS Script!
DO NOT UPLOAD WITH YOUR MODPACK
This script will gather data using a bot inside of a discord server using http GET requests
The data being a list of a community discord server's scheduled events in json format
Then it will upload that json using your Github personal access key to rhe gist you specify
The file will be named scheduled-events.json

THIS FILE HAS SENSITIVE DATA ON IT, DO NOT PUBLICALLY DISTRIBUTE WITH YOUR GITHUB_TOKEN OR DISCORD_BOT_TOKEN
*/

// npm install axios
const axios = require('axios');

// These should be env variables but whatev :D
const GITHUB_TOKEN = 'Github Personal Access Key'; // Replace with your GitHub token (SENSITIVE INFORMATION)
const GIST_ID = 'Gist ID'; // Replace with your gist ID
const DISCORD_GUILD_ID = 'Discord Server ID'; // Replace with your discord Server ID
const DISCORD_BOT_TOKEN = 'Discord Bot Token'; // Replace with your discord bot token (SENSITIVE INFORMATION)

async function updateGistWithDiscordData() {
    try {
        const discordResponse = await axios.get(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}/scheduled-events`, {
            headers: {
                'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });


        const githubResponse = await axios.patch(`https://api.github.com/gists/${GIST_ID}`, {
            files: {
                "scheduled-events.json": {
                    content: JSON.stringify(discordResponse.data, null, 2) // Makes the JSON all pretty
                }
            }
        },
        {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
    });

    console.log('Gist updated successfully:', githubResponse.data.html_url);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


updateGistWithDiscordData();
// THIS IS NOT A KubeJS Script!