(function () {
    
    angular
        .module('home')
        .controller('timeSheet',timeSheet);

    timeSheet.$inject = [];

    function timeSheet() {
        var vms = this;
        vms.name = 'nitin';
    }

})();