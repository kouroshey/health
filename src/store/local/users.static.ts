export const usersData = {
  manager: {
    id: 1,
    name: "علی",
    familyName: "موسوی",
    gender: "male",
  },
  subsets: [
    {
      id: 1,
      name: "پویا",
      familyName: "موسوی",
      gender: "male",
      height: "150",
      weight: "50",
      lastUpdate: "1403/1/21",
      healthStatus: "سالم",
    },
    {
      id: 2,
      name: "پدرام",
      familyName: "موسوی",
      gender: "male",
      height: "110",
      weight: "25",
      lastUpdate: "1403/2/2",
      healthStatus: "نیاز به مراقبت",
    },
    {
      id: 3,
      name: "بهاره",
      familyName: "موسوی",
      gender: "female",
      height: "130",
      weight: "55",
      lastUpdate: "1403/2/21",
      healthStatus: "ناسالم",
    },
    {
      id: 4,
      name: "پویا",
      familyName: "موسوی",
      gender: "male",
      height: "150",
      weight: "50",
      lastUpdate: "1403/1/21",
      healthStatus: "سالم",
    },
    {
      id: 5,
      name: "پدرام",
      familyName: "موسوی",
      gender: "male",
      height: "110",
      weight: "25",
      lastUpdate: "1403/2/2",
      healthStatus: "نیاز به مراقبت",
    },
  ],
};

export type Subset = (typeof usersData.subsets)[number];
export type Manager = typeof usersData.manager;
