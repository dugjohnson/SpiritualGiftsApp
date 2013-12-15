'use strict';
/*global giftsAppsModule*/

giftsAppsModule.directive('questionChoice',function($timeout){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            ngModel: '='
        },
        template :'<ul class="question-buttons">' +
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 5}" ng-click="updateQuestion(ngModel,5)">Love it!</li>' +
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 3}" ng-click="updateQuestion(ngModel,3)">Enjoy it.</li>'+
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 2}" ng-click="updateQuestion(ngModel,2)">OK with it.</li>' +
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 1}" ng-click="updateQuestion(ngModel,1)">Not so much.</li>'+
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 0}" ng-click="updateQuestion(ngModel,0)">No way!</li></ul>',
        link: function (scope, element) {
            scope.updateQuestion = function (question, v) {
                var moveit = function(){
                    var upscope = element.parent().parent().scope();
                    upscope.nextQuestion();};
                question.score = v;
                $timeout(moveit,1000);
            };
        }
    };
});
giftsAppsModule.directive('question',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div class="question-panel">' +
            '<p>How do I feel about {{activeQuestion.question}}</p>' +
            '<p class="question">You\'re on question {{ currentQuestion }} of {{questionlist.length}}</p>' +
            '</div>'
    };
});
giftsAppsModule.directive('previousNext', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<div class=\"navigate-panel\"><button class=\"previous-btn\" ng-click=\"previousQuestion()\">Previous</button><button class=\"next-btn\" ng-click=\"nextQuestion()\" ng-disabled=\"cannotProceed()\">Next</button>"// +
    };
});
giftsAppsModule.directive('questionProgress', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<div class=\"progress\"><div class=\"bar\" style=\"width: 40%;\"></div></div>"
    };
});

