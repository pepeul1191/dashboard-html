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
	{clase:"fa fa-times",url:"#",alt:"Eliminar Agente",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_agentes = new AjaxPython(); 
ajax_dao_agentes.Constructor("GET", BASE_URL + "seguridad/maestros/agentes/listar", "", false);

var tablaAgentes = new Grid();

tablaAgentes.SetTableId("tablaAgentes");
tablaAgentes.SetTableObj("tablaAgentes");
tablaAgentes.SetTableHeader(array_json_th);
tablaAgentes.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_agentes);
tablaAgentes.SetTableFooter(array_json_btn, false);
tablaAgentes.SetLabelMensaje("#txtMensajeRpta");
tablaAgentes.SetURLGuardar(BASE_URL + "seguridad/maestros/agentes/guardar");

tablaAgentes.MostrarTable();

$("#test-observador").on( "click", function() { verObservadores(); });