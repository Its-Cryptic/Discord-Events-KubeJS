let firstMessage = false

PlayerEvents.tick(event => {
    if (event.player.age % (4) == 0) {
        global.discordEvents.forEach(type => {
            if (type.id = 1) {
                if (type.status) {
                    let size = 2
                    console.log("PARTYYYY")
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run particle dust 255 0 0 ${size} ~-8 ~8 ~-8 16 -16 16 10 15`)
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run particle dust 0 255 0 ${size} ~-8 ~8 ~-8 16 -16 16 10 15`)
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run particle dust 0 0 255 ${size} ~-8 ~8 ~-8 16 -16 16 10 15`)

                    if (firstMessage == false) {
                        firstMessage = true
                        event.player.tell(type.description)
                        event.player.runCommandSilent(`title ${event.player.username} title {"text":"${type.name}","bold":true,"color":"gold"}`)
                    }
                    console.log(firstMessage)
                }

                if (type.status = false) {
                    firstMessage = false
                }
            }
        })
    }

    if (event.player.age % (20*20) == 0) {
        global.discordEvents.forEach(type => {
            if (type.id = 1) {
                if (type.status) {
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run summon firework_rocket ~10 ~4 ~10 {LifeTime:30,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:3,Explosions:[{Type:1,Flicker:1,Trail:1,Colors:[I;11743532,3887386,2437522],FadeColors:[I;15435844]}]}}}}`)
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run summon firework_rocket ~10 ~4 ~-10 {LifeTime:30,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:3,Explosions:[{Type:1,Flicker:1,Trail:1,Colors:[I;11743532,3887386,2437522],FadeColors:[I;15435844]}]}}}}`)
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run summon firework_rocket ~-10 ~4 ~-10 {LifeTime:30,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:3,Explosions:[{Type:1,Flicker:1,Trail:1,Colors:[I;11743532,3887386,2437522],FadeColors:[I;15435844]}]}}}}`)
                    event.server.runCommandSilent(`execute as ${event.player.username} at @s run summon firework_rocket ~-10 ~4 ~10 {LifeTime:30,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:3,Explosions:[{Type:1,Flicker:1,Trail:1,Colors:[I;11743532,3887386,2437522],FadeColors:[I;15435844]}]}}}}`)
                }
            }
        })
    }
})