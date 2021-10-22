import { createStore, GetterTree } from "vuex";

export type Address = {
  country: string;
  state: string;
  city: string;
  street: string;
  house: string;
  postcode: string;
};

export type User = {
  nickname: string;
  firstname: string;
  lastname: string;
  address: Address;
  avatar: string;
  email: string;
  phone: string;
};

export type StateType = {
  users: User[];
};

export const initialState: StateType = {
  users: []
};

export const getters: GetterTree<StateType, StateType> = {
  users: (state): Array<User> => state.users,
  user: (state) => (username: string) => {
    return state.users.find((user) => user.nickname === username);
  }
};

export const storeConfig = {
  state: initialState,
  getters,
  mutations: {},
  actions: {}
};

export default createStore(storeConfig);
