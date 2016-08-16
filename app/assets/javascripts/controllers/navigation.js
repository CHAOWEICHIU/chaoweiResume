myApp.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.bottoms = ['future', 'analysis', 'conclusion'];
	$scope.activeButton = 0;

	
	$scope.setActiveButton = function(index, $event){
		$scope.activeButton = index;
		console.log($event)
	}
	$scope.nextPage = function(){
		if ($scope.activeButton == 2){
			$scope.activeButton = 0
		} else {
			$scope.activeButton ++
		}
	}

	$scope.backPage = function(){
		if ($scope.activeButton == 0){
			$scope.activeButton = 2
		} else {
			$scope.activeButton --
		}
	}

	$scope.$watch('activeButton',function(newValue, oldValue){
		if (newValue !== oldValue) {
			$location.path('/'+$scope.bottoms[newValue])
			
			$('#'+$scope.bottoms[oldValue]).removeClass('activeBtn')
			$('#'+$scope.bottoms[oldValue]).addClass('nonActiveBtn')

			$('#'+$scope.bottoms[newValue]).removeClass('nonActiveBtn')
			$('#'+$scope.bottoms[newValue]).addClass('activeBtn')
		}
		
		
		
	})
}])