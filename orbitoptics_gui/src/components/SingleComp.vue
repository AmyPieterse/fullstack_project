<template>
    <div>
        <div class="card">
      <div class="image">
        <img :src="$route.query.prodURL" class="card-img-top" :alt="product.prodName" />
      </div>
    
      <div class="card-body">
        <h5 class="card-title">{{$route.query.prodName}}</h5>
        <p class="card-text">
          {{ product.category }}</p>
        <p class="card-text">
          {{product.amount}}</p>
          <div class="card-footer text-body-secondary">
        <router-link to="/products" class="btn btn-primary">Back</router-link>
        <br /><br />
        </div>
    
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>