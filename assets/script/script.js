function go(link) {
    if(link.startsWith('http') || link.startsWith('https')){
        window.open(link)
    } else {
        location.href = link;
    }
}

// JQUERY START

$(document).ready(function() {

	$("#photo").click(function(){

		go("/");

	});

    $("#instagram").click(function(){

		go("https://www.instagram.com/juri_gemignani/");

	});

    $("#whatsapp").click(function(){

		go("https://wa.me/+393518760311");

	});

    $("#github").click(function(){

		go("https://github.com/Juro0");

	});

    $("#site").click(function(){

		go("https://juro0.github.io/");

	});

});
