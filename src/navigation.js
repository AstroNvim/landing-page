import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features (Anchor Link)',
      href: getPermalink('/#features'),
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'AstroNvim Documentation', href: 'https://docs.astronvim.com' },
        { text: 'AstroCommunity', href: 'https://git.astronvim.com/astrocommunity' },
        { text: 'AstroCore', href: 'https://git.astronvim.com/astrocore' },
        { text: 'AstroUI', href: 'https://git.astronvim.com/astroui' },
        { text: 'AstroLSP', href: 'https://git.astronvim.com/astrolsp' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Code of Conduct', href: getPermalink('/code_of_conduct') },
    { text: 'Contribution Guidelines', href: 'https://git.astronvim.com/AstroNvim/blob/main/.github/CONTRIBUTING.md' },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://hachyderm.io/@AstroNvim' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://github.com/AstroNvim' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.astronvim.com' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://reddit.com/r/AstroNvim' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://git.astronvim.com' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
