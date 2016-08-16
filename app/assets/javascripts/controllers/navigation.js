myApp.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.bottoms = ['future', 'analysis', 'conclusion'];
	$scope.activeButton = 0;

	
	$scope.setActiveButton = function(index, $event){
		$scope.activeButton = index;
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


	$scope.$watch(function(){return $location.path()}, function(newValue, oldValue){
		var hash = newValue.slice(1)
		var targetPageIndex = $scope.bottoms.indexOf(hash)
		
		if(newValue === oldValue) {
			$('#'+$scope.bottoms[targetPageIndex]).addClass('activeBtn')
		} else {
			for(var i = 0; i < $scope.bottoms.length; i++){
				if (targetPageIndex === i){
					$('#'+$scope.bottoms[i]).removeClass('nonActiveBtn')
					$('#'+$scope.bottoms[i]).addClass('activeBtn')
				} else {
					$('#'+$scope.bottoms[i]).removeClass('activeBtn')
					$('#'+$scope.bottoms[i]).addClass('nonActiveBtn')
				}
				
			}			
		} 
	})

	$scope.$watch('activeButton',function(newValue, oldValue){
		if (newValue !== oldValue) {
			$location.path('/'+$scope.bottoms[newValue])
		}
	
	})

}])