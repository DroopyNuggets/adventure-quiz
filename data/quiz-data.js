const voodoo = {
    id: 'voodoo',
    title: 'Voodoo donuts in downtown Portland',
    image: 'assets/VooDoo.jpg',
    description: ` 
    You take the jouney downtown through hoards of traffic only to find there is no parking. After aimlessly searching for 20 minutes you park in a pay-to-park lot. You approach voodoo donuts and the line is wrapping around the block. What now? 
    `,
    
    choices: [{
        id: 'stayVoodoo',
        description: 'find a spot in line',
        result: `
        Because you've never been to Portland before you decide standing in line for a stale donut is an excellent use of time 
        `,
        fun: 0,
        price: '$4.00'
    }, { 
        id: 'goVoodoo',
        description: 'You decide to go to Blue Star instead',
        result: `
        An overwhelming feeling of anxiety comes over you... you sense danger. You scramble back to the car and drive far away.
        `,
        fun: 20,
        price: '$0'
    }, {
        id: 'leaveVoodoo',
        description: 'You catch the next flight home',
        result: `
        Odd donut shops have made you uneasy and you decide to go home
        `,
        fun: 0,
        price: '$250'
    }]
};

const japaneseGardens = {
    id: 'japanese',
    title: 'The Portland Japanese Gardens located in Washington Park',
    image: 'assets/JapaneseGardens.jpg',
    description: `
    Only a short drive from downtown, you arrive in Washington Park. The newly redesigned and award winning Japanese garden awaits.
    `,

    choices: [{
        id:'stayJapanese',
        description: 'You buy a ticket to the garden',
        result: 'You are amazed by the beauty of the garden',
        fun: 50,
        price: '$15.00'
    }]
};

const powells = {
    id: 'powells',
    title: 'The world\'s largest independent bookstore',
    image: 'assets/Powells.jpg',
    description: `
    The largest independent bookstore in the country... Four stories and <span(s)> an entire city block. A Portland staple.
    `,

    choices: [{
        id:'stayPowells',
        description:'Look around at the endless books...',
        result: 'a sense of wonder',
        fun: 55,
        price: 'varies'
    }, {
        id:'goPowells',
        description:'Always regret not looking around at the endless books...',
        result: 'an empty feeling in your stomach',
        fun: 10,
        price: '$0'
    }, {
        id:'leavePowells',
        description: 'You realize books and Portland are not your thing and you return home',
        result: 'you buy a keep Portland weird sticker and go home',
        fun: 100,
        price: '$7.00',
    }]
};


export const adventures = [
    voodoo,
    japaneseGardens,
    powells
];

