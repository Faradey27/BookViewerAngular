'use strict';

angular.module('bookViewer')
.constant('ROUTES', {
  books: {
    list: {
      url: '/books',
      templateUrl: 'views/books/books.html',
      controller: 'BooksCtrl'
    },
    details: {
      url: '/books/:id',
      templateUrl: 'views/books/bookDetails.html',
      controller: 'BookCtrl'
    }
  },
  authors: {
    list: {
      url: '/authors',
      templateUrl: 'views/authors/authors.html',
      controller: 'AuthorsCtrl'
    },
    details: {
      url: '/authors/:id',
      templateUrl: 'views/authors/authorDetails.html',
      controller: 'AuthorCtrl'
    }
  },
  genre: {
    list: {
      url: '/genres',
      templateUrl: 'views/genres/genres.html',
      controller: 'GenresCtrl'
    }
  }
})
.config(['$routeProvider', '$locationProvider', 'ROUTES', function($routeProvider, $locationProvider, ROUTES) {
  var createRoute = function(routeObj) {
    if(routeObj.url){
      $routeProvider.when(routeObj.url, routeObj);
    } else {
      angular.forEach(routeObj, createRoute);
    }
    $routeProvider.otherwise({redirectTo: '/books'});
  };
  angular.forEach(ROUTES, createRoute);
}])
.run(['$rootScope', 'ROUTES', function($rootScope, ROUTES) {
  $rootScope.ROUTES = ROUTES;
}]);
