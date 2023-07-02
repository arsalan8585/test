import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Accountverfication from "../views/Accountverfication.vue";
import Lastorders from "../views/Lastorders.vue";
import Almaex from "../views/Almaex.vue";
import giftcarti from "../views/giftcarti.vue";
import level2 from "../views/level2.vue";
import inventories from "../views/inventories.vue";
import variz from "../views/variz.vue";
import varizbanki from "../views/varizbanki.vue";
import bardasht from "../views/bardasht.vue";
import listkharid from "../views/listkharid.vue";
import listforosh from "../views/listforosh.vue";
import varizobardasht from "../views/varizobardasht.vue";
import mobadelat from "../views/mobadelat.vue";
import account from "../views/account.vue";
import hesab from "../views/hesab.vue";
import device from "../views/device.vue";
import ticket from "../views/ticket.vue";
import ticket1 from "../views/ticket1.vue";
import modal from "../views/modal.vue";
import modal2 from "../views/modal2.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Almaex,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Accountverfication",
    name: "Accountverfication",
    component: Accountverfication,
  },
  {
    path: "/Lastorders",
    name: "Lastorders",
    component: Lastorders,
  },
  {
    path: "/almaex",
    name: "almaex",
    component: Almaex,
  },

  {
    path: "/giftcarti",
    name: "giftcarti",
    component:giftcarti,
  },

  {
    path: "/level2",
    name: "level2",
    component:level2,
  },

  {
    path: "/inventories",
    name: "inventories",
    component:inventories,
  },

  {
    path: "/variz",
    name: "variz",
    component:variz,
  },

  {
    path: "/varizbanki",
    name: "varizbanki",
    component:varizbanki,
  },

  {
    path: "/bardasht",
    name: "bardasht",
    component:bardasht,
  },

  {
    path: "/listkharid",
    name: "listkharid",
    component:listkharid,
  },

  {
    path: "/listforosh",
    name: "listforosh",
    component:listforosh,
  },

  {
    path: "/varizobardasht",
    name: "varizobardasht",
    component:varizobardasht,
  },

  {
    path: "/mobadelat",
    name: "mobadelat",
    component:mobadelat,
  },

  {
    path: "/account",
    name: "account",
    component:account,
  },

  {
    path: "/hesab",
    name: "hesab",
    component:hesab,
  },

  {
    path: "/device",
    name: "device",
    component:device,
  },

  {
    path: "/ticket",
    name: "ticket",
    component:ticket,
  },

  {
    path: "/ticket1",
    name: "ticket1",
    component:ticket1,
  },

  {
    path: "/modal",
    name: "modal",
    component:modal,
  },

  {
    path: "/modal2",
    name: "modal2",
    component:modal2,
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;