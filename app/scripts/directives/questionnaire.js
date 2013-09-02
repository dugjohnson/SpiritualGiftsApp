giftsAppsModule.directive('questionChoice',function(){
    return {
        restrict: 'E',
        replace: true,
        template :'<ul><li>Love</li><li>Like</li><li>Dislike</li><li>Hate</li></ul>'
    }
})
