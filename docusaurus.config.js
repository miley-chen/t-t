// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thinking Today',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/T-T.png',

  // Set the production url of your site here
  url: 'https://www.t-t.cool/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'miley-chen', // Usually your GitHub org/user name.
  projectName: 'T-T', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //path: 'Garden',
          routeBasePath: 'garden',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/T-T.jpg',
      navbar: {
        title: 'Thinking Today',
        logo: {
          alt: 'T-T Logo',
          src: 'img/T-T.png',
        },
        items: [
          {to: '/about', label: 'About', position: 'right'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Garden',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'light',
        links: [

          {
            //title: 'Community',
            items: [
              {
                label: 'Bento',
                href: 'https://bento.me/mileychen',
              },
            ],
          },
          { 
            items:[  
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/miley-c/',
              },
            ],
          },
          {
            items:[
              {
                label: 'Twitter',
                href: 'https://twitter.com/MileyChen0u0',
              },
            ],
          },
          {
            //title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mich_pho/',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} Tzu Ting (Miley) Chen Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
