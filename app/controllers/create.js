app.controller('CreateController', function ($scope, $rootScope, $routeParams, $location, $http, service_Data) {
    
    //initially set those objects to null to avoid undefined error
    $scope.doCreate = {};
    $scope.customer = {first_name:'', last_name:'', telephpne:'', email:'', fee:'', payments:'',total_payments:''};

    $scope.doCreate = function (customer) {
  
        service_Data.createCustomer(customer).then(function (response) {
            console.log(response, status);

            if(response.status=='ok'){
                $location.path('dashboard');
            }

        });
  
    };
                        
});