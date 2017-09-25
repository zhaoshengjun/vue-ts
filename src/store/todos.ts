import { State, Todo } from "../types";
import { GetterTree, MutationTree, ActionTree } from "vuex";

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
  },
  toggleTodo(state, todo) {
    todo.checked = !todo.checked;
  }
};

export const actions: ActionTree<State, any> = {
  addTodoAsync({ commit }, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(data => data.json())
      .then(item => {
        const todo: Todo = {
          checked: false,
          text: item.title
        };
        commit("addTodo", todo);
        commit("setChecked", todo);
      });
  }
};
