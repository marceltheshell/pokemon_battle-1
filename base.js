var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope) {

  $scope.pokemon = res.results.collection1; // see mock_data.js
  $scope.iChooseYou = function(src){
    $scope.image_src = src;
  }

});
