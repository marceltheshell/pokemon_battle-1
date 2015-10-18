var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope, PokeDeck) {
	$scope.battle = []

	$scope.pokes = PokeDeck.query(); 

	$scope.iChooseYou = function (poke) {
		if ($scope.battle[0]) {
			$scope.battle[1] = poke; 
	 	}
		else {
			($scope.battle[0] = poke)
		}
	};

	$scope.pickWinner = function () {
		var winner_idx = Math.floor(Math.random() * 2);
		console.log(winner_idx)
		$scope.battle = $scope.battle.splice(winner_idx, 1)
		$scope.winner = $scope.battle[0].name.text;
	};
})

app.factory('PokeDeck', function(){
  var PokeDeck = {};

  PokeDeck.query = function(){
    return pokemonArray.results.collection1;
  }

  // WineService.get = function(id){
  //   var id = parseInt(id);
  //   return ALL_WINES.find(function(wine){
  //     return wine.id == id;
  //   });
  // }

  return PokeDeck;

})
