// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'COONEO',
  tagline: 'Robots are cool',
  url: 'https://c00ne0.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'http://cooneo.cc/wordpress/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'COONEO',
        logo: {
          alt: 'My Site Logo',
          src: 'data:image/png;base64,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',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'http://cooneo.cc/wordpress/', label: 'Blog', position: 'left'},
          {to: 'http://cooneo.cc/wordpress/#about', label: 'ABOUT US', position: 'left'},
          {to: 'http://cooneo.cc/wordpress/#service', label: 'SERVICE', position: 'left'},
          {to: 'http://cooneo.cc/wordpress/#products', label: 'PRODUCTS', position: 'left'},
          {to: 'http://cooneo.cc/wordpress/#join%20us', label: 'JOIN US', position: 'left'},
          {to: 'http://cooneo.cc/wordpress/#contact', label: 'CONTACT', position: 'left'},
          {
            href: 'https://github.com/C00NE0/C00NE0.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/COONEO',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/cooneo.robot/',
              },
              {
                label: 'Weibo',
                href: 'https://weibo.com/cooneo',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/625857407/',
              },
              {
                label: 'Zhihu',
                href: 'https://www.zhihu.com/people/jeff-44-13',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'http://cooneo.cc/wordpress/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/COONEO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} COONEO, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
