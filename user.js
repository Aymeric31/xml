$.ajax({
	type:"GET",
	url: "user.xml",
	dataType: "xml",
	success: function(xml){
		// $(xml).find("contact-info").each(function(){
		// 	var nom = $(this).find("name").text();
		// 	var compagnie = $(this).find("company").text();
		// 	var phone = $(this).find("phone").text();

		// 	$(".fiches ul").append(
		// 		$("<li />", {
		// 			text: phone
		// 		})
		// 		);
		// 	$(".fiches ul").append(
		// 		$("<li />", {
		// 			text: compagnie
		// 		})
		// 		);
		// 	$(".fiches ul").append(
		// 		$("<li />", {
		// 			text: nom,
		// 		})
		// 		);
		// });

			//liste deroulante:
			$( "select" ).change(function () {
				var foo = $.parseXML(xml);
				var claire, nom, company, phone;
				var jpp, nom, company, phone;
				function person1(){
					claire = $(xml).find("#claire");
					nom = claire.find("name").html();
					company = claire.find("company").html();
					phone = claire.find("phone").html();
				}
				function person2(){
					jpp = $(xml).find("#jpp");
					nom = jpp.find("name").html();
					company = jpp.find("company").html();
					phone = jpp.find("phone").html();
				}
				person1();
				person2();
				console.log(nom);
				console.log(company);
				console.log(claire);	
				$('select').change(function(){
					$(".fiches").html("<li> <h1>" + nom + "</h1> </li> <br> <li>" + company + "</li> <br> <li>" + phone + "</li>");
				});
			});
		},
		error: function(){
			$(".fiches").text("nope");
			console.log("nope");
		}
	});