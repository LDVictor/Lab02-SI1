angular.module("OrganizadorDeSeries").controller("OrganizadorSeriesController", function ($scope) {

    $scope.app = "Organizador de Séries";
    $scope.series = [
        {
            nome: "Pretty Little Liars",
            sinopse: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.",
            imagem: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_SX300.jpg",
            classificacaoEtaria: "TV-14",
            IMDb: "7.6",
            ID: "tt1578873",
            avaliacaoDoUsuario: 9
        }
    ];

    $scope.watchlist = [
        {
            nome: "Pretty Little Liars",
            sinopse: "Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while unraveling the mystery of the murder of their best friend.",
            imagem: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_SX300.jpg",
            classificacaoEtaria: "TV-14",
            IMDb: "7.6",
            ID: "tt1578873",
            avaliacaoDoUsuario: 9
        }

    ]

    $scope.pesquisarSerie = function (nome) {
        console.log(nome);
        // Caso 1: Serie na lista de series
        $scope.series.forEach(function(serie) {
                    if (serie.nome == nome) {
                        console.log(serie);
                        return serie;
            }
        })

        // Caso 2: Serie na API do IMDb


    };

    $scope.adicionarSerie = function (serie) {
        $scope.series.add(serie);
    };

    $scope.adicionarSerieAoWatchlist = function (serie) {
        $scope.watchlist.add(serie);
    };

    $scope.apagarSeries = function () {
        series.forEach(function(serie) {
                if (serie.ID == listaDeIDs[i]) {
                    series.remove(serie);
                }
        })
    };

    $scope.apagarSerieDoWatchlist = function (id) {
        watchlist.forEach(function(serie) {
            if (serie.ID == id) {
                watchlist.remove(serie);
            }
        })
    };

    $scope.avaliarSerie = function (id, numero) {
        series.forEach(function(serie) {
            if (serie.ID == id) {
                serie.nota = numero;
            }
        })
    };


});