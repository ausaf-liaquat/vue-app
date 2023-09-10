<template>
  <form>
    <label for="">Role</label>
    <select v-model="type">
      <option value="Web Developer">Web Developer</option>
      <option value="Graphics Designer">Graphics Designer</option>
      <option value="Seo Operator">Seo Operator</option>
    </select>
    <label for="">Email:</label>
    <input type="text" name="email" v-model="email" />
    <label for="">Password:</label>
    <input type="password" name="password" v-model="password" />

    <label for="">Agree:</label>
    <input type="checkbox" v-model="agree" />
    <label for="">Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkills" />
    <div v-for="skill in skills" :key="skill" class="pill">
     
        <span @click="removeSkill(skill)" >{{ skill }}</span>
   
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Type: {{ type }}</p>
  <p>Agree: {{ agree }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      type: "",
      agree: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkills(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(e){
        if (this.skills.includes(e)) {
          this.skills.pop(e);
        }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px;
  background: rgb(238, 184, 184);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  /* border-bottom: 1px solid #000000; */
  color: #555;
}
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  /* border-bottom: 1px solid #000000; */
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    border-radius: 10px;
    background: #555;
    color: aliceblue;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    
}
</style>
