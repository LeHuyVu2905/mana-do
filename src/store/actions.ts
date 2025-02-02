import { Todo, TTodoStatus } from "models";
import {
  CREATE_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  SET_TODO,
  TOGGLE_ALL_TODOS,
  UPDATE_TODO_CONTENT,
  UPDATE_TODO_STATUS,
} from "./action-types";

export interface SetTodoAction {
  type: typeof SET_TODO;
  payload: Array<Todo>;
}

export interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export interface UpdateTodoStatusAction {
  type: typeof UPDATE_TODO_STATUS;
  payload: {
    todoId: string;
    status: TTodoStatus;
  };
}

export interface UpdateTodoContentAction {
  type: typeof UPDATE_TODO_CONTENT;
  payload: {
    todoId: string;
    content: string;
  };
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export interface DeleteAllTodosAction {
  type: typeof DELETE_ALL_TODOS;
}

export interface ToggleAllTodosAction {
  type: typeof TOGGLE_ALL_TODOS;
  payload: boolean;
}

export type AppActions =
  | SetTodoAction
  | CreateTodoAction
  | UpdateTodoStatusAction
  | DeleteTodoAction
  | DeleteAllTodosAction
  | ToggleAllTodosAction
  | UpdateTodoContentAction;
