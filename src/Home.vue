
<template>
  <body>
    <section class="section">
   <div class="columns">
  <div class="column">
    <app-news-imp></app-news-imp>
  </div>
  <div class="column">
   <app-news></app-news>
  </div>
</div>
  </section>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
    <div class="container">
      <div class="columns">
     <div class="column is-one-third is-left">
       <p class="title">
       Try the Advanced Search!
         </p>
       </div>
       <div class="column">
         <app-search-adv></app-search-adv>
         
       </div>
      </div>
    </div>
      </div>
  </section>
  
  </body>
</template>

<style scoped>
body{
  padding-top: 40px;
  z-index: -1;
}
@media screen and (max-width: 1023px){
  body{
    padding-top: 80px;
    z-index: -1;
  }
}
</style>

