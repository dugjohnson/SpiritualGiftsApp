'use strict';
function tallyCategories(questions){
    var categories = new array();
    angular.forEach(questions, function(question) {
        categories[question.category] = categories[question.category]+question.score;
    });
    return categories;
}

giftsAppsModule.controller('GiftsController', function ($scope,$location, $routeParams, Questions) {
    $scope.currentQuestion = 1;
    $scope.nextQuestion = function(){
        $scope.currentQuestion++;
    };
    $scope.previousQuestion = function(){
        $scope.currentQuestion--;
    };
    $scope.questionlist =  Questions.questions;
    $scope.cannotProceed = function(){
        return  $scope.activeQuestion.score === null;
    };
    //$scope.categories = tallyCategories($scope.questionlist);
    $scope.categories = ['hola','hello','bonjour','ciao'];
    $scope.$watch('currentQuestion',function(newVal, oldVal){
        var questionindex = newVal -1;
        if(questionindex<0){$location.path('/');return;}
        if(questionindex>=$scope.questionlist.length){$location.path('/results');return;}
        $scope.activeQuestion=$scope.questionlist[questionindex]; });
});