import { create } from "zustand";

import { VerifyLoginResponse } from "@/app/auth/api/types/response";

type State = { user: Partial<VerifyLoginResponse> };

type Action = {
  actions: {
    setUser: (user: Partial<VerifyLoginResponse>) => void;
  };
};

export const useUserStore = create<State & Action>()((set) => ({
  user: {
    id: undefined,
    name: undefined,
    lastname: undefined,
    gender: undefined,
    mobile: undefined,
    role: undefined,
    province_id: undefined,
    city_id: undefined,
    height: undefined,
    weight: undefined,
    bmi: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    accessToken: undefined,
  },
  actions: {
    setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  },
}));

export const useUserActions = () => useUserStore((state) => state.actions);
