<template>
   <body>
    
 
 <div class="container">
<!-- <img src="https://media.istockphoto.com/id/494497678/photo/milky-way-at-dawn-and-silhouette-of-a-telescope.jpg?s=612x612&w=0&k=20&c=FigoHw75tv92d0M9MK9jaI6LGCZsM9DZBjm6KD9QbsE=" alt="" class="image"> -->
<img cl src="https://i.postimg.cc/htt8VpF5/wallpaperflare-com-wallpaper.jpg" alt="" class="image">
<div class="overlay"></div>
<div class="text">OrbitOptics <h4>An e-commerce making it easier for astronomers</h4> </div>
</div>
<section>
<div class="blogs">
  <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/NMFtnkDL/wallpaperflare-com-wallpaper-2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">The Space Elements</h5>
    <p class="card-text">
Title: Exploring the Cosmos: Unveiling the Wonders of Space Elements

In the vast tapestry of the universe, there exists a captivating realm that has intrigued humanity for centuries: space. Beyond the boundaries of our home planet, a symphony of celestial bodies, forces, and phenomena dance together in perfect harmony, shaping the very fabric of existence.</p>

  </div>
</div>
    </div>
    <!-- ****************************** -->
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/rpP43QTP/wallpaperflare-com-wallpaper-3.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Visting Space</h5>
    <p class="card-text">
Title: Embarking on the Extraordinary: An Odyssey of Visiting Space

In the annals of human history, few feats stand as profoundly remarkable and awe-inspiring as the prospect of venturing beyond the confines of our home planet and journeying into the cosmos. Welcome to "Visiting Space," a blog that encapsulates the beauty.</p>
  
  </div>
</div>
    </div>
    <!-- ******************** -->
    <div class="col">
      <div class="card" style="width: 18rem;">
  <img src="https://i.postimg.cc/fypDhSyZ/wallpaperflare-com-wallpaper-4.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">The Cosmos</h5>
    <p class="card-text">Title: Navigating the Cosmos: Unveiling the Mysteries of the Universe

In the grand tapestry of existence, the cosmos stands as an endless expanse of wonder, intrigue, and untold secrets. Welcome to "The Cosmos," a blog that invites you to embark on an intellectual journey that spans the depths of space, time, and human understanding.</p>
  </div>
</div>
    </div>
</div>
</div>
<div class="cosmetic stories">
 <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>

</div>
</div>

</section>
   </body>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;

}
.image{
  display: block;
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* height: 80%; */
  /* width: 100%; */
  opacity: 0;
  transition:6s ease;
}
.container:hover .overlay{
  opacity:1;
}
.text{
  text-align: center;
  color: white;
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  -webkit-transform: translate(-60%, -60%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}
.blogs{background-image: linear-gradient(to top, #5e3377, #623080, #652d8a, #682a93, #6a269d, #6724a0, #6421a4, #601fa7, #561fa5, #4b2db8, #492a9f, #1f0a87);
}

/* .container img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    aspect-ratio: 3/5;
    margin-top: 5px;
} */
.container {
    /*row*/
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    /* margin-top: 5%;
    border: 5px solid rgba(10, 18, 33, 0.59); */
    border-radius: 10px;
}
/*card*/
.card {
    box-shadow: 2px 2px 20px black;
    width: 30rem;
    margin: 20px;
    /* text-align: center; */
    margin-left: 80px;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: var(---second-color);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
    transition: 1s;
    flex-grow: 0;
    flex-shrink: 0;
}






</style>