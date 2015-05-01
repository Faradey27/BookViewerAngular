'use strict';

angular.module('bookViewer')
.controller('BooksCtrl',['$scope', 'modelManager', function($scope, modelManager) {
  $scope.books = [];

  function loadBooksData() {
  	modelManager.loadBooks().then(function(data){
  		$scope.books = data;
  	});
  }

  loadBooksData();
}]);
