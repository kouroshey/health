import { create } from "zustand";

import { User } from "@/app/auth/api/types/response";

type UserState = Partial<User> & { isNewUser: boolean };

type State = { user: UserState };

type Action = {
  actions: {
    setUser: (user: UserState) => void;
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
    isNewUser: true,
  },
  actions: {
    setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  },
}));

export const useUserActions = () => useUserStore((state) => state.actions);
