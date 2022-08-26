import { v4 as uuid } from 'uuid'

export const posts = [
  {
    id: uuid(),
    author: {
      name: 'Jane Doe',
      role: 'Web Developer',
      avatar_url: 'https://i.pravatar.cc/300'
    },
    content: [
      { type: 'paragraph', content: 'Hey my people! 👋' },
      {
        type: 'paragraph',
        content:
          "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. 🚀"
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
        url: 'jane.design/doctorcare'
      }
    ],
    tags: ['#newproject', '#nlw', '#rocketseat'],
    publishedAt: new Date('2022-01-03 18:00:00'),
    comments: [
      {
        id: uuid(),
        author: {
          name: 'John Hart',
          role: 'Web Developer',
          avatar_url: 'https://i.pravatar.cc/300'
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 👏👏',
        likes: 7,
        publishedAt: new Date('2022-07-05 18:00:00')
      },
      {
        id: uuid(),
        author: {
          name: 'Christophe Costa',
          role: 'Web Developer',
          avatar_url: 'https://i.pravatar.cc/300'
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 👏👏',
        likes: 2,
        publishedAt: new Date('2022-08-04 18:00:00')
      }
    ]
  },
  {
    id: uuid(),
    author: {
      name: 'Jane Doe',
      role: 'Web Developer',
      avatar_url: 'https://i.pravatar.cc/300'
    },
    content: [
      { type: 'paragraph', content: 'Hey my people! 👋' },
      {
        type: 'paragraph',
        content:
          "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. 🚀"
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
        url: 'jane.design/doctorcare'
      }
    ],
    tags: ['#newproject', '#nlw', '#rocketseat'],
    publishedAt: new Date('2022-01-03 18:00:00'),
    comments: [
      {
        id: uuid(),
        author: {
          name: 'John Hart',
          role: 'Web Developer',
          avatar_url: 'https://i.pravatar.cc/300'
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 👏👏',
        likes: 5,
        publishedAt: new Date('2022-07-05 18:00:00')
      }
    ]
  },
  {
    id: uuid(),
    author: {
      name: 'Jane Doe',
      role: 'Web Developer',
      avatar_url: 'https://i.pravatar.cc/300'
    },
    content: [
      { type: 'paragraph', content: 'Hey my people! 👋' },
      {
        type: 'paragraph',
        content:
          "I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. 🚀"
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
        url: 'jane.design/doctorcare'
      }
    ],
    tags: ['#newproject', '#nlw', '#rocketseat'],
    publishedAt: new Date('2022-01-03 18:00:00'),
    comments: [
      {
        id: uuid(),
        author: {
          name: 'John Hart',
          role: 'Web Developer',
          avatar_url: 'https://i.pravatar.cc/300'
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 👏👏',
        likes: 0,
        publishedAt: new Date('2022-07-05 18:00:00')
      },
      {
        id: uuid(),
        author: {
          name: 'Christophe Costa',
          role: 'Web Developer',
          avatar_url: 'https://i.pravatar.cc/300'
        },
        comment:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 👏👏',
        likes: 3,
        publishedAt: new Date('2022-08-04 18:00:00')
      }
    ]
  }
]
