export const forums = [
    {header: 'Top Forums', covers: [
        {
            title: 'On the concept of thermodynamics',
            description: 'Discuss the heat death of the universe here!',
            to: 'forums/ab'
        },
        {
            title: 'B',
            description: 'BBB',
            to: 'forums/bb'}
        ]
    },
    {
        header: 'Vertical Forums', covers: []
    },
    {
        header: 'Bottom Forums', covers: [
            {
                title: 'Q',
                description: 'QQQ',
                to: 'forums/aaa'
            },
            {
                title:'P',
                description: 'PP',
                to: 'forums/dddd'
            }
        ]
    },
    {
        header: 'filler',
        covers: [
            {
                title: 'filter',
                description: 'to filter filters is utmost filtration'
            }
        ]
    },
    {
        header: 'filler',
        covers: [
            {
                title: 'filter',
                description: 'to filter filters is utmost filtration'
            }
        ]
    },
    {
        header: 'filled',
        covers: [
            {
                title: 'filter',
                description: 'to filter filters is utmost filtration'
            }
        ]
    },
    {
        header: 'filler',
        covers: [
            {
                title: 'filter',
                description: 'to filter filters is utmost filtration'
            }
        ]
    },
    {
        header: 'filler',
        covers: [
            {
                title: 'filter',
                description: 'to filter filters is utmost filtration'
            }
        ]
    }
]

export const forum_id_map = {
    ab: {
        section: 'Top Forums',
        name: 'On the concept of thermodynamics'
    },
    bb: {
        section: 'Top Forums',
        name: 'B'
    },
    aaa: {
        section: 'Bottom Forums',
        name: 'Q'
    },
    dddd: {
        section: 'Bottom Forums',
        name: 'P'
    },
}

export const threads = [
    {
        header: 'Pinned Threads', covers: [
            {
                avatar: {name: 'M', color: 'blue'},
                title: 'On Moderation',
                description: [ // generate long description
                    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
                    'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth',
                    'eighteenth', 'nineteenth', 'twentieth'
                ].join('ly, how dare you. ')+ 'ly, how dare you.',
                to: 'ab/threads/b'
            },
            {
                avatar: {name: 'Ww', color: 'orange'},
                title: 'BAA BAA',
                description: 'black sheep',
                to: 'ab/threads/ccc'}
        ]
    },
    {
        header: 'Normal Threads', covers: [
            {
                title: 'OO',
                description: 'woah',
                to: 'ab/threads/d'
            },
            {
                title:'Moose',
                description: 'craze',
                to: 'ab/threads/ee'
            }
        ]
    }]