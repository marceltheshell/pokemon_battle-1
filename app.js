var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope, PokemonLib) {
	console.log("Pokemon index")
	$scope.pokes = PokemonLib.query(); 
	$scope.chooseFighter = function chooseFighter() {
		if ($scope.battle[0]) {
			$scope.battle.push(poke)
		} 
		else {
			$scope.battle.push(poke)
		}
	}
})

app.factory('PokemonLib', function(){

  var PokemonLib = {};

  PokemonLib.query = function(){
    return pokemons.results.collection1;
  }

  // WineService.get = function(id){
  //   var id = parseInt(id);
  //   return ALL_WINES.find(function(wine){
  //     return wine.id == id;
  //   });
  // }

  return PokemonLib;

})
