<template>
  <div>
    <NavBarComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
  },
};
</script>

<style>
body{
  background-color: rgb(61, 61, 61)!important;
}
</style>
