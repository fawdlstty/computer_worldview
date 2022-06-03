module.exports = {
    title: 'computer_worldview',
    description: '《计算机世界观》 助你塑造正确的计算机世界观',
    themeConfig: {
        nav: [
            { text: 'Github', link: 'https://github.com/fawdlstty/computer_worldview' }
        ],
        sidebar: [{
            title: '首页',
            path: '/',
            children: []
        }, {
            title: '第一章 从机器到计算机',
            collapsable: false,
            children: [{
                title: '第一节 计算的由来',
                path: '/docs/01_01_compute.md',
                children: []
            }, {
                title: '第二节 存储技术的古往今生',
                path: '/docs/01_02_datastore.md',
                children: []
            }, {
                title: '第三节 计算机理论体系',
                path: '/docs/01_03_theory.md',
                children: []
            }]
        }, {
            title: '第二章 计算机语言',
            collapsable: false,
            children: [{
                title: '第一节 硬件语言',
                path: '/docs/02_01_hardware_lang.md',
                children: []
            }, {
                title: '第二节 面向机器语言',
                path: '/docs/02_02_machine_oriented_lang.md',
                children: []
            }, {
                title: '第三节 高级语言',
                path: '/docs/02_03_high_level_lang.md',
                children: []
            }, {
                title: '第四节 编译器前端',
                path: '/docs/02_04_compiler_frontend.md',
                children: []
            }, {
                title: '第五节 编译器后端',
                path: '/docs/02_05_compiler_backend.md',
                children: []
            }, {
                title: '第六节 stackless与await',
                path: '/docs/02_06_stackless_and_await.md',
                children: []
            }]
        }, {
            title: '未完待续。。。',
            collapsable: false,
            children: []
        }]
    }
}

// npm run docs:dev
// npm run docs:build
