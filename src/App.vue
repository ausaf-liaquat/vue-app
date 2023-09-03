<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vue Component</h1>
  <teleport to=".modals" v-if="show">
    <Modal theme="sale" @close="toggleModal">
      <h1>Ausaf Vue Project!</h1>
      <p>Grab your Chance</p>
      <template v-slot:links>
        <a href="#">Sign In </a>
        <a href="#">Sign Up </a>
      </template>
    </Modal>
  </teleport>
  <div v-if="showTwo">
    <Modal @close="toggleModalTwo">
      <h1>Ausaf Vue Project 2!</h1>
      <p>Grab your Chance 2</p>
      <!-- <template v-slot:links>
        <a href="#">Sign In </a>
        <a href="#">Sign Up </a>
      </template> -->
    </Modal>
  </div>
  <button @click="toggleModal">Show Modal</button>

  <button  @click="toggleModalTwo">Show Modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      showTwo: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    toggleModalTwo() {
      this.showTwo = !this.showTwo;
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
.modals {
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
  margin: 4px;
}
</style>
