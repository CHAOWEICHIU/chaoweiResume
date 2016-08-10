myApp.controller('ResumeCtrl', ['$scope', function ($scope) {
	$scope.skills = [
		{
			category: 'Web',
			name    : 'Angular',
			class   : 'success'
		},
		{
			category: 'Web',
			name    : 'D3.js',
			class   : 'success'
		},
		{
			category: 'Web',
			name    : 'Bootstrap',
			class   : 'success'
		},
		
		{
			category: 'Web',
			name    : 'Relational Database',
			class   : 'success'
		},
		{
			category: 'Web',
			name    : 'Ruby On Rails',
			class   : 'success'
		},
		{
			category: 'Version-Control-System',
			name    : 'Git',
			class   : 'success'
		}
	]
	
	$scope.languages = [
		{
			level    : 'Level-Business',
			name    : 'Chinese'	
		},
		{
			level    : 'Level-Business',
			name    : 'English'	
		},
		{
			level    : 'Level-Conversation',
			name    : 'Japanese'	
		}
	]
	
	$scope.microsofts = [
		{
			level   : 'Level-Advanced',
			name    : 'Excel VBA'

		},
		{
			level   : 'Level-Expert',
			name    : 'Excel'

		},
		{
			level   : 'Level-Expert',
			name    : 'PPT'

		},
		{
			level   : 'Level-Expert',
			name    : 'Word'

		}
	]

	$scope.carousels = [
		{
			name   		: 'Interpreter',
			url    		: 'interpreter.jpg',
			subtitle    : 'English-Chinese Interpreter'

		},
		{
			name   		: 'Exhibition in Brazil',
			url    		: 'brazil.jpg',
			subtitle    : 'Helping Marketing Manager in Brazil'

		},
		{
			name   		: 'Exhibition in Shanghai',
			url    		: 'shanghai.jpg',
			subtitle    : 'English-Chinese Interpreter'

		}
	]

	
}])