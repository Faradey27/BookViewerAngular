'use strict';

angular.module('bookViewer')
.controller('MainCtrl',['$scope','$location', function($scope, $location) {
    $scope.activeItem = "books";

    $scope.setActiveItem = function(item) {
        $scope.activeItem = item;
    };

    function updateMenuActiveItem() {
        var menuItems = ['authors', 'books'];
        for (var i = 0; i < menuItems.length; i++) {
            if ($location.path().search(menuItems[i]) == 1) {
                $scope.setActiveItem(menuItems[i]);
                break;
            }
        }
    };

    $scope.$on('$routeChangeStart', function(next, current) {
        updateMenuActiveItem();
    });

    $scope.isActiveItem = function(item) {
        return $scope.activeItem == item;
    };
}]);
