var angularResources = angular.module('angularResources', [
	'ui.router',
	'firebase',
	]);

angularResources.config(function($stateProvider){
	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});

	$stateProvider.state('books', {
		url:"/books",
		templateUrl:"partials/books.html",
		controller: 'DigitalCtrl'
	});

	$stateProvider.state('persons', {
		url: "/persons",
		templateUrl:"partials/persons.html",
		controller: 'PeopleCtrl'
	});

	$stateProvider.state('websites', {
		url: "/websites",
		templateUrl:"partials/websites.html",
		controller: 'DigitalCtrl'
	});
	$stateProvider.state('organizations', {
		url: "/organizations",
		templateUrl:"partials/organizations.html",
		controller: 'DigitalCtrl'
	});

	$stateProvider.state('organizations.members', {
		url:"/:organizationId",
		templateUrl:"partials/organizations.members.html",
		controller:'DigitalCtrl'
	});
	$stateProvider.state('organizations.info',{
		url:"/:organizationInfoId",
		templateUrl:"partials/organizations.info.html",
		controller:'DigitalCtrl'
	});
});