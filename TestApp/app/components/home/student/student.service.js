
(function () {
    'use strict';

    angular
      .module('home')
      .factory('studService', studService);

    studService.$inject = ['$http'];

    function studService($http) {
        
        var student = null;

        var service = {
            studData: studData,
            saveData: saveData,
            getStudentData: getStudentData,
            setStudentData: setStudentData

        };

        function studData() {
            
            return $http.get("api/Values").then(function (data) {
                return data.data;
            });
            
        }

        function saveData(data) {

            return $http.post("api/Values", data).then(function () {
                
                _studData();
                return true;
            });
        }

        function getStudentData(id) {

            return $http.get("api/Values/" + id).then(function (data) {
                return data.data;
            });
        }

        function setStudentData(data) {

            return $http.post("api/Values/", data).then(function (data) {
                return data.data;
            });
        }

        return service;
    }
})();
