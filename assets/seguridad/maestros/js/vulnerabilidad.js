$( "#btnGuardarVulnerabilidad" ).click(function() {
    var vulnerabilidad = new Object();
    vulnerabilidad.id_vulnerabilidad = $("#lblId").html();
    vulnerabilidad.codigo= $("#txtCodigo").val();
    vulnerabilidad.descripcion= $("#txtDescripcion").val();

    var ajax_vulnerabilidad = new AjaxRuby();
    ajax_vulnerabilidad.Constructor ("POST", BASE_URL + "seguridad/maestros/vulnerabilidad/guardar", JSON.stringify(vulnerabilidad), false);
    var rpta = ajax_vulnerabilidad.GetRespuesta();
    if (rpta['tipo_mensaje'] == 'success'){
       $("#txtMensajeRpta").html(rpta['mensaje'][0]);
       $("#txtMensajeRpta").removeClass("color-rojo");
       $("#txtMensajeRpta").addClass("color-success");
       if (typeof rpta['mensaje'][1] !== "undefined"){
          $("#lblId").html(rpta['mensaje'][1]);
       } 
    }else{
       $("#txtMensajeRpta").html(rpta['mensaje'][0]);
       $("#txtMensajeRpta").removeClass("color-success");
       $("#txtMensajeRpta").addClass("color-rojo");
    }
});

$( "#btnAsociarGrupos" ).click(function() {
    var id_vulnerabilidad = $("#lblId").html();

    if (id_vulnerabilidad == "E"){
    	$("#txtMensajeRpta").html("Debe guardar primero la vulnerabilidad antes de asosciarla a un grupo de activos");
		$("#txtMensajeRpta").addClass("color-rojo");
    }else{
    	var grupos = $("#lista-grupos");
    	var grupos_check = new Array();
    	for(var k = 0; k < grupos.children(0).length ; k++){
    		var lista = $(grupos.children(0)[k]);
    		var llave = lista.children('.lista-checks').val();
    		var valor = lista.children('.lista-checks').is(":checked");
    		//console.log(llave + " -  " + valor)
    		grupos_check.push({"grupo_activo_id" : llave, "valor" : valor})
    	}
    	var data = {"id_vulnerabilidad" : id_vulnerabilidad , "grupos_check" : grupos_check};
         var ajax_vulnerabilidad = new AjaxRuby();
         ajax_vulnerabilidad.Constructor ("POST", BASE_URL + "seguridad/maestros/vulnerabilidad/asociar_grupo", JSON.stringify(data), false);
         var rpta = JSON.parse(ajax_vulnerabilidad.GetRespuesta());
         if (rpta['tipo_mensaje'] == 'success'){
             $("#txtMensajeRpta").html(rpta['mensaje'][0]);
             $("#txtMensajeRpta").removeClass("color-rojo");
             $("#txtMensajeRpta").addClass("color-success");
         }else{
             $("#txtMensajeRpta").html(rpta['mensaje'][0]);
             $("#txtMensajeRpta").removeClass("color-success");
             $("#txtMensajeRpta").addClass("color-rojo");
         }
    }
});