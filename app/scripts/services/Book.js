'use strict';

angular.module('bookViewer')
.factory('Book', ['$http', function($http) {  
    function Book(data) {
      if (data) {
          this.setBook(data);
      }
    };
    Book.prototype = {
      setBook: function(data) {
        angular.extend(this, data);
      }
    };
    return Book;
}]);