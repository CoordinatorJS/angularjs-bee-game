var app = angular.module('beeApp', ['ngMaterial']);

app.controller('mainCtrl', function ($scope, $mdToast) {	//Main controller
	createBees();

	

	$scope.randomBee = $scope.allBees[Math.floor(Math.random() * $scope.allBees.length)];

	$scope.hitBee = function() {
		console.log($scope.allBees);
		console.log($scope.randomBee);
		
		var pos = $scope.allBees.map(function (e) { return e.name}).indexOf($scope.randomBee.name);
		if (pos > -1) {
			$scope.allBees[pos].life -= $scope.randomBee.hit;
			if ($scope.allBees[pos].life <= 0) {
				$scope.allBees[pos].life = 0;
				if ($scope.allBees[pos].name === "Queen Bee") {	// If Queen Bee is dead, Game Over
					alert("Queen Bee is dead, Game Over. The Game will start again.");
					createBees();
				} else {
					$scope.allBees.splice(pos, 1);
					toast($scope.randomBee.name + " dead ");

					if ($scope.allBees.length === 0) {
						createBees();
					}
				}
			} else {
				console.log($scope.randomBee.name + " life = " + $scope.allBees[pos].life);
				toast($scope.randomBee.name + " hit by " + $scope.randomBee.hit + " points");
			}
			
		}
		$scope.randomBee = $scope.allBees[Math.floor(Math.random() * $scope.allBees.length)];
		
	}

	function createBees() {
		$scope.allBees = [
		{"name" : "Queen Bee", "lifeStart": 100, "life": 100, "hit": 8},
		{"name" : "Worker Bee 1", "lifeStart": 75, "life": 75, "hit": 10},
		{"name" : "Worker Bee 2", "lifeStart": 75, "life": 75, "hit": 10},
		{"name" : "Worker Bee 3", "lifeStart": 75, "life": 75, "hit": 10},
		{"name" : "Worker Bee 4", "lifeStart": 75, "life": 75, "hit": 10},
		{"name" : "Worker Bee 5", "lifeStart": 75, "life": 75, "hit": 10},
		{"name" : "Drone Bee 1", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 2", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 3", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 4", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 5", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 6", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 7", "lifeStart": 50, "life": 50, "hit": 12},
		{"name" : "Drone Bee 8", "lifeStart": 50, "life": 50, "hit": 12}];
	}

	function toast(text) {	//Create toast on the top-right hand corner
		$mdToast.show(
			$mdToast.simple()
			.content(text)
			.position("top right")
			.hideDelay(3000)
		);
	}
});

