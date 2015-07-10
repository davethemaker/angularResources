angularResources.controller('DigitalCtrl', function DigitalCtrl($scope, ResourcesFactory){
	$scope.books = ResourcesFactory.books;
	$scope.websites = ResourcesFactory.websites;
	$scope.ResourcesFactory = ResourcesFactory;


});


