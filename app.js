var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope, PokeDeck) {
	$scope.battle = []

	$scope.pokes = PokeDeck.query(); 

	$scope.iChooseYou = function (poke) {
		$scope.battle.push(poke) 
	} 
	

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
