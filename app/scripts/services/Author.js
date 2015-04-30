'use strict';

angular.module('bookViewer')
.factory('Author', ['$http', function($http) {  
    function Author(data) {
      if (data) {
          this.setAuthor(data);
      }
    };
    Author.prototype = {
      setAuthor: function(data) {
        angular.extend(this, data);
      }
    };
    return Author;
}]);