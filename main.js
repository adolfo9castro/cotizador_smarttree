jQuery(document).ready(function($){	

	var formatNumber = {
		separador: ".", // separador para los miles
		sepDecimal: ',', // separador para los decimales
		formatear:function (num){
			num +='';
			var splitStr = num.split('.');
			var splitLeft = splitStr[0];
			var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
			var regx = /(\d+)(\d{3})/;
			while (regx.test(splitLeft)) {
				splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
			}
			return this.simbol + splitLeft +splitRight;
		},
		new:function(num, simbol){
			this.simbol = simbol ||'';
			return this.formatear(num);
		}
	};

	$('[data-toggle="tooltip"]').tooltip();

	$("#start").click(function(){
		
		$("#icons .main").hide();
		$("#text").html("¿Qué tipo de plataforma desea?");
		$(".first_").fadeIn(900);
		$("#start").hide()
		$(".precioCaja").fadeIn(1500);
		
	});

	$(".selectApp").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();

		$(".first_").hide();
		$(".second_").fadeIn("slow");
		$("#text").html("¿Qué diseño desea para su app?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId};

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectApp i").removeClass();

		$("#selectApp i").addClass("fa "+selectApp.nombre);

		$("#selectApp h4").html(selectApp.id);

		$(".first_").removeClass("first_");

		if ($(".first").hasClass(("closeFirst"))){
			$(".first").hide();
		}

		$(".first").addClass("closeFirst");

		
	});

	$(".selectIntefaz").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		
		$(".second_").hide();
		$(".third_").fadeIn("slow");
		$("#text").html("¿Cómo quiere sacar provecho de su app?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectIntefaz i").addClass(selectApp.nombre);

		$("#selectIntefaz h4").html(selectApp.id);

		$(".second_").removeClass("second_");

	});

	$(".selectValor").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		$(".third_").hide();
		$(".four_").fadeIn("slow");
		$("#text").html("¿Los usuarios deberán ingresar un login?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectValor i").addClass(selectApp.nombre);

		$("#selectValor h4").html(selectApp.id);

		$(".third_").removeClass("third_");

	});

	$(".selectLogin").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		$(".four_").hide();
		$(".five_").fadeIn("slow");
		$("#text").html("¿Integración con la página web?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectLogin i").addClass(selectApp.nombre);

		$("#selectLogin h4").html(selectApp.id);

		$(".four_").removeClass("four_");

	});

	$(".selectIntegracion").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		$(".five_").hide();
		$(".six_").fadeIn("slow");
		$("#text").html("¿Los usuarios tienen sus propios perfiles?");
		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectIntegracion i").addClass(selectApp.nombre);

		$("#selectIntegracion h4").html(selectApp.id);

		$(".five_").removeClass("five_");

	});

	$(".selectPerfiles").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		$(".six_").hide();
		$(".seven_").fadeIn("slow");
		$("#text").html("¿La aplicación tiene panel de administración?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectPerfiles i").addClass(selectApp.nombre);

		$("#selectPerfiles h4").html(selectApp.id);

		$(".six_").removeClass("six_");

	});

	$(".selectPanel").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();
		$(".seven_").hide();
		$(".eigth_").fadeIn("slow");
		$("#text").html("¿Su aplicación será multiidioma?");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectPanel i").addClass(selectApp.nombre);

		$("#selectPanel h4").html(selectApp.id);

		$(".seven_").removeClass("seven_");

	});

	$(".selectIdioma").click(function(){
		var precioSuma = $(".precioCaja .precioSuma").attr("id");
		var selectAppVal = $(this).children("input").val();
		var selectAppName = $(this).children("input").attr("name");
		var selectAppId = $(this).children("h4").text();

		$(".eigth_").hide();
		$(".menu").fadeIn("slow");
		$("#text").html("Resumen de tu pedido");
		$(".disaper").fadeIn("slow");
		$(".precioCaja").fadeOut("fast");

		selectApp = {precio: selectAppVal, nombre: selectAppName, id: selectAppId}

		precioSuma = parseInt(precioSuma);

		selectApp.precio = parseInt(selectApp.precio);

		precioSuma = precioSuma + selectApp.precio;

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		$(".disaper .precioFinal .precioSuma").text(precioSuma);

		$("#selectIdioma i").addClass(selectApp.nombre);

		$("#selectIdioma h4").html(selectApp.id);

		$(".eigth_").removeClass("eigth_");

	});

	$(".menu .selected").mouseenter(function(){
		$(this).append("<div class='volverAtras' data-toggle='tooltip' data-placement='bottom' title='Recalcular'><i class='fa fa-hand-o-left' aria-hidden='true'></i></div>");
		$(".volverAtras").tooltip({title: "Volver atrás", animation: true});

		$(".volverAtras").click(function(){
			var grandParent = $(this).parent("div").attr("smtt");
			
			$("."+grandParent).css({
									"background-color": "#fff",
								    "border": "5px solid #999999",
								    "border-radius": "20px",
								    "box-shadow": "0 4px 7px #303030",
								    "display": "block",
								    "padding": "60px",
								    "position": "absolute",
								    "z-index": "99"

								});
			$("."+grandParent).removeClass(grandParent+"_");
			console.log(grandParent)
			
		})
	});

	$(".menu .selected").mouseleave(function(){
		$(".volverAtras").remove()
	});



	 

});