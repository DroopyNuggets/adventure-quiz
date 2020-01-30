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
        coolness: 0
    }, { 
        id: 'goVoodoo',
        description: 'You decide to go to Blue Star instead',
        result: `
        An overwhelming feeling of anxiety comes over you... you sense danger. You scramble back to the car and drive far away.
        `,
        fun: 20,
        coolness: 25
    }, {
        id: 'leaveVoodoo',
        description: 'You catch the next flight home',
        result: `
        Odd donut shops have made you uneasy and you decide to go home
        `,
        fun: 0,
        coolness: 15
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
        coolness: 75
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
        result: 'a sense of wonder'
        pride:
    }, {
        id:'goPowells',
        description:'Always regret not looking around at the endless books...',
        result: 'an empty feeling in your stomach'
    }, {
        id:'leavePowells',
        description: 'You realize books and Portland are not your thing and you return home',
        result: '',
        pride: 100,
        senseOfBelonging: 0
    }
    }]
}

    
    
    
    
    
    id: 'monsters',
    title: 'A Den of Monsters',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    audio: 'monsters.wav',
    action: 'monster-scream.wav',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};
}