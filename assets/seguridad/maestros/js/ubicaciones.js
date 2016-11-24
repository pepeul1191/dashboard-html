var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 90px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar ubicación",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_ubicaciones = new AjaxPython(); 
ajax_dao_ubicaciones.Constructor("GET", BASE_URL + "seguridad/maestros/ubicaciones/listar", "", false);

var tablaUbicaciones = new Grid();

tablaUbicaciones.SetTableId("tablaUbicaciones");
tablaUbicaciones.SetTableObj("tablaUbicaciones");
tablaUbicaciones.SetTableHeader(array_json_th);
tablaUbicaciones.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_ubicaciones);
tablaUbicaciones.SetTableFooter(array_json_btn, false);
tablaUbicaciones.SetLabelMensaje("#txtMensajeRpta");
tablaUbicaciones.SetURLGuardar(BASE_URL + "seguridad/maestros/ubicaciones/guardar");

tablaUbicaciones.MostrarTable();

$("#test-observador").on( "click", function() { verObservadores(); });