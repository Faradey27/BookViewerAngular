'use strict';

angular.module('bookViewer')
.controller('GenresCtrl',['$scope', '$filter', '$routeParams', 'modelManager', function($scope, $filter, $routeParams, modelManager) {
  $scope.books = [];

  function loadBooksData() {
    modelManager.loadBooks().then(function(data){
        $scope.books = $filter('filterByGenre')(data, $routeParams.genre);
    });
  }

  loadBooksData();
}]);
