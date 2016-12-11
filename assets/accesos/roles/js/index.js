var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar rol",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/rol/listar", "", false);

var tablaRoles = new Grid();

tablaRoles.SetTableId("tablaRoles");
tablaRoles.SetTableObj("tablaRoles");
tablaRoles.SetTableHeader(array_json_th);
tablaRoles.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaRoles.SetTableFooter(array_json_btn, false);
tablaRoles.SetLabelMensaje("#txtMensajeRpta");
tablaRoles.SetURLGuardar(BASE_URL + "accesos/rol/guardar");

tablaRoles.MostrarTable();