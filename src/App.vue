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

  <button @click="toggleModalTwo">Show Modal 2</button>

  <h1>Ninja Reaction Timer</h1>

  <button @click="startGame" :disabled="isPlaying">Play</button>

  <Block v-if="isPlaying" :delay="delay"> </Block>

</template>

<script>
import Modal from "./components/Modal.vue";

import Block from "./components/Block.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      showTwo: false,
      isPlaying: false,
      delay: null,
    };
  },
  components: {
    Modal,
    Block,
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
    toggleModalTwo() {
      this.showTwo = !this.showTwo;
    },
    // Game
    startGame() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;

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
