// 	ROS - return on sales   
//	ROA - return on asset
//	ROE - return on equity


// goal: three bottoms can change the data
// time: before noon


// To do list --------------------------------------------

// 	try to use return on sales at deafult

// 1. add sum data  -- ok 
// 2. add to $watch
//    		 



myApp.directive('cwComparisonChart', ['$window',function ($window) {
	function link(scope, iElement, iAttrs) {
	 	
		

	 	// predefine shortcut
	 	var w = angular.element($window)
		var el = iElement[0]
		var firms = scope.firmsInformation
		
		// add sum data to each firm
		var sumSales = firms.reduce((p,c) => { return p + c.sales }, 0)
		var sumCOGS = firms.reduce((p,c) => { return p + c.COGS }, 0)
		var sumGrossIncome = firms.reduce((p,c) => { return p + c.grossIncome }, 0)
		var sumNetIncome = firms.reduce((p,c) => { return p + c.netIncome }, 0)
		var sumTotalAsset = firms.reduce((p,c) => { return p + c.totalAsset }, 0)
		var sumTotalEquity = firms.reduce((p,c) => { return p + c.totalEquity }, 0)
		var newFirms = firms.reduce(function(firms, firmArray){
			firmArray.sumSales = sumSales
			firmArray.sumCOGS = sumCOGS
			firmArray.sumGrossIncome = sumGrossIncome
			firmArray.sumNetIncome = sumNetIncome
			firmArray.sumTotalAsset = sumTotalAsset
			firmArray.sumTotalEquity = sumTotalEquity
			firmArray.ROS = firmArray.netIncome / firmArray.sales
			firmArray.ROA = firmArray.netIncome / firmArray.totalAsset
			firmArray.ROE = firmArray.netIncome / firmArray.totalEquity
			firms.push(firmArray)
			return firms
		}, []).reduce(function(firmsBox, firmArray){
			firmArray.totalROS = firms.reduce((p,c) => {return p + c.ROS}, 0)
			firmArray.totalROA = firms.reduce((p,c) => {return p + c.ROA}, 0)
			firmArray.totalROE = firms.reduce((p,c) => {return p + c.ROE}, 0)
			firmsBox.push(firmArray)
			return firmsBox
		}, [])




	// start to draw

		// size container
		var height = el.clientWidth,
			width = el.clientWidth
		var canvas = d3.select(el).append('svg')
			.attr('height', height)
			.attr('width', width)


		// location in container 
		var color = d3.scale.category20c();
		var pieChartG = canvas.append('g').attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		var radius = Math.min(width, height) / 2;

		// size for piechart
		var arc = d3.svg.arc()
		    .outerRadius(radius)
		    .innerRadius(0)

		// label position from center of this piechart
		var labelArc = d3.svg.arc()
		    .outerRadius(radius - width / 318 * 100)
		    .innerRadius(radius);


		// pie generator base on ... ROA
		var pie = d3.layout.pie()
		    .value(function(d) { return d.ROS; });


		// Enter data

		var sliceG = pieChartG.selectAll("path")
	      		.data(pie(newFirms))
				.enter()
				.append('g')
		
		var slice = sliceG.append("path")
				.attr('d', arc)
	      		.attr('fill', function(d) { return color(d.data.eName); })
	      		.attr('opacity', 0.2)

	    var sliceText = sliceG.append('text')
	    	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      		.attr("dx", "-1em")
      		.attr('pointer-events', 'none')
      		.text(function(d) { 
      			var percentage = (d.data.ROS / d.data.totalROS * 100).toFixed(0)
  					if (percentage >= 5){
  						return percentage + '%'		
  					}
      		})


      	// mouse event
      	var preClick = ''
      	slice.on('mouseover',handleMouseover)
      	     .on('mouseout', handleMouseout)
      	     .on('click', handleClick)

      	function handleMouseover(){
      		d3.select(this).attr('opacity', 0.4)
      	}
      	function handleMouseout(){
      		var currentSelectionOpacity = d3.select(this).attr('opacity')
      		if (currentSelectionOpacity !== '1'){
      			d3.select(this).attr('opacity', 0.2)
      		}

      		
      	}
      	function handleClick(){
      		if (preClick == ''){
      			preClick = d3.select(this)	
      		} else {
      			preClick.attr('opacity', 0.2)	
      			preClick = d3.select(this)	
      		}
      		
      		


      		d3.select(this).text(function(d) { 
					      		// force angular to update firm name in DataCtrl
					      		scope.$apply(function(){
									scope.firmID = d.data.eName
								})				
	      				    })
      					    .attr('opacity', 1)
      					    .transition().delay(0).duration(150)
      					    .attr('opacity', 0.1)
      					    .transition().delay(100).duration(200)
      					    .attr('opacity', 1)
      	}
      	
      	
	   
      	// update chart when activeButton change
		scope.$watch('activeButton', function(newValue,oldValue){
			console.log(scope.activeButton)
			
			if(newValue !== oldValue){
				updatePieChart();	
			}
		})


		function updatePieChart(){
      		// remove currentChart
      		sliceG.remove()

      	
      		// create new chart
      		pie.value(function(d) { 

      			
      			return d[scope.activeButton]; 
      		});
			
			sliceG = pieChartG.selectAll("path")
	      		.data(pie(newFirms))
				.enter()
				.append('g')
			
			slice = sliceG.append("path")
				.attr('d', arc)
	      		.attr('fill', function(d) { return color(d.data.eName); })
	      		.attr('opacity', 0.2)

	    	sliceText = sliceG.append('text')
		    	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	      		.attr("dx", "-1em")
	      		.attr('pointer-events', 'none')
	      		.text(function(d) { 
	      			var percentage = (d.data.ROS / d.data.totalROS * 100).toFixed(0)
	  					if (percentage >= 5){
	  						return percentage + '%'		
	  					}
	      		})

			// update while resize
		 	slice.on('mouseover',handleMouseover)
      	     	 .on('mouseout', handleMouseout)
      	     	 .on('click', handleClick)

      	    updateWhileResize()
      	
      	}

      	function updateWhileResize(){
	      	// update while resize
		 	w.bind('resize', function(){
	      		width = d3.select(el).node().parentNode.parentNode.childNodes[1].clientWidth - 30
	      		canvas.attr('width',width)
	      		pieChartG.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	      		radius = Math.min(width, height) / 2
	      		arc.outerRadius(radius);
	      		slice.attr('d', arc)
	      		labelArc.outerRadius(radius - width / 318 * 100).innerRadius(radius);
	      		sliceText.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	    	})
      	}
      	updateWhileResize()


		
	
	}

	return {
		restrict: 'E',
		link: link, 
		controller: 'DataCtrl'
	};
}])