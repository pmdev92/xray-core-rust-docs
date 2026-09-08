import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Xray Core Rust Documents",
  description: "A universal proxy platform.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Build & Run',
        items: [
          { text: 'Overview', link: '/build/' },
          { text: 'Build', link: '/build/build' },
          { text: 'Run', link: '/build/run' },
          { text: 'iOS', link: '/build/ios' },
          { text: 'Android', link: '/build/android' },
        ]
      },
      {
        text: 'Config Reference',
        items: [
          { text: 'Overview', link: '/config/' },
          { text: 'Log', link: '/config/log' },
          { text: 'Observations', link: '/config/observations' },
          { text: 'Stats', link: '/config/stats' },
          { text: 'Inbound Protocols', link: '/config/inbounds' },
          { text: 'Outbound Protocols', link: '/config/outbounds' },
          { text: 'Transports', link: '/config/transports' },
          { text: 'Router', link: '/config/router' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pmdev92/xray-core-rust' }
    ],
    sidebar: {
      '/config/': [
        {
          items: [
            { text: 'Config', link: '/config/' },
            { text: 'Log', link: '/config/log/' },
            { text: 'Observations', link: '/config/observations/' },
            { text: 'Stats', link: '/config/stats/' },
            {
              text: 'Inbound Protocols',
              link: '/config/inbounds',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/config/inbounds/' },
                { text: 'HTTP', link: '/config/inbounds/http' },
                { text: 'SOCKS5', link: '/config/inbounds/socks' },
              ]
            },
            {
              text: 'Outbound Protocols',
              link: '/config/outbounds/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/config/outbounds/' },
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
            {
              text: 'Transports',
              link: '/config/transports/',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/config/transports/' },
                { text: 'Tcp', link: '/config/transports/tcp' },
                { text: 'Websocket', link: '/config/transports/websocket' },
                { text: 'HttpUpgrade', link: '/config/transports/http-upgrade' },
                { text: 'Xhttp', link: '/config/transports/xhttp' },
                { text: 'Http', link: '/config/transports/http' },
                { text: 'Grpc', link: '/config/transports/grpc' },
                { text: 'Tls', link: '/config/transports/tls' },
                { text: 'Reality', link: '/config/transports/reality' },
              ]
            },
            { text: 'Router', link: '/config/router/' },
          ]
        }
      ],
      '/build/': [
        {
          items: [
            { text: 'Overview', link: '/build/' },
            { text: 'Build', link: '/build/build' },
            { text: 'Run', link: '/build/run' },
            { text: 'iOS', link: '/build/ios' },
            { text: 'Android', link: '/build/android' },
          ]
        }
      ]
    }
  }
})
