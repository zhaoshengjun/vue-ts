import { MutationPayload } from "vuex";

export interface Todo {
  text: string;
  checked: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface RootState {
  count: number;
  todos: TodoState;
  login: LoginState;
  history: HistoryState;
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}

export interface HistoryState {
  history: MutationPayload[];
}

export interface PluginOptions {
  persist?: boolean;
}
