(function(){

    angular.module('myfc.controllers').controller('fdcalc', fdcalc);

    function fdcalc($scope){
        console.log("fdcalc");
    }

    fdcalc.$inject = ['$scope'];
})();

