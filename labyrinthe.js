let labyrinth = [
    ["S", "x", "o", "o", "o", "o", "o"],
    ["o", "x", "o", "x", "x", "o", "x"],
    ["o", "x", "o", "x", "G", "o", "o"],
    ["o", "o", "o", "o", "x", "x", "o"],
    ["o", "x", "o", "x", "o", "o", "o"],
    ["o", "x", "o", "o", "o", "x", "o"],
]
let location = [0, 0]
let win = false
let xIndex = 0
let yIndex = 0
let maxX = labyrinth.length - 1
let maxY = labyrinth[1].length

while (!win) {
    move()
    console.table(labyrinth)
}
console.log("Win bro' !")

function move() {
    if ((xIndex < maxX) && (yIndex < maxY)) {
        if (xIndex == 0 && yIndex == maxY) {
            if ((labyrinth[location[0] + 1][location[1]] == "o") || (labyrinth[location[0] + 1][location[1]] == "G")) {
                if (labyrinth[location[0] + 1][location[1]] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] + 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex++
            } else if ((labyrinth[location[0]][location[1] - 1] == "o") || (labyrinth[location[0]][location[1] - 1] == "G")) {
                if (labyrinth[location[0]][location[1] - 1] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if (labyrinth[location[0]][location[1] - 1] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if (labyrinth[location[0] - 1][location[1]] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] - 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex--
            }
        } else if (xIndex == 0) {
            if ((labyrinth[location[0] + 1][location[1]] == "o") || (labyrinth[location[0] + 1][location[1]] == "G")) {
                if (labyrinth[location[0] + 1][location[1]] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] + 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex++
            } else if ((labyrinth[location[0]][location[1] + 1] == "o") || (labyrinth[location[0]][location[1] + 1] == "G")) {
                if (labyrinth[location[0]][location[1] + 1] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] + 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex++
            } else if ((labyrinth[location[0]][location[1] - 1] == "o") || (labyrinth[location[0]][location[1] - 1] == "G")) {
                if (labyrinth[location[0]][location[1] - 1] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if (labyrinth[location[0]][location[1] + 1] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] + 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex++
            } else if (labyrinth[location[0]][location[1] - 1] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if (labyrinth[location[0] - 1][location[1]] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] - 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex--
            }
        } else {
            if ((labyrinth[location[0] + 1][location[1]] == "o") || (labyrinth[location[0] + 1][location[1]] == "G")) {
                if (labyrinth[location[0] + 1][location[1]] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] + 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex++
            } else if ((labyrinth[location[0]][location[1] + 1] == "o") || (labyrinth[location[0]][location[1] + 1] == "G")) {
                if (labyrinth[location[0]][location[1] + 1] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] + 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex++
            } else if ((labyrinth[location[0]][location[1] - 1] == "o") || (labyrinth[location[0]][location[1] - 1] == "G")) {
                if (labyrinth[location[0]][location[1] - 1] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if ((labyrinth[location[0] - 1][location[1]] == "o") || (labyrinth[location[0] - 1][location[1]] == "G")) {
                if (labyrinth[location[0] - 1][location[1]] == "G") {
                    win = true
                }
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] - 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex--
            } else if (labyrinth[location[0] - 1][location[1]] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] - 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex--
            } else if (labyrinth[location[0]][location[1] + 1] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] + 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex++
            } else if (labyrinth[location[0]][location[1] - 1] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0], location[1] - 1]
                labyrinth[location[0]][location[1]] = "S"
                yIndex--
            } else if (labyrinth[location[0] - 1][location[1]] == "v") {
                labyrinth[location[0]][location[1]] = "v"
                location = [location[0] - 1, location[1]]
                labyrinth[location[0]][location[1]] = "S"
                xIndex--
            }
        }

    } else if ((xIndex == maxX) || (yIndex == maxY)) {
        if (labyrinth[location[0]][location[1] + 1] == "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] + 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex++
        } else if (labyrinth[location[0]][location[1] - 1] == "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] - 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex--
        } else if (labyrinth[location[0] - 1][location[1]] == "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
        } else if (labyrinth[location[0] - 1][location[1]] == "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
        } else if (labyrinth[location[0]][location[1] + 1] == "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] + 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex++
        } else if (labyrinth[location[0]][location[1] - 1] == "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0], location[1] - 1]
            labyrinth[location[0]][location[1]] = "S"
            yIndex--
        } else if (labyrinth[location[0] - 1][location[1]] == "v") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] - 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex--
        } else if (labyrinth[location[0] + 1][location[1]] == "o") {
            labyrinth[location[0]][location[1]] = "v"
            location = [location[0] + 1, location[1]]
            labyrinth[location[0]][location[1]] = "S"
            xIndex++
        }
    }
}

function canGoBot() {
    if (labyrinth[location[0]][location[1] - 1] == "G") {
        win = true
        labyrinth[location[0]][location[1]] = "v"
        location = [location[0], location[1] - 1]
        labyrinth[location[0]][location[1]] = "S"
        yIndex--
    }
}

function canGoRgt() {
    if (labyrinth[location[0] + 1][location[1]] == "o") {
        labyrinth[location[0]][location[1]] = "v"
        location = [location[0] + 1, location[1]]
        labyrinth[location[0]][location[1]] = "S"
        xIndex++
    }
}

function canGoLft() {
    if ((labyrinth[location[0]][location[1] - 1] == "o")) {
        labyrinth[location[0]][location[1]] = "v"
        location = [location[0], location[1] - 1]
        labyrinth[location[0]][location[1]] = "S"
        yIndex--
    }
}

function canGoTop() {
    if (labyrinth[location[0]][location[1] + 1] == "o") {
        labyrinth[location[0]][location[1]] = "v"
        location = [location[0], location[1] + 1]
        labyrinth[location[0]][location[1]] = "S"
        yIndex++
    }
}