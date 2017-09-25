<template>
  <div id="app">
    <h4>Todos</h4>
    <ul>
      <li v-for="todo in todos"> {{todo.text}} </li>
    </ul>
    <h4>Done</h4>
    <ul>
      <li v-for="done in dones"> {{done.text}} </li>
    </ul>

    <p><input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)"></p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import { Getter, Mutation } from 'vuex-class';
  import { Todo } from './types';

  @Component
  export default class App extends Vue {
    @Getter todos: Todo[];
    @Getter dones: Todo[];
    newTodo:Todo = {
      text:'',
      checked: false
    }
  @Mutation addTodo
  }
</script>
