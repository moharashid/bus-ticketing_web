<template>
    <body>
        <div class="nav-three">
                  <div class="middle-bar">
                      <div class="content">
                          <i class="soap-icon-plane-right takeoff-effect"></i>
                          <h2 class="entry-title">About Us</h2>

                      </div>
                  </div>
              </div>
              
              
                                <div class="log-in-form">
                 
                      
                 
                  
                  <form action="">
                      <div class="panel">User Login</div>
                      <div class="form-group">
                        <div class="row" id="email-row">
                            
                                <label for="email" class="col-md-2 control-label">PHONE NUMBER/EMAIL</label>
                            
                            <div class="col-md-6" id="input-one">
                                <input id="phonenumber" type="phonenumber" class="form-control" name="phonenumber" value required autofocus>
                            </div>
                        </div>
                        <div class="row" id="password-row">
                            
                                <label for="password" class="col-md-2 control-label" style="font-size:11">PASSWORD</label>
                            
                            <div class="col-md-6" id="input-one">
                                <input id="password" type="password" class="form-control" name="password" value required autofocus>
                            </div>
                        </div>
                         <div class="row" id="check-box-row">
                            
                                <label class="col-md-2 control-label" style="font-size:11"></label>
                            
                            <div class="col-md-6" id="input-one">
                               <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>
                         <div class="row" id="check-box-row">
                            
                                <label class="col-md-2 control-label" style="font-size:11"></label>
                            
                            <div class="col-md-6" id="input-one">
                               <div class="button">
                                   <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                                </div>
                            </div>
                        </div>
                        
                      </div>
                  </form>
              </div>
              
              


    </body>
</template>
<script>
export default {
    
}
</script>
<style>

#input-one{
    
}
.form-control{
    width: 50%
}
#password-row{
    margin-top: 20px
}
label{
    padding-top: 7px;
    margin-bottom: 0;
    margin-left: 10px
}
/* .container{
    box-sizing: border-box;
    align-content: center;
    
} */

.log-in-form{
    font: 75%/150% "Lato", Arial, Helvetica, sans-serif;
    color: #838383;
    box-sizing: content-box;
    
}
form{
    box-sizing: content-box;
    margin-left: 150px;
    border: 1px solid #ddd;
    
}
</style>