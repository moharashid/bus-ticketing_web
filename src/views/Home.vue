<template>
  <body>
    
     
     
    
    
      <div class="slide-show">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-9 " id="col-one">
              <div class="wrapper">
                <div class="side-bar">
                  <ul class="side-bar-nav">
                    <li class="active"><a href="#search-buses"  data-toggle = "tab" class="home">SEARCH BUSES</a></li>
                    <li><a href="#booking" class="home" data-toggle="tab">BOOKING STATUS</a></li>
                    <li><a href="#hire" class="home" data-toggle="tab">HIRE BUS</a></li>
                    <li><a href="#ticket" class="home" data-toggle="tab">TICKET CANCELLATION</a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade active in" id="search-buses" role="tab-panel">
                    <form action="">
                     <div class="title-container">
                        <h2 class="search-title">Search and Book Buses</h2>
                        <p class="search-text">We're bringing you a new level of comfort</p>
                        <i class="fa fa-bus" aria-hidden="true"></i>
                     </div>
                     <div class="search-content">
                        <div class="row" id="travel">
                          <div class="col">
                            <label class="radio radio-inline checked" id="radio">
                              <input type="radio" checked="checked" name="return_date" onclick="if (this.checked) { jQuery('#return_date').hide(); jQuery('#id_return').val(''); }">ONEWAY
                              
                            </label>
                          </div>
                          <div class="col">
                            <label class="radio radio-inline checked" id="radio">
                              <input type="radio" name="return_date" onclick="if (this.checked) { jQuery('#return_date').show(); }">ROUND TRIP
                          </label>
                          
                          </div>
                          
                        </div>
                        <div id="return_date" style="clear:both; display: none;">
                          <input type="text" class="form-control full-width" data-date-format="yyyy-mm-dd" id="example3" name="return_date" placeholder="choose return date">
                        
                        </div>

                        <hr>
                        <div class="row" id="travel">
                          <div class="col selector">
                            <label class="label-selector">GOING TO</label>
                            <select class="form-control" name="from" id="" required="required">
                              <option value=""></option>
                              <option value="nairobi">Nairobi</option>
                              <option value="mombasa">Mombasa</option>
                            </select>
                          </div>
                          <div class="col selector">
                            <label class="label-selector">LEAVING FROM</label>
                            <select class="form-control" name="from" id="" required="required">
                              <option value=""></option>
                              <option value="nairobi">Nairobi</option>
                              <option value="mombasa">Mombasa</option>
                            </select>
                            <span class="custom-selector"></span>
                            
                            
                          </div>
                        </div>
                        <hr>
                        <div class="row" id="travel">
                          <div class="col">
                            <label for="" class="label-selector">TRAVEL DATE</label>
                            <div class="date-picker">
                              <input type="date" class="input-text full-width" id="date">
                            </div>
                          </div>
                        </div>
                        <hr>
                        <div class="row" id="travel">
                          <button type="submit" class="btn btn-warning btn-block">
                            <i class="fa fa-search"></i>PROCEED TO RESULT
                          </button>
                        </div>
                     </div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="booking">
                    <form action="">
                      <div class="title-container-two">
                        <h2 class="search-title">Book Status</h2>
                        <p class="search-text">We're bringing you a new level of comfort</p>
                        <i class="fas fa-info"></i>
                      </div>
                      <div class="search-content">
                        <hr>
                        <h5 class="search-title-two">Check your booking status</h5>
                        <label for="">TICKET NUMBER</label>
                        <input type="text" class="form-control full-width" name="receipt_no" placeholder="please enter ticket number" required="" id="receipt">
                        <hr>
                        <button type="submit" class="btn btn-primary btn-block">Check Status</button>
                      </div>
                      

                    </form>
                  </div>
                  <div class="tab-pane fade" id="hire">
                    <form action="">
                      <div class="title-container-three">
                        <h2 class="search-title">Hire A Bus</h2>
                        <p class="search-text">We are happy to offer bus hire services from major cities acroos Kenya</p>
                        <i class="fa fa-bus" aria-hidden="true"></i>
                     </div>
                     <div class="search-content">
                       <div class="row" id="travel">
                         <div class="col">
                           <label for="">FULL NAME</label>
                           <input type="text" class="form-control full-width" placeholder="enter your full name" required>
                         </div>
                         <div class="col">
                           <label for="">MOBILE NUMBER</label>
                           <input type="text" class="form-control full-width" required>

                         </div>
                       </div>
                       <hr>
                       <h5 class="search-title-three">When</h5>
                       <div class="row" id="travel">
                         
                         <div class="col-md-5">
                           <div class="datepicker-wrap">
                          <input type="date" class="form-control full-width hasDatepicker" placeholder="Departing On" name="departure" data-date-format="yyyy-mm-dd" required="" id="dp1570717562847"><img class="ui-datepicker-trigger" src="images/icon/blank.png" alt="" title="">
                        </div>
                         </div>
                         <div class="col-md-5">
                           <div class="datepicker-wrap">
                             <date-picker v-model="mydate" lang="en" type="datetime" format="YYYY-MMMM-DD HH:mm:ss"></date-picker>                           </div>
                         </div>
                       </div>
                       <hr>
                       <div class="row" id="travel">
                         <div class="col">
                           <label for="">Email</label>
                           <input type="email" class="form-control full-width" placeholder="enter your email" name="email" required="">
                         </div>
                         <div class="col">
                           <label for="">No. of Passengers</label>
                           <input type="email" class="form-control full-width" placeholder="eg. 60" name="passengers" required="">

                         </div>
                       </div>
                       <hr>
                       <div class="row" id="travel">
                         <div class="col">
                           <label for="">Source City</label>
                           <input type="text" class="form-control full-width" placeholder="enter your location" name="from_city" required="">
                         </div>
                         <div class="col">
                           <label for="">Destination City</label>
                           <input type="text" class="form-control full-width" placeholder="enter your location" name="from_city" required="">
                         </div>
                       </div>
                        <hr>
                        <button type="submit" class="btn btn-primary btn-block">MAKE REQUEST</button>
                       </div>

                    </form>
                  </div>
                  <div class="tab-pane fade" id="ticket">
                    <form action="">
                      <div class="title-container-two">
                        <h2 class="search-title">Ticket cancellation and refund</h2>
                        <i class="fa fa-envelope"></i>
                      </div>
                      <div class="search-content">
                        <div class="row">
                          <img src="/cancel.jpg" alt="">
                          <p style="font-size: 14px">Please Login to your customer account and follow our simple and hassle-free steps to cancel your ticket. Once your ticket is cancelled, stay constantly informed on the status of your refund.</p>
                        </div>
                        <router-link :to="{name: 'login'}" class="link"><button type="submit" class="btn btn-primary btn-block">Login</button></router-link>
                        

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> 
            <div class="col-sm-4 col-md-3">
              <div class="box">
                <img src="/coast.jpeg" alt="" width="100%">
              </div>
              <div class=" box book-with-us">
                <h4 class="why">Why book with us?</h4>
                <ul class="list">
                  <li class="single-list">
                    <i class="fas fa-building single-list-icon"></i>
                    <h5 class="title">1000+ Buses</h5>
                    <p>We have more than 1000 buses from which you can choose from</p>
                  </li>
                  <li class="single-list">
                    <i class="fas fa-money-check-alt single-list-icon"></i>
                    <h5 class="title">Low rates and savings</h5>
                    <p>Get great discounts when you book with us.</p>
                  </li>
                  <li class="single-list">
                    <i class="fas fa-headset single-list-icon"></i>
                    <h5 class="title">Excellent support</h5>
                    <p>24/7 customer support.</p>
                  </li>

                </ul>
              </div>
            </div> 
          </div>
        </div>
      </div>

      
        
           
      
      
      
        
  

      
  </body>
</template>
 <script src="http://code.jquery.com/jquery-latest.min.js"></script>
 
<script>
import Datepicker from 'vuejs-datepicker';


export default {
   mounted: function(){
     $(document).ready(function () {

            var date = new Date();
            date.setDate(date.getDate());

            $('#example3').datepicker({ 
                startDate: date
            });
        });
   }
}

</script>
<style>
.slide-show{
  width: 100%;
  height: 150vh;
  background-position: center center;
  background-size: cover;
  backdrop-filter: hidden;
  animation: slideBg 8s linear infinite 0s;
  animation-timing-function: ease-in-out;
  background-image: url('/img1.jpg');
  font: 75%/150% "Lato", Arial, Helvetica, sans-serif !important;
  color: #838383;
}
@keyframes slideBg {
  0% {
    background-image: url('/img1.jpg');
}
25% {
    background-image: url('/img2.jpg');
}
50% {
    background-image: url('/img3.jpg');
}
75% {
    background-image: url('/img4.jpg');
}
100% {
    background-image: url('/img5.jpg');
}

  ;
}
.datepicker{
  border: none !important;
}

#col-one{
  margin-bottom: 40px;
}
.box{
  background: #fff;
    padding: 20px;
    margin-bottom: 30px;
}
.container{
  padding-top: 40px;
  
}
.why{
  font-size: 1.3333em;
  line-height: 1.25em;
  margin: 0 0 15px;
  font-weight: normal;
  color: #2d3e52;
  font-family: inherit;
}
.list{
  list-style: none;
}
.single-list{
  border-bottom: 1px solid #f5f5f5;
    padding: 10px 0 7px 35px;
    position: relative;
}
.single-list-icon{
  position: absolute;
    font-size: 1.5em;
    color: #fdb714;
    left: 0px;
    top: 12px;
}
.title{
  color: #2d3e52 !important;
  margin-bottom: 5px !important;
  letter-spacing: 0.04em !important;
  font-size: 15px!important;
}
.book-with-us{
  opacity: 0.8;
  
}
.side-bar-nav{
  margin-top: 80px;
  float: left;
  width: 31%;
  list-style: none;
}
.active .home{
  border-right-color: #fff;
  color: #01B7f2 !important;  
  opacity: 1;
  background-color: #fff !important;
  
}
.active .home:hover{
  background-color: #fff !important;
  opacity: 1 !important;
}
.active .home:after{
  content: "\f30b";
    font-family: FontAwesome;
    position: absolute;
    right: 15px;
    color: #01B7f2 !important; 
    font-size: 16px !important;
    font-weight: lighter;
    
}
.home {
  height: 57px;
    line-height: 57px;
    border-bottom: 1px solid #0d9dec;
    border-right: 1px solid #0d9dec;
    position: relative;
    padding-left: 50px;
    overflow: hidden;
    color: #01b7f2;
    display: block;
    padding: 0 30px;
    background: #fff;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.04em;
    float: none;
    opacity: 0.8;
    color: #333333;
    
    
}
a:hover{
 opacity: 0.9 !important;
 text-decoration: none !important;
 
}
.tab-content{
  background: #fff;
    float: left;
    width: 69%;
    padding: 0;
}
.tab-pane .active{
  display: block;
}
.fade.in {
    opacity: 1;
}
.title-container{
  background: #E74C3C;
  padding: 15px 40px 0 25px;
    height: 80px;
    position: relative;
    color: #fff;
    
    
}
.search-title{
  font-size: 1.6667em;
  line-height: 1.25em;
  font-weight: bold;
  margin: 0
  
}
 .search-text{
  font-size: 1.0833em;
    line-height: 1.6666;
    margin-bottom: 15px;
    font-weight: bold !important;
    color: #fff;
    
}
.fa-bus  {
    font-size: 48px !important;
    position: absolute;
    right: 25px;
    top: 50%;
    margin-top: -24px;
     
}
.fa-envelope{
  font-size: 48px !important;
    position: absolute;
    right: 25px;
    top: 50%;
    margin-top: -24px;

}
.fa-bus:before {
    content: "\f207";
}
.search-content{
  padding: 18px 25px 25px;
}
#travel{
  margin-left: -10px;
    margin-right: -10px;
    padding-bottom: 5px !important;
}
#radio{
  color: #2d3e52;
  font-size: inherit;
  letter-spacing: 0.04em;
  margin-left: 10px;
}
.label-selector{
    display: block;
    margin-bottom: 6px;
    font-weight: normal;
    font-size: 0.7333em;

}
hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border-color: #f5f5f5;
}
.selector{
  line-height: 10px;
}
select{
  background-color: #E6E6FA !important;
  border-radius: 0px !important;
   font-size: 0.7333em !important;
    display: inline-block;
    line-height: 32px;
    padding: 0 10px;
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 34px;

  
}
option{
  background-color: #fff !important;
}
select::before{
  position: absolute !important;
    right: 0;
    top: 0;
    content: '';
    background: #fdb714 !important;
    width: 24px;
    height: 100%;
}

