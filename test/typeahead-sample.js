// Declare app level module which depends on filters, and services
angular.module('palaso.sample.typeahead', ['palaso.ui.typeahead'])
	.controller('TypeaheadSampleCtrl', ['$scope', function($scope) {
		$scope.things = [
             { name: 'Bob',     email: 'bob@example.com',     image: 'm3.jpg' },
             { name: 'Bobby',   email: 'bobby@example.com',   image: 'm2.jpg' },
             { name: 'Robert',  email: 'robert@example.com',  image: 'm1.jpg' },
             { name: 'Roberta', email: 'roberta@example.com', image: 'f1.jpg' },
             { name: 'Bert',    email: 'bert@example.com',    image: 'm1.jpg' },
             { name: 'Wendy',   email: 'wendy@example.com',   image: 'f2.jpg' },
             { name: 'Pickles', email: 'pickles@example.com', image: 'm1.jpg' },
             { name: 'Scoop',   email: 'scoop@example.com',   image: 'c1.jpg' },
             { name: 'Muck',    email: 'muck@example.com',    image: 'c1.jpg' },
             { name: 'Dizzy',   email: 'dizzy@example.com',   image: 'c1.jpg' },
             { name: 'Roley',   email: 'roley@example.com',   image: 'c1.jpg' },
             { name: 'Lofty',   email: 'lofty@example.com',   image: 'c1.jpg' },
             { name: 'Travis',  email: 'travis@example.com',  image: 'c1.jpg' },
        ];
		
		$scope.typeahead = {};
		$scope.typeahead.userName = '';
		$scope.users = [];
		$scope.queryUser = function(searchTerm) {
			console.log('queryUser: ', searchTerm);
			var users = [];
			for (var index in $scope.things) {
				var thing = $scope.things[index];
				var pos = thing.name.indexOf(searchTerm);
				if (pos != -1) {
					users.push(thing);
				}
			}
			$scope.users = users;
		};
		
		$scope.selectUser = function(user) {
			console.log('selectUser: ', user);
			$scope.typeahead.userName = user.name;
		};
		
		$scope.imageSource = function(image) {
			return '../src/images/' + image;
		};
		
	}])
	;