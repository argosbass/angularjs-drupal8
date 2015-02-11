app.factory("service_Data", ['$http', 'toaster',
    function ($http, toaster) { 

        var obj = {};
        var serviceBase = 'http://local.dclatinamerica.com:8888';
        var serviceBaseUser = 'admin';
        var serviceBasePass = 'drupal';
        



        obj.getCustomers = function () {

        	return $http.get(serviceBase + "/restcustomers")
        	.error(function (data, status, headers, config) {
        		
        		var popup = {
    	            status : "error",
        	        message : "Customers request failed."
        		};

        		obj.toast(popup);
             	
            })
        	.then(function (results) {
        		
        		var popup = {
    	            status : "success",
        	        message : "Customers request successfully."
        		};

        		obj.toast(popup);
        		return results.data;
             	
            })

        };





		obj.getUserInfo = function () {

			var authdata = window.btoa(serviceBaseUser+':'+serviceBasePass);
    		$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
   			$http.defaults.headers.common['Accept'] = 'application/json';
    

        	return $http.get(serviceBase + "/user/1")
        	.error(function (data, status, headers, config) {
        		
        		var popup = {
    	            status : "error",
        	        message : "Customers request failed."
        		};

        		obj.toast(popup);
             	
            })
        	.then(function (results) {
        		
        		var popup = {
    	            status : "success",
        	        message : "Customers request successfully."
        		};
				
				console.log(results.data, status);

        		obj.toast(popup);
				

			    var data_parse = {
					uid: results.data.uid[0]['value'],
			    	first_name: results.data.name[0]['value'],
			    	mail: results.data.mail[0]['value']
			    };



        		return data_parse;
             	
            })

        };



        obj.createCustomer = function (obj_customer) {
 	
 			var authdata = window.btoa(serviceBaseUser+':'+serviceBasePass);
 			$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
    	    $http.defaults.headers.common['Content-type'] = 'application/hal+json';
    
   			var post_data =	
   				
   				{"_links":

                    {"type":
                        {"href":serviceBase+"/rest/type/node/customer"}
                    }, 

                    "title":[{"value": obj_customer.first_name }],
                    "field_last_name":[{"value": obj_customer.last_name }],
                    "field_email":[{"value": obj_customer.email }],
                    "field_telephone":[{"value": obj_customer.telephone }],                
                    "field_fee":[{"value": obj_customer.fee }],                
                    "field_payments":[{"value": obj_customer.payments }],                
                    "field_total_payments":[{"value": obj_customer.total_payments }]
                }
    		
console.log(post_data);


        	return $http.post(serviceBase + "/entity/node", post_data )
        	.error(function (data, status, headers, config) {


console.log(data);

        		
        		var popup = {
    	            status : "error",
        	        message : "Customers creation failed."
        		};

        		obj.toast(popup);

			    var response = {
					status: 'error'
			    };

        		return response;

             	
            })
        	.then(function (results) {
        		
        		var popup = {
    	            status : "success",
        	        message : "Customers created successfully."
        		};
        		obj.toast(popup);
				
			    var response = {
					status: 'ok'
			    };
        		return response;
             	
            })
    		
        };

        obj.toast = function (data) {
            toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        }


        return obj;


}]);