<template>
  <div class="list_body">
    <h1>todos</h1>
    <hr class="todos_hr" />
    <div class="input_todos">
      <button @click="addtodo">
        <div class="add"></div>
      </button>
      <input v-model="todolist.todotext" type="text" placeholder="今天干啥呢。" />
      <div class="enter"></div>
    </div>
    <div class="show_todos">
      <li v-for="todo in todolist.todos" :key="todo.id">
        <a>{{ todo.name }}</a>
        <button @click="remove(todo.name)" :key="todo.id">
          <div class="delete"></div>
        </button>
      </li>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
let index = 0;
export default {
  setup () {
    const todolist = reactive({
      todos: [],
      todotext: ""
    })
    function gettodo () {
      let todos = [];
      axios
        .get("https://jsonplaceholder.typicode.com/todos/?userId=1")
        .then(res => {
          res.data.forEach(e => {
            let todo = {};
            todo.name = e.title;
            todo.id = index++;
            todolist.todos.push(todo);
          });
          console.log(todolist.todos);
        })
        .catch(error => {
          console.log(error);
        });

      document.onkeydown = function (e) {
        var key = window.event.keyCode;
        if (key == 13) {
          addtodo();
        }
      };
    }
    function addtodo () {
      if (todolist.todotext == "") return;
      let todo = {};
      todo.name = todolist.todotext;
      todo.id = index++;
      todolist.todos.push(todo);
      todolist.todotext = "";
    }
    function remove (e) {
      console.log(e);
      todolist.todos = todolist.todos.filter(todo => {
        return todo.name !== e;
      });
    }
    gettodo();
    return {
      addtodo,
      remove,
      todolist
    }

  },
};
</script>
<style lang="scss">
.list_body {
  width: 400px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  .todos_hr {
    width: 100%;
    background-color: black;
  }
  .input_todos {
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid #8d8989;
    button {
      height: 26px;
      width: 26px;
      background-color: #ffffff;
      border: 0;
      outline-style: none;
      .add {
        height: 10px;
        width: 10px;
        background-color: #ffffff;
        background-image: url(../assets/add.png);
        background-size: cover;
      }
      .add:hover {
        background-image: url(../assets/add_on.png);
      }
    }
    .enter {
      height: 26px;
      width: 26px;
      margin-right: 7px;
      background-image: url(../assets/enter.png);
      background-size: cover;
      border: 0px;
      background-color: #ffffff;
    }
  }
  .show_todos {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  input {
    width: 374px;
    height: 25px;
    border: 0;
    outline-style: none;
  }
  li {
    height: 40px;
    margin-top: 5px;
    border-radius: 2px;
    padding-left: 10px;
    border: 1px solid #000000;
    text-align: left;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
    align-items: center;
    a {
      height: 40px;
      width: 400px;
    }
    button {
      line-height: 40px;
      margin-right: 5px;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      border: 0;
      outline-style: none;
      .delete {
        height: 14px;
        width: 14px;
        margin-left: -4px;

        background-image: url(../assets/delete.png);
        background-size: cover;
      }
      .delete:hover {
        background-image: url(../assets/delete_on.png);
      }
    }
  }
}
</style>
