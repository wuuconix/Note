export default {
    title: 'Note',
    description: '经典书籍笔记',
    base: "/note/",
    themeConfig: {
        sidebar: {
            '/': [
            {
                text: 'CSS世界',
                items: [
                    { text: '怪异盒子真的怪异吗？', link: '/cssWorld/weird.md' },
                ]
            }
            ],
        }
    }
}