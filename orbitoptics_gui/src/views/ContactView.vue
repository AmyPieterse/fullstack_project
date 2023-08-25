<template>
    <div class="contact">
   <div class="container text-center">
  <div class="row text-center">
    <div class="col text-center">
    <img class="contact-info" src="https://i.postimg.cc/PqgTqK09/logo-3-removebg-preview.png" alt="">
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
  background-image:linear-gradient(to top, #5e3377, #623080, #652d8a, #682a93, #6a269d, #6724a0, #6421a4, #601fa7, #561fa5, #4b2db8, #492a9f, #1f0a87) ;
    margin-top: 50px;
 }
 

</style>