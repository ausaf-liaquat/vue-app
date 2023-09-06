<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click ME</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      reactionTimer: 0,
      timer: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  methods: {
    startTimer() {
        this.timer =setInterval(() => {
            this.reactionTimer +=10
        }, 10);
    },
    stopTimer(){
        
        clearInterval(this.timer)
        console.log(this.reactionTimer);
    }
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
