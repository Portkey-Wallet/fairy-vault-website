import { DEVELOPERS_URL } from 'constants/homeData';
import { IMediaKitPage } from 'types/mediaKit';
import { ITopMenu, ISocialMedia } from 'types/nav';

export const LINK_TREE_URL = 'https://linktr.ee/portkeydid';

export const headerNav: Array<ITopMenu> = [
  {
    type: {
      value: 2,
    },
    title: 'Home',
    path: '/',
    children: [],
  },
  {
    type: {
      value: 1,
    },
    title: 'Developers',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Documentation',
        path: DEVELOPERS_URL,
      },
      {
        type: {
          value: 3,
        },
        title: 'Use Case',
        path: 'https://...',
      },
    ],
  },
  {
    type: {
      value: 1,
    },
    title: 'Resources',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Blog',
        path: 'https://...',
      },
      {
        type: {
          value: 2,
        },
        title: 'Media Kit',
        path: '/media-kit',
      },
      {
        type: {
          value: 3,
        },
        title: 'Linktree',
        path: LINK_TREE_URL,
      },
    ],
  },
  {
    type: {
      value: 2,
    },
    title: 'Download',
    path: '/download',
    children: [],
  },
];

export const footerNav: Array<ITopMenu> = [
  {
    type: {
      value: 2,
    },
    title: 'Developers',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Documentation',
        path: DEVELOPERS_URL,
      },
      {
        type: {
          value: 3,
        },
        title: 'Use Case',
        path: 'https://...',
      },
    ],
  },
  {
    type: {
      value: 1,
    },
    title: 'Resources',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Blog',
        path: 'https://...',
      },
      {
        type: {
          value: 2,
        },
        title: 'Media Kit',
        path: '/media-kit',
      },
      {
        type: {
          value: 3,
        },
        title: 'Linktree',
        path: LINK_TREE_URL,
      },
    ],
  },
  {
    type: {
      value: 1,
    },
    title: 'Legal',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Term of Service',
        path: 'https://...',
      },
    ],
  },
  {
    type: {
      value: 1,
    },
    title: 'Resources',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Blog',
        path: 'https://...',
      },
      {
        type: {
          value: 2,
        },
        title: 'Media Kit',
        path: '/media-kit',
      },
      {
        type: {
          value: 3,
        },
        title: 'Linktree',
        path: LINK_TREE_URL,
      },
    ],
  },
  {
    type: {
      value: 1,
    },
    title: 'Legal',
    children: [
      {
        type: {
          value: 3,
        },
        title: 'Term of Service',
        path: 'https://...',
      },
    ],
  },
];

const MEDIUM_URL = 'https://medium.com/@PortkeyDID';
const YOUTUBE_URL = 'https://www.youtube.com/@PortkeyDID';
const TELEGRAM_URL = 'https://t.me/Portkey_Official_Group';
const TWITTER_URL = 'https://twitter.com/Portkey_DID';
const DISCORD_URL = 'https://discord.gg/EUBq3rHQhr';
const GITHUB_URL = 'https://github.com/Portkey-Wallet';

export const socialMedia: Array<ISocialMedia> = [
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'medium',
    link: MEDIUM_URL,
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
  },
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'youtube',
    link: YOUTUBE_URL,
  },
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'telegram',
    link: TELEGRAM_URL,
  },
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'twitter',
    link: TWITTER_URL,
  },
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'discord',
    link: DISCORD_URL,
  },
  {
    svg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    activeSvg: {
      id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
      width: 100,
      height: 100,
      filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
    },
    name: 'github',
    link: GITHUB_URL,
  },
];
export const mediaKitData: IMediaKitPage = {
  boilerplateTitle: "Portkey's Boilerplate",
  boilerplateContent:
    "Portkey is the first AA wallet from aelf’s ecosystem, migrating Web2 users and developers into Web3 with DID solution.\nUsers can swiftly log into Portkey via their Web2 social info with no private keys or mnemonics required. Underpinned by the social recovery and decentralized guardian design, Portkey safeguards users' assets from centralised control and theft. Portkey also generates nearly zero fees for account creation and user usage with a unique delegation mechanism.\n\nPortkey provides crypto on/off-ramp services, allowing users to exchange fiat with crypto freely. It supports the storage and management of various digital assets such as tokens, NFTs, etc. The compatibility with multi-chains and seamless connection to all kinds of DApps makes Portkey a great way to enter the world of Web3.",
  boilerplateList: [
    {
      boilerplate_id: {
        id: 1,
        name: 'Portkey Website',
        url: 'https://www.google.com/',
      },
    },
    {
      boilerplate_id: {
        id: 2,
        name: 'Medium',
        url: 'https://www.google.com/',
      },
    },
    {
      boilerplate_id: {
        id: 3,
        name: 'Medium2',
        url: 'https://www.google.com/',
      },
    },
    {
      boilerplate_id: {
        id: 4,
        name: 'Medium3',
        url: 'https://www.google.com/https://www.google.com/https://www.google.com/https://www.google.com/https://www.google.com/https://www.google.com/https://www.google.com/',
      },
    },
    {
      boilerplate_id: {
        id: 5,
        name: 'Medium4',
        url: 'https://medium.com/@PortkeyDID',
      },
    },
    {
      boilerplate_id: {
        id: 6,
        name: 'Medium5',
        url: 'https://medium.com/@PortkeyDID',
      },
    },
  ],
  title: 'Portkey Media Kit',
  content: `Below are Portkey's logomarks and wordmarks for the purpose of marketing communications. While using, please do not distort the pictures or make changes to them. Any third parties are prohibited from asserting rights, spreading false information, or engaging in actions that may cause harm to Portkey by unauthorized use of the property.
  If you can't find what you want, feel free to contact us at partner@portkey.finance.`,
  allMediaKitZip: '' as any,
  mediaKitDescription:
    "Portkey's brand name, logo, slogan, and other associated materials, are the exclusive property of Portkey's and can be used for the purpose of marketing communications only. It is important to note that third parties are prohibited from asserting any rights to Portkey's property, spreading false or misleading information, or engaging in actions that may cause harm or damage to the reputation of Portkey by unauthorized use of the property.",
  mediaKitList: [
    {
      mediaKit_id: {
        name: 'Main Logotype',
        backgroundColor: '#F5F7FA',
        svg: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        png: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        width: 200,
        height: 100,
      },
    },
    {
      mediaKit_id: {
        name: 'Main Logotype - White',
        backgroundColor: '#343F58',
        svg: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        png: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        width: 200,
        height: 100,
      },
    },
    {
      mediaKit_id: {
        name: 'Logo Mark',
        backgroundColor: '#F5F7FA',
        svg: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        png: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        width: 200,
        height: 100,
      },
    },
    {
      mediaKit_id: {
        name: 'Logo Mark - White',
        backgroundColor: '#343F58',
        svg: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        png: {
          id: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5',
          width: 100,
          height: 100,
          filename_disk: 'fa07bdc5-8a93-41e0-b4fa-95637eb471f5.svg',
        },
        width: 200,
        height: 100,
      },
    },
  ],
};
