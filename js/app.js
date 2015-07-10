var angularResources = angular.module('angularResources', ['ui.router']);

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
});