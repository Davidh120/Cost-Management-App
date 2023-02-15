<template>
  <div>
    <div class="login-box" v-if="!register">
      <h2>Sign in</h2>
      <form @submit.prevent="onSubmit">
        <div class="user-box">
          <input type="text" name="email" required v-model="email" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" required v-model="password" ref="passwordInput"/>
          <label>Password</label>
          <a href="" @click.prevent="togglePasswordVisibility" v-if="!isPasswordVisible"><i class="lock-icon fa-solid fa-lock"></i></a>
          <a href="" @click.prevent="togglePasswordVisibility" v-else><i class="lock-icon fa-solid fa-lock-open"></i></a>
        </div>
        <span class="text-danger" id="error">{{ errorMsg }}</span>
        <button type="submit" @click="signIn">
          <span>Submit</span>
        </button>
        <div class="sign-method">
          <a href="" @click.prevent="register = true"
            ><small>No account? Sign up</small></a
          >
        </div>
      </form>
    </div>
    <div class="register-box" v-else>
      <h2>Sign up</h2>
      <form @submit.prevent="onSubmit">
        <div class="user-box">
          <input type="text" name="name" required v-model="name" />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="text" name="email" required v-model="email" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" required v-model="password" ref="passwordInput"/>
          <label>Password</label>
          <a href="" @click.prevent="togglePasswordVisibility" v-if="!isPasswordVisible"><i class="lock-icon fa-solid fa-lock"></i></a>
          <a href="" @click.prevent="togglePasswordVisibility" v-else><i class="lock-icon fa-solid fa-lock-open"></i></a>
        </div>
        <div class="user-box">
          <input
            type="password"
            name="confirm_password"
            required
            v-model="confirmPassword"
            ref="passwordInput2"
          />
          <label>Cofirm Password</label>
          <a href="" @click.prevent="togglePasswordVisibility" v-if="!isPasswordVisible2"><i class="lock-icon fa-solid fa-lock"></i></a>
          <a href="" @click.prevent="togglePasswordVisibility" v-else><i class="lock-icon fa-solid fa-lock-open"></i></a>
        </div>
        <span class="text-danger" id="error">{{ errorMsg }}</span>
        <button type="submit" id="register" @click="signUp()">
          <span>Submit</span>
        </button>
        <div class="sign-method">
          <a href="" @click.prevent="register = false"
            ><small>Already have an account? Sign in</small></a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "login",
  data: function () {
    return {
      register: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: "",
      isPasswordVisible: false,
      isPasswordVisible2: false,
      mainCollection: "users",
      costsCollection: "costs"
    };
  },
  methods: {
    signUp: function () {
      let error = false;
      //email
      var mail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!mail.test(this.email)) {
        error = true;
        this.errorMsg = "Invalid email";
      } else if (this.password != this.confirmPassword) {
        error = true;
        this.errorMsg = "Confirm password failed";
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          this.email = res.user.email;
          this.register = false;
          this.addUser()
          this.errorMsg = ""
          this.isPasswordVisible = false;
          this.isPasswordVisible2 = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          this.errorMsg = errorCode;;
        });
      }
    },
    async addUser() {
      const user = await setDoc(doc(db, this.mainCollection, this.email), {
        name: this.name,
        email: this.email,
      });

      const costs = await setDoc(doc(db, this.mainCollection, this.email, this.costsCollection, "example"), {
        name: "Example",
        cost: 10,
        type: 'Home'
      });
    },
    signIn: function () {
      let error = false;
      var mail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!mail.test(this.email)) {
        error = true;
        this.errorMsg = "Invalid email";
      } else {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((res) => {
            this.$emit("login", res.user.email);
            this.error = "";
          })
          .catch((error) => {
            this.errorMsg = "Invalid email or password";
            console.error(error);
          });
      }
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.isPasswordVisible2 = !this.isPasswordVisible2;
      this.$refs.passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
      this.$refs.passwordInput2.type = this.isPasswordVisible2 ? 'text' : 'password';
    }
  },
};
</script>

<style>

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.login-box,
.register-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 50px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
}

.login-box h2,
.register-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #000000;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
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
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000000;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #315c5f;
  font-size: 12px;
}

.lock-icon{
  position: absolute;
  top: 12px;
  right: 0;
  pointer-events: stroke;
  color: #448c90;
}

.register-box .user-box {
  position: relative;
}

.register-box .user-box input {
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
.register-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000000;
  pointer-events: none;
  transition: 0.5s;
}

.register-box .user-box input:focus ~ label,
.register-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #315c5f;
  font-size: 12px;
}

.login-box button,
.register-box button {
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
  transition: all 0.2s ease-in
}

.login-box button:hover,
.register-box button:hover {
  background: #448c90;
  color: aliceblue;
}

.sign-method a {
  text-decoration: none;
  color: #3a777a;
}

.text-danger {
  color: red;
  text-align: center;
}

@media screen and (max-width: 500px) {
  .login-box, .register-box{
    width: 90%;
  }
}
</style>
