app.directive('emailMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem , attrs,control) {
            var checker = function () {
 
                //get the value of the first email
                var e1 = scope.$eval(attrs.ngModel); 
 
                //get the value of the other email  
                var e2 = scope.$eval(attrs.emailMatch);
                if(e2!=null)
                return e1 == e2;
            };
            scope.$watch(checker, function (n) {
 
                //set the form control to valid if both 
                //emails are the same, else invalid
                control.$setValidity("emailNoMatch", n);
            });
        }
    };
}]);
