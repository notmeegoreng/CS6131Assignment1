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