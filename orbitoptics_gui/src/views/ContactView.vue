<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center mt-5">
        <h2 class="text-center">Reach Us!</h2>
    </div>
    <div class="row row d-flex justify-content-center mt-2">
      <div class="row d-flex justify-content-center mt-4 custom">
        <div class="col-md-6">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary w-50 w-md-25">Send</button>
                </div>
                
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