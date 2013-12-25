var txt = "wow. many breakpoint. such useful. wow. much clean. very sublime. wow".split(". ");

for(var i in txt){
	(function(){
		var j = i,
			text = txt[j];
		if(/*JsDbg-Begin*/text==="wow"/*JsDbg-End*/){/*JsDbg*/debugger;}setTimeout(function(){
			console.log(text);
		}, 1000*i);
	})();
}