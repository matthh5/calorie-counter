var calorieApp = angular.module('calorieApp', []);

calorieApp.controller('ctrl1', function($scope) {
	$scope.totalCalories = 0; 
	$scope.inputCalories = "";
	$scope.date = new Date(); 
	$scope.monthArray = ["January", "February", "March", "April", "May", "June", "July",
	"August", "September", "October", "November", "December"];
	console.log($scope.monthArray); 
	console.log($scope.date.getMonth());
	$scope.month = $scope.monthArray[$scope.date.getMonth()]; 
	$scope.day = $scope.date.getDate() + "th"; 

	$scope.addCalories = function()
	{
		// $scope.isNumber = angular.isNumber($scope.inputCalories); 
		if(!isNaN(+$scope.inputCalories))
		{
			$scope.totalCalories = +$scope.totalCalories + +$scope.inputCalories; 
		}
		$scope.inputCalories = ""; 
	}

	$scope.enterPressed = function(keyEvent) {
	  if (keyEvent.which === 13)
	    $scope.addCalories(); 
	}

}); 