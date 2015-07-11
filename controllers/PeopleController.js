angularResources.controller('PeopleCtrl', function PeopleCtrl($scope, ResourcesFactory){
	$scope.numbers = ["one","two"];

	$scope.persons = ResourcesFactory.persons;
	$scope.ResourcesFactory = ResourcesFactory;

});