/*FUNCTION CALLBACK CON ATRIBUTOS*/
var Imprimir = function (callback, error){
	
	this.texto = "david";

	var llamarDespues = function (callback, data){

		if (callback){
			setTimeout(function(){
			 callback(data);
			}, 2000);

		}

	};

	llamarDespues(callback);

}


var app = {
	
	init : function (){
		var self = this;
		this.imp = new Imprimir (
			function (){
				debugger;
				self.imp;

		});
	}

}

app.init();



/*FUNCION CALLBACK SIN ATRIBUTOS*/

var Imprimir = function (callback, param){

		if (callback){
			setTimeout(function(){
			 callback(param);
			}, 0);

		}

}


var app = {
	
	init : function (){
		var self = this;
		this.imp = new Imprimir (
			function (){
				debugger;
				self.imp;

		});
	}

}

app.init();

