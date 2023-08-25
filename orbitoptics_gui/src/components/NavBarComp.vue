<template>
    <div class="navvvv">
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">OrbitOptics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Reach Us</router-link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container-fluid{
  background-color: rgb(30, 30, 30);
height: 70px;
}
.nav-link {
  color: white;


}
.navbar-brand{
  color: white;

}
.nav-link:hover{
 
}
</style>