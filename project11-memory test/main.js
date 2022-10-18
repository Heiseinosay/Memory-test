
// Getting ID's
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
const congrats = document.getElementById('Congrats')
const restart = document.getElementById('restart')

let radio1 = document.getElementById("radio-one");
let radio2 = document.getElementById("radio-two")
let radio3 = document.getElementById("radio-three")

// Time set
let timeStatus = 1000;
let timeOne = document.getElementById("time-one")

timeOne.addEventListener('click', () => {
    radio1.click()
    setInterval()
})
let timeTwo = document.getElementById("time-two")
timeTwo.addEventListener('click', () => {
    radio2.click()
    setInterval()
});
let timeThree = document.getElementById("time-three")
timeThree.addEventListener('click', () => {
    radio3.click()
    setInterval()
});

function setInterval() {
    if (radio1.checked) {
        timeStatus = 0300; 
    
        timeOne.style.backgroundColor = "#4bd849"
        timeTwo.style.backgroundColor = "#ffffff"
        timeThree.style.backgroundColor = "#ffffff"

        timeOne.style.color = "#ffffff"
        timeTwo.style.color = "#868282"
        timeThree.style.color = "#868282"
    } else if (radio2.checked) {
        timeStatus = 0500; 

        timeOne.style.backgroundColor = "#ffffff"
        timeTwo.style.backgroundColor = "#4bd849"
        timeThree.style.backgroundColor = "#ffffff"

        timeOne.style.color = "#868282"
        timeTwo.style.color = "#ffffff"
        timeThree.style.color = "#868282"
    }   else if (radio3.checked) {
        timeStatus = 1000; 

        timeOne.style.backgroundColor = "#ffffff"
        timeTwo.style.backgroundColor = "#ffffff"
        timeThree.style.backgroundColor = "#4bd849"

        timeOne.style.color = "#868282"
        timeTwo.style.color = "#868282"
        timeThree.style.color = "#ffffff"
    }
}


// end time set


const start = document.getElementById('start')
const btnContainer = document.getElementById('btn')
let numList = []

// Start button event
start.addEventListener('click', () => {
    btnContainer.style.display = "none"

    // Generate 5 random numbers
    while (numList.length < 5) {
        let random = Math.floor(Math.random() * 9) + 1
        if (numList.indexOf(random) === -1) {
            numList.push(random)
        }
    }
    console.log(numList)
    basehan = [1, 2, 3, 4, 5]
    console.log(basehan)

    let textContainer = document.createElement("h1");
    textContainer.classList.add("numbers");

    // Assigning random numbers a container
    for (let firstCounter = 0; firstCounter < 5; firstCounter++) {   
        for (let secondCounter = 1; secondCounter <= 9; secondCounter++) {
            // Appending variables
            if (numList[firstCounter] == secondCounter) {
                if (numList[firstCounter] == 1) {
                    // Passing/appending header
                    one.append(firstCounter + 1);   
                    // Creating data value
                    one.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 2) {
                    two.append(firstCounter + 1)
                    two.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 3) {
                    three.append(firstCounter + 1)
                    three.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 4) {
                    four.append(firstCounter + 1)
                    four.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 5) {
                    five.append(firstCounter + 1)
                    five.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 6) {
                    six.append(firstCounter + 1)
                    six.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 7) {
                    seven.append(firstCounter + 1)
                    seven.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 8) {
                    eight.append(firstCounter + 1)
                    eight.setAttribute('data-value', firstCounter + 1);

                } else if (numList[firstCounter] == 9) {
                    nine.append(firstCounter + 1)
                    nine.setAttribute('data-value', firstCounter + 1);
                } 
            }
        }
    } // End of loop
    
    // disappear numbers
    let boxes = document.querySelectorAll('.box');
    setTimeout(() => {
        one.innerHTML = ""
        two.innerHTML = ""
        three.innerHTML = ""
        four.innerHTML = ""
        five.innerHTML = ""
        six.innerHTML = ""
        seven.innerHTML = ""
        eight.innerHTML = ""
        nine.innerHTML = ""

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add("box-animate")
        }
    }, timeStatus)

})
function clear() {
    one.innerHTML = ""
    two.innerHTML = ""
    three.innerHTML = ""
    four.innerHTML = ""
    five.innerHTML = ""
    six.innerHTML = ""
    seven.innerHTML = ""
    eight.innerHTML = ""
    nine.innerHTML = ""
}
function color(id, last) {
    id.style.backgroundColor = "#4bd849"
    if (last == 5){
        congrats.style.display = "block"
    }
}

let orderValue = 1;

one.addEventListener('click', () => {
    if (parseInt(one.dataset.value) == orderValue) {
        color(one, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
two.addEventListener('click', () => {
    if (parseInt(two.dataset.value) == orderValue) {
        color(two, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
three.addEventListener('click', () => {
    if (parseInt(three.dataset.value) == orderValue) {
        color(three, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
four.addEventListener('click', () => {
    if (parseInt(four.dataset.value) == orderValue) {
        color(four, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
five.addEventListener('click', () => {
    if (parseInt(five.dataset.value) == orderValue) {
        color(five, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
six.addEventListener('click', () => {
    if (parseInt(six.dataset.value) == orderValue) {
        color(six, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
seven.addEventListener('click', () => {
    if (parseInt(seven.dataset.value) == orderValue) {
        color(seven, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
eight.addEventListener('click', () => {
    if (parseInt(eight.dataset.value) == orderValue) {
        color(eight, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})
nine.addEventListener('click', () => {
    if (parseInt(nine.dataset.value) == orderValue) {
        color(nine, orderValue)
        orderValue += 1;
        clear()
    } else {
        location.reload()
    }
})

restart.addEventListener('click', () => {
    location.reload()
})