#date{
  background-color: #E6E6FA !important;
  border: none;
  width: 100%
}
.datepicker{
  display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn-warning {
    color: #fff !important;
    background-color: #f0ad4e !important;
    border-color: #eea236 !important;
}
.btn{
  padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
}
button{
  letter-spacing: 0.04em;
}
.fa{
  display: inline-block;
    font: normal normal normal 14px/1 FontAwesome "Lato", Arial, Helvetica, sans-serif !important ;
    font-size: inherit;
    text-rendering: auto;
    color: #fff;
    
}
.tab-pane{
    display: none;
}
.fade{
  opacity: 0;
}
.title-container-two{
  background: #fdb714;
    padding: 15px 40px 0 25px;
    height: 80px;
    position: relative;
}
.fa-info{
  font-size: 30px;
    position: absolute;
    right: 25px;
    top: 50%;
    margin-top: -24px;
    color: #fff;
}
.search-title-two{
  font-size: 1.1666em;
  line-height: 1.1428em;
  letter-spacing: 0.04em;
  color: #2d3e52;
  margin: 0 0 15px;
  font-weight: normal;

}
label{
  font-size: 0.8333em;
  display: block;
    margin-bottom: 5px;
    font-weight: normal;
}
#ticket{
  width: 100%
}
.btn-primary {
    color: #fff;
    background-color: #337ab7 !important;
    border-color: #2e6da4 !important;
}
.title-container-three{
  background: #fdb714;
  padding: 15px 40px 0 25px;
  height: 80px;
  position: relative;

}
.search-title-three{
  font-size: 1.1666em;
    line-height: 1.1428em;
    margin: 0 0 15px;
    letter-spacing: 0.04em;
}
</style>
