myApp.controller('StrategyCtrl', ['$scope', function ($scope) {
	$scope.strategys = [
		{
			'index': 0,
			'strategy': 'Specific Industry',
			'partner': 'No Partner',
			'reasons': [
				'Rethink Robotics has no need to worry about partnership with local firm because customers would have known that if certain industrial robot is good at doing certain tasks.', 
				'For this case, rethink robotics should focus on how to spray its reputation to industries who might potential need it. However, it would be very risky to put all the eggs in the same basket.'
			]
		},
		{
			'index': 1,
			'strategy': 'Partnership with comprehensive firms',
			'partner': 'Need to decide',
			'reasons': [
				'Rethink Robotics would have a share of the market without worrying too much about things outside the scope of technical support.', 
				'The drawback for this would be that it might be difficult to have its own name of brand.', 
				'Accommodate the fact that China is at the stage that has enough capacity to build its own vampire with its own asset (people, money and skills). It leads to a situation where more than 75% of foreign businesses are less welcome than before in China.'
			]
		},
		{
			'index': 2,
			'strategy': 'Partnership with specialized industry or task',
			'partner': '?',
			'reasons': [
				'Rethink Robotics would be able to leverage its sales by utilizing company’s information. Also, rethink robotics would be able to keep its own brand name.', 
				'Also, rethink robotics can improve partnership’s company’s robots by providing its engineer ability and can sale that robot in USA.'
			]
		}
		

	];

	$scope.activeStrategy = 0;
	
	$scope.switchActiveStrategy = function(index){
		$scope.activeStrategy = index;
	};
}]);