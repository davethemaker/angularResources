angularResources.controller('PeopleCtrl', function PeopleCtrl($scope){
	$scope.numbers = ["one","two"];
	$scope.persons = [
		{ name: "Tom Schmitz",
		  occupation: "barista"},
		{ name: "Judy Schmitz",
		  occupation: "construction"},
		{ name: "Jill Schmitz",
		  occupation: "project manager"}
	];
	$scope.addPerson = function(){
		$scope.persons.push(
		{
			name: $scope.personName,
			occupation: $scope.personOccupation
		});
		$scope.personName = "";
		$scope.personOccupation = "";
	};

	$scope.deletePerson = function(person){
		var index = $scope.persons.indexOf(person);
		$scope.persons.splice(index,1);
	};
});