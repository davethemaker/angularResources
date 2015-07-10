angularResources.controller('PeopleCtrl', function PeopleCtrl($scope){
	$scope.box = ["one","two"];
	$scope.persons = [
		{ name: "Tom Schmitz"},
		{ name: "Judy Schmitz"},
		{ name: "Jill Schmitz"}
	];
	$scope.addPerson = function(){
		$scope.persons.push(
		{
			name: $scope.personName
		});
		$scope.personName = "";
	};
});