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
		  occupation: factory.personOccupation};

		factory.persons.push(person);
		factory.personName = "";
		factory.personOccupation = "";
	};

	factory.deletePerson = function(person){
		var index = factory.persons.indexOf(person);
		factory.persons.splice(index,1);
	};
	return factory;
})