myApp.directive('cwComparisonChart', ['$window',function ($window) {
	function link(scope, iElement, iAttrs) {
	 	
		

	 	// predefine shortcut
	 	var w = angular.element($window)
		var el = iElement[0]
		var firms = scope.firmsInformation
		
		

		// canvas
		// var height = d3.select(el).node().parentNode.parentNode.clientHeight - 20,
		// 	width = d3.select(el).node().parentNode.parentNode.childNodes[1].clientWidth

		var height = el.clientWidth ,
			width = el.clientWidth
		
		var canvas = d3.select(el).append('svg')
			.attr('height', height)
			.attr('width', width)
			// .style('background-color', 'white')




		// pei chart 
		var color = d3.scale.category20c();
		var pieChartG = canvas.append('g').attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		var radius = Math.min(width, height) / 2;

		var arc = d3.svg.arc()
		    .outerRadius(radius)
		    .innerRadius(0)
		var labelArc = d3.svg.arc()
		    .outerRadius(radius - width / 318 * 100)
		    .innerRadius(radius);

		var pie = d3.layout.pie()
		    .value(function(d) { return d.capacity; });

		var totalCapacity = firms.reduce(function(previousValue, currentValue){
			return previousValue + parseInt(currentValue.capacity);
		},0)
		

		var sliceG = pieChartG.selectAll("path")
	      		.data(pie(firms))
				.enter()
				.append('g')
		
		var slice = sliceG.append("path")
				.attr('d', arc)
	      		.attr('fill', function(d) { return color(d.data.eName); })
	      		.attr('opacity', 0.4)
	    var sliceText = sliceG.append('text')
	    	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      		.attr("dx", "-1em")
      		.attr('pointer-events', 'none')
      		.text(function(d) { 
      			var percentage = (d.data.capacity / totalCapacity * 100).toFixed(0)
      			if(percentage > 5){
      				return percentage + '%'
      			}
      			
      		})

      	

      	// mouse event
      	slice.on('mouseover',handleMouseover)
      	     .on('mouseout', handleMouseout)
      	     .on('click', handleClick)

      	function handleMouseover(){
      		d3.select(this).attr('opacity', 0.4)
      	}
      	function handleMouseout(){
      		d3.select(this).attr('opacity', 0.2)
      	}
      	function handleClick(){
      		d3.select(this).text(function(d) { 
					      		// force angular to update firm name in DataCtrl
					      		scope.$apply(function(){
									scope.firmID = d.data.eName
								})				
	      				    })
      					    .attr('opacity', 1)
      					    .transition().delay(0).duration(150)
      					    .attr('opacity', 0.1)
      	}
      	
      	
	   




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

	return {
		restrict: 'E',
		link: link, 
		controller: 'DataCtrl'
	};
}])