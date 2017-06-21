angular.module("OrganizadorSeries").controller("OrganizadorSeriesController", function ($scope) {

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
        },
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
        },

    ]

    $scope.pesquisarSerie = function (nome) {

        // Caso 1: Serie na lista de series
        series.forEach(function(nomeDaSerie) {
            if (nomeDaSerie == nome) {
                return serie;
            }
        })

        // Caso 2: Serie na API do IMDb

    };

    $scope.adicionarSerie = function (nome, sinopse, imagem, classificacaoEtaria, IMDb, ID) {
        $scope.series.add(nome, sinopse, imagem, classificacaoEtaria, IMDb, ID, 0);
    };

    $scope.adicionarSerieAoWatchlist = function (nome, sinopse, imagem, classificacaoEtaria, IMDb, ID) {
        $scope.watchlist.add(nome, sinopse, imagem, classificacaoEtaria, IMDb, ID, 0);
    };

    $scope.apagarSerie = function (id) {
        series.forEach(function(idDaSerie) {
                if (idDaSerie == id) {
                    series.remove(id);
                }
        })
    };

    $scope.apagarSerieDoWatchlist = function (id) {
        watchlist.forEach(function(idDaSerie) {
            if (idDaSerie == id) {
                watchlist.remove(id);
            }
        })
    };

    $scope.avaliarSerie = function (id, numero) {
        series.forEach(function(idDaSerie) {
            if (idDaSerie == id) {
                series.nota = numero;
            }
        })
    };


});