import { TodoState, Todo, RootState } from "../types";
import { GetterTree, MutationTree, ActionTree, Module } from "vuex";

type TodoGetter = GetterTree<TodoState, RootState>;

export const state: TodoState = {
  todos: [
    { text: "Buy Milk", checked: false },
    { text: "Go shopping", checked: true },
    { text: "Get haircut", checked: false }
  ]
};

export const getters: TodoGetter = {
  todos: (state, getters, rootState) => state.todos.filter(t => !t.checked),
  dones: state => state.todos.filter(t => t.checked)
};

export const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    const copy = Object.assign({}, newTodo);
    state.todos.push(copy);
  },
  toggleTodo(state, todo) {
    todo.checked = !todo.checked;
  }
};

export const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({ commit, dispatch, rootState }, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(data => data.json())
      .then(item => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ": " + item.title
        };
        commit("addTodo", todo);
        commit("sum", null, { root: true });
        // commit("login/login", null, { root: true });
        // dispatch("login/login", null, { root: true });
      });
  }
};

export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
