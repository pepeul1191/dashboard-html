var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Código",index:"codigo",estilos:"width: 90px;"},
	{titulo:"Descripcion",index:"descripcion",estilos:"width: 250px;"},
    {titulo:"Capa",index:"capa",estilos:"width: 100px;"},
    {titulo:"Ubicacion",index:"ubicacion",estilos:"width: 100px;"},
    {titulo:"Tipo Activo",index:"ubicacion",estilos:"width: 100px;"},
    {titulo:"Agente",index:"agente",estilos:"width: 100px;"},
    {titulo:"Criticidad",index:"criticidad",estilos:"width: 100px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 40px; padding-right:10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:90px;", index:"codigo", edicion:""},
	{tipo:"label",estilos:"width:250px;", index:"descripcion", edicion:""},
    {tipo:"label",estilos:"width:100px;", index:"capa", edicion:""},
    {tipo:"label",estilos:"width:100px;", index:"ubicacion", edicion:""},
    {tipo:"label",estilos:"width:100px;", index:"tipo_activo", edicion:""},
	{tipo:"label",estilos:"width:100px;", index:"agente", edicion:""},
    {tipo:"label",estilos:"width:100px;", index:"criticidad", edicion:""},
    {tipo:"botones", index:"botones", edicion:"true"}
];
//A.id, A.codigo, A.descripcion, C.nombre AS capa, U.nombre AS ubicacion, TA.nombre AS tipo_activo, AG.codigo AS agente, CR.grado AS criticidad
var array_json_btn_td = [
	{clase:"fa fa-pencil",url:"#",alt:"Editar activo",estilos:"padding-left: 10px;", operacion:"EditarActivo"},
	{clase:"fa fa-search",url:"#",alt:"Ver activo",estilos:"padding-left: 10px;", operacion:"VerActivo"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar activo",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"IrURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_activos = new AjaxPython(); 
ajax_dao_activos.Constructor("GET", BASE_URL + "seguridad/gestion/activos/listar", "", false);

var tablaActivos = new Grid();

tablaActivos.SetTableId("tablaActivos");
tablaActivos.SetTableObj("tablaActivos");
tablaActivos.SetTableHeader(array_json_th);
tablaActivos.SetURLNuevo(BASE_URL + "seguridad/gestion/activos/agregar");
tablaActivos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_activos);
tablaActivos.SetTableFooter(array_json_btn, false);
tablaActivos.SetLabelMensaje("#txtMensajeRpta");
tablaActivos.SetURLGuardar(BASE_URL + "seguridad/gestion/activos/guardar");

tablaActivos.MostrarTable();

var EditarActivo = new Class({
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

        if(operacion == "EditarActivo"){
        		var id_activo = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/gestion/activo/editar/"+ id_activo);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

var VerActivo = new Class({
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

        if(operacion == "VerActivo"){
        		var id_activo = $(thisDOM.parent().parent().children()[0]).children().html();
        		window.location.replace(BASE_URL + "seguridad/gestion/activo/ver/"+ id_activo);
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
    var eslabon_1 = new EditarActivo();
    var eslabon_2 = new VerActivo();

    eslabon_1.SetearSiguienteInstancia(eslabon_2);

    var operacion = this.get("operacion"); console.log(operacion);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});