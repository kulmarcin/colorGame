
var square = $(".square");
var colorArray = []


$("#hardButton").addClass("selected")
getArrayHard()


var color = pickColor();

$("h1 span").text(color)

for (var i = 0; i < square.length; i++) {
	square[i] = square.css("background-color" , colorArray[i])
}

$(".square").on("click" , function() {
	var col = $(this).css("background-color")

	if (col === color) {
		console.log("true")
		$("h1").css("background-color" , color)
		$(".square").css("background-color" , color)
		$(".buttons").css("background-color" , color)
		$("button").css("background-color" , color)
		
		if ($("#hardButton").attr("class") === "selected") {
			$("#hardButton").text("try again?")
		} if ($("#easyButton").attr("class") === "selected") {
			$("#easyButton").text("try again?")
		}

	} else {
		$(this).fadeOut("slow")
	}	
})

$("#easyButton").on("click" , function() {
	$(this).addClass("selected")
	$(this).text("EASY")	
	$("#hardButton").text("HARD")
	$("#hardButton").css("background-color", "white")
	$(this).css("background-color", "steelblue")
	$(".buttons").css("background-color" , "white")	
	$("#hardButton").removeClass("selected")
	newGameEasy();	

})

$("#hardButton").on("click" , function() {
	$(this).text("HARD")
	$("#easyButton").text("EASY")
	$(this).addClass("selected")
	$(".buttons").css("background-color" , "white")	
	$("#easyButton").css("background-color", "white")
	$(this).css("background-color", "steelblue")
	$("#easyButton").removeClass("selected")
	newGameHard();
})






function arrayClear() {
	colorArray.length = 0;
	return colorArray
}


function randomNum() {
	var randomNum = Number(Math.floor(Math.random() * 256))
	return randomNum;
}

function colorFun() {
		
	var randomColor = "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")"

	return randomColor
}

function getArrayHard() {
	for (var i = 0; i < 6; i++) {
		colorArray[i] = colorFun()
	}
	return colorArray
}

function getArrayEasy() {
	
	for (var i = 0; i < 3; i++) {
		colorArray[i] = colorFun()
		
	}
	return colorArray
}

function pickColor() {
	var random = Number(Math.floor(Math.random() * 6))
	
	return colorArray[random]

}

function pickColorEasy() {
	var random = Number(Math.floor(Math.random() * 3))
	
	return colorArray[random]

}

function newGameHard() {
	var colorArray = []
	colorArray = getArrayHard();
	color = pickColor();
	var square = $(".square")
	$("h1 span").text(color);
	$("h1").css("background-color" , "steelblue")
	$(".square").css("display" , "block")

	for (var i = 0; i < square.length; i++) {
	
	square[i] = square.css("background-color" , colorArray[i])
	}
}

function newGameEasy() {
	arrayClear();
	var colorArray = []
	colorArray = getArrayEasy();
	color= pickColorEasy();
	var square = $(".square")
	$("h1").css("background-color" , "steelblue")
	$("h1 span").text(color);
	$(".square").css("display" , "block")

	for (var i = 0; i < square.length; i++) {
		if (colorArray[i]) {
			square[i] = square.css("background-color" , colorArray[i])
		}   else {
				square[i] = square.css("display" , "none")
			}
	}
}