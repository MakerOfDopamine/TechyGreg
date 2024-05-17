const ge = (x) => document.getElementById(x)
const default_player = {
    inventory: Array(36).fill(getObject(0))
}
let player = {}

const main = setInterval(() => {
    // Inventory checks
    for (let i in player.inventory) {
        // Remove empty stacks
        if (player.inventory[i].amount == 0 && player.inventory[i].id != 0) player.inventory[i] = getObject(0)
        
        // Fix broken stack sizes
        if (player.inventory[i].amount == -1) player.inventory[i] = getObject(0)
        
        // Update display
        let slot = ge("inventory" + i)
        try {slot.removeChild(ge("inventoryIcon" + i))} catch {}
        try {slot.removeChild(ge("inventoryAmount" + i))} catch {}

        // Create and update images
        let icon = document.createElement("img")
        icon.src = "./textures/" + player.inventory[i].id + ".png"
        icon.id = "inventoryIcon" + i
        let amount = document.createElement("b")
        amount.classList.add("tooltip-text")
        amount.innerText = (player.inventory[i].amount ? player.inventory[i].amount : "")
        amount.id = "inventoryAmount" + i
        slot.appendChild(icon)
        slot.appendChild(amount)
    }
}, 50)
