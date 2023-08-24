<template>
<div class="card-card">
    <!-- <img :src="$route.query.prodURL" class="test" alt="">
    <input type="text" v-model="$route.query.prodName">
    <p class="text-white">{{$route.query.prodName}}</p> -->

    <div class="card" style="width: 18rem;">
  <img :src="$route.query.prodURL" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ $route.query.prodName}}</h5>
    <h5 class="card-title">{{ $route.query.catergory}}</h5>
    <p class="card-text">{{ $route.query.amount }}</p>

  </div>
</div>
</div>
</template>

<script>
// import SingleComp from '@/components/SingleComp.vue';
//     export default {
//       components: {
//         SinglePage
//       }  
//     }
</script>

<style scoped>

img{

    display: block;
    max-width: 100%;
}
.card-img-top{
    background-color:rgb(30, 30, 30) ;
}
.test{
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
.card{
text-align: center;
}
.card-card{
    display: flex;
    justify-content: center;
}

</style>