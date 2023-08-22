<template>
    <div class="contact">
   <div class="container text-center">
  <div class="row text-center">
    <div class="col text-center">
    <img class="contact-info" src="https://i.postimg.cc/63SKTTNQ/contact-img-1.jpg" alt="">
    </div>
    <div class="col">
      <form action="https://formspree.io/f/meqbqjyk" method="POST">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Full Name</label>
  <input type="name" name="fullname" class="form-control" id="exampleFormControlInput1" placeholder="Taflynne Petersen" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> >
</div>
 
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style="color: white;">Email address</label>
  <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          /> >
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
 box-shadow:2px 2px 2px 5px black;
 margin-top: 20px;
 width: 400px;
 }
 .contact{
    margin-top: 20px;
 }
 

</style>