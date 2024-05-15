function save() {
    let encoded_player = btoa(JSON.stringify(player))
    localStorage.setItem("TechyGregSave", encoded_player)
}

function load() {
    let data = localStorage.getItem("TechyGregSave")
    if (data == null) {
        player = default_player;
        return
    } else {
        let decoded_data = JSON.parse(atob(data))
        if (decoded_data == null) {
            player = default_player;
            return
        }
        if (!(typeof decoded_data == 'object')) {
            alert("broken data")
            player = default_player;
            return
        }
        for (let i in decoded_data) {
            if (i == NaN) {
                alert("NaN detected")
                player = default_player;
                return
            }
        }
        player = decoded_data
        console.log("load successful")
        return
    }
}

function hardReset() {
    if (confirm("Do you really want to hard reset? This resets all progress and unlocks nothing.")) {
        player = null;
        save();
        document.location.reload()
    }
}

setInterval(() => {
    save()
}, 10000)