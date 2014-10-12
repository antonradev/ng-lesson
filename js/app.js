var NGLesson = angular.module('NGLesson', ['ngRoute']);

NGLesson.directive('appHeader', function () {
    return {
        restrict: "E",
        templateUrl: 'templates/app-header.html'
    };
});

NGLesson.directive('appNav', function () {
    return {
        restrict: "E",
        templateUrl: 'templates/app-nav.html'
    };
});

NGLesson.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/home', {
                    templateUrl: 'templates/content-container.html',
                    controller: 'Pages_Contents'
                }).
                when('/about', {
                    templateUrl: 'templates/content-container.html',
                    controller: 'Pages_Contents'
                }).
                when('/search', {
                    templateUrl: 'templates/content-container.html',
                    controller: 'Pages_Contents'
                }).
                when('/gallery', {
                    templateUrl: 'templates/content-container.html',
                    controller: 'Pages_Contents'
                }).
                otherwise({
                    templateUrl: 'templates/homepage.html'
                });
    }]);
