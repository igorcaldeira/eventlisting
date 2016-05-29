// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db;

var app = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  
  $translateProvider.translations('pt-BR', {
      
    //Introducao
    'CADASTRESE':'Cadastre-se',
    'ENTRAR':'Entrar',
    'EVENTOS': ' EVENTOS',
    'TICKETS': ' TICKETS',
    'LOCALIZE': ' LOCALIZE',
      
    //Evento individual
    'INGRESSOS': 'Ingressos',
    'COMPRARINGRESSOS': 'COMPRAR INGRESSOS',
    'VENDASATE':'Vendas até ',
    'DESCRICAODOEVENTO':'Descrição do evento'
  });
    
    $translateProvider.translations('en-US', {
      
    //Introducao
    'CADASTRESE':'Sign-Up',
    'ENTRAR':'Sign-In',
    'EVENTOS': ' EVENTOS',
    'TICKETS': ' INGRESSOS',
    'LOCALIZE': ' LOCALIZE',
        
    //Evento individual
    'INGRESSOS': 'Ingressos',
    'COMPRARINGRESSOS': 'BUY TICKETS',
    'VENDASATE':'Sales up',
    'DESCRICAODOEVENTO':'Event description'
  });
 
  $translateProvider.translations('es-ES', {
      
    //Introducao
    'CADASTRESE':'Registrar',
    'ENTRAR':'Entrar',
    'EVENTOS': ' EVENTOS',
    'TICKETS': ' INGRESSOS',
    'LOCALIZE': ' LOCALIZE',
      
    //Evento individual
    'INGRESSOS': 'Ingressos',
    'COMPRARINGRESSOS': 'COMPRAR ENTRADAS',
    'VENDASATE':'Ventas hasta ',
    'DESCRICAODOEVENTO':'Descripción del evento'
  });
 
  $translateProvider.preferredLanguage('pt-BR');
}]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
    // create and instantiate new Database
    db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default'});
    db.executeSql("CREATE TABLE IF NOT EXISTS contatos (id INTEGER PRIMARY KEY, name TEXT, email TEXT, phone TEXT)");

  });
})