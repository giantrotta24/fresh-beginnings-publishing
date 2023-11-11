export const headerData = {
  links: [
    {
      text: 'About us',
      href: '/about',
    },
    {
      text: 'Our work',
      links: [
        {
          text: 'Rusty the Raccoon',
          href: 'https://www.rustytheraccoon.com/',
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        {
          text: 'Rusty the Racoon',
          href: 'https://www.amazon.com/Rusty-Raccoon-Scared-Michelle-Trotta/dp/B0CJ44D6NK?crid=69SBI4UNFJJC&keywords=rusty+the+raccoon+is+scared+of+the+dark&qid=1699735695&sprefix=rusty+the+raccoo,aps,70&sr=8-1',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' },
        { text: 'Press', href: '/press' },
        { text: 'Shop', href: '/shop' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: '#' },
  //   { text: 'Privacy Policy', href: '#' },
  // ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    {
      ariaLabel: 'Instagram',
      icon: 'mdi:instagram',
      href: 'https://instagram.com/freshbeginningscommunity?igshid=MzRlODBiNWFlZA==',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/360330059436123' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@freshbeginningspublishing' },
  ],
};
