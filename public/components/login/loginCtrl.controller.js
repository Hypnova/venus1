  console.log("test");
loginApp.controller('loginCtrl',['$scope','$http',
  	function($scope,$http){
  		console.log("hey from login controller");
  		$scope.signupButton = function(){
  			FB.login(function(response) {
  				if (response.authResponse) {
  					console.log('Welcome!  Fetching your information.... ');
  					FB.api('/me', function(response) {
  						console.log('Good to see you, ' + response.name + '.');
  					});
  				} else {
  					console.log('User cancelled login or did not fully authorize.');
  				}
  			});
  		};
  		  		$scope.loginButton = function(){
  			FB.login(function(response) {
  				if (response.authResponse) {
  					console.log('Welcome!  Fetching your information.... ');
  					FB.api('/me', function(response) {
  						console.log('Good to see you, ' + response.name + '.');
  						console.log(response);
  					});
  				} else {
  					console.log('User cancelled login or did not fully authorize.');
  				}
  			});
  		};
  	}]);