function getOpenedDoors (){

    let doors = []

    for(let i = 1; i <= 100; i++){

/*         let door = {
            isOpen: false,
            doorNumber: i
        }

        doors.push(let) */
        doors.push({
            isOpen: false,
            doorNumber: i
        })
    }
    console.log(doors);

    for (let i = 1; i <= 100; i++){
        for (const door of doors) {

            let shouldToggle = false;

            if(door.doorNumber % i == 0){
                shouldToggle = true
            }

            if (shouldToggle === true){
                door.isOpen = !door.isOpen;
            }

        }
    }

    for (const door of doors){
        if (door.isOpen === true)
        console.log(door.doorNumber)
    }

}

getOpenedDoors()