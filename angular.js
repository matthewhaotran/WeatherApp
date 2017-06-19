angular.module('app', []);
angular
    .module('app')
    .controller('weatherCtrl', weatherCtrl);

function weatherCtrl() {
    var vm = this;
    vm.message = "hello";
}