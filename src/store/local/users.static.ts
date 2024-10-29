export const usersData = {
  manager: {
    id: 1,
    name: "علی",
    familyName: "موسوی",
    gender: "male",
  },
  subsets: [
    {
      id: 3,
      name: "زهرا",
      lastname: "تهرانی",
      gender: "FEMALE",
      mobile: "09940900611",
      role: "",
      province_id: "تهران",
      city_id: "آبسرد",
      height: "-",
      weight: "-",
      bmi: "-",
      createdAt: "2024-10-18T21:38:58.000000Z",
      updatedAt: "2024-10-19T05:38:09.000000Z",
      accessToken: 0,
    },
    {
      id: 5,
      name: "علی",
      lastname: "کاظمی",
      gender: "MALE",
      mobile: null,
      role: "",
      province_id: "اصفهان",
      city_id: "اصفهان",
      height: 175,
      weight: 70,
      bmi: 22.86,
      createdAt: "2024-10-20T05:14:24.000000Z",
      updatedAt: "2024-10-20T05:14:24.000000Z",
      accessToken: 1,
    },
  ],
};

export type Subset = (typeof usersData.subsets)[number];
export type Manager = typeof usersData.manager;
