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
	{clase:"fa fa-times",url:"#",alt:"Eliminar tipo de activo",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "seguridad/maestros/tipo_activos/listar", "", false);

var tablaGrupoActivos = new Grid();

tablaGrupoActivos.SetTableId("tablaGrupoActivos");
tablaGrupoActivos.SetTableObj("tablaGrupoActivos");
tablaGrupoActivos.SetTableHeader(array_json_th);
tablaGrupoActivos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaGrupoActivos.SetTableFooter(array_json_btn, false);
tablaGrupoActivos.SetLabelMensaje("#txtMensajeRpta");
tablaGrupoActivos.SetURLGuardar(BASE_URL + "seguridad/maestros/tipo_activos/guardar");

tablaGrupoActivos.MostrarTable();

$("#test-observador").on( "click", function() { verObservadores(); });