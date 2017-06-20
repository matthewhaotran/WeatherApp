(function () {
    'use strict';

    angular
        .module('app')
        .controller('weatherController', weatherController)

    weatherController.$inject = ['$http'];

    function weatherController($http) {
        var vm = this;
        vm.getWeather = getWeather;

        ///////////////////////////////////////////////

        function getWeather(term) {

            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&units=imperial&apikey=5e9f84a8d383be947ca6f260e042187f')
                .then(function (response) {
                    vm.weatherInfo = response.data;
                    console.log(vm.weatherInfo.name);
                });

        }



        activate();

        function activate() {}
    }
})();