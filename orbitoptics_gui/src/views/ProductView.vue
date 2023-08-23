<template>
  <div class="Product">
    <div class="card" v-for="product in products" :key="product">
      <div class="image">
        <img :src="product.prodURL" class="card-img-top" :alt="product.prodName" />
      </div>
    
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
.Product{
  display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}
.card{
  text-align: center;
  background-color:  rgb(30, 30, 30);
  width: 400px;
  margin: 4px;
}
.card-img-top{
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid rgb(30, 30, 30);
}

h5{
  color: white;
}
</style>