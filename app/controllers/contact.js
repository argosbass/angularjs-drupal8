app.controller('ContactController', function ($scope, $rootScope, $routeParams, $location, $http, service_Data) {
        
    service_Data.getUserInfo().then(function (response) {
        
       $scope.uid = response.uid;
       $scope.first_name = response.first_name;
       $scope.email = response.mail;

    });


});
