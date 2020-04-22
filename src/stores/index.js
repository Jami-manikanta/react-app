import UserService from '../services/UserService/index.api';
import CounterStore from './CounterStore';
import UsersStore from './UsersStore';

const counterStore = new CounterStore()
const userService=new UserService()
const usersStore=new UsersStore(userService);
export default {
  counterStore,
  usersStore
}
