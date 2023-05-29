import type { SidebarConfig } from 'vuepress'

export const sidebarZh: SidebarConfig = {
    '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
          ],
        },
      ],  
}