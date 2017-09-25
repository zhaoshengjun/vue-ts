export interface Todo {
  text: string;
  checked: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}
