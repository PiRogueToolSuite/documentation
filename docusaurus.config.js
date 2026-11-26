// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/**
 * Former URLs and the page that now holds their content.
 * @type {Record<string, string>}
 */
const legacyRedirects = {
  // Former generated category pages
  '/docs/category/pirogue-tool-suite': '/docs',
  '/docs/category/pirogue': '/docs/explanation/pirogue/what-is-a-pirogue',
  '/docs/category/colander': '/docs/explanation/colander/what-is-colander',
  '/docs/category/threatr': '/docs/explanation/threatr/what-is-threatr',
  '/docs/category/mandolin': '/docs/explanation/mandolin/what-is-mandolin',
  '/docs/category/recipes': '/docs/how-to',

  // PiRogue Tool Suite
  '/docs/PiRogue-ToolSuite/overview': '/docs/explanation/pts/about',
  '/docs/PiRogue-ToolSuite/tools-overview': '/docs/explanation/pts/about',
  '/docs/PiRogue-ToolSuite/quickstart': '/docs/tutorials',
  '/docs/PiRogue-ToolSuite/background': '/docs/explanation/pts/background',
  '/docs/PiRogue-ToolSuite/philosophy': '/docs/explanation/pts/philosophy',

  // PiRogue
  '/docs/PiRogue/overview': '/docs/explanation/pirogue/what-is-a-pirogue',
  '/docs/PiRogue/quickstart': '/docs/tutorials/pirogue-on-debian',
  '/docs/PiRogue/architecture': '/docs/explanation/pirogue/architecture',
  '/docs/PiRogue/installation': '/docs/how-to/pirogue/install-pirogue',
  '/docs/PiRogue/dashboard': '/docs/reference/pirogue/dashboard',
  '/docs/PiRogue/traffic-capture': '/docs/how-to/pirogue/capture-network-traffic',
  '/docs/PiRogue/traffic-analysis': '/docs/explanation/pirogue/network-traffic-analysis',
  '/docs/PiRogue/app-analysis': '/docs/explanation/pirogue/app-analysis',
  '/docs/PiRogue/device-forensics': '/docs/explanation/pirogue/device-forensics',
  '/docs/PiRogue/cheatsheet': '/docs/reference/pirogue/default-configuration',
  '/docs/PiRogue/useful-commands': '/docs/how-to/pirogue/connect-to-a-pirogue',
  '/docs/PiRogue/hardware': '/docs/reference/pirogue/hardware',
  '/docs/PiRogue/advanced/hardware': '/docs/reference/pirogue/hardware',
  '/docs/PiRogue/operating-system': '/docs/explanation/pirogue/operating-system',
  '/docs/PiRogue/advanced/operating-system': '/docs/explanation/pirogue/operating-system',
  '/docs/PiRogue/export-data': '/docs/how-to/pirogue/export-data',
  '/docs/PiRogue/advanced/export-data': '/docs/how-to/pirogue/export-data',
  '/docs/PiRogue/pre-installed-tools': '/docs/reference/pirogue/pre-installed-tools',
  '/docs/PiRogue/advanced/pre-installed-tools': '/docs/reference/pirogue/pre-installed-tools',
  '/docs/PiRogue/telemetry': '/docs/how-to/pirogue/opt-out-of-telemetry',
  '/docs/PiRogue/advanced/telemetry': '/docs/how-to/pirogue/opt-out-of-telemetry',
  '/docs/PiRogue/advanced/suricata-rules': '/docs/reference/pirogue/suricata-rules',
  '/docs/PiRogue/advanced/system-integration': '/docs/explanation/pirogue/system-integration',
  '/docs/PiRogue/version-2.x/system-integration': '/docs/explanation/pirogue/system-integration',
  '/docs/PiRogue/version-1.x/configuration': '/docs/how-to/pirogue/configure-pirogue-1x',
  '/docs/PiRogue/version-2.x/configuration': '/docs/how-to/pirogue/configure-pirogue',
  '/docs/PiRogue/version-2.x/admin-web': '/docs/how-to/pirogue/administer-from-the-browser',
  '/docs/PiRogue/version-2.x/changes': '/docs/reference/pirogue/changes-in-2x',

  // Colander
  '/docs/Colander/overview': '/docs/explanation/colander/what-is-colander',
  '/docs/Colander/quickstart': '/docs/tutorials/colander-on-your-computer',
  '/docs/Colander/architecture': '/docs/reference/colander/services',
  '/docs/Colander/deployment': '/docs/how-to/colander/deploy-with-ansible',
  '/docs/Colander/docker-compose': '/docs/how-to/colander/deploy-with-docker-compose',
  '/docs/Colander/accounts': '/docs/how-to/colander/manage-accounts',
  '/docs/Colander/interface': '/docs/reference/colander/interface',
  '/docs/Colander/case-management': '/docs/explanation/colander/case-management',
  '/docs/Colander/entity-management': '/docs/how-to/colander/create-entities',
  '/docs/Colander/artifact-management': '/docs/how-to/colander/add-artifacts',
  '/docs/Colander/knowledge-management': '/docs/explanation/colander/knowledge-management',
  '/docs/Colander/collaboration': '/docs/how-to/colander/share-a-case-with-a-team',
  ...Object.fromEntries(
    Object.entries({
      'case-import-export': '/docs/how-to/colander/export-and-import-a-case',
      'artifact-acquisition': '/docs/how-to/colander/capture-web-content',
      'knowledge-graph': '/docs/explanation/colander/knowledge-graph',
      'import-knowledge': '/docs/how-to/colander/import-knowledge',
      'share-knowledge': '/docs/how-to/colander/share-knowledge',
      'pirogue-fleet': '/docs/how-to/colander/manage-a-pirogue-fleet',
      'device-monitoring': '/docs/how-to/colander/monitor-a-device',
      'traffic-analysis': '/docs/how-to/colander/analyze-app-traffic',
      'traffic-decryption': '/docs/how-to/colander/analyze-app-traffic',
      'chain-of-custody': '/docs/explanation/colander/chain-of-custody',
      'external-sources': '/docs/how-to/colander/enrich-with-threatr',
      'rest-api': '/docs/reference/colander/rest-api',
    }).flatMap(([slug, to]) => [
      [`/docs/Colander/${slug}`, to],
      [`/docs/Colander/advanced/${slug}`, to],
    ]),
  ),

  // Threatr
  '/docs/Threatr/overview': '/docs/explanation/threatr/what-is-threatr',
  '/docs/Threatr/quickstart': '/docs/tutorials/threatr-on-your-computer',
  '/docs/Threatr/deployment': '/docs/how-to/threatr/deploy-threatr',
  '/docs/Threatr/integrations': '/docs/how-to/threatr/connect-vendors',
  '/docs/Threatr/rest-api': '/docs/reference/threatr/rest-api',

  // Mandolin
  '/docs/Mandolin/overview': '/docs/explanation/mandolin/what-is-mandolin',
  '/docs/Mandolin/quickstart': '/docs/tutorials/mandolin-on-your-computer',
  '/docs/Mandolin/deployment': '/docs/how-to/mandolin/deploy-mandolin',
  '/docs/Mandolin/rest-api': '/docs/reference/mandolin/rest-api',

  // Recipes
  '/docs/Recipes/add-suricata-ruleset': '/docs/how-to/pirogue/add-suricata-rules',
  '/docs/Recipes/device-forensics': '/docs/how-to/investigations/check-a-device-with-mvt',
  '/docs/Recipes/export-data': '/docs/how-to/pirogue/export-data',
  '/docs/Recipes/network-tls-interception': '/docs/how-to/pirogue/intercept-tls-traffic',
  '/docs/Recipes/pirogue-on-pc': '/docs/how-to/pirogue/turn-a-pc-into-a-pirogue',
  '/docs/Recipes/pirogue-without-eth': '/docs/how-to/pirogue/use-a-pirogue-without-ethernet',

  // Former "Guides" tab
  '/guides': '/docs',
  '/guides/overview': '/docs',
  '/guides/setup-a-pirogue': '/docs/tutorials/pirogue-on-a-raspberry-pi',
  '/guides/capture-and-analyze-traffic': '/docs/tutorials/capture-and-analyze-traffic',
  '/guides/backup-a-mobile-device': '/docs/how-to/investigations/back-up-a-mobile-device',
  '/guides/handle-a-compromised-device': '/docs/how-to/investigations/handle-a-compromised-device',
  '/guides/handle-a-malicious-app': '/docs/how-to/investigations/handle-a-malicious-app',
  '/guides/static-analysis-with-jadx': '/docs/explanation/investigations/static-analysis-of-android-apps',
  '/guides/analyze-traffic-with-colander': '/docs/how-to/colander/analyze-app-traffic',
  '/guides/compliance-audit-methodology': '/docs/explanation/investigations/compliance-audit-methodology',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PiRogue Tool Suite',
  tagline: 'Open-source digital forensics and network traffic analysis for everyone',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://doc.pts-project.org',
  baseUrl: '/',

  organizationName: 'PiRogueToolSuite',
  projectName: 'doc',
  trailingSlash: false,
  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        // The documentation was reorganized following Diátaxis (tutorials,
        // how-to guides, reference, explanation). Every former URL redirects
        // to the page that now holds its content.
        redirects: Object.entries(legacyRedirects).map(([from, to]) => ({from, to})),
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'ar', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Keep Docusaurus's default underscore-file exclusion (setting `exclude`
          // explicitly overrides it otherwise), plus our own partials folder.
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '_*/', '**/_*/**', '**/partials/**'],
          editUrl:
            'https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/tree/v2/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/PiRogueToolSuite/piroguetoolsuite.github.io/tree/v2/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // image: 'img/pts-logo.png',
      metadata: [
        {name: 'description', content: 'PiRogue Tool Suite (PTS) is a comprehensive, open-source digital investigation platform designed for civil society organizations.'},
        {name: 'keywords', content: 'PiRogue, PTS, mobile forensics, threat analysis, network analysis, Raspberry Pi, spyware, human rights, digital security'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'PiRogue Tool Suite'},
        {property: 'og:image:alt', content: 'PiRogue Tool Suite, a digital investigation platform'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'PiRogue Tool Suite',
        logo: {
          alt: 'PiRogue Tool Suite Logo',
          src: 'img/pts-logo-circle.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialsSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'howToSidebar',
            position: 'left',
            label: 'How-to guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'docSidebar',
            sidebarId: 'explanationSidebar',
            position: 'left',
            label: 'Explanation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://pts-project.org',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/PiRogueToolSuite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Start here', to: '/docs/'},
              {label: 'Tutorials', to: '/docs/tutorials'},
              {label: 'How-to guides', to: '/docs/how-to'},
              {label: 'Reference', to: '/docs/reference'},
              {label: 'Explanation', to: '/docs/explanation'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/PiRogueToolSuite'},
              {label: 'Mastodon', href: 'https://infosec.exchange/@pts'},
              // {label: 'X', href: 'https://x.com/PiRogueTools'},
              {label: 'Discord', href: 'https://discord.com/invite/qGX73GYNdp'},
              {label: 'Open Collective', href: 'https://opencollective.com/pts'},
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'Website', href: 'https://pts-project.org'},
              {label: 'Blog', href: 'https://pts-project.org/categories/activity-reports/'},
              {label: 'Contact', href: 'https://pts-project.org/contact/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PiRogue Tool Suite, Defensive Lab Agency.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'python'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

export default config;
