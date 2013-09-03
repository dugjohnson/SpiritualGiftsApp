'use strict';

giftsAppsModule.controller('GiftsController', function ($scope, $routeParams, Questions) {
    $scope.howmany = 1;
    $scope.start = parseInt($routeParams.start) || 1;
//    $scope.questionlist.$setPristine();
    $scope.getQuestions = function(){
        $scope.questionlist = Questions.getQuestions($scope.start,$scope.howmany);
    }
    $scope.updateQuestion = function(value){

    }
    $scope.nextQuestion = function(){
        $scope.start = $scope.start+$scope.howmany;
        $scope.getQuestions();
    }
    $scope.previousQuestion = function(){
        $scope.start = $scope.start-$scope.howmany;
        $scope.getQuestions();

    }
    $scope.getQuestions();

});