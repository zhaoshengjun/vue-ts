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
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}
