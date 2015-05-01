'use strict';

angular.module('bookViewer')
.factory('modelManager', ['$http', '$q', 'Book', 'Author', function($http, $q, Book, Author) {
    var modelManager = {
        _books: {},
        _authors: {},
        _retrieveBookInstance: function(bookId, bookData) {
            var instance = this._books[bookId];

            if (instance) {
                instance.setBook(bookData);
            } else {
                instance = new Book(bookData);
                this._books[bookId] = instance;
            }

            return instance;
        },
        _retrieveAuthorInstance: function(authorId, authorData) {
            var instance = this._authors[authorId];

            if (instance) {
                instance.setAuthor(authorData);
            } else {
                instance = new Author(authorData);
                this._authors[authorId] = instance;
            }

            return instance;
        },
        _searchBook: function(bookId) {
            return this._books[bookId];
        },
        _searchAuthor: function(authorId) {
            return this._authors[authorId];
        },
        getBook: function(bookId) {
            var deferred = $q.defer();
            var book = this._searchBook(bookId);
            var self = this;
            if (book) {
                deferred.resolve(book);
            } else {
                this.loadModel().then(function() {
                    deferred.resolve(self._searchBook(bookId));
                });
            }
            return deferred.promise;
        },
        getAuthor: function(authorId) {
            var deferred = $q.defer();
            var author = this._searchAuthor(authorId);
            var self = this;
            if (author) {
                deferred.resolve(author);
            } else {
                this.loadModel().then(function() {
                    deferred.resolve(self._searchAuthor(authorId));
                });
            }
            return deferred.promise;
        },
        loadBooks: function() {
            var deferred = $q.defer();
            if (!$.isEmptyObject(this._books)) {
                deferred.resolve(this._books)
            } else {
                this.loadModel().then(function(data){
                    deferred.resolve(data.books);
                });
            }
            return deferred.promise;
        },
        loadAuthors: function() {
            var deferred = $q.defer();
            if (!$.isEmptyObject(this._authors)) {
                deferred.resolve(this._authors)
            } else {
                this.loadModel().then(function(data){
                    deferred.resolve(data.authors);
                });
            }
            return deferred.promise;
        },
        loadModel: function() {
            var deferred = $q.defer();
            var scope = this;
            $http.get('data/books.json')
                .success(function(model) {
                    var books = [];
                    var authors = [];
                    model.books.forEach(function(bookData) {
                        var book = scope._retrieveBookInstance(bookData.id, bookData);
                        books.push(book);
                    });
                    model.authors.forEach(function(authorData) {
                        var author = scope._retrieveAuthorInstance(authorData.id, authorData);
                        authors.push(author);
                    });
                    deferred.resolve({
                        books: books,
                        authors: authors
                    });
                })
                .error(function() {
                    deferred.reject();
                });
            return deferred.promise;
        }
    };
    return modelManager;
}]);