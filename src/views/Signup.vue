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
              <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-2">
            <div class="panel panel-primary">
                <div class="panel-heading">Register</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="http://ewakili.com/coastbus/register">
                        <input type="hidden" name="_token" value="5mdlWESNAWX0NcoMfPIj0i0fQytKqJBt3obd1NRw">

                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="" required autofocus>

                                                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="" required>

                                                            </div>
                        </div>
                          <div class="form-group">
                            <label for="phonenumber" class="col-md-4 control-label">Mobile Number</label>

                            <div class="col-md-6">
                                <input id="phonenumber" type="text" class="form-control" name="phonenumber" value="" required>

                                                            </div>
                        </div>

                        <div class="form-group">
                            <label for="id_number" class="col-md-4 control-label">ID Number</label>

                            <div class="col-md-6">
                                <input id="id_number" type="text" class="form-control" name="id_number" value="" required>

                                                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>

                                                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary pull-right">
                                    Create Account 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </body>
</template>
<script>
export default {
    
}
</script>
<style>

</style>