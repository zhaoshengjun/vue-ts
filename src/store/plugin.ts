import { Store, Module } from "vuex";
import { RootState, HistoryState, PluginOptions } from "../types";

const historyModule: Module<HistoryState, RootState> = {
  state: {
    history: []
  },
  mutations: {
    add(state, mutation) {
      state.history.push(mutation);
    },
    load(state) {
      state.history = JSON.parse(localStorage.getItem("history") || "[]");
    }
  },
  namespaced: true
};

export const history = (options: PluginOptions) => (
  store: Store<RootState>
) => {
  store.registerModule("history", historyModule);
  if (options.persist) {
    store.commit("history/load");
  }
  store.subscribe((mutation, state) => {
    if (mutation.type !== "history/add") {
      store.commit("history/add", mutation);
      if (options.persist) {
        localStorage.setItem("history", JSON.stringify(state.history.history));
      }
    }
  });
};
