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
  // Paginas
  //
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('home2', {
    url: '/home2',
    templateUrl: 'templates/home2.html',
    controller: 'home2Ctrl'
  })

  .state('home3', {
    url: '/home3',
    templateUrl: 'templates/home3.html',
    controller: 'home3Ctrl'
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

  $urlRouterProvider.otherwise('home')

});