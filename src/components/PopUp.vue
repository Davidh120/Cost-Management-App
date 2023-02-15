<template>
  <div class="container-modal">
      <a href="" @click.prevent="$emit('close')"
        ><i class="cancel-btn fa-solid fa-xmark"></i
      ></a>
      <form @submit.prevent="onSubmit">
        <div class="user-box">
          <input type="text" name="name" required v-model="name" />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="number" name="cost" required v-model="cost" />
          <label>Cost</label>
        </div>
        <div class="user-box">
          <select class="type" v-model="type">
            <option value="">Select a Type</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Car">Car</option>
            <option value="Hobbies">Hobbies</option>
          </select>
          <label>Type</label>
        </div>
        <span class="text-danger" id="error">{{ errorMsg }}</span>
        <button type="submit" @click="add">
          <span>Add</span>
        </button>
      </form>
    </div>
</template>

<script>
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "popup",
  props: ["user", "costUpdate"],
  data: function () {
    return {
      name: "",
      cost: "",
      type: "",
      mainCollection: "users",
      costsCollection: "costs",
      errorMsg: ""
    };
  },
  methods: {
    async add() {
      try{
        let nameField = this.name.replace(/^\s+/g, '')
        if(nameField === ""){
          this.errorMsg = "Please complete all required fields"
          return false
        }else if(this.cost === ""){
          this.errorMsg = "Please complete all required fields"
          return false
        }else if(this.type === ""){
          this.errorMsg = "Please complete all required fields"
          return false
        }else{
          this.errorMsg= ""
          await setDoc(
        doc(db, this.mainCollection, this.user, this.costsCollection, this.name),
        {
          name: nameField,
          cost: this.cost,
          type: this.type,
        },
        this.$emit('close'),
        this.$emit('callData')
      );
        }
      }catch(err){
        console.log(err);
      }
    },
  },
};
</script>

<style>
.container-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: 0 15px 50px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(1px);
}

.container-modal h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #000000;
  text-align: center;
}

.container-modal .user-box {
  position: relative;
}

.container-modal .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #56c1c7;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  background: transparent;
}
.container-modal .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000000;
  pointer-events: none;
  transition: 0.5s;
}

.container-modal .user-box input:focus ~ label,
.container-modal .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #315c5f;
  font-size: 12px;
}

.container-modal button {
  border: none;
  outline: none;
  padding: 10px 0;
  margin: 0.8em 0 0.5em 0;
  border-radius: 7px;
  color: var(--c, #000000);
  width: 100%;
  font-size: 1em;
  line-height: 16px;
  position: relative;
  font-family: inherit;
  font-weight: 100;
  background: #56c1c7;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.container-modal button:hover {
  background: #448c90;
  color: aliceblue;
}

.type {
  min-width: 5em;
  width: 20em;
  min-height: 2em;
  margin-top: 0.5em;
  margin-left: 4em;
  font-family: "Roboto";
  color: #295456;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0 15px 50px 0 rgba(90, 116, 148, 0.4);
  border-radius: 3px;
  transition: all 375ms ease-in-out;
}

.cancel-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
}

.text-danger {
  color: red;
  text-align: center;
}

@media screen and (max-width: 500px) {
  .container-modal{
    width: 90%;
  }
  .type{
    width: fit-content;
  }
}
</style>
