var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider', 
  function ($routeProvider) {

        $routeProvider.
            when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'partials/dashboard.html',
            }).
            when('/create', {
                title: 'create',
                templateUrl: 'partials/create.html',
                controller: 'CreateController'
            })
            .when('/contact', {
                title: 'Contact',
                templateUrl: 'partials/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
  }])
    .run(function ($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
       
                                        
                    var nextUrl = next.$$route.originalPath;
                    console.log(nextUrl);
                    if (nextUrl == '/create' || nextUrl == '/contact') {
                        //nothing to do
                    } else {
                        
                        $location.path("/dashboard");
                    }

         });
    });