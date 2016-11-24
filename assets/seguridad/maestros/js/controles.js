var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Código",index:"codigo",estilos:"width: 90px;"},
	{titulo:"Descripcion",index:"descripcion",estilos:"width: 700px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"codigo", edicion:""},
	{tipo:"text",estilos:"width:700px;", index:"descripcion", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Cargar Provincias",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_permisos = new AjaxPython(); 
ajax_dao_permisos.Constructor("GET", BASE_URL + "seguridad/maestros/controles/listar", "", false);

var tablaPermisos = new Grid();

tablaPermisos.SetTableId("tablaPermiso");
tablaPermisos.SetTableObj("tablaPermisos");
tablaPermisos.SetTableHeader(array_json_th);
tablaPermisos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_permisos);
tablaPermisos.SetTableFooter(array_json_btn, false);
tablaPermisos.SetLabelMensaje("#txtMensajeRpta");
tablaPermisos.SetURLGuardar(BASE_URL + "seguridad/maestros/controles/guardar");

tablaPermisos.MostrarTable();

$("#test-observador").on( "click", function() { verObservadores(); });