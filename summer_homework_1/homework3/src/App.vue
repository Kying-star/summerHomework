<template>
  <div>
    <todolist></todolist>
  </div>
</template>

<script>
  import todolist from "./components/todolist.vue";
  export default {
    name: "App",
    components: {
      todolist,
    },
  };
</script>
