const ge = (x) => document.getElementById(x)
const default_player = {
    inventory: Array(36).fill(getObject(0))
}
let player = {}

const main = setInterval(() => {
    for (let i in player.inventory) {
        try {ge("inventory" + i).removeChild(ge("inventoryIcon" + i))} catch {}
        icon = document.createElement("img")
        icon.src = "./textures/" + player.inventory[i].id + ".png"
        icon.id = "inventoryIcon" + i
        ge("inventory" + i).appendChild(icon)
    }
}, 50)
