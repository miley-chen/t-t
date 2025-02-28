// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thinking Today',
  tagline: 'Thinking is cool',
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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        gtag: {
          trackingID: 'G-HR59PCKZ7K',
          anonymizeIP: true,
        },
        docs: {
          //path: 'Garden',
          routeBasePath: 'garden',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Thinking Today`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },

          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-zooming',
    [
      'docusaurus-pushfeedback',{
          project: 'hybyc9m61c',
          buttonPosition: 'bottom-right',
          modalPosition: 'sidebar-right',
          //buttonStyle: 'Light',
          modalTitle: 'Share your thoughts',
          ratingMode: 'stars',
          hideScreenshotButton: 'true',
      }
  ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/thinking-is-cool.png',
      metadata: [{ name: "robots", content: "max-image-preview:large" }],
      
      // giscus options
      giscus: {
        repo: 'miley-chen/t-t', // edit this
        repoId: 'R_kgDOMR-dpQ', // edit this
        category: 'Announcements',
        categoryId: 'DIC_kwDOMR-dpc4CjW4e', // edit this
      },

    
      algolia: {
        // The application ID provided by Algolia
        appId: 'I2SXUWI6DV',
      
        // Public API key: it is safe to commit it
        apiKey: 'c8326893a87d4e47ad3f6c01aca7fcc6',
      
        indexName: 't-t',
      
        // Optional: see doc section below
        contextualSearch: true,
      
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
      
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
      
        // Optional: Algolia search parameters
        searchParameters: {},
      
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: true,
      
        //... other Algolia params
      },


      navbar: {
        title: 'Thinking Today',
        logo: {
          alt: 'T-T Logo',
          src: 'img/T-T.png',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Garden',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          /*
          {
            type: 'dropdown',
            to: '/blog',
            label: 'blog',
            position: 'right',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Blog tags',
                to: '/blog/tags',
              },
              // ... more items
            ],
          },
          */
         /*
          {
            label: 'Bento',
            href: 'https://bento.me/mileychen',
            position: 'right',
          },
          */
        ],
      },


      footer: {
        style: 'light',
        links: [
         /*
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/miley-c/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MileyChen0u0',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/miley_ttc/',
              },
            ],
          },
          */
          {
            title: 'Contact',
            items: [
              {
                label: 'Bento',
                href: 'https://bento.me/mileychen',
              },
              {
                label: 'Email',
                href: 'mailto:miley.ttc@gmail.com',
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
      zooming: {
        selector: '.markdown img',
        delay: 500,
        background: {
          light: 'rgba(101,108,133,0.8)',
          dark: 'rgba(9,10,17,0.8)'
        },
        options: {
          // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),
};


export default config;
