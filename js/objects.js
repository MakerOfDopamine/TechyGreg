const objects_list = [
    {
        id: 0,
        name: "empty",
        max_stack: 0,
        amount: 0
    },
    {
        id: 1,
        name: "Logs",
        max_stack: 64,
        amount: 1
    }
]

function clone(x) {
    return JSON.parse(JSON.stringify(x))
} 

function obj_add(x, y) {
    // Adds y items to slot x in the player's inventory. Fails if the operation would result in exceeding of max stack.
    y = Number(y)
    if (player.inventory[x].amount + y <= player.inventory[x].max_stack) {
        player.inventory[x].amount += y
    } else {
        throw "Error: obj_add exceeded stack size"
    }
}

function getObject(x) {
    // Get the object with item ID x. Returns empty if id is too large, and errors if invalid id is given.
    return x >= objects_list.length ? clone(objects_list[0]) : clone(objects_list[x])
}

function getNextFreeSlot() {
    // Gets the next free slot, or null if none.
    for (i in player.inventory) {
        if (player.inventory[i].id == 0) return i
    }
    return null
}

function getNextUsableSlot(x) {
    // Gets the next slot which has an object of id x and is not full, or the first free slot if none.
    for (i in player.inventory) {
        if (player.inventory[i].id == x && player.inventory[i].amount < player.inventory[i].max_stack) return i
    }
    return getNextFreeSlot()
}

function addObject(x) {
    // Adds x items into the inventory. Attempts to create a new stack if the operation exceeds max stack.
    next_slot = getNextUsableSlot(1) // Change later for more objects
    if (next_slot == null) throw "Error: addObject has no free slots"
    remaining_space = player.inventory[next_slot].max_stack - player.inventory[next_slot].amount
    if (x < remaining_space) {
        obj_add(next_slot, x)
        return
    } else {
        obj_add(next_slot, remaining_space)
        next_slot = getNextUsableSlot(1)
        player.inventory[next_slot] = getObject(1) // Change later for more objects
        addObject(x - remaining_space - 1)
    }
}