import { createStore, MutationTree } from "vuex";

export type User = {
  nickname: string;
  firstname: string;
  lastname: string;
  address: string;
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

const store = createStore({
  state: initialState,
  mutations: {},
  actions: {},
  modules: {}
});

export default store;
