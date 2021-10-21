import { createStore, MutationTree } from "vuex";

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

export const mutations: MutationTree<StateType> = {
  addUser: (state: StateType, user: User): void => {
    state.users.push(user);
  }
};

//https://randomuser.me/documentation

export const storeConfig = {
  state: initialState,
  mutations: {},
  actions: {}
};

export default createStore(storeConfig);
