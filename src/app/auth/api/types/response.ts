export interface VerifyLoginResponse {
  id: number;
  name: string;
  lastname: string;
  gender: string;
  mobile: string;
  role: string;
  province_id: string;
  city_id: string;
  height: number;
  weight: number;
  bmi: number;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}