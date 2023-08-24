<template>
  <div class="Product">
    <div class="card" v-for="product in products" :key="product">
      <div class="image">
        <img
          :src="product.prodURL"
          class="card-img-top"
          :alt="product.prodName"
        />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">
          {{ product.category }}
        </p>
        <p class="card-text">
          {{ product.amount }}
        </p>

<router-link :to="{ name: 'singleProduct', params: { id: product.prodID }, query: {
              prodName: product.prodName,
              catergory: product.category,
              prodURL: product.prodURL,
              amount: product.amount,
            }}"
        >
          <a href="" class="view">View Product</a>
        </router-link>
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
  methods: {
    // viewProduct() {
    //   this.$router.push({
    //     name: this.$name,
    //     params: this.$params.id,
    //     query: this.query.name,
    //   });
    // },
  },
};
</script>

<style scoped>
.Product {
  background-color: rgb(30, 30, 30);
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}
.card {
  text-align: center;
  background-color: rgb(30, 30, 30);
  width: 400px;
  margin: 4px;
}
.card-img-top {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid rgb(30, 30, 30);
}

h5 {
  color: white;
}
.card-text {
  color: white;
}
.view{
  color: purple;
  
}
</style>