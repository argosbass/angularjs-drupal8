<!DOCTYPE html>
<html lang="en" ng-app="myApp">

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>AngularJS Auth</title>
          <!-- Bootstrap -->
          <link href="css/bootstrap.min.css" rel="stylesheet">
            <link href="css/custom.css" rel="stylesheet">
              <link href="css/toaster.css" rel="stylesheet">
               
              </head>

  <body ng-cloak="">
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="row">
          <div class="navbar-header col-md-6">
            <button type="button" class="navbar-toggle" toggle="collapse" target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" rel="home" title="AngularJS Authentication App">AngularJS+Drupal</a>
          </div>
          <div class="navbar-header col-md-2">
            <a class="navbar-brand" rel="home" title="Create" href="#/create">Create</a>
          </div>
          <div class="navbar-header col-md-2">
            <a class="navbar-brand" rel="home" title="Dashboard" href="#/dashboard">Dashboard</a>
          </div>
          <div class="navbar-header col-md-2">
            <a class="navbar-brand" rel="home" title="Contact" href="#/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
    <div >
      <div class="container" style="margin-top:20px;">

        <div data-ng-view="" id="ng-view" class="slide-animation"></div>

      </div>
    </body>
  <toaster-container toaster-options="{'time-out': 3000}"></toaster-container>

  <!-- Libs 
  <script src="js/angular.min.js"></script>
  <script src="js/angular-route.min.js"></script>
  <script src="js/angular-animate.min.js" ></script>-->
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js" ></script>
  <script src="https://code.angularjs.org/1.3.11/angular-route.min.js" ></script>
  <script src="https://code.angularjs.org/1.3.11/angular-animate.min.js" ></script>

 
  <script src="js/toaster.js"></script>
  <script src="app/app.js"></script>
  <script src="app/services/data.js"></script>

  <script src="app/directives/emailmatch.js"></script>
  <script src="app/directives/focus.js"></script>
  
  
  <script src="app/controllers/contact.js"></script>
  <script src="app/controllers/dashboard.js"></script>
  <script src="app/controllers/create.js"></script>

</html>

