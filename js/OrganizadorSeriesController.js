angular.module("OrganizadorDeSeries").controller("OrganizadorSeriesController", function ($scope, $http) {

    $scope.app = "Organizador de Séries";
    $scope.series = [
        {
            Title: "Pretty Little Liars",
            sinopse: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_SX300.jpg",
            classificacaoEtaria: "TV-14",
            IMDb: "7.6",
            imdbID: "tt1578873",
            avaliacaoDoUsuario: 9
        }
    ];

    $scope.watchlist = [
        {
            Title: "Pretty Little Liars",
            sinopse: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_SX300.jpg",
            classificacaoEtaria: "TV-14",
            IMDb: "7.6",
            imdbID: "tt1578873",
            avaliacaoDoUsuario: 9
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
        $scope.watchlist.add(serie);
    };

    $scope.apagarSeries = function () {
        series.forEach(function(serie) {
                if (serie.imdbID == listaDeIDs[i]) {
                    series.remove(serie);
                }
        })
    };

    $scope.apagarSerieDoWatchlist = function (id) {
        watchlist.forEach(function(serie) {
            if (serie.imdbID == id) {
                watchlist.remove(serie);
            }
        })
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