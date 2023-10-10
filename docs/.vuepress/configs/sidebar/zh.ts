import type { SidebarConfig } from 'vuepress'

export const sidebarZh: SidebarConfig = {
    '/guide/': [
        {
            text: 'TerraMours-GPT使用',
            children: [
                '/guide/gpt-use.md',
                '/guide/admin-show.md',
            ],
        },
        {
            text: 'TerraMours-GPT部署',
            children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                '/guide/getting-started-vue.md',
            ],
        },
      ],  
}