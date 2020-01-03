<template>
  <div >
    <div>
     <nav>
        <ul class="nav justify-content-end" id="nav-one">
            <li class="nav-item">
              <!-- <a class="nav-link" href="" >LOGIN</a> -->
              <router-link :to="{name: 'login'}" class="nav-link" id="login">LOGIN</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">SIGNUP</a> -->
              <router-link :to="{name: 'signup'}" class="nav-link" id="signup">SIGNUP</router-link>
            </li>
        </ul>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img src="/coast-bus-icon.png" alt="" id="icon">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" id="nav-items">
            <li class="nav-item ">
              <router-link :to="{name: 'home'}" class="link">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'about'}" class="link">ABOUT US</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'contact-us'}" class="link">CONTACT US</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'booking'}" class="link">BEFORE BOOKING</router-link>
              </li>
            
            
          </ul>
         
        </div>
      </nav>
    </div>
    <router-view/>
    <footer id="footer">
      <div class="footer">
        <div class="footer-container">
          <div class=" logo float-left">
            <router-link :to="{name: 'home'}" class="link"><img src="/coast-bus-icon.png" alt="" id="icon"></router-link>
          </div>
          <!-- <div class="icon float-right">
            <a id="back-to-top" href="#" class="animated bounce" data-animation-type="bounce" style="animation-duration: 1s; visibility: visible;"><i class="fas fa-long-arrow-alt-up" id="arrow-up"></i></a>
          </div> -->
          <div class="copyright float-right">
            <p id="paragraph">© 2019 Coast Bus </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

#footer  {
  height: 60px;
}
.logo{
  margin: 18px 0 0;
}
.footer-container{

}
#paragraph{
  font-size: 0.7833em;
    line-height: 1.6666;
    margin-bottom: 15px;
    margin: 18px 0 10px;
    color: #838383;
    padding-right: 190px;
    
}
#arrow-up{
   margin: 18px 0 0;
   
  
}
.icon{
  box-sizing: border-box;
  border-radius: 10px;
   border-radius: 50% 50% 50% 50% !important;
}
</style>
