<template>
    <div :class="($store.state.settings) ? 'block': 'hidden'" class="font-bold  text-center w-full h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap
    
    
    " 
    
    style="overflow:scroll;z-index:1000000"
    >
    
    <div @click="$store.commit('toggleSetting')" class=" opacity-75 w-full h-screen bg-theme_primary_light absolute top-0 right-0  z-10"></div>
    
    <div @click="$store.commit('toggleSetting')"  class="z-20 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out
    
    bg1 pb-20 flex flex-wrap justify-center" style="max-width:600px;padding-top:350px">
            
      
                 <nuxt-link to="/"  class="bg-primary text-secondary rounded-full p-4 px-6 text-xl hover:bg-primary_dark mx-1 flex">
                 <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
                <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                 </nuxt-link> 
                
                <nuxt-link to="/page2"  class="bg-primary text-secondary rounded-full p-4 px-6 text-xl hover:bg-primary_dark mx-1 flex">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-emoji-heart-eyes" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>
                </nuxt-link>
              
                <nuxt-link to="/page3"  class="bg-primary text-secondary rounded-full p-4 px-6 text-xl hover:bg-primary_dark mx-1 flex">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-emoji-laughing" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"/>
  <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
                </nuxt-link> 
          
            <audio src="/hbd.mp3"  autoplay loop controls class="w-full mx-auto mt-10 ">
            </audio>
        
        </div>

    </div>
</template>

<style scoped>

.bg1 {
  /* The image used */
  background-image: url("/1.jpg");

  /* Full height */
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
export default {
    mounted(){
    }
}
</script>
