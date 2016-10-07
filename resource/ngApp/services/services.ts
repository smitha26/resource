namespace resource.Services {
export class MovieService {
  public MovieResource;

  public listMovies() {
    return this.MovieResource.query();
  }
  public saveMovies (movie){
    return this.MovieResource.save(movie).$promise

  }

  public getMovie(MovieId) {
    return this.MovieResource.get({id: MovieId});
  }

  public deleteMovie(id: number) {
           return this.MovieResource.delete({ id: id }).$promise;
       }

  constructor ($resource: ng.resource.IResourceService){
    this.MovieResource = $resource('/api/movies/:id')
   }
  }
  angular.module('resource').service("movieService", MovieService)
}
    // export class MovieService {
    //     private MovieResource;
    //
    //     public listMovies() {
    //         return this.MovieResource.query();
    //     }
    //
    //     constructor($resource: ng.resource.IResourceService) {
    //         this.MovieResource = $resource('/api/movies');
    //     }
    // }
    // angular.module('resource').service('movieService', MovieService);
    // export class MyService {
    //
    // }
    // angular.module('resource').service('myService', MyService);
