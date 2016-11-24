$( "#btnGuardarAmenaza" ).click(function() {
    var amenaza = new Object();
    amenaza.id_amenaza = $("#lblId").html();
    amenaza.codigo= $("#txtCodigo").val();
    amenaza.descripcion= $("#txtDescripcion").val();

    var ajax_amenaza = new AjaxRuby();
    ajax_amenaza.Constructor ("POST", BASE_URL + "seguridad/maestros/amenaza/guardar", JSON.stringify(amenaza), false);
    var rpta = ajax_amenaza.GetRespuesta();
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
    var id_amenaza = $("#lblId").html();

    if (id_amenaza == "E"){
    	$("#txtMensajeRpta").html("Debe guardar primero la amenaza antes de asosciarla a un grupo de activos");
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
    	var data = {"id_amenaza" : id_amenaza , "grupos_check" : grupos_check};
         var ajax_amenaza = new AjaxRuby();
         ajax_amenaza.Constructor ("POST", BASE_URL + "seguridad/maestros/amenaza/asociar_grupo", JSON.stringify(data), false);
         var rpta = JSON.parse(ajax_amenaza.GetRespuesta());
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