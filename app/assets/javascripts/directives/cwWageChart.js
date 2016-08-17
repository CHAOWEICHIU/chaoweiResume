myApp.directive('cwWageChart', ['$http', '$q', '$log',function ($http, $q, $log) {
	function link(scope, iElement, iAttrs){
		// data
		var wageData = [
			{year: 2010, wage:30700},
			{year: 2011, wage:36665},
			{year: 2012, wage:41650},
			{year: 2013, wage:46431},
			{year: 2014, wage:51369},
			{year: 2015, wage:60000},
			{year: 2016, wage:70000},
		]

		// pre-define
		var el = iElement[0]


		// setup size of bar chart
		var margin = {top: 20, right: 0, bottom: 50, left: 90},
    		width = el.clientWidth - margin.left - margin.right,
    		height = 500 - margin.top - margin.bottom;
		

		// basic canvas
		var canvas = d3.select(el).append('svg')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height + margin.top + margin.bottom)
					.style('background-color', 'white')
				.append("g")
    				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");




		// scale
    	var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], 0.1)
		   	.domain(wageData.map(function(d) { return d.year; }));
		var y = d3.scale.linear()
			.range([height, 0])
			.domain([0, d3.max(wageData, function(d) { return d.wage; })])
		
		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		canvas.append("g")
      		.attr("class", "x axis")
      		.attr("transform", "translate(0," + height + ")")
      		.call(xAxis);
      	canvas.append("g")
      		.attr("class", "y axis")
      		.call(yAxis);



		
    	
		var bars = canvas.selectAll('rect')
			.data(wageData)
		.enter().append('rect')
			    .attr('x', function(d) { return x(d.year); })
			    .attr('y', function(d) { return y(d.wage); })
			    .attr('width', x.rangeBand())
			    .attr('height', function(d) { return height- y(d.wage); })
			    .attr('rx', 0)
			    .attr('ry', 0)
			    .style('fill', '#000');

    	bars.on('click', handleMouseClick)
    		.on('mouseout', handleMouseout)
    		.on('mouseover', handleMouseover)
    		
    		
    	function handleMouseover(){
    		console.log(d3.select(this).style('fill'))
    		if (d3.select(this).style('fill') !== 'rgb(0, 0, 255)') {
    			d3.select(this).style('fill', 'steelblue')	
    		} 
    		
    	}
    	function handleMouseout(){
    		if (d3.select(this).style('fill') == 'rgb(70, 130, 180)') {
    			d3.select(this).style('fill', 'black')	
    		}
    		
    		
    	}
    	var previousClick;
    	console.log(previousClick)
    	function handleMouseClick(){
    		if (previousClick === 'undefined'){
    			d3.select(this).style('fill', 'blue')	
    			previousClick = this;
    			console.log('undefine')
    		} else {
    			d3.select(previousClick).style('fill', 'black')	
    			d3.select(this).style('fill', 'blue')
    			previousClick = this;
    			console.log('second')
    		}    		
    		tooltipBackground.attr('opacity', 0.8)
    		
    		var presentYear = d3.select(this).data()[0].year
    		if(presentYear != 2010){
    			var lastYear = presentYear - 1
	    		var tooltipTextInfo = {}
	    		wageData.forEach(function(item){
	    			if(item.year === presentYear){
	    				tooltipTextInfo.presentYear = item.year
	    				tooltipTextInfo.presentYearWage = item.wage
	    			}
	    			if(item.year === lastYear){
	    				tooltipTextInfo.lastYear = item.year
	    				tooltipTextInfo.lastYearWage = item.wage
	    			}
	    		})	
	    		growthRate = (tooltipTextInfo.presentYearWage - tooltipTextInfo.lastYearWage) / tooltipTextInfo.lastYearWage * 100
    			tooltipText1.text(tooltipTextInfo.lastYear + '~' + tooltipTextInfo.presentYear)
    			tooltipText2.text(growthRate.toFixed(2) + '% ⬆')
    		} else {
    			tooltipText1.text( '2009~2010')
    			tooltipText2.text( '15.00% ⬆')
    		}

    	}

    	var tooltipGroup = canvas.append('g')
    		.attr('transform', 'translate(' + (width / 100 * 4) + ',' + 0 + ')')

    	var tooltipBackground = tooltipGroup.append('rect')
    	    .attr('width', width / 10 * 3.5)
    	    .attr('height', height / 10 * 4)
    	    .attr('rx', 0)
    	    .attr('ry', 0)
    	    .style('fill', '#000')
    	    .attr('opacity', 0)

    	var tooltipText1 = tooltipGroup.append('text')
    		.attr("x", width / 100 * 18)
      		.attr("y", height / 100 * 15)
    		.attr("fill","#fff")
       		.style("stroke-width", 1)
      		.style({"font-size":"40px","z-index":"999999999"})
      		.style("text-anchor", "middle")
      	
      	var tooltipText2 = tooltipGroup.append('text')
    		.attr("x", width / 100 * 18)
      		.attr("y", height / 100 * 30)
    		.attr("fill","#fff")
       		.style("stroke-width", 1)
      		.style({"font-size":"40px","z-index":"999999999"})
      		.style("text-anchor", "middle")	


      		// (present - past ) / past



	}
	return {
		restrict: 'E',
		link: link
	};
}]);