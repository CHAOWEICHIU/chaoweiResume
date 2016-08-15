myApp.controller('DataCtrl', ['$scope', function ($scope) {
	
	$scope.fields = ['Automative','Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'] ;
	$scope.tasks = ['Assemble', 'Paint', 'Sort', 'Transport', 'Weld', 'Process'];
	$scope.getBackgroundColorForField = function(fields, targetField){
		if (typeof fields !== 'object'){
			return 'disabled';
		} else {
			var checkIfIsEmpty = fields.filter(function(field){return field == targetField});
			if (checkIfIsEmpty.length === 1){
				return 'list-group-item-success';
			} else {
				return 'disabled';
			}
			
		}
		
	};

	$scope.getBackgroundColorForTask = function(tasks, targetTask){
		if (typeof tasks !== 'object'){
			return 'disabled';
		} else {
			var checkIfIsEmpty = tasks.filter(function(task){return task == targetTask});
			if (checkIfIsEmpty.length === 1){
				return 'list-group-item-success';
			} else {
				return 'disabled';
			}
			
		}
	};

	$scope.activeButton = 'ROS';
	$scope.sortButtons = ['ROS', 'ROA', 'ROE'];
	$scope.sortButtonClick = function(clickButton){
		$scope.activeButton = clickButton;
	};

	$scope.firmsInformation = [{
	        eName: 'ABB',
	        cName: '??',
	        id: 'ABB',
	        fullName: 'ABB Ltd. ADR',
	        updatedAt: 2015,
	        employee: 140400,
	        capacity: 200,
	        country: 'Switzerland',
	        link: 'http://www.abb.com/',
	        wiki: 'ABB_Group',
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'other'],
	        notes: ['comprehensive service'],
	        sales: 34160000000,
	        COGS: 23980000000,
	        grossIncome: 10180000000,
	        netIncome: 1860000000,
	        totalAsset: 41810000000,
	        totalEquity: 14500000000
	    }, {
	        eName: 'FAUNC',
	        cName: '法納克',
	        id: '6954',
	        fullName: 'Fanuc Corp.',
	        updatedAt: 2015,
	        employee: 1,
	        capacity: 200,
	        country: 'Japan',
	        link: 'http://www.shanghai-fanuc.com.cn/',
	        wiki: 'FAUNC',
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service'],
	        sales: 729760000,
	        COGS: 350750000,
	        grossIncome: 379010000,
	        netIncome: 207600000,
	        totalAsset: 1510000000000,
	        totalEquity: 1380000000000
	    }, {
	        eName: 'KUKA',
	        cName: '庫卡',
	        id: 'KU2',
	        fullName: 'KUKA AG',
	        updatedAt: 2015,
	        employee: 12102,
	        capacity: 200,
	        country: 'Germany',
	        link: 'http://www.kuka-robotics.com/china/zh/',
	        wiki: 'FAUNC',
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service', 'iiwa robot'],
	        sales: 2970000000,
	        COGS: 2310000000,
	        grossIncome: 655300000,
	        netIncome: 86800000,
	        totalAsset: 2380000,
	        totalEquity: 733000000
	    },  {
	        eName: 'Yaskawa',
	        cName: '安川',
	        id: '6506',
	        fullName: 'Yaskawa Electric Corp.',
	        updatedAt: 2015,
	        employee: 10383,
	        capacity: 200,
	        country: 'Japan',
	        link: 'http://www.yaskawa.com.cn/',
	        wiki: 'Yaskawa_Electric_Corporation',
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service', 'High Combat Power'],
	        sales: 400150000000,
	        COGS: 278580000000,
	        grossIncome: 121580000000,
	        netIncome: 24820000000,
	        totalAsset: 388210000000,
	        totalEquity: 171390000000
	    }, {
	        eName: 'Kawasaki',
	        cName: '川崎重工',
	        id: '7012',
	        fullName: 'Kawasaki Heavy Industries Ltd.',
	        updatedAt: 2015,
	        employee: 34010,
	        capacity: 200,
	        country: 'Japan',
	        link: 'http://global.kawasaki.com.cn/cn/',
	        wiki: 'Yaskawa_Electric_Corporation',
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service', 'High Combat Power'],
	        sales: 1490000000000,
	        COGS: 1220000000000,
	        grossIncome: 269440000000,
	        netIncome: 51640000000,
	        totalAsset: 1660000000000,
	        totalEquity: 432000000000
	    }, {
	        eName: 'Siasun',
	        cName: '新松',
	        id: '300024',
	        fullName: 'Siasun Robot & Automation Co. Ltd.',
	        updatedAt: 2015,
	        employee: NaN,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.siasun.com/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'Robber Plastic', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service', '7 joins robot', 'goverment owned'],
	        sales: 1690000000,
	        COGS: 1130000000,
	        grossIncome: 544800000,
	        netIncome: 394820000,
	        totalAsset: 6570000000,
	        totalEquity: 5280000000
	    }, {
	        eName: 'GSK',
	        cName: '廣州數控',
	        id: '300161',
	        fullName: 'Wuhan Huazhong Numerical Control Co. Ltd.',
	        updatedAt: 2015,
	        employee: 800,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.gsk.com.cn/robot.asp',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: NaN,
	        tasks: ['Assemble', 'Process', 'Paint', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service'],
	        sales: 550560000,
	        COGS: 384490000,
	        grossIncome: 166070000,
	        netIncome: -41360000,
	        totalAsset: 1500000000,
	        totalEquity: 814830000
	    }, {
	        eName: 'Boshi',
	        cName: '博實股份',
	        id: '002698',
	        fullName: 'Harbin Boshi Automation Co. Ltd.',
	        updatedAt: 2015,
	        employee: NaN,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.boshi.cn/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: ['others'],
	        tasks: ['Transport', 'others'],
	        notes: ['Worldwide Medical Robot'],
	        sales: 717240000,
	        COGS: 433520000,
	        grossIncome: 284710000,
	        netIncome: 176790000,
	        totalAsset: 2060000000,
	        totalEquity: 1750000000
	    }, {
	        eName: 'Yawei',
	        cName: '亞崴股份',
	        id: '002559',
	        fullName: 'Jiangsu Yawei Machine Tool Co. Ltd.',
	        updatedAt: 2015,
	        employee: 480,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.awea.com/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: NaN,
	        tasks: NaN,
	        notes: ['sino-foreign joint venture with Germany Reis(Kuka holding company)'],
	        sales: 893280000,
	        COGS: 672840000,
	        grossIncome: 220440000,
	        netIncome: 73570000,
	        totalAsset: 2040000000,
	        totalEquity: 1440000000
	    }, {
	        eName: 'Riland',
	        cName: '瑞凌股份',
	        id: '300154',
	        fullName: 'Shenzhen Riland Industry Co. Ltd.',
	        updatedAt: 2015,
	        employee: 1000,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.riland.com.cn/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: NaN,
	        tasks: ['Weld'],
	        notes: ['partnership with Germany Cloos'],
	        sales: 552610000,
	        COGS: 403790000,
	        grossIncome: 148820000,
	        netIncome: 81440000,
	        totalAsset: 1700000000,
	        totalEquity: 1520000000
	    }, {
	        eName: 'Jasic',
	        cName: '佳士科技',
	        id: '300193',
	        fullName: 'Shenzhen Jasic Technology Co. Ltd.',
	        updatedAt: 2015,
	        employee: 500,
	        capacity: 200,
	        country: 'China',
	        link: 'http://jasic.robot-china.com/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: NaN,
	        tasks: ['Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['8 million(RMB) registered capital at 2013', 'leader in Weld industry'],
	        sales: 624680000,
	        COGS: 422150000,
	        grossIncome: 202530000,
	        netIncome: 77290000,
	        totalAsset: 2290000000,
	        totalEquity: 1990000000
	    }, {
	        eName: 'HuaChangDa',
	        cName: '華昌達',
	        id: '300278',
	        fullName: 'Hubei Huachangda Intelligent Equipment Co. Ltd.',
	        updatedAt: 2015,
	        employee: 879,
	        capacity: 200,
	        country: 'China',
	        link: 'http://huachangda.21hubei.com/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: ['Automative'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Sort', 'Transport', 'Weld', 'others'],
	        notes: ['Acquisition of DEMC(one of the biggest Automative automation in China)'],
	        sales: 1750000000,
	        COGS: 1440000000,
	        grossIncome: 306140000,
	        netIncome: 100660000,
	        totalAsset: 3250000000,
	        totalEquity: 1480000000
	    }, {
	        eName: 'ci-xing',
	        cName: '慈星股份',
	        id: '300307',
	        fullName: 'Ningbo Cixing Co. Ltd.',
	        updatedAt: 2015,
	        employee: NaN,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.ci-xing.com/',
	        wiki: NaN,
	        areaServed: NaN,
	        fields: ['others'],
	        tasks: NaN,
	        notes: ['Partnership with EFORT', 'Textile Industry'],
	        sales: 749590000,
	        COGS: 464400000,
	        grossIncome: 258190000,
	        netIncome: 102680000,
	        totalAsset: 4100000000,
	        totalEquity: 3850000000
	    }, {
	        eName: 'Dongfang Precision',
	        cName: '東方精工',
	        id: '002611',
	        fullName: 'Guangdong Dongfang Precision Science & Technology Co. Ltd.',
	        updatedAt: 2015,
	        employee: 900,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.vmtdf.com/',
	        wiki: NaN,
	        areaServed: 'Worldwide',
	        fields: ['Electronic', 'Food Beverage', 'Metal Fabrication', 'others'],
	        tasks: ['Sort', 'Transport', 'other'],
	        notes: ['Corrugated boxes Industry'],
	        sales: 1290000000,
	        COGS: 985200000,
	        grossIncome: 309170000,
	        netIncome: 64840000,
	        totalAsset: 2490000000,
	        totalEquity: 909580000
	    }
	];	// data end		
}]);