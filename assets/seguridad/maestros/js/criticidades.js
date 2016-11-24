var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Grado",index:"grado",estilos:"width: 90px;"},
	{titulo:"Nombre",index:"descripcion",estilos:"width: 700px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"grado", edicion:""},
	{tipo:"text",estilos:"width:700px;", index:"descripcion", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar criticidad",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_criticidades = new AjaxPython(); 
ajax_dao_criticidades.Constructor("GET", BASE_URL + "seguridad/maestros/criticidades/listar", "", false);

var tablaCriticidades = new Grid();

tablaCriticidades.SetTableId("tablaCriticidades");
tablaCriticidades.SetTableObj("tablaCriticidades");
tablaCriticidades.SetTableHeader(array_json_th);
tablaCriticidades.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_criticidades);
tablaCriticidades.SetTableFooter(array_json_btn, false);
tablaCriticidades.SetLabelMensaje("#txtMensajeRpta");
tablaCriticidades.SetURLGuardar(BASE_URL + "seguridad/maestros/criticidades/guardar");

tablaCriticidades.MostrarTable();

$("#test-observador").on( "click", function() { verObservadores(); });