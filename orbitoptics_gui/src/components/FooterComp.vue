<template>
    <div class="container-fluid">
  <div class="Footer">
    <div class="container-fluid text-center">
      <div class="row align-items-center" id="row">
        <div class="col-2">
          <h3>OrbitOptics</h3>
        </div>
        <div class="col">
          <p>Navigate our pages:</p>
          <p class="links">
            <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/products">Products</router-link> 
        <router-link to="/admin">Admin</router-link> 
        <router-link to="/contact">Contact</router-link> 

          </p>
        </div>
        <div class="col">
          <div>
            <a href="https://www.instagram.com/"
              ><img
                src="https://i.postimg.cc/Pf09sfd3/instagram-removebg-preview.png"
                alt=""
            /></a>
            <a href="https://www.facebook.com/"
              ><img
                src="https://i.postimg.cc/2yYWhB49/Screenshot-2023-08-21-100537-removebg-preview.png"
                alt=""
            /></a>
            <h5>Follow our social media</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
#row{
    padding: 4.5rem;
}
.Footer{
    height:18rem;
}
h3 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  color: white;
}
h6 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  color: white;
}
img {
  width: 50px;
}
.container-fluid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.Footer {
width:99.5%;
  border-bottom: 1px solid white;
}
p {
  text-align: left;
  color: white;
}
h5 {
  color: white;
}

.links{
  display: flex;
  gap: 2rem;
  
}

.links a{
  text-decoration: none;
  color: white;
}
</style>