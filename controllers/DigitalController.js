angularResources.controller('DigitalCtrl', function DigitalCtrl($scope){
	$scope.books = [
	{
		title: "2001: A Space Odyssey",
		description: "A space novel"
	}];
	$scope.websites = [];

	$scope.addBook = function(){
		$scope.books.push(
		{
			title : $scope.bookTitle,
			description: $scope.bookDescription
		});
	};
	$scope.deleteBook = function(book){
		var index= $scope.books.indexOf(book);
		$scope.books.splice(index,1);
	};


});


