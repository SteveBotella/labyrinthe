let labyrinth = [
    ["o", "x", "o", "o", "o", "o", "o"],
    ["o", "x", "o", "x", "x", "o", "x"],
    ["o", "x", "o", "x", "G", "o", "o"],
    ["o", "o", "o", "o", "x", "x", "o"],
    ["o", "x", "o", "x", "o", "o", "o"],
    ["o", "x", "o", "o", "o", "x", "o"],
]
let location = [5, 6]
let win = false
let xIndex = location[0]
let yIndex = location[1]
let maxX = labyrinth.length
let maxY = labyrinth[1].length

//debug
let t = 0
let count = 0

//while (!win) {
while (t < 7) {
    move()
    console.log(canCheckBot())
    console.log(canCheckRgt())
    console.log(canCheckLft())
    console.log(canCheckTop())
    console.table(labyrinth)
    t++
}
console.log("You win")
console.log("Count : " + count)

// Je me déplace sur la prochaine case
function move() {
    canCheckTop()
    canCheckLft()
    canCheckRgt()
    canCheckBot()
    sequence()
}

// Est-ce que la case que l'on vérifie est dans le tableau ?
function canCheckTop() {
    if (xIndex - 1 >= 0) {
        return true
    }
    return false
}

function canCheckLft() {
    if (yIndex - 1 >= 0) {
        return true
    }
    return false
}

function canCheckRgt() {
    if (yIndex + 1 < maxY) {
        return true
    }
    return false
}

function canCheckBot() {
    if (xIndex + 1 < maxX) {
        return true
    }
    return false
}

// Sequences de vérification
function sequence() {
    // Sequence de vérification étape 1
    if (canCheckBot()) {
        // Est-ce la case victoire
        if (labyrinth[location[0] + 1][location[1]] === "G") {
            win = true
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] + 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex++
            count++
            return 0
        }
        // Est-ce que la case est un chemin
        if (labyrinth[location[0] + 1][location[1]] === "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] + 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex++
            count++
            return 0
        }
    }
    if (canCheckRgt()) {
        if (labyrinth[location[0]][location[1] + 1] === "G") {
            win = true
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] + 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex++
            count++
            return 0
        }
        if (labyrinth[location[0]][location[1] + 1] === "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] + 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex++
            count++
            return 0
        }
    }
    if (canCheckLft()) {
        if (labyrinth[location[0]][location[1] - 1] === "G") {
            win = true
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] - 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex--
            count++
            return 0
        }
        if (labyrinth[location[0]][location[1] - 1] === "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] - 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex--
            count++
            return 0
        }
    }
    if (canCheckTop()) { console.log("Je vérifie le HAUT !")
        if (labyrinth[location[0] - 1][location[1]] === "G") {
            win = true
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
            count++
            return 0
        }
        if (labyrinth[location[0] - 1][location[1]] === "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
            count++
            return 0
        }
    }
    // Sequence de vérification étape 2
    if (canCheckRgt()) {
        // Est-ce que la case a été visité
        if (labyrinth[location[0]][location[1] + 1] === "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] + 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex++
            count++
            return 0
        }
    }
    if (canCheckLft()) {
        // Est-ce que la case a été visité
        if (labyrinth[location[0]][location[1] - 1] === "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] - 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex--
            count++
            return 0
        }
    }
    if (canCheckTop()) { console.log("Je vérifie le HAUT en v !")
        // Est-ce que la case a été visité
        if (labyrinth[location[0] - 1][location[1]] === "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
            count++
            return 0
        }
    }
    if (canCheckBot()) {
        // Est-ce que la case a été visité
        if (labyrinth[location[0] + 1][location[1]] === "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] + 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex++
            count++
            return 0
        }
    }
}