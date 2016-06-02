angular.module('app.controllers', [])
  

.controller('linguagemCtrl', function($scope, $translate) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
})
   
.controller('cadastroCtrl', function($scope) {
    
    $scope.nome = "";
    $scope.sobrenome = "";
    $scope.email = "";
    $scope.senha = "";

    $scope.insert = function() {
        //alert("Scope name: " + this.name);
        var query = "INSERT INTO usuario (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)";
        db.executeSql(query, [this.nome, this.sobrenome, this.email, this.senha], function (resultSet) {
          //alert('Id: ' + resultSet.insertId);
          //alert("Name: " + resultSet.rows.item(0).name);
        }, function(error) {
          alert('SELECT error: ' + error.message);
        });

        this.nome = "";
        this.sobrenome = "";
        this.sobrenome = "";
        this.email = "";
        this.senha = "";

      }
    
})
   
.controller('loginCtrl', function($scope, $stateParams) {
    
    $scope.login = function() {
        
         db.executeSql('SELECT * FROM usuario WHERE email = ?', [$stateParams.email], function(res){

             alert(res.rows.length);

            if (res.rows.length <= 0) {
                //falha no login
                alert('falha no login');
            }

          });
        
    }
    
})

.controller('homeCtrl', function($scope) {
    
})
   
.controller('home2Ctrl', function($scope) {

})
   
.controller('home3Ctrl', function($scope) {

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