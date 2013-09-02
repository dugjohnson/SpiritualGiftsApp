'use strict';

giftsAppsModule.controller('GiftsController', function ($scope, $routeParams, Questions) {
    $scope.questionlist = Questions.getQuestions($routeParams.start,$routeParams.finish);
});