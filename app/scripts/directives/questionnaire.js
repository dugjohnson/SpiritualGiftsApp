giftsAppsModule.directive('questionChoice',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<div><button ng-click="updateQuestion(5)">Love It</button><button ng-click="updateQuestion(3)">Enjoy It</button>'+
            '<button ng-click="updateQuestion(2)">Maybe</button><button ng-click="updateQuestion(1)">Probably not</button>'+
            '<button ng-click="updateQuestion(0)">No way!</button></div>'
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
        template :'<div><button>Previous</button><button>Next</button></div>'
    }
})
