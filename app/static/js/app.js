angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/phones', {
			templateUrl: 'static/partials/phone-list.html',
			controller: PhoneListCtrl
		}).
		when('/phones/:phoneId', {
			templateUrl: 'static/partials/phone-detail.html',
			controller: PhoneDetailCtrl
		}).
		otherwise({
			redirectTo: '/phones'
		});
	}
]);