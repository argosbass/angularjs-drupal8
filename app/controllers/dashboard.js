app.controller('DashboardController', function ($scope, $rootScope, $routeParams, $location, $http, service_Data) {

    //initially set those objects to null to avoid undefined error
    $scope.SortBy = {};
    
    service_Data.getCustomers().then(function (response) {
        console.log(response, status);
        $scope.results = response;

    });

    $scope.SortBy = function (item) {
        $scope.itemSelected = item;
    }
                        
});