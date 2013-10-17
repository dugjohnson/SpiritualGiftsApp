var giftsAppsModule = angular.module('giftsSurveyApp', ['ui.bootstrap']);


giftsAppsModule.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/frontpage.html'
        })
        .when('/questions',{
            templateUrl:"views/questions.html",
            controller: "GiftsController"
        })
        .when('/finished',{
            templateUrl:"views/finished.html"
        })
        .when('/results',{
            templateUrl:"views/results.html",
            controller: "GiftsController"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});

