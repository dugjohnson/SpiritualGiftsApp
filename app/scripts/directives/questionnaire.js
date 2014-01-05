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
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 5}" ng-click="updateQuestion(ngModel,5)">Love it!<span class="glyphicon glyphicon-check floatlargeR"></span></li>' +
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 3}" ng-click="updateQuestion(ngModel,3)">Enjoy it.<span class="glyphicon glyphicon-check floatlargeR"></span></li>'+
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 2}" ng-click="updateQuestion(ngModel,2)">OK with it.<span class="glyphicon glyphicon-check floatlargeR"></span></li>' +
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 1}" ng-click="updateQuestion(ngModel,1)">Not so much.<span class="glyphicon glyphicon-check floatlargeR"></span></li>'+
            '<li class="question-button" ng-class="{\'question-yes\':ngModel.score == 0}" ng-click="updateQuestion(ngModel,0)">No way!<span class="glyphicon glyphicon-check floatlargeR"></span></li></ul>',
        link: function (scope, element) {
            scope.updateQuestion = function (question, v) {
                var moveit = function(){
                    var upscope = element.parent().parent().scope();
                    element.blur();
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
        template :'<div>' +
            '<span class="glyphicon glyphicon-question-sign floatlarge"></span><p>How do I feel about {{activeQuestion.question}}</p>' +
            '</div>'
    };
});
giftsAppsModule.directive('previousNext', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<div class=\"navigate-panel\"><button class=\"previous-btn nav-btn\" ng-click=\"previousQuestion()\"><span class=\"glyphicon glyphicon-circle-arrow-left \"></span><br/>Previous</button><button class=\"next-btn nav-btn\" ng-click=\"nextQuestion()\" ng-disabled=\"cannotProceed()\"><span class=\"glyphicon glyphicon-circle-arrow-right \"></span><br/>Next</button></div>"// +
    };
});

