namespace resource.Controllers {
  export class MoviesListController {
    public movies;
    constructor (movieService: resource.Services.MovieService) {
       this.movies = movieService.listMovies();
    }
  }
  export class MoviesAddController {
    public movieToCreate;
    addMovie (){
      this.movieService.saveMovies(this.movieToCreate).then(
        () => this.$state.go('Home')
      );
    }
    constructor (private movieService: resource.Services.MovieService, private $state: ng.ui.IStateService){}
    }


      export class MoviesEditController {
        public movieToEdit;
        editMovie (){
          this.movieService.saveMovies(this.movieToEdit).then(
            () => this.$state.go('Home')

          );
        }
          constructor(private movieService: resource.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
                  this.movieToEdit = movieService.getMovie($stateParams['id'])

}
}
                  export class MoviesDeleteController {
                          public movieToDelete;

                          deleteMovie() {
                              this.movieService.deleteMovie(this.movieToDelete.id).then(
                                  () => this.$state.go('Home')
                              );
                          }

                          constructor(private movieService: resource.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
                              this.movieToDelete = movieService.getMovie($stateParams['id'])
    }
  }
}


    // export class HomeController {
    //     public message = 'Hello from the home page!';
    //     public movies;
    //
    //     constructor(movieService:resource.Services.MovieService) {
    //         this.movies = movieService.listMovies();
    //     }
    // }
    //
    //
    // export class AboutController {
    //     public message = 'Hello from the about page!';
    // }
