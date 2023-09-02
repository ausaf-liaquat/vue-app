<template>
  <div class="backdrop">
    <div class="modal">
        <h1>{{title}}</h1>
        <h4>{{header}}</h4>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['header','title','text'],
    data() {
        return {
            test:'dsds'
        }
    },
};
</script>
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>
