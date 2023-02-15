<template>
  <div>
    <div v-if="!logon">
      <login v-on:login="login($event)"></login>
    </div>
    <div id="dash-board" v-else>
      <div class="nav-header">
        <div class="nav-brand">
          <h2>Cost Management App</h2>
        </div>
        <div class="header-links">
          <ul>
            <li data-menuanchor="secondPage"><a href="" @click.prevent="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out</a></li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <h1 class="rise-text">Cost List</h1>
        <dash-board v-bind:user="idUser"></dash-board>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import login from "./components/Login.vue";
import dashBoard from "./components/DashBoard.vue";

export default {
  name: "app",
  data: function () {
    return {
      logon: false,
      idUser: ""
    };
  },
  components: {
    login,
    dashBoard
  },
  methods: {
    login: function (user) {
      this.logon = true;
      this.idUser = user;
    },
    logout: function () {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.logon = false;
          this.idUser = "";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
body {
  margin: 0 0 1.5em 0;
  padding: 0;
  font-family: "Raleway", sans-serif !important;
}


.nav-header {
    background: #ffff;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none !important;
}

.nav-brand {
  position: fixed;
  left: 1em;
  z-index: 600;
  padding: auto;
  color: #000000;
}

.header-links {
  position: fixed;
  width: 100%;
  z-index: 500;
  padding-bottom: 3em;
  background: #ffffff;
}

.header-links li {
  color: white;
  display: inline;
  position: fixed;
  right: 1em;
  margin-top: 0.5em;
  padding: auto;
  font-size: 16px;
}

.header-links a {
  color: #000000;
  transition: all 0.2s ease-in;
}

.header-links a:hover {
  color: #56c1c7;
}

@-webkit-keyframes rise {
  0% {padding-top: 25em;}
  60% {padding-top: 2em; opacity: 0.5;}
  80% {padding-top: 2em; border-bottom: 0px solid #fff; opacity: 0.8; text-shadow: 2px 2px 5px #fff;}
  100% {padding-top: 2em; border-bottom: 0.35em solid #fff; opacity: 1; text-shadow: 0;}
}

@keyframes rise {
  0% {padding-top: 25em;}
  60% {padding-top: 2em; opacity: 0.5;}
  80% {padding-top: 2em; border-bottom: 0px solid #fff; opacity: 0.8; text-shadow: 2px 2px 200px rgba(255, 255, 255, 1);}
  100% {padding-top: 2em; border-bottom: 0px solid  #fff;opacity: 1; text-shadow: 200px 200px 200px rgba(255, 255, 255, 0);}
}


.rise-text {
  position: relative;
  text-align: center;
  margin: auto;
  margin-bottom: 0.7em;
  opacity: 0;
  padding-top: 100%;
  color: #56c1c7;
  border-bottom: 0;
  text-shadow: 2px 2px 5px #0000007e;
  font-family: Trebuchet MS, sans-serif;
  font-size: 2em;
  font-weight: bold;
  animation-name: rise;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0, 0.25, 0.55, 1);
  animation-fill-mode: forwards;
}

@media screen and (max-width: 500px) {
  .nav-brand{
    font-size: 0.7em;
  }

  .header-links{
    font-size: 0.5em;
  }
}
</style>
