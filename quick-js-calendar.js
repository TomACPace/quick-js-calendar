

w = window.open();

newdiv = function() { return w.document.createElement("DIV"); }

a1 = w.document.createElement("DIV");
w.document.body.appendChild(a1);
a1.style.border = "solid 2px black"

w.document.body.style.width = "11in";
w.document.body.style.height = "8.5in";

a1a = newdiv();
a1.appendChild(a1a);
a1b = newdiv(); a1.appendChild(a1b);

a1a.style.background = "#dfd"
a1a.style.width = "7.9in";
a1a.style.height = "8.5in";
a1a.style.float = "left";


a1b.style.width = "3in";
a1b.style.height = "8.5in";
a1b.style.background = "#fdd"
a1b.style.float = "left";


a2 = newdiv();
a2.style.clear = "both";
a1.appendChild(a2);
a1.style.border = "solid 1px #ddd";

var head = newdiv();
a1a.appendChild(head);
head.innerHTML = "<h3>January</h3>";


var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

dow1 = firstDay.getDay();
dow2 = lastDay.getDay();



var caldays = [];
for (var x = 0; x < (7*5); x++) {
    var cd = newdiv();
    caldays.push(cd);
    a1a.appendChild(cd);
    cd.style.width = (8 / 7 - 0.1) + "in";
    cd.style.height = (8 / 5.5) + "in";
    cd.style.border = "solid 1px black";
    cd.style.display = "inline-block";
    cd.style.verticalAlign = "top"
}



function clearcal() {
	for (var x = 0; x < caldays.length; x++) {
		var cd = caldays[x];
		cd.innerHTML = "";
	}
}
clearcal();


for (var dowI = 0; dowI < lastDay.getDate(); dowI++) {
    var cd = caldays[dowI + dow1];
    cd.innerHTML = dowI + 1;
}

var rightlines = [];
for (var x = 0; x < 60; x ++) {
	var line = newdiv();
	line.style.borderTop = "solid 1px #444";
	line.style.height = (8.5 / 65) + "in";
	a1b.appendChild(line);
	rightlines.push(line);
}



function resetCal(YM) {
	
	clearcal();
	
	var date = new Date(YM + "-02");
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	dow1 = firstDay.getDay();
	dow2 = lastDay.getDay();
	
	var monthname = date.toLocaleString('default', { month: 'long' });
	head.innerHTML = "<h3>" + monthname + "</h3>";
	
	for (var dowI = 0; dowI < lastDay.getDate(); dowI++) {
		if (dowI + dow1 >= caldays.length) break;
		var cd = caldays[dowI + dow1];
		cd.innerHTML = dowI + 1;
	}
}




