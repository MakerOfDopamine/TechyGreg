const objects_list = [
    {
        id: 0,
        name: "empty"
    },
    {
        id: 1,
        name: "Logs",
        max_stack: 64,
        amount: 0
    }
]

function getObject(x) {
    // Get the object with item ID x. Returns empty if id is too large, and errors if invalid id is given.
    return x >= objects_list.length ? objects_list[0] : objects_list[x]
}

function obj_add(x, y) {
    // Adds y items to slot x in the player's inventory. Fails if the operation would result in exceeding of max stack.
    if (player.inventory[x].amount + y < player.inventory[x].max_stack) {
        player.inventory[x].amount += y
    } else {
        throw "Error: addObject exceeded stack size"
    }
}

function addObject(x, y) {
    
}