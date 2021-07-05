let x = [0, 1, 2, 3, 4, 5, 6]
let y = [0, 1, 2, 3, 4, 5]

let s = [x[0], y[0]]
let g = [x[4], x[2]]

let checkCase = [x[0], y[1]]

console.log(s)

//while ((s[0] != g[0]) && (s[1] != g[1])) {
while (s[1] != 5) {
    move()
}
console.log("Win")

//Check if the case is empty to be able to move this way
function isEmpty(x, y) {
    if (checkCase[x] < 0 || checkCase[x] > 6) {
        return true
    }
    if (checkCase[y] < 0 || checkCase[y] > 5) {
        return false
    }
    switch (checkCase[x]) {
        case 1 :
            switch (checkCase[y]) {
                case 0 :
                case 1 :
                case 2 :
                case 4 :
                case 5 :
                    return false
                default :
                    return true
            }
        case 3 :
            switch (checkCase[y]) {
                case 1 :
                case 2 :
                case 4 :
                    return false
                default :
                    return true
            }
        case 4 :
            switch (checkCase[y]) {
                case 1 :
                case 3 :
                    return false
                default :
                    return true
            }
        case 5 :
            switch (checkCase[y]) {
                case 3 :
                case 5 :
                    return false
                default :
                    return true
            }
        case 6 :
            switch (checkCase[y]) {
                case 1 :
                    return false
                default :
                    return true
            }
        default :
            return true
    }
}

function move() {
    let bot = [s[0], s[1] + 1]
    let top = [s[0], s[1] - 1]
    let Rgt = [s[0] + 1, s[1]]
    let lft = [s[0] - 1, s[1]]


    s[0] = bot[0]
    s[1] = bot[1]

    console.log(isEmpty(bot[0], bot[1]))
    console.log(s)
}