'use strict';

giftsAppsModule.controller('GiftsController', function ($scope, $routeParams, Questions) {
    $scope.howmany = 4;
    $scope.start = parseInt($routeParams.start) || 1;
    $scope.questionlist = Questions.getQuestions($scope.start,$scope.howmany);
    $scope.updateQuestion = function(value){

    }
});