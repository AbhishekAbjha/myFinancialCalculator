(function(){

    angular.module('myfc').config(config);

    function config($routeProvider){
        $routeProvider.when('/home', {templateUrl: 'myfc/components/home/home-page.html'});
        $routeProvider.when('/incometaxcalculator', {templateUrl: 'myfc/components/it.calc/income-tax-calculator.html', controller: 'itcalc'});
        $routeProvider.when('/ppfcalculator', {templateUrl: 'myfc/components/ppf.calc/ppf-calculator.html'});
        $routeProvider.when('/homeloanemicalculator', {templateUrl: 'myfc/components/hlemi.calc/home-loan-emi-calculator.html'});
        $routeProvider.when('/savingsaccintcalculator', {templateUrl: 'myfc/components/sa.calc/savings-acc-int-calculator.html'});
        $routeProvider.when('/fixeddepositaccintcalculator', {templateUrl: 'myfc/components/fd.calc/fixed-deposit-acc-int-calculator.html'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }

})();