<template>
  <div id="app">
    <button v-if="!login.isLoggedIn" @click="loginMutation()">Login</button>
    <p v-else>Hello {{login.user}}</p>
    <h4>Todos</h4>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)">
         {{todo.text}}
      </li>
    </ul>
    <h4>Done</h4>
    <ul>
      <li v-for="done in dones">
        <input type="checkbox" :checked="done.checked" @change="toggleTodo(done)">{{done.text}}
      </li>
    </ul>

    <p>Add todo:<input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)"></p>
    <p>Get todo from server:<input type="text" v-model="id" @keyup.enter="addTodoAsync(id)"></p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import {State, Getter, Mutation, Action, namespace } from 'vuex-class';
  import { Todo, LoginState } from './types';

  const TodoGetter = namespace('todos', Getter);
  const TodoMutation = namespace('todos', Mutation);
  const TodoAction = namespace('todos', Action);

  const LoginMutation = namespace('login', Mutation);

  @Component
  export default class App extends Vue {
    @TodoGetter todos: Todo[];
    @TodoGetter dones: Todo[];     // store.gettters['dones']   ==> store.getters['todos.dones]
    @State login: LoginState;
    newTodo:Todo = {
      text:'',
      checked: false
    }
  @TodoMutation addTodo;
  @TodoMutation toggleTodo;
  @TodoAction addTodoAsync;
  id: string = "1";

  @LoginMutation('login') loginMutation;
  }
</script>

<style>
ul {
  list-style:none
}
</style>
