type AddSubsetRequest = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: number;
  weight: string;
  height: string;
  province_id: string;
  city_id: string;
};

type CitiesListRequest = {
  province_id: string;
};

export type { AddSubsetRequest, CitiesListRequest };
