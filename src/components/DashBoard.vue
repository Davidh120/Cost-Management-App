<template>
  <div class="container">
    <div class="filter">
      <label for="cars">Sort by:</label>
      <select class="order-by" v-model="order" @change="this.obtainData()">
        <option value="">All</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Car">Car</option>
        <option value="Hobbies">Hobbies</option>
      </select>
      <button class="add-btn" @click="showModal=true">Add Item</button>
    </div>
    <div class="table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Type</th>
            <th width="230">Actions</th>
          </tr>
        </thead>
        <tbody v-for="(cost, index) in data" v-bind:key="index">
          <tr>
            <td>{{ cost.costData.name }}</td>
            <td>${{ cost.costData.cost }}</td>
            <td>{{ cost.costData.type }}</td>
            <td>
              <a href="" name="edit" class="icon-button" id="{{ index }}" @click.prevent="showModal2=true, costUpdate=cost">
                <i class="fa-regular fa-pen-to-square"></i></a>
              <a href="" name="delete" class="icon-button" id="{{ index }}" @click.prevent="this.delete(cost.id)">
                <i class="fa-regular fa-trash-can"></i></a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Cost</td>
            <td>${{ totalCost }}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <popUp v-if="showModal" v-bind:user="user" @close="showModal = false" @callData="this.obtainData()"></popUp>
    <popUp2 v-if="showModal2" v-bind:user="user" v-bind:costUpdate="costUpdate" @close="showModal2 = false" @callData="this.obtainData()"></popUp2>
  </div>
</template>

<script>
import popUp from "./PopUp.vue"
import popUp2 from "./PopUp2.vue"
import { doc, collection, getDocs, query, where, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default {
  name: "dash-board",
  props: ['user'],
  data: function () {
    return {
      showModal: false,
      showModal2: false,
      mainCollection: "users",
      costsCollection: "costs",
      data: [],
      totalCost: 0,
      costUpdate: {},
      order: ""
    };
  },
  components:{
    popUp,
    popUp2
  },
  beforeMount: function(){
    this.obtainData();
  },
  methods: {
    async obtainData(){
      if(this.order == ""){
        await getDocs(collection(db, this.mainCollection, this.user, this.costsCollection))
        .then((res) => {
          this.data=[]
          res.forEach((doc) => {
            let costData={id:doc.id, costData:doc.data()}
            this.data.push(costData)
          });
          this.calcTotalCost();
        })
        .catch((err) => {
          console.log(err);
        })
      }else{
        await getDocs(query(collection(db, this.mainCollection, this.user, this.costsCollection), where("type", "==", this.order)))
        .then((res) => {
          this.data=[]
          res.forEach((doc) => {
            let costData={id:doc.id, costData:doc.data()}
            this.data.push(costData)
        });
        this.calcTotalCost();
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    calcTotalCost: function(){
      let sum = 0;
      this.data.forEach((item) => {
        sum += item.costData.cost
      })
      this.totalCost = sum;
    },
    async delete(id){
      await deleteDoc(doc(db, this.mainCollection, this.user, this.costsCollection, id));
      this.obtainData()
    }
  }
};
</script>

<style>
.container {
  margin: auto;
  width: 95%;
  height: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 50px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
}

.filter {
  margin: 0 0.5em 0 0.5em;
}

.order-by {
  min-width: 5em;
  width: 6em;
  min-height: 1.5em;
  margin-left: 0.5em;
  font-family: "Roboto";
  color: #295456;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0 15px 50px 0 rgba(90, 116, 148, 0.4);
  border-radius: 3px;
  transition: all 375ms ease-in-out;
}

.add-btn {
  float: right;
  border: none;
  outline: none;
  border-radius: 15px;
  color: var(--c, #000000);
  font-size: 1em;
  line-height: 16px;
  width: 8em;
  height: 1.5em;
  margin-top: -2px;
  font-family: inherit;
  font-weight: 100;
  background: #56c1c7;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.add-btn:hover {
  background: #448c90;
  color: aliceblue;
}

table {
  border: 1px solid darken(#56c1c7, 5%);
  border-radius: 10px;
  box-shadow: 0 1px 15px 0 rgba(90, 147, 148, 0.352);
  margin: 1em auto;
  overflow: hidden;
  width: 100%;
}

td {
  color: #56c1c7;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}

th {
  color: #ffffff;
  padding: 10px;
  background-color: #448c90;
  font-weight: 300;
}

tfoot td {
  border-top: 1px solid #56c1c7;
}

tfoot td:first-child {
  background: #448c90;
  color: #ffffff;
}

.icon-button {
  margin: 0.5em;
}

@media screen and (max-width: 700px) {
  thead,
  tbody,
  tr,
  td {
    display: block;
  }
  table tr:nth-child(2n) {
    background-color: white;
  }
  table tr:nth-child(2n + 1) {
    background-color: #edf7f8;
  }
  tbody td {
		 clear: both;
		 margin-left: 100px;
		 padding: 4px 20px 4px 90px;
		 position: relative;
		 text-align: left;
	}
	tbody td:before {
		 color: #56c1c7;
		 content: '';
		 display: block;
		 left: 0;
		 position: absolute;
	}
  thead td:nth-child(1):before,
  tbody td:nth-child(1):before {
    content: "Name:";
  }
  thead td:nth-child(2):before,
  tbody td:nth-child(2):before {
    content: "Cost:";
  }
  thead td:nth-child(3):before,
  tbody td:nth-child(3):before {
    content: "Type:";
  }
  thead td:nth-child(4):before,
  tbody td:nth-child(4):before {
    content: "Actions:";
  }
  thead tr,
  tbody tr {
    padding: 10px 0;
    position: relative;
  }
  thead {
    display: none;
  }
  tbody tr {
    border-bottom: 1px solid #56c1c7;
  }
  .icon-button {
  margin: 0 0.5em 0 0;
  }
  tfoot td {
    border: none;
    padding: 0.2em;
  }
}

@media screen and (max-width: 500px) {
  .add-btn {
  width: 5em;
}
tbody td {
		 clear: both;
		 margin-left: 25%;
		 padding: 4px -10px 4px 50px;
		 position: relative;
		 text-align: left;
	}
}
</style>
