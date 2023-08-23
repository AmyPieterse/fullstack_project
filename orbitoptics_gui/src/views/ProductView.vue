<template>
  <div class="Product">
    <div class="card" style="width: 18rem" v-for="product in products" :key="product">
      <img :src="product.prodURL" class="card-img-top" :alt="product.prodName" />
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">
          {{ product.categoryy }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
</style>