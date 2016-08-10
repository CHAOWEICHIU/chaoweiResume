myApp.config([
 '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $routeProvider.when('/future',{
    templateUrl: 'future.html',
 });
 $routeProvider.when('/analysis', {
   templateUrl: 'analysis.html',
 });
 $routeProvider.when('/conclusion', {
   templateUrl: 'conclusion.html',
 });
 $routeProvider.otherwise({
   redirectTo: '/future'
 });
 }
]);

