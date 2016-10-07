namespace resource {

    angular.module('resource', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state("Home", {
              url: "/",
              templateUrl: "/ngApp/views/list.html",
              controller: resource.Controllers.MoviesListController,
              controllerAs: "controller"
            })
            .state("Add", {
              url: "/add",
              templateUrl: "/ngApp/views/add.html",
              controller: resource.Controllers.MoviesAddController,
              controllerAs: "controller"
            })
            .state("Edit", {
              url: "/edit/:id",
              templateUrl: "/ngApp/views/edit.html",
              controller: resource.Controllers.MoviesEditController,
              controllerAs: "controller"
            })
            .state("Delete", {
              url: "/delete/:id",
              templateUrl: "/ngApp/views/delete.html",
              controller: resource.Controllers.MoviesDeleteController,
              controllerAs: "controller"
            })
            //     url: '/',
            //     templateUrl: '/ngApp/views/home.html',
            //     controller: resource.Controllers.HomeController,
            //     controllerAs: 'controller'
            // })
            // .state('about', {
            //     url: '/about',
            //     templateUrl: '/ngApp/views/about.html',
            //     controller: resource.Controllers.AboutController,
            //     controllerAs: 'controller'
            // })
            // .state('notFound', {
            //     url: '/notFound',
            //     templateUrl: '/ngApp/views/notFound.html'
            // });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
