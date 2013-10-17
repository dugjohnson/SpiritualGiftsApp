giftsAppsModule.directive('questionChoice',function($timeout){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            ngModel: '='
        },
        template :'<div class="btn-group btn-group-vertical">' +
            '<button class="btn btn-block" ng-class="{\'btn-success\':ngModel.score == 5}" ng-click="updateQuestion(ngModel,5)">Love it!</button>' +
            '<button class="btn btn-block" ng-class="{\'btn-success\':ngModel.score == 3}" ng-click="updateQuestion(ngModel,3)">Enjoy it</button>'+
            '<button class="btn btn-block" ng-class="{\'btn-success\':ngModel.score == 2}" ng-click="updateQuestion(ngModel,2)">OK with it</button>' +
            '<button class="btn btn-block" ng-class="{\'btn-success\':ngModel.score == 1}" ng-click="updateQuestion(ngModel,1)">Not so much</button>'+
            '<button class="btn btn-block" ng-class="{\'btn-success\':ngModel.score == 0}" ng-click="updateQuestion(ngModel,0)">No way!</button></div>',
        link: function (scope, element, attrs) {
            scope.updateQuestion = function (question, v) {
                var moveit = function(){
                    var upscope = element.parent().parent().scope();
                    upscope.nextQuestion();}
                question.score = v;
                $timeout(moveit,1000);
            }
        }
    }
});

giftsAppsModule.directive('question',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div class="row-fluid"><div class="span6">' +
            '<p>How do I feel about {{activeQuestion.question}}</p>' +
            '<p class="question">You\'re on question {{ currentQuestion }} of {{questionlist.length}}</p>' +
            '</div>' +
            '<div class="span6"><question-choice ng-model="activeQuestion"></question-choice></div>'
    }
});
giftsAppsModule.directive('previousNext', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="btn-group"><button class="btn" ng-click="previousQuestion()">Previous</button>' +
            '<button class="btn" ng-click="nextQuestion()" ng-disabled="cannotProceed()">Next</button>' +
            '<button class="btn" ng-click="lastQuestion()" ng-disabled="cannotProceed()">Last</button></div>'

    }
});
