angular.module("OrganizadorDeSeries").controller("OrganizadorSeriesController", function ($scope, $http) {

    $scope.app = "Organizador de Séries";
    $scope.series = [
        {
            Title: "Pretty Little Liars",
            Plot: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_SX300.jpg",
            Rated: "TV-14",
            imdbRating: "7.6",
            imdbID: "tt1578873",
            avaliacaoUsuario: 8,
            ultimoEpisodio: null
        }
    ];

    $scope.watchlist = [
        {
            Title: "Silicon Valley",
            Plot: "Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTA4MTE3MTQwMF5BMl5BanBnXkFtZTgwNzk4MTg4MTI@._V1_SX300.jpg",
            Rated: "TV-MA",
            imdbRating: "8.6",
            imdbID: "tt2575988",
            avaliacaoUsuario: null,
            ultimoEpisodio: null
        }
    ]

    $scope.seriesSearch = [ ];

    $scope.searchState= "";

    $scope.pesquisarSerie = function(nome){
        var promise = $http.get('http://www.omdbapi.com/?s=' + nome + '&type=series&apikey=93330d3c').then(function(response){
            $scope.seriesSearch = response.data.Search;
            $scope.searchState = response.data.Error;
        }, function error(error){

            console.log(error);
        })
        return promise;
    };

    $scope.adicionarSerie = function(nomeserie){
            var promise = $http.get('https://omdbapi.com/?i=' + nomeserie.imdbID + '&plot=full&apikey=93330d3c');
            promise.then(function(response){
                var fullSerie = response.data;
                $scope.series.push(fullSerie);

            }).catch(function(error){
                console.log(error);
            });
    };

    $scope.adicionarSerieAoWatchlist = function(nomeserie){
        var promise = $http.get('https://omdbapi.com/?i=' + nomeserie.imdbID + '&plot=full&apikey=93330d3c');
        promise.then(function(response){
            var fullSerie = response.data;
            $scope.watchlist.push(fullSerie);

        }).catch(function(error){
            console.log(error);
        });
    };

    $scope.apagarSerie = function (serie) {
        $scope.series.pop(serie);
    };

    $scope.transferirSerie = function (serie) {
            $scope.series.push(serie);
            $scope.watchlist.pop(serie);
    };

    $scope.apagarSerieDoWatchlist = function (serie) {
        $scope.watchlist.pop(serie);
    };

    $scope.avaliarSerie = function (serie, nota) {
        if (nota < 10 || nota > 0) {
            serie.avaliacaoUsuario = nota;
        }
    };

    $scope.alterarUltimoEpisodio = function (serie, episodio) {
        serie.ultimoEpisodio = episodio;
    }

    $scope.contemNaLista = function (nomeserie) {
        $scope.series.forEach(function(serie) {
            if(serie.Title == nomeserie) {
                return true;
            }
            return false;
        })
    }

    $scope.searched = function(){
        return $scope.searchState === "Movie not found!";

    };

});