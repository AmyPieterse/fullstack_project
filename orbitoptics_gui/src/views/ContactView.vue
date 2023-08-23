<template>
    <div class="contact">
   <div class="container text-center">
  <div class="row text-center">
    <div class="col text-center">
    <img class="contact-info" src="https://o.remove.bg/downloads/da986c23-05b1-41df-bce8-5e34eb36fe30/logo__3_-removebg-preview.png" alt="">
    </div>
    <div class="col">
      <form action="https://formspree.io/f/mdorgdzb" method="POST">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Full Name</label>
  <input type="name" name="fullname" class="form-control" id="exampleFormControlInput1" placeholder="Taflynne Petersen" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> 
</div>
 
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Email address</label>
  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> 
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color: white;">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
 
  <button type="submit">Send</button>
</form>
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
.contact-info{
 width: 500px;
 }
 .contact{
  
    margin-top: 50px;
 }
 

</style>