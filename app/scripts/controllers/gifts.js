'use strict';
/*global giftsAppsModule*/
/*global Apigee*/
/*global jQuery*/

giftsAppsModule.controller('GiftsController', function ($scope, $location, $routeParams, $http, Questions) {
    $scope.currentQuestion = 1;
    $scope.progressPct = 0;
    $scope.surveyquestions = Questions;
    $scope.questionlist =  Questions.questions;
    $scope.categories = Questions.categories;
    $scope.nextQuestion = function(){
        $scope.currentQuestion++;
    };
    var clientCreds = {
        orgName:'dugjohnson',
        appName:'sandbox'
    };
//Initializes the SDK. Also instantiates Apigee.MonitoringClient
    $scope.dataClient = new Apigee.Client(clientCreds);
    $scope.survey = new Apigee.Collection({"client":$scope.dataClient,"type":"surveys"});
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
            $scope.categories[i].score = 0; //0 out category score
            lookup[$scope.categories[i].category] = $scope.categories[i];
        }
        angular.forEach($scope.questionlist, function(question) {
            lookup[question.category].score = lookup[question.category].score + question.score;
        });
        //Descending order
        $scope.categories.sort(function(b,a){return parseInt(a.score,10) - parseInt(b.score,10);});
        $scope.submitQuery();
    };
    $scope.$watch('currentQuestion',function(newVal){
        var questionindex = newVal -1;
        if($scope.questionlist.length>0){
            $scope.progressPct = 100*($scope.currentQuestion/$scope.questionlist.length);
        }
        if(questionindex<0){$location.path('/');return;}
        if(questionindex>=$scope.questionlist.length){$location.path('/results');return;}
        $scope.activeQuestion=$scope.questionlist[questionindex]; });

    $scope.submitQuery = function(){
        var upload = {
            "email" : $scope.surveyquestions.surveyEmail,
            "name" : $scope.surveyquestions.surveyName,
            "categories" : $scope.categories
        };

 jQuery.ajax({
            type: "POST",
            url: "http://gifts.asknice.com/app/ajax/surveyComplete.php",
            data: {surveyData:upload},
            dataType: 'json'
        });
    };
});