import { State } from "../types";
import { GetterTree, MutationTree } from "vuex";

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

export const mutations: MutationTree<State> = {
  addTodo(state, newTodo) {
    const copy = Object.assign({}, newTodo);
    state.todos.push(copy);
  }
};
