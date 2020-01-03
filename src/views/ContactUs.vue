<template>

    <div class="body">
         <div class="nav-three">
                  <div class="middle-bar">
                      <div class="content">
                          <i class="soap-icon-plane-right takeoff-effect"></i>
                          <h2 class="entry-title">About Us</h2>

                      </div>
                  </div>
              </div>
              <div class="row" id="row">
              <div class="col-md-4">
               <div class="row">
                    
                    <div class="col-md-2">
                        <img src="/message.png" alt="" width="56" height="56">
                    </div>
                    <div class="col-md-10" id="text">
                        <small>WE ARE 24/7</small>
                        <h5>Local:123-HELLO</h5>
                    </div>
                
               </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    
                    <div class="col-md-2">
                        <img src="/call.png" alt="" width="56" height="56">
                    </div>
                    <div class="col-md-10" id="text">
                        <small>SEND US AN EMAIL ON</small>
                        <h5>help@travela.com</h5>
                    </div>
                
               </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                    
                    <div class="col-md-2">
                        <img src="/home.png" alt="" width="56" height="56">
                    </div>
                    <div class="col-md-10" id="text">
                        <small>MEET US AT</small>
                        <h5>Galana Plaza, P.O Box, 353 Nairobi-Kenya</h5>
                    </div>
                
               </div>
            </div>
        </div>
        <div class="row" id="row-two">
            <div class="col-md-4">
                <form>
    <div class="form-group" id="form">
        <h3 class="msg">Send us a message</h3>
        <label for="name">NAME</label>
        <input type="text" class="form-control" id="customer-name">
    </div>
  <div class="form-group" id="form">
    <label for="exampleInputEmail1">YOUR EMAIL</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" >
    
  </div>
 </form>
            </div>
            <div class="col-md-8">
                <p>YOUR MESSAGE</p>
                <div class="form-group">
    
    <textarea name="bodymessage" rows="8" class="input-text full-width" placeholder="write message here" required="" spellcheck="false" style="width:100%"></textarea>
  </div>
  <div class="col-sms-offset-6 col-sm-offset-6 col-md-offset-8 col-lg-offset-9">
                                    <button type="submit" class="btn-medium full-width">SEND MESSAGE</button>
                                </div>
            </div>
            
        </div>

        
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
#text{
    padding-top: 10px;
    padding-bottom: 5px;
    letter-spacing: 0.04em;
}
#row{
    padding-top: 30px;
    padding-left: 50px
}
#row-two{
    margin-left: 70px;
    margin-right: 100px;
    margin-top: 50px
}
button {
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0 15px;
    white-space: nowrap;
    font-size: 0.9167em;
    font-weight: bold;
    background: #98ce44;
    height: 34px;
    line-height: 34px;
    float: right
}
small{
    font-size: 85%
}
.body{
    font: 75%/150% "Lato", Arial, Helvetica, sans-serif;
    color: #838388;
}
h5{
    margin: 0 0 15px;
    font-weight: normal;
    color: #2d3e52;
    font-size: 13px;
}
input {
    background: #E6E6FA !important; 
    border: none !important;
    line-height: normal !important
}
textarea{
    background: #E6E6FA;
    border: none;
    line-height: normal
}
#form{
   
    border-radius: 0px !important
}
label{
    font-size: 0.8333em;
    margin-bottom: 3px;
}
.msg{
    font-size: 1.6667em;
    line-height: 1.25em;
    margin: 0 0 15px;
    font-weight: normal;
    color: #2d3e52;
}
</style>