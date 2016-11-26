$( "#btnGuardarActivo" ).click(function() {
    var activo = new Object();
    activo.id_activo = $("#lblId").html();
    activo.codigo= $("#txtCodigo").val();
    activo.descripcion= $("#txtDescripcion").val();
    activo.id_criticidad= $("#slcCriticidad").val();
    activo.id_capa= $("#slcCapa").val();
    activo.id_ubicacion= $("#slcUbicacion").val();
    activo.id_tipo_activo= $("#slcTipo").val();
    activo.id_agente = $("#slcAgente").val();

    if (activo.id_criticidad != "E" && activo.id_capa != "E" && activo.id_ubicacion != "E" && activo.id_tipo_activo != "E" && activo.id_agente != "E"){
        var ajax_activo = new AjaxRuby();
        ajax_activo.Constructor ("POST", BASE_URL + "seguridad/gestion/activo/guardar", JSON.stringify(activo), false);
        var rpta = ajax_activo.GetRespuesta();
        
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
    }else{
      $("#txtMensajeRpta").html("Falta seleccionar la criticidad, capa, ubicacion, tipo de activo o agente");
      $("#txtMensajeRpta").addClass("color-rojo");
    }
});

$( "#btnAsociarControles" ).click(function() {
    var id_activo = $("#lblId").html();

    if (id_activo == "E"){
      $("#txtMensajeRpta").html("Debe guardar primero activo antes de asosciarla a los controles");
      $("#txtMensajeRpta").addClass("color-rojo");
    }else{
      var grupos = $("#lista-controles");
      var grupos_check = new Array();
      for(var k = 0; k < grupos.children(0).length ; k++){
        var lista = $(grupos.children(0)[k]);
        var llave = lista.children('.lista-checks').val();
        var valor = lista.children('.lista-checks').is(":checked");
        //console.log(llave + " -  " + valor)
        grupos_check.push({"control_id" : llave, "valor" : valor})
      }
      var data = {"id_activo" : id_activo , "grupos_check" : grupos_check};
         var ajax_control = new AjaxRuby();
         ajax_control.Constructor ("POST", BASE_URL + "seguridad/gestion/activo/asociar_control", JSON.stringify(data), false);
         var rpta = JSON.parse(ajax_control.GetRespuesta());
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

$( "#btnAsociarVulnerabildades" ).click(function() {
    var id_activo = $("#lblId").html();

    if (id_activo == "E"){
      $("#txtMensajeRpta").html("Debe guardar primero activo antes de asosciarla a las vulnerabilidades");
      $("#txtMensajeRpta").addClass("color-rojo");
    }else{
      var grupos = $("#lista-vulnerabilidades");
      var grupos_check = new Array();
      for(var k = 0; k < grupos.children(0).length ; k++){
        var lista = $(grupos.children(0)[k]);
        var llave = lista.children('.lista-checks').val();
        var valor = lista.children('.lista-checks').is(":checked");
        //console.log(llave + " -  " + valor)
        grupos_check.push({"vulnerabilidad_id" : llave, "valor" : valor})
      }
      var data = {"id_activo" : id_activo , "grupos_check" : grupos_check};
         var ajax_vulnerabilidad = new AjaxRuby();
         ajax_vulnerabilidad.Constructor ("POST", BASE_URL + "seguridad/gestion/activo/asociar_vulnerabilidad", JSON.stringify(data), false);
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

$( "#btnAsociarAmenazas" ).click(function() {
    var id_activo = $("#lblId").html();

    if (id_activo == "E"){
      $("#txtMensajeRpta").html("Debe guardar primero activo antes de asosciarla a las amenazas");
      $("#txtMensajeRpta").addClass("color-rojo");
    }else{
      var grupos = $("#lista-amenazas");
      var grupos_check = new Array();
      for(var k = 0; k < grupos.children(0).length ; k++){
        var lista = $(grupos.children(0)[k]);
        var llave = lista.children('.lista-checks').val();
        var valor = lista.children('.lista-checks').is(":checked");
        //console.log(llave + " -  " + valor)
        grupos_check.push({"amenaza_id" : llave, "valor" : valor})
      }
      var data = {"id_activo" : id_activo , "grupos_check" : grupos_check};
         var ajax_amenaza = new AjaxRuby();
         ajax_amenaza.Constructor ("POST", BASE_URL + "seguridad/gestion/activo/asociar_amenaza", JSON.stringify(data), false);
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

$( "#btnAsociarRiesgos" ).click(function() {
    var id_activo = $("#lblId").html();

    if (id_activo == "E"){
      $("#txtMensajeRpta").html("Debe guardar primero activo antes de asosciarla a las riesgos");
      $("#txtMensajeRpta").addClass("color-rojo");
    }else{
      var grupos = $("#lista-riesgos");
      var grupos_check = new Array();
      for(var k = 0; k < grupos.children(0).length ; k++){
        var lista = $(grupos.children(0)[k]);
        var llave = lista.children('.lista-checks').val();
        var valor = lista.children('.lista-checks').is(":checked");
        //console.log(llave + " -  " + valor)
        grupos_check.push({"riesgo_id" : llave, "valor" : valor})
      }
      var data = {"id_activo" : id_activo , "grupos_check" : grupos_check};
         var ajax_riesgo = new AjaxRuby();
         ajax_riesgo.Constructor ("POST", BASE_URL + "seguridad/gestion/activo/asociar_riesgo", JSON.stringify(data), false);
         var rpta = JSON.parse(ajax_riesgo.GetRespuesta());
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