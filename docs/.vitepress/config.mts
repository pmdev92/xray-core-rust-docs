import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Xray Core Rust Documents",
  description: "A universal proxy platform.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Config Reference', link: '/config' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pmdev92/xray-core-rust' }
    ],
    sidebar: {
      '/config/': [
        {
          items: [
            { text: 'Config', link: '/config' },
            { text: 'Log', link: '/config/log' },
            {
              text: 'Inbound Protocols',
              collapsed: true,
              items:  [
                    { text: 'Basic', link: '/config/inbounds' },
                    { text: 'HTTP', link: '/config/inbounds/http' },
                    { text: 'Inbounds', link: '/config/inbounds/socks' },
              ]
            },

            {
              text: 'Outbound Protocols',
              collapsed: true,
              items:  [
                    { text: 'Basic', link: '/config/outbounds' },
                    { text: 'Freedom', link: '/config/outbounds/freedom' },
                    { text: 'Block', link: '/config/outbounds/block' },
                    { text: 'Socks5', link: '/config/outbounds/socks' },
                    { text: 'Vless', link: '/config/outbounds/vless' },
                    { text: 'Vmess', link: '/config/outbounds/vmess' },
                    { text: 'Trojan', link: '/config/outbounds/trojan' },
                    { text: 'Shadowsocks', link: '/config/outbounds/shadowsocks' },
                    { text: 'Tuic', link: '/config/outbounds/tuic' },
                    { text: 'Hysteria2', link: '/config/outbounds/hysteria2' },
              ]
            },
            { text: 'Transport', link: '/config/transport' },
            { text: 'Router', link: '/config/router' },
          ]
        }
      ]
    }
  }
})

