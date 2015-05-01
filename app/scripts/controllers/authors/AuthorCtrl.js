'use strict';

angular.module('bookViewer')
.controller('AuthorCtrl',['$scope', 'modelManager','$routeParams', function($scope, modelManager, $routeParams) {
  $scope.name = '';
  $scope.biography = '';
  $scope.books = [];
  function loadBook() {
    modelManager.getAuthor($routeParams.id).then(function(data){
        $scope.name = data.name;
        $scope.biography = data.biography;
        $scope.books = data.books;
    });
  }
  loadBook();
}]);
