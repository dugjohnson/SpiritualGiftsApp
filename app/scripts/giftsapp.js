var giftsAppsModule = angular.module('giftsSurveyApp', ['ui.bootstrap']);


giftsAppsModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/frontpage.html'
        })
        .when('/questions/:start/:finish',{
            templateUrl:"views/questions.html",
            controller: "GiftsController"
        })
        .when('/questions/:start',{
            templateUrl:"views/questions.html",
            controller: "GiftsController"
        })
        .when('/finished',{
            templateUrl:"views/finished.html"
        })
        .when('/results',{
            templateUrl:"views/results.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

