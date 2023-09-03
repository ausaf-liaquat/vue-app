<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  data() {
    return {
      test: "dsds",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: rgb(255, 255, 255);
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: rgb(51, 209, 143);
  padding: 0;
}
.modal p {
  color: #000000;
  font-style: normal;
}
.modal.sale {
  background: crimson;
}
.sale h1 {
  color: #fff;
}
.sale p {
  color: #fff;
}
.modal .action {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #000000;
}
.modal .action a {
  color: #000000;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.sale .action {
  color: #ffffff;
}
.sale .action a {
  color: #ffffff;
}
</style>
