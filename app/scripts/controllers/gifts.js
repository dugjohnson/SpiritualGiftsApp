'use strict';
/*global giftsAppsModule*/
/* not used currently
function tallyCategories(questions){
    var categories = [];
    angular.forEach(questions, function(question) {
        categories[question.category] = categories[question.category]+question.score;
    });
    return categories;
}
*/
giftsAppsModule.controller('GiftsController', function ($scope, $location, $routeParams, Questions) {
    $scope.currentQuestion = 1;
    $scope.questionlist =  Questions.questions;
    //$scope.categories = tallyCategories($scope.questionlist);
    $scope.categories = Questions.categories;
    $scope.nextQuestion = function(){
        $scope.currentQuestion++;
    };
    $scope.previousQuestion = function(){
        $scope.currentQuestion--;
    };
    $scope.lastQuestion = function(){
        $scope.currentQuestion = $scope.questionlist.length;
    };
    $scope.cannotProceed = function(){
        return  $scope.activeQuestion.score === null;
    };
    $scope.calculateResults = function(){
        var lookup = {};
        for (var i = 0, len = $scope.categories.length; i < len; i++) {
            lookup[$scope.categories[i].category] = $scope.categories[i];
        }
        angular.forEach($scope.questionlist, function(question) {
            lookup[question.category].score = lookup[question.category].score + question.score;
        });
    };
    $scope.$watch('currentQuestion',function(newVal){
        var questionindex = newVal -1;
        if(questionindex<0){$location.path('/');return;}
        if(questionindex>=$scope.questionlist.length){$location.path('/results');return;}
        $scope.activeQuestion=$scope.questionlist[questionindex]; });
});