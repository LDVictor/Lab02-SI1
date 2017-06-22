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
            avaliacaoDoUsuario: 9
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
            avaliacaoDoUsuario: 0
        }

    ]

    $scope.seriesSearch = [
    ];

    $scope.searched = false;

    $scope.pesquisarSerie = function(nome){
        var promise = $http.get('http://www.omdbapi.com/?s=' + nome + '&type=series&apikey=93330d3c').then(function(response){
            $scope.seriesSearch = response.data.Search;
            $scope.searched = true;
        }, function error(error){
            console.log(error);
        })
        return promise;
    };

   $scope.adicionarSerie = function (serie) {
        $scope.series.push(serie);
        console.log($scope.series);
    };

    $scope.adicionarSerieAoWatchlist = function (serie) {
        $scope.watchlist.push(serie);
    };

    $scope.apagarSerie = function (serie) {
        $scope.series.pop(serie);
    };

    $scope.apagarSerieDoWatchlist = function (serie) {
        $scope.watchlist.pop(serie);
    };

    $scope.avaliarSerie = function (id, numero) {
        series.forEach(function(serie) {
            if (serie.imdbID == id) {
                serie.nota = numero;
            }
        })
    };

    $scope.contemNaLista = function (id) {
        series.forEach(function(series) {
            if(serie.imdbID == id) {
                return true;
            }
            return false;
        })
    }

    $scope.searched = function(){
        return $scope.searched;
    };


});