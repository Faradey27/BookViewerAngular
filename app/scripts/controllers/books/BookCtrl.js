'use strict';

angular.module('bookViewer')
.controller('BookCtrl',['$scope', 'modelManager','$routeParams', function($scope, modelManager, $routeParams) {
  $scope.name = '';
  $scope.short = '';
  $scope.genre = [];
  $scope.authors = [];
  function loadBook() {
    modelManager.getBook($routeParams.id).then(function(data){
        $scope.name = data.name;
        $scope.short = data.short;
        $scope.genre = data.genre;
        $scope.authors = data.authors;
    });
  }
  loadBook();
}]);
