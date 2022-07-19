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

    $("#twitter").click(function(){

		go("https://twitter.com/juri_gemignani");

	});

    $("#telegram").click(function(){

		go("https://t.me/juri_gemignani");

	});

    $("#github").click(function(){

		go("https://github.com/Juro0");

	});

    $("#site").click(function(){

		go("https://juro0.github.io/");

	});

    $("#discord").click(function(){

		window.alert("sorry, the discord is temporary unavailable.")

	});

});