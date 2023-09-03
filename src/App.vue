<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vue Component</h1>
  <div v-if="show">
    <Modal theme="sale" @close="toggleModal">
      <h1>Ausaf Vue Project</h1>
      <p>Grab your Chance</p>
      <template v-slot:links>
        <a href="#">Sign In </a>
        <a href="#">Sign Up </a>
      </template>
    </Modal>
  </div>
  <button @click="toggleModal">Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My First Component",
      header: "First Component",
      text: "Grab Your Chance",
      show: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 10px;
  border: 0px;
  border-radius: 6px;
}
</style>
