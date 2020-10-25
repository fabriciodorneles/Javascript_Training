"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// CLASSES E INHERITANCE-----------------------------------------------------------
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  //inheritance
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this); //aqui tá referenciando o constructor do pai

    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('mais uno');
};

MinhaLista.mostraUsuario(); //Método ESTATICO na classe---------------------------------------------------------

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    //Método estático não pode acessar nem guardar nenhuma informação da classe.
    //Mas pode ser usado sem inicializar com new
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}(); //VETORES, FUNÇÔES DE MANIPULAÇÂO --------------------------------------------------
// const arr = [1,3,4,5,8,9];
// console.log(arr);
// // método que percorre todo o array e executa o codigo para cada item
// const newArr = arr.map(function(item,index){ 
//     return item +index;
// })
// console.log(newArr);
// // itera o array todo te dando o resultado da soma e o proximo elemento
// const sum = arr.reduce(function(total, next){
//     return total+next;
// })
// console.log(sum);
// // itera todo o array e passa para o novo os elementos que derem true no teste
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// })
// console.log(filter);
// // Retorna o elemento se conseguiu achar, senão retorna undefined
// const find = arr.find(function(item) {
//     return item === 4;    
// })
// console.log(find);
//ARROW FUNCTION -----------------------------------------------------------------------
//quando for função anônima e tiver só um item de parametro dá pra fazer tudo isso


var arr1 = [1, 3, 4, 5, 6]; //const newArr1 = arr1.map(function(item){ 
//const newArr1 = arr1.map((item) => {     
//const newArr1 = arr1.map(item => {     
//    return item * 2;
//})

var newArr1 = arr1.map(function (item) {
  return item * 2;
});
console.log(newArr1); //isso aqui é um função que vai ser atribuída à teste
// const teste = () => {
//     return 'teste';
// }
//const teste = () => 'teste'; //OK
//const teste = () => [1,2,3]; //OK
//const teste = () => { nome: 'fabricio'}; //Aqui não dá pq a chave de objeto tb pressupões função

var teste = function teste() {
  return {
    nome: 'fabricio'
  };
}; //Por isso tem que ter os partenses, aí rola


console.log(teste()); //VALORES PADRÂO --------------------------------------------------
//Implentação sem valores padrão
// function soma(a,b){
//     return a+b;    
// }
// console.log(soma(1));
// console.log(soma()); //normalmente aqui vai dar erro,claro
// function soma(a=3,b=7){
//     return a+b;    
// }
// console.log(soma(1));
// console.log(soma()); //agora aqui não vai mais pq tá definido os valores default na função
//e pode ser usado com arrow function

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  return a + b;
};

console.log(soma(1));
console.log(soma()); //agora aqui não vai mais pq tá definido os valores default na função
//DESESTRUTURAÇÃO DE OBJETOS ----------------------------------------------------

var usuario = {
  nome: 'Fabricio',
  idade: 42,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
};
console.log(usuario); // metódo padrão
// const nome = usuario.nome;
// const idade =  usuario.idade;
// const idade = usuario.endereço.cidade;
// com desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // function mostraNome(usuario){
//     console.log(usuario.nome, usuario.idade);
// }
//dá pra usar tb nos parâmetros de função

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario); //REST (teve que instalar o plugin pro babel)
