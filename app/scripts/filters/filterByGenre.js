'use strict';

angular.module('bookViewer')
.filter('filterByGenre',function(){
    return function(data, genre) {
        var result = {};
        for (var key in data) {
            if (data[key].genre == genre) {
                result[key] = data[key];
            }
        }
        return result;
    };
});