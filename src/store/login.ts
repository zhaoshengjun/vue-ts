import { GetterTree, MutationTree, Store, Module } from "vuex";
import { LoginState, RootState } from "../types";

const state: LoginState = {
  user: "",
  isLoggedIn: false
};

const mutations: MutationTree<LoginState> = {
  login(state) {
    state.isLoggedIn = true;
    state.user = "Alex";
  }
};

export const login: Module<LoginState, RootState> = {
  state,
  mutations,
  namespaced: true
};

export function load(store: Store<any>) {}
