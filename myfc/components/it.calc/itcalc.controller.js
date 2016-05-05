(function(){

    angular.module('myfc.controllers').controller('itcalc', itcalc);

    function itcalc($scope){
        console.log("itcalc");

        console.log($scope);

        var totalIncome = $scope.totalIncome;
        $scope.calculateIncomeTax = function(){


            console.log(totalIncome);
        }
    }

    itcalc.$inject = ['$scope'];

})();

