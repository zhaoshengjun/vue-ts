<template>
  <div id="app">
    <ul>
      <li v-for="todo in myTodos"> {{todo.text}} </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from "vue-property-decorator";
  import { State } from 'vuex-class';
  import { Todo } from './types';

  @Component
  export default class App extends Vue {
    @State("todos") myTodos: Todo[]
  }
</script>
