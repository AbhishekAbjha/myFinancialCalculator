(function(){

    angular.module('myfc.controllers').controller('sacalc', sacalc);

    function sacalc($scope){
        console.log("sacalc");
    }

    sacalc.$inject = ['$scope'];
})();


