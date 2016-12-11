
(function () {
    'use strict';

    angular
      .module('home')
      .controller('studentCtrl', studentCtrl);

    studentCtrl.$inject = ['studService'];

    function studentCtrl(studService) {
        var vm = this;

        vm.stud = null;
        vm.saveStudent = saveStudent;
        vm.getStudent = getStudent;
        vm.setStudent = setStudentData;
        vm.clearObject = clearObject;


        activate();

        function activate() {
            studService.studData().then(function (data) {
                vm.studentList = angular.copy(data);
            });
        }

        function saveStudent(data) {
            if (angular.isObject(data)) {

                studService.saveData(data).then(function (data) {
                    
                    if (data === true) {
                        studService.studData().then(function (data) {
                            vm.studentList = angular.copy(data);
                        });
                    }
                    else {
                        alert("Something went wrong");
                    }
                });
            }

        }

        function getStudent(id) {
            
            studService.getStudentData(id).then(function (data) {
                vm.stud = data;
            });
        }

        function setStudentData(data) {
            studService.setStudentData(data).then(function (data) {
                vm.stud = data;
                angular.forEach(vm.studentList, function (value, key) {
                    if (value.StudentID === data.StudentID) {
                        value.name = angular.copy(data.name);
                        value.surname = angular.copy(data.surname);
                        value.roll = angular.copy(data.roll);
                        value.phone = angular.copy(data.phone);
                    }

                });
            });
        }

        function clearObject() {
            vm.empty = null;
            vm.stud = angular.copy(vm.empty);
        }

    }
})();
