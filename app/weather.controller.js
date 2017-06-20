(function(){
    'use strict';

    angular
        .module('app')
        .controller('weatherController', weatherController)

    weatherController.$inject = ['$http'];

    function weatherController($http) {
        /* jshint validthis:true */
        var vm = this;
        vm.message = 'Hello';

        $http
            .get('http://api.openweathermap.org/data/2.5/weather?q=sandiego&units=imperial&apikey=c290bc6fa7278451b2d24d29650191bb')
            .then(function (response) {
                vm.weatherInfo = response.data;
                console.log(vm.weatherInfo.name);
            });



        activate();

        function activate() { }
    }
})();