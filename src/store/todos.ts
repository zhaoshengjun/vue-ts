import { State } from "../types";
import { GetterTree } from "vuex";

export const state: State = {
  todos: [
    { text: "Buy Milk", checked: false },
    { text: "Go shopping", checked: true },
    { text: "Get haircut", checked: false }
  ]
};

export const getters: GetterTree<State, any> = {
  todos: state => state.todos.filter(t => !t.checked),
  dones: state => state.todos.filter(t => t.checked)
};
