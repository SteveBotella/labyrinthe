let x = [0, 1, 2, 3, 4, 5, 6]
let y = [0, 1, 2, 3, 4, 5]

let s = [x[0], y[0]]
let g = [x[4], x[2]]

let checkCase = [x[1], y[1]]

while ((s[0] != g[0]) && (s[1] != g[1])) {
    move()
}
console.log("Win")

//Check if the case is empty to be able to move this way
function isEmpty() {
    switch (checkCase[0]) {
        case 1 :
            switch (checkCase[1]) {
                case 0 :
                case 1 :
                case 2 :
                case 4 :
                case 5 :
                    return console.log("false")
                default :
                    return console.log("true")
            }
        case 3 :
            switch (checkCase[1]) {
                case 1 :
                case 2 :
                case 4 :
                    return console.log("false")
                default :
                    return console.log("true")
            }
        case 4 :
            switch (checkCase[1]) {
                case 1 :
                case 3 :
                    return console.log("false")
                default :
                    return console.log("true")
            }
        case 5 :
            switch (checkCase[1]) {
                case 3 :
                case 5 :
                    return console.log("false")
                default :
                    return console.log("true")
            }
        case 6 :
            switch (checkCase[1]) {
                case 1 :
                    console.log("false")
                    break
                default :
                    console.log("true")
            }
            break
        default :
            console.log("true")
    }
}

function move() {

}