angularResources.factory('ResourcesFactory', function ResourcesFactory(){
	var factory = {};

	factory.persons = [
		{ name: "Tom Schmitz",
		  occupation: "barista"},
		{ name: "Judy Schmitz",
		  occupation: "construction"},
		{ name: "Jill Schmitz",
		  occupation: "project manager"}
	];
	factory.addPerson = function(){
		var person = { name: factory.personName,
		  occupation: factory.personOccupation };

		factory.persons.push(person);
		factory.personName = "";
		factory.personOccupation = "";
	};

	factory.deletePerson = function(person){
		var index = factory.persons.indexOf(person);
		factory.persons.splice(index,1);
	};

	factory.books = [
	{
		title: "2001: A Space Odyssey",
		description: "A space novel"
	},
	{
		title: "The Great Houndini",
		description: "Dont box me in he said"
	}];

	factory.websites = [];

	factory.addBook = function(){
		factory.books.push(
		{
			title : factory.bookTitle,
			description: factory.bookDescription
		});
		factory.bookTitle = null;
		factory.bookDescription = null;
	};
	factory.deleteBook = function(book){
		var index= factory.books.indexOf(book);
		factory.books.splice(index,1);
	};
	return factory;
})