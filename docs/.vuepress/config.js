module.exports = {
    title: 'VuePress demo',
    description: 'Just playing around',
    base: '/vuepress-starts', // 站点根路径
    repo: 'https://github.com/weiqiujuan/vuepress-starts.git',
    dest: './dist',
    themeConfig: {
        // 内置搜索
        search: false, //禁用搜索框
        searchMaxSuggestions: 10,
        // 最后更新时间
        astUpdated: 'Last Updated', // string | boolean
        // next and prev
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,
        // 页面滚动
        smoothScroll: true,
        // 添加导航栏
        nav: [
            {text: 'vue', link: '/'},
            {text: 'css', link: '/blog/'},
            {text: 'js', link: '/zhihu/'},
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside'},
                    {text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter'},
                ]
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */]
            }
        ]
    }
}