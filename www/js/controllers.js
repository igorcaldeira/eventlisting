angular.module('app.controllers', [])
  

.controller('linguagemCtrl', function($scope, $translate) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
})

.controller('homeCtrl', function($scope) {
    
})
   
.controller('home2Ctrl', function($scope) {

})
   
.controller('home3Ctrl', function($scope) {

})
   
.controller('cadastroCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('eventosCtrl', function($scope) {

})
   
.controller('fimDeSemanaCtrl', function($scope) {

})
   
.controller('bilhetesCtrl', function($scope) {

})
   
.controller('amigosCtrl', function($scope) {

})

.controller('eventoCtrl', function($scope) {

})
 
//
// Controllers do pagamento
//

.controller('pagamento1formularioCtrl', function($scope) {

})

.controller('pagamento2verifiqueCtrl', function($scope) {

})

.controller('pagamento3finalizadoCtrl', function($scope) {

})