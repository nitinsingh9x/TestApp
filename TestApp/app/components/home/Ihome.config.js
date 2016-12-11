(function () {

    angular.module('home').config(homeConfig);

    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home/timesheet');

        $stateProvider

        .state('root', {
            abstract: true,
            views: {
                '@': {
                    templateUrl: '../app/components/home/layout.tpl.html'
                },
                'navbar@root': {
                    templateUrl: '../app/components/home/navbar.tpl.html'
                },
                'sidebar@root': {
                    templateUrl: '../app/components/home/sidebar.tpl.html'
                },
                'content@root': {
                    templateUrl: '../app/components/home/content.tpl.html'
                },
                'footer@root': {
                    templateUrl: '../app/components/home/footer.tpl.html'
                }
            }
        })

        .state('root.homeState', {
            url: '/home/timesheet',
            controller: 'timeSheet',
            controllerAs: 'vm',
            templateUrl: '../app/components/home/timeSheet/timeSheet.tpl.html'
        })

        .state('root.student', {
            url: '/home/student',
            controller: 'studentCtrl',
            controllerAs: 'vm',
            templateUrl: '../app/components/home/student/student.tpl.html'
        });


        

    }

})();