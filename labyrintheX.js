let labyrinth = [
    ["S", "x", "o", "o", "o", "o", "o"],
    ["o", "x", "o", "x", "x", "o", "x"],
    ["o", "x", "o", "x", "G", "o", "o"],
    ["o", "o", "o", "o", "x", "x", "o"],
    ["o", "x", "o", "x", "o", "o", "o"],
    ["o", "x", "o", "o", "o", "x", "o"],
]

//Pour chaque case autour
//
// Est-ce que la case est dans le tableau ?
// Si non -> Stop
// Est-ce que la case est un mur ?
// Si oui -> Stop
// Est-ce que la case est vide ?
// Si oui -> On y va // Sequence1
//
// Fin pour chaque case autour

// Pour chaque case autour
//
// Est-ce que la case a été visité ?
// Si oui -> On y va // sequence2
//
// Fin pour chaque case autour