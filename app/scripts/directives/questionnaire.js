giftsAppsModule.directive('questionChoice',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div class="btn-group btn-group-vertical">' +
            '<button class="btn btn-block" ng-click="updateQuestion(5)">Love It</button>' +
            '<button class="btn btn-block" ng-click="updateQuestion(3)">Enjoy It</button>'+
            '<button class="btn btn-block" ng-click="updateQuestion(2)">Maybe</button>' +
            '<button class="btn btn-block" ng-click="updateQuestion(1)">Probably not</button>'+
            '<button class="btn btn-block" ng-click="updateQuestion(0)">No way!</button></div>'
    }
})

giftsAppsModule.directive('question',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div class="row-fluid"><div class="span6"><p>{{question.index}}. {{question.question}}</p></div><div class="span6"><question-choice></question-choice></container></div>'
    }
})
giftsAppsModule.directive('previousNext',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div class="btn-group"><button class="btn" ng-click="previousQuestion()">Previous</button>' +
            '<button class="btn" ng-click="nextQuestion()">Next</button></div>'

    }
})
