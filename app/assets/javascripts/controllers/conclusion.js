myApp.controller('StrategyCtrl', ['$scope', function ($scope) {
	$scope.strategys = [
		{
			index: 0,
			strategy: 'Aims To Provide Comprehensive Service',
			firms: [
				'Siasun', 
				'GSK'
			],
			pros: [
				'Rethink Robotics is able to scale its company by using the resources from these companies.',
				'Resources including technological cooperation, distribution channel and so on.'
			],
			cons: [
				'It might be a conflict since Rethink Robotics is focusing on a robot that can be mastered in two hours training for a worker without any knowledge of robot programming.'
			]
			
		},
		{
			index: 1,
			strategy: 'Aims To Provide Task',
			firms: [
				'Riland - Welding', 
				'Jasic - Welding', 
				'Boshi - Transport', 
				'Dongfang - Sort and Transport'
			],
			pros: [
				'Rethink Robotics can expand its market horizon by providing more services with the strong emphasis of intuitive interface. In other words, a local firm is able to improve its interactive interface by having knowledge from Rethink Robotics, and Rethink can improve its robot itself to a point that can be used for certain tasks.'
			],
			cons: [
				'There are already plenty of companies able to provide those services and it might be difficult to standout from other competitors unless the robot can differentiate itself from other competitor’s robot in cost, ease of use, or another attractive component.'
			]
		},
		{
			index: 2,
			strategy: 'Aims To Provide Industry',
			firms: [
				'Boshi - Medical', 
				'Ci-xing - Textile', 
				'HuaChangDa - Automotive', 
				'Dongfang - Corrugated Boxes'
			],
			pros: [
				'Rethink Robotics can focus on a specific industry and get very good at it in order to have all the market share in this industry.'
			],
			cons: [
				'It would be risky if the industry could potentially be replaced by another industry.'
			]
		}
		

	];

	$scope.activeStrategy = 0;
	
	$scope.switchActiveStrategy = function(index){
		$scope.activeStrategy = index;
	};
}]);