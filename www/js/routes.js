angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  //
  // Paginas conectadas pela estrutura principal
  //
  
  .state('principal', {
    url: '/principal',
    templateUrl: 'templates/principal.html',
    abstract: true
  })

  .state('principal.eventos', {
    url: '/eventos',
    views: {
        'tab1':{
            templateUrl: 'templates/eventos.html',
            controller: 'eventosCtrl'
        }
    }
  })
  .state('principal.fimDeSemana', {
    url: '/fimDeSemana',
    views: {
        'tab2':{
            templateUrl: 'templates/fimDeSemana.html',
            controller: 'fimDeSemanaCtrl'
        }
    }
  })
  
  .state('principal.amigos', {
    url: '/amigos',
    views: {
        'tab3':{
            templateUrl: 'templates/amigos.html',
            controller: 'amigosCtrl'
        }
    }
  })
  
  //
  // Paginas de Compra
  //
  
  .state('pagamento', {
    url: '/pagamento',
    templateUrl: 'templates/compra-ingressos/pagamento.html',
    abstract: true
  })
  
  .state('pagamento.formulario', {
    url: '/formulario',
    views: {
        'conteudo':{
            templateUrl: 'templates/compra-ingressos/pagamento1formulario.html',
            controller: 'pagamento1formularioCtrl'
        }
    }
  })
  
  .state('pagamento.verifique', {
    url: '/verifique',
    views: {
        'conteudo':{
            templateUrl: 'templates/compra-ingressos/pagamento2verifique.html',
            controller: 'pagamento2verifiqueCtrl'
        }
    }
  })
  
  .state('pagamento.finalizado', {
    url: '/finalizado',
    views: {
        'conteudo':{
            templateUrl: 'templates/compra-ingressos/pagamento3finalizado.html',
            controller: 'pagamento3finalizadoCtrl'
        }
    }
  })
  
  //
  // Paginas
  //
  
  .state('linguagem', {
    url: '/linguagem',
    templateUrl: 'templates/linguagem.html',
    controller: 'linguagemCtrl'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('bilhetes', {
    url: '/bilhetes',
    templateUrl: 'templates/bilhetes.html',
    controller: 'bilhetesCtrl'
  })

  .state('evento', {
    url: '/evento',
    templateUrl: 'templates/eventoIndividual.html',
    controller: 'eventoCtrl'
  })

  $urlRouterProvider.otherwise('linguagem')

});