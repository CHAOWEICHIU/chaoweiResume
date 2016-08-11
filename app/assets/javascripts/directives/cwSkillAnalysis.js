myApp.directive('cwSkillAnalysis', ['$window', function ($window) {
	function link(scope, iElement, iAttrs){
		// short cut pre define
		var w = angular.element($window)
		var el = iElement[0]
		console.log(el.clientHeight, el.clientWidth)

		var height = el.clientWidth,
			width = el.clientWidth

		var canvas = d3.select(el).append('svg')
			.attr('width', width)
			.attr('height', height)
			.style('background-color', 'black')
	
		// update while resize

		w.bind('resize', function(){
			height = el.clientWidth
			width = el.clientWidth

			canvas.attr('width', width)
				  .attr('height', height)

		})

	}


	return {
		restrict: 'E',
		link: link
	};
}])