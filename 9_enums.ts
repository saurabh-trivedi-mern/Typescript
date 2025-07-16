//! Enums : To restrict the user's choices
// (Without const TS produces IIFE for enums)

const enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW,
}

// const enum SeatChoice{
//     AISLE,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }

// const enum SeatChoice{
//     AISLE = 20,
//     MIDDLE = 25,
//     WINDOW,
//     FOURTH
// }

// const enum SeatChoice{
//     AISLE = "aisle",
//     MIDDLE = "middle",
//     WINDOW = 1,
//     FOURTH
// }

const mySeat = SeatChoice.AISLE

export {}