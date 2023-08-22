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
 <h1>hellooo</h1>

    



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









</style>