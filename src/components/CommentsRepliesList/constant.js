export const dummyList = [
    {
        id: "1",
        content: "This is a comment",
        replies: [
            {
                id: "11",
                content: "This is a reply",
                replies: [
                    {
                        id: "111",
                        content: "This is a nested reply",
                        replies: []
                    }
                ]
            },
            {
                id: "12",
                content: "This is another reply",
                replies: []
            }
        ]
    },
    {
        id: "2",
        content: "This is a second comment",
        replies: [
            {
                id: "21",
                content: "This is a reply to the second comment",
                replies: []
            }
        ]
    },
    {
        id: "3",
        content: "This is a third comment",
        replies: []
    }
]