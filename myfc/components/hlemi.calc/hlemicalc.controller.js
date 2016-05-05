(function(){

    angular.module('myfc.controllers').controller('hlemicalc', hlemicalc);

    function hlemicalc($scope){
        console.log("hlemicalc");
    }

    hlemicalc.$inject = ['$scope'];
})();


