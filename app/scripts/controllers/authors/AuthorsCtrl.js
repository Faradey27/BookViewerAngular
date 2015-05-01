'use strict';

angular.module('bookViewer')
.controller('AuthorsCtrl',['$scope','modelManager', function($scope, modelManager) {
  $scope.authors = [];
  $scope.activeDropdownAuthorId = null;
  function loadAuthorsData() {
    modelManager.loadAuthors().then(function(data){
        $scope.authors = data;
    });
  }
  $scope.showDropdown = function(id) {
    if ($scope.activeDropdownAuthorId != id) {
        $scope.activeDropdownAuthorId = id;
    } else {
        $scope.activeDropdownAuthorId = null;
    }
  };
  loadAuthorsData();
}]);
