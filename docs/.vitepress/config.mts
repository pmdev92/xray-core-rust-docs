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
            { text: 'Inbounds', link: '/config/inbounds' },
            {
              text: 'Inbound Protocols',
              collapsed: true,
              items:  [
                    { text: 'HTTP', link: '/config/inbounds/http' },
                    { text: 'Inbounds', link: '/config/inbounds/socks' },
              ]
            },
            { text: 'Outbounds', link: '/config/outbounds' },
            {
              text: 'Outbound Protocols',
              collapsed: true,
              items:  [

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
            { text: 'Transport', link: '/config/outbounds/transport' },
            { text: 'Router', link: '/config/router' },
          ]
        }
      ]
    }
  }
})

