export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mathwcruz.png",
      name: "Matheus Cruz",
      role: "Front End Developer @ADP Brazil Labs",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    comments: [],
    publishedAt: new Date("2023-04-18 21:06:34"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "link", content: "devonlane.design" },
    ],
    comments: [],
    publishedAt: new Date("2023-04-18 09:14:54"),
  },
];
