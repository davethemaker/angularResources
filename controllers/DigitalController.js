angularResources.controller('DigitalCtrl', function DigitalCtrl($scope, $stateParams, ResourcesFactory){
	$scope.books = ResourcesFactory.books;
	$scope.organization = ResourcesFactory.findById(ResourcesFactory.organizations, $stateParams.organizationId);
	$scope.websites = ResourcesFactory.websites;
	$scope.ResourcesFactory = ResourcesFactory;
	$scope.organizations = ResourcesFactory.organizations;
	$scope.addMember = function(){
		$scope.organization.members.push(
		{
			name: $scope.memberName
		});
		$scope.memberName = null;
	}


});


