let round
let scores
let maxRound
let activePlayerIndex

let hasError = false

let diceImage
let diceAudio
let finishAudio
let newGameAudio
let newGameButton
let rollDiceButton

let scoresElements = []
let sectionElements = []
let lastScoreElements = []

document.addEventListener('DOMContentLoaded', function (event) {

    // **********
    // **********
    // **********
    diceImage =
        document.querySelector('#dice')

    if (!diceImage) {

        hasError = true
        console.log("Error! 'diceImage' does not exist.")

    }
    // **********

    // **********
    diceAudio =
        document.querySelector('#dice-audio')

    if (!diceAudio) {

        hasError = true
        console.log("Error! 'diceImage' does not exist.")

    }
    // **********

    // **********
    finishAudio =
        document.querySelector('#finish-audio')

    if (!finishAudio) {

        hasError = true
        console.log("Error! 'finishImage' does not exist.")

    }
    // **********

    // **********
    newGameAudio =
        document.querySelector('#new-game-audio')

    if (!newGameAudio) {

        hasError = true
        console.log("Error! 'newGameAudio' does not exist.")

    }
    // **********

    // **********
    newGameButton =
        document.querySelector('#btn-new-game')

    if (!newGameButton) {

        console.log("Error! 'newGameButton' does not exist.")

    }
    // **********

    // **********
    rollDiceButton =
        document.querySelector('#btn-roll-dice')

    if (!rollDiceButton) {

        console.log("Error! 'rollDiceButton' does not exist.")

    }
    // **********

    // **********
    let scores0Element =
        document.querySelector('#scores-0')

    if (!scores0Element) {

        console.log("Error! 'scores0Element' does not exist.")

    } else {

        scoresElements.push(scores0Element)

    }
    // **********

    // **********
    let scores1Element =
        document.querySelector('#scores-1')

    if (!scores1Element) {

        console.log("Error! 'scores1Element' does not exist.")

    } else {

        scoresElements.push(scores1Element)

    }
    // **********

    // **********
    let section0Element =
        document.querySelector('#section-0')

    if (!section0Element) {

        console.log("Error! 'section0Element' does not exist.")

    } else {

        sectionElements.push(section0Element)

    }
    // **********

    // **********
    let section1Element =
        document.querySelector('#section-1')

    if (!section1Element) {

        console.log("Error! 'section1Element' does not exist.")

    } else {

        sectionElements.push(section1Element)

    }
    // **********

    // **********
    let lastScore0Element =
        document.querySelector('#last-score-0')

    if (!lastScore0Element) {

        console.log("Error! 'lastScore0Element' does not exist.")

    } else {

        lastScoreElements.push(lastScore0Element)

    }
    // **********

    // **********
    let lastScore1Element =
        document.querySelector('#last-score-1')

    if (!lastScore1Element) {

        console.log("Error! 'lastScore1Element' does not exist.")

    } else {

        lastScoreElements.push(lastScore1Element)

    }
    // **********
    // **********
    // **********

    if (hasError) {

        return

    }

    newGameButton.addEventListener('click', function () {

        init()

        round = 1

        newGameAudio.play()

        rollDiceButton.style.display = 'block'

        sectionElements[activePlayerIndex].classList.add("section-active")

    })

    rollDiceButton.addEventListener('click', function () {

        diceAudio.play()

        let randomInteger =
            getRandomIntegerFromOneTo(6)

        diceImage.style.display = 'block'

        let newFileName =
            'dice-' + randomInteger + '.png'

        diceImage.setAttribute('src', newFileName)

        if (randomInteger === 6) {

            round++

            if (round > maxRound) {

                finishAudio.play()

                rollDiceButton.style.display = 'none'

            }

            lastScoreElements[activePlayerIndex].textContent = 0
            sectionElements[activePlayerIndex].classList.remove("section-active")

            if (activePlayerIndex === 0) {

                activePlayerIndex = 1

            } else {

                activePlayerIndex = 0

            }

            sectionElements[activePlayerIndex].classList.add("section-active")

            return

        }

        let activeLastScoreElement =
            lastScoreElements[activePlayerIndex]

        activeLastScoreElement.textContent = randomInteger

        scores[activePlayerIndex] += randomInteger

        let activeScoresElement =
            scoresElements[activePlayerIndex]

        activeScoresElement.textContent = scores[activePlayerIndex]

    })

    init()

})

function init() {

    round = 0
    maxRound = 2

    scores = [0, 0]
    activePlayerIndex = 0

    diceImage.style.display = 'none'
    rollDiceButton.style.display = 'none'

    scoresElements[0].textContent = 0
    scoresElements[1].textContent = 0

    lastScoreElements[0].textContent = 0
    lastScoreElements[1].textContent = 0

    sectionElements[0].classList.remove("section-active")
    sectionElements[1].classList.remove("section-active")

}