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

		if (!$(".first").hasClass(("closeFirst"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectApp input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectApp i").removeClass();

		$("#selectApp i").addClass("fa "+selectApp.nombre);

		$("#selectApp h4").html(selectApp.id);

		$("#selectApp input").val(selectAppVal);

		$(".first_").removeClass("first_");

		if ($(".first").hasClass(("closeFirst"))){
			$(".first").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
			
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

		if (!$(".second").hasClass(("closesecond"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectIntefaz input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectIntefaz i").removeClass();

		$("#selectIntefaz i").addClass("fa "+selectApp.nombre);

		$("#selectIntefaz h4").html(selectApp.id);

		$("#selectIntefaz input").val(selectAppVal);

		$(".second_").removeClass("second_");

		if ($(".second").hasClass(("closesecond"))){
			$(".second").hide();
			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".second").addClass("closesecond");

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

		if (!$(".third").hasClass(("closethird"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectValor input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectValor i").addClass(selectApp.nombre);

		$("#selectValor i").removeClass();

		$("#selectValor i").addClass("fa "+selectApp.nombre);

		$("#selectValor h4").html(selectApp.id);

		$("#selectValor input").val(selectAppVal);

		$(".third_").removeClass("third_");

		if ($(".third").hasClass(("closethird"))){
			$(".third").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".third").addClass("closethird");

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

		if (!$(".four").hasClass(("closefour"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectLogin input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectLogin i").addClass(selectApp.nombre);

		$("#selectLogin i").removeClass();

		$("#selectLogin i").addClass("fa "+selectApp.nombre);

		$("#selectLogin input").val(selectAppVal);

		$("#selectLogin h4").html(selectApp.id);

		$(".four_").removeClass("four_");

		if ($(".four").hasClass(("closefour"))){
			$(".four").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".four").addClass("closefour");

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

		if (!$(".five").hasClass(("closefive"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);

		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectIntegracion input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectIntegracion i").addClass(selectApp.nombre);

		$("#selectIntegracion i").removeClass();

		$("#selectIntegracion i").addClass("fa "+selectApp.nombre);

		$("#selectIntegracion h4").html(selectApp.id);

		$("#selectIntegracion input").val(selectAppVal);

		$(".five_").removeClass("five_");

		if ($(".five").hasClass(("closefive"))){
			$(".five").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".five").addClass("closefive");

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

		if (!$(".six").hasClass(("closesix"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectPerfiles input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectPerfiles i").addClass(selectApp.nombre);

		$("#selectPerfiles i").removeClass();

		$("#selectPerfiles i").addClass("fa "+selectApp.nombre);

		$("#selectPerfiles h4").html(selectApp.id);

		$("#selectPerfiles input").val(selectAppVal);

		$(".six_").removeClass("six_");

		if ($(".six").hasClass(("closesix"))){
			$(".six").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".six").addClass("closesix");

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

		if (!$(".seven").hasClass(("closeseven"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".precioCaja .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectPanel input").val();//Precio a tomar del valor a cambiar

		$(".precioCaja .precioSuma").text(precioSuma);

		$("#selectPanel i").addClass(selectApp.nombre);

		$("#selectPanel i").removeClass();

		$("#selectPanel i").addClass("fa "+selectApp.nombre);

		$("#selectPanel h4").html(selectApp.id);

		$("#selectPanel input").val(selectAppVal);

		$(".seven_").removeClass("seven_");

		if ($(".seven").hasClass(("closeseven"))){
			$(".seven").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".seven").addClass("closeseven");

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

		if (!$(".eigth").hasClass(("closeeigth"))) {
			precioSuma = precioSuma + selectApp.precio;	
		}

		$(".disaper .precioFinal .precioSuma").attr("id", precioSuma);
		
		precioSuma = formatNumber.new(precioSuma);

		var recalcularPrecio = $(".menu #selectIdioma input").val();//Precio a tomar del valor a cambiar

		$(".disaper .precioFinal .precioSuma").text(precioSuma);

		$("#selectIdioma i").addClass(selectApp.nombre);

		$("#selectIdioma i").removeClass();

		$("#selectIdioma i").addClass("fa "+selectApp.nombre);

		$("#selectIdioma h4").html(selectApp.id);

		$("#selectIdioma input").val(selectAppVal);

		$(".eigth_").removeClass("eigth_");

		if ($(".eigth").hasClass(("closeeigth"))){
			$(".eigth").hide();

			var precioCambiar = $(".disaper .precioFinal span.precioSuma").attr("id");//Precio de la caja final.

			var tmpValor = precioCambiar - recalcularPrecio;

			var precioFinal = tmpValor + selectApp.precio;

			$(".disaper .precioFinal span.precioSuma").attr("id", precioFinal)

			precioFinal = formatNumber.new(precioFinal);

			$(".disaper .precioFinal span.precioSuma").text(precioFinal);

			$(".precioFinal").addClass("cambioColor");

			setTimeout(function(){
				$(".precioFinal").removeClass("cambioColor");
			}, 500)
		}

		$(".eigth").addClass("closeeigth");

		$("#text").removeAttr("id");

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
			
		})
	});

	$(".menu .selected").mouseleave(function(){
		$(".volverAtras").remove()
	});

	$(".contactarAsesor").click(function(){
		$(".contactForm").fadeIn("fast");
	});

	$(".contactForm .salir").click(function(){
		$(".contactForm").fadeOut("fast");
	})


/*Contact form*/

 	$('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor ingresa su nombre'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa su correo electrónico'
                    },
                    emailAddress: {
                        message: 'Por favor ingresa un correo electrónico valido'
                    }
                }
            },

            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa su número telefónico'
                    }                   
                }
            },            
            
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });	

	$("#enviarCorreo").click(function (){
		console.log("acá voy")

		var nombre = $("input:text[name=nombre]").val();

		var email = $("input:text[name=email]").val();

		var telefono = $("input:text[name=telefono]").val();

		$.ajax({
			type: "POST",
			data: {"nombre":nombre, "email":email, "telefono":telefono},
			url: "contacto.php",
			async: false,
			success: function(correoEnviado) {			
				$("#succes").html(correoEnviado);
			},
		}); 
			
	});



});