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
	{clase:"fa fa-pencil",url:"#",alt:"Editar Amenaza",estilos:"padding-left: 10px;", operacion:"EditarAmenaza"},
	{clase:"fa fa-search",url:"#",alt:"Ver Amenaza",estilos:"padding-left: 10px;", operacion:"VerAmenaza"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar Amenaza",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"IrURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_amenazas = new AjaxPython(); 
ajax_dao_amenazas.Constructor("GET", BASE_URL + "seguridad/maestros/amenazas/listar", "", false);

var tablaAmenazas = new Grid();

tablaAmenazas.SetTableId("tablaAmenazas");
tablaAmenazas.SetTableObj("tablaAmenazas");
tablaAmenazas.SetTableHeader(array_json_th);
tablaAmenazas.SetURLNuevo(BASE_URL + "seguridad/maestros/amenazas/agregar");
tablaAmenazas.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_amenazas);
tablaAmenazas.SetTableFooter(array_json_btn, false);
tablaAmenazas.SetLabelMensaje("#txtMensajeRpta");
tablaAmenazas.SetURLGuardar(BASE_URL + "seguridad/maestros/amenazas/guardar");

tablaAmenazas.MostrarTable();

var EditarAmenaza = new Class({
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

        if(operacion == "EditarAmenaza"){
        		var id_amenaza = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/maestros/amenaza/editar/"+ id_amenaza);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

var VerAmenaza = new Class({
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

        if(operacion == "VerAmenaza"){
        		var id_amenaza = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/maestros/amenaza/ver/"+ id_amenaza);
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
    var eslabon_1 = new EditarAmenaza();
    var eslabon_2 = new VerAmenaza();

    eslabon_1.SetearSiguienteInstancia(eslabon_2);

    var operacion = this.get("operacion"); console.log(operacion);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});