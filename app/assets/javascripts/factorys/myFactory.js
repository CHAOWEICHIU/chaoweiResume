myApp.controller('DataCtrl', ['$scope', function ($scope) {
	
	$scope.fields = ['Automative','Electronic', 'Food Beverage', 'Robber Plastic', 'Metal Fabrication', 'others'] 
	$scope.tasks = ['Assemble', 'Paint', 'Sort', 'Transport', 'Weld', 'Process']
	$scope.getBackgroundColorForField = function(fields, targetField){
		if (typeof fields !== 'object'){
			return 'disabled'
		} else {
			var checkIfIsEmpty = fields.filter(function(field){return field == targetField})
			if (checkIfIsEmpty.length === 1){
				return 'list-group-item-success'
			} else {
				return 'disabled'
			}
			
		}
		
	}

	$scope.getBackgroundColorForTask = function(tasks, targetTask){
		if (typeof tasks !== 'object'){
			return 'disabled'
		} else {
			var checkIfIsEmpty = tasks.filter(function(task){return task == targetTask})
			if (checkIfIsEmpty.length === 1){
				return 'list-group-item-success'
			} else {
				return 'disabled'
			}
			
		}
	}



	$scope.firmsInformation = [{
	        eName: 'ABB',
	        cName: '??',
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
	        totalEquity: 14481000000
	    }, {
	        eName: 'FAUNC',
	        cName: '法納克',
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
	        sales: 6640000000,
	        COGS: 3190000000,
	        grossIncome: 3450000000,
	        netIncome: 6081333,
	        totalAsset: 13430217,
	        totalEquity: 12620000000
	    }, {
	        eName: 'KUKA',
	        cName: '庫卡',
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
	        netIncome: 86800000000,
	        totalAsset: 1560000000,
	        totalEquity: 733000000
	    },  {
	        eName: 'YASAKAWA',
	        cName: '安川',
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
	        eName: 'Kawasaki Robotics',
	        cName: '川崎重工',
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
	        totalEquity: 432000000
	    }, {
	        eName: 'SIASUN',
	        cName: '新松',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'EFORT',
	        cName: '埃夫特',
	        updatedAt: 2015,
	        employee: 500,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.efort.com.cn/',
	        wiki: NaN,
	        areaServed: 'China',
	        fields: ['Automative', 'Electronic', 'Food Beverage', 'others'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Transport', 'Weld', 'others'],
	        notes: ['comprehensive service'],
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'GSK',
	        cName: '廣州數控',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'Triowin',
	        cName: '沃迪',
	        updatedAt: 2015,
	        employee: 400,
	        capacity: 200,
	        country: 'China',
	        link: 'http://www.triowin.com/',
	        wiki: NaN,
	        areaServed: 'worldwide',
	        fields: ['Food Beverage'],
	        tasks: ['Assemble', 'Process', 'Paint', 'Transport', 'Weld', 'others'],
	        notes: ['worldwide food / beverage industry'],
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'BOSHI',
	        cName: '博實股份',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'AWEA',
	        cName: '亞崴股份',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'RILAND',
	        cName: '瑞凌股份',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'JASIC',
	        cName: '佳士科技',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'HuaChangDa',
	        cName: '華昌達',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'ci-xing',
	        cName: '慈星股份',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }, {
	        eName: 'Dong Fang Precision',
	        cName: '東方精工',
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
	        sales: 0,
	        COGS: 0,
	        grossIncome: 0,
	        netIncome: 0,
	        totalAsset: 0,
	        totalEquity: 0
	    }
	]	// data end		
}])