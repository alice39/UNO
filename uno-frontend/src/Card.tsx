enum CardColor {
    Red,
    Yellow,
    Green,
    Blue
}

enum CardType {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Block,
    Reverse,
    Wild_2,
    Wild_Color,
    Wild_Color_4
};

// represents how many times a card is repeated through all
// colors in CardColor, number index are linked by CardType
const cardSize: number[] = [
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1
];

class Card {
    readonly color: CardColor;
    readonly type: CardType;

    constructor(color: CardColor, type: CardType) {
        this.color = color;
        this.type = type;
    }
};

// source: https://stackoverflow.com/a/2450976
function shuffleDesk(array: Card[]): Card[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getRandomDesk(): Card[] {
    let desk: Card[] = new Array(108);
    let next: number = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 15; j++) {
            for (let k = 0; k < cardSize[j]; k++) {
                desk[next++] = new Card(i, j);
            }
        }
    }

    return shuffleDesk(desk);
}

export default {CardColor, CardType, Card, shuffleDesk, getRandomDesk};
