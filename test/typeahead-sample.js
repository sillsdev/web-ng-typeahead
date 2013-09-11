// Declare app level module which depends on filters, and services
angular.module('palaso.sample.typeahead', ['palaso.ui.typeahead'])
	.controller('TypeaheadSampleCtrl', ['$scope', function($scope) {
		var things = [
             { name: 'Bob',     email: 'bob@example.com' },
             { name: 'Bobby',   email: 'bobby@example.com'  },
             { name: 'Robert',  email: 'robert@example.com'  },
             { name: 'Roberta', email: 'roberta@example.com'  },
             { name: 'Bert',    email: 'bert@example.com'  },
             { name: 'Wendy',   email: 'wendy@example.com'  },
             { name: 'Pickles', email: 'pickles@example.com'  },
             { name: 'Scoop',   email: 'scoop@example.com'  },
             { name: 'Muck',    email: 'muck@example.com'  },
             { name: 'Dizzy',   email: 'dizzy@example.com'  },
             { name: 'Roley',   email: 'roley@example.com'  },
             { name: 'Lofty',   email: 'lofty@example.com'  },
             { name: 'Travis',  email: 'travis@example.com'  },
        ];
		
		$scope.users = [];
		$scope.queryUser = function(searchTerm) {
			console.log('queryUser: ', searchTerm);
			var users = [];
			for (var index in things) {
				var thing = things[index];
				var pos = thing.name.indexOf(searchTerm);
				if (pos != -1) {
					users.push(thing);
				}
			}
			$scope.users = users;
		};
		
		$scope.selectUser = function(user) {
			console.log('selectUser: ', user);
		};
		
	}])
	;