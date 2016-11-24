var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Código",index:"codigo",estilos:"width: 90px;"},
	{titulo:"Descripcion",index:"descripcion",estilos:"width: 700px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 40px; padding-right:10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:90px;", index:"codigo", edicion:""},
	{tipo:"label",estilos:"width:700px;", index:"descripcion", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-pencil",url:"#",alt:"Editar vulnerabilidad",estilos:"padding-left: 10px;", operacion:"EditarVulnerabilidad"},
	{clase:"fa fa-search",url:"#",alt:"Ver vulnerabilidad",estilos:"padding-left: 10px;", operacion:"VerVulnerabilidad"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar vulnerabilidad",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"IrURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_vulnerabilidades = new AjaxPython(); 
ajax_dao_vulnerabilidades.Constructor("GET", BASE_URL + "seguridad/maestros/vulnerabilidades/listar", "", false);

var tablaVulnerabilidades = new Grid();

tablaVulnerabilidades.SetTableId("tablaVulnerabilidades");
tablaVulnerabilidades.SetTableObj("tablaVulnerabilidades");
tablaVulnerabilidades.SetTableHeader(array_json_th);
tablaVulnerabilidades.SetURLNuevo(BASE_URL + "seguridad/maestros/vulnerabilidades/agregar");
tablaVulnerabilidades.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_vulnerabilidades);
tablaVulnerabilidades.SetTableFooter(array_json_btn, false);
tablaVulnerabilidades.SetLabelMensaje("#txtMensajeRpta");
tablaVulnerabilidades.SetURLGuardar(BASE_URL + "seguridad/maestros/vulnerabilidades/guardar");

tablaVulnerabilidades.MostrarTable();

var EditarVulnerabilidad = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_subtitulo = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "EditarVulnerabilidad"){
        		var id_vulnerabilidad = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/maestros/vulnerabilidad/editar/"+ id_vulnerabilidad);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

var VerVulnerabilidad = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_subtitulo = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "VerVulnerabilidad"){
        		var id_vulnerabilidad = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/maestros/vulnerabilidad/ver/"+ id_vulnerabilidad);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

$(document).on("click", ".mootools", function() {
    var objeto = eval(this.get("objeto"));
    var eslabon_1 = new EditarVulnerabilidad();
    var eslabon_2 = new VerVulnerabilidad();

    eslabon_1.SetearSiguienteInstancia(eslabon_2);

    var operacion = this.get("operacion"); console.log(operacion);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});