import UserService from '../services/UserService/index.api';
import CounterStore from './CounterStore';
import UsersStore from './UsersStore';
import TodoStore from './TodoStore';
import TodoService from '../services/TodoService/index.api';
const counterStore = new CounterStore()
const userService=new UserService()
const usersStore=new UsersStore(userService);
const todoService=new TodoService()
const todoStore=new TodoStore(todoService);
export default {
  counterStore,
  usersStore,
  todoStore
}
