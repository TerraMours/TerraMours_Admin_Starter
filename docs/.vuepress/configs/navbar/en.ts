import type { NavbarConfig } from 'vuepress'
export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        link: '/en/guide/',
      },
      {
        text: 'Designer',
        children: [
          {
            text:"firstsaofan",
            link:"https://www.firstsaofan.top/"
          },
          {
            text:"raokun",
            link:"https://www.raokun.top/"
          }
        ],
      },
]