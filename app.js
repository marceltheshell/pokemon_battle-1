var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope, PokeDeck) {
	$scope.pokes = PokeDeck.query(); 
	

	// $scope.chooseFighter = function chooseFighter() {
	// 	if ($scope.battle[0]) {
	// 		$scope.battle.push(poke)
	// 	} 
	// 	else {
	// 		$scope.battle.push(poke)
	// 	}
	// }
})

app.factory('PokeDeck', function(){
  var PokeDeck = {};

  PokeDeck.query = function(){
    return pokemonArray;
  }

  // WineService.get = function(id){
  //   var id = parseInt(id);
  //   return ALL_WINES.find(function(wine){
  //     return wine.id == id;
  //   });
  // }

  return PokeDeck;

})
