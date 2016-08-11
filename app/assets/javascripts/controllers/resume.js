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
			url    		: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13882347_10210217579785138_3739681978370688651_n.jpg?oh=102bcf5e32b85599500a955c8d479b49&oe=58506982',
			subtitle    : 'English-Chinese Interpreter'

		},
		{
			name   		: 'Exhibition in Brazil',
			url    		: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13920759_10210217579825139_494996994982423214_n.jpg?oh=4c1c64244147d8d9249846ec9fd8e113&oe=584D416B',
			subtitle    : 'Helping Marketing Manager in Brazil'

		},
		{
			name   		: 'Exhibition in Shanghai',
			url    		: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13886881_10210217579745137_4834855834125758070_n.jpg?oh=c7442e156dfcbd82ab27334fb7efa75c&oe=58528076',
			subtitle    : 'English-Chinese Interpreter'

		}
	]

	$scope.projects = [
		{
			name   		: 'Excel VBA',
			url    		: 'https://scontent.xx.fbcdn.net/t31.0-8/13996150_10210221586645307_6369718998773569422_o.jpg',
			subtitle    : 'Automate salary calculating Financial Department of BYTE'

		},
		{
			name   		: 'Interactive Single Page Application',
			url    		: 'https://scontent.xx.fbcdn.net/t31.0-8/13920119_10210221717328574_2099058068585952265_o.jpg',
			subtitle    : 'Industrial robot analysis report in China'

		}
	]

	
}])







