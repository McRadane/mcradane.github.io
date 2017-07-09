var data = [];

function parse() {
  if($("input[name=optionsDatas]:checked").val() == 'csv') {
    parseCSV();
  }
  else {
    parseMikuia();
  }

  $("input[name=optionsDatas]").attr('disabled','disabled');

  $("#options").removeClass("hidden");  
}

function parseCSV() {
  data = [];
  var lines = $("#csvdata textarea").val().split("\n");
  var item = {};
  var i, line;  

  for(i in lines) {
    line = lines[i];

    if(line !== "Username,Subscribe Date,Paying") {
      item.rank = data.length + 1;
      item.name = line.split(",")[0];
      data.push(item);
      item = {};
    }
  }  

  $("#csvdata").addClass("hidden");
}

function parseMikuia() {
	data = [];
	var lines = $("#data textarea").val().split("\n");
  var item = {};
  var i, line;
  
  for(i in lines) {
  	line = lines[i];
  	
  	if(line === "GiveSetTake") {
    	item.rank = data.length + 1;
    	data.push(item);
      item = {};
    } else if(line !== "") {

      if(isNaN(line)) {
      	item.name = line;
      } else {
      	item.coins = parseInt(line);
      }
    }
  }

  $("#data").addClass("hidden");
  

}

function generate() {
	var filter = [];
  var tickets = [];
  var limit = $("#limit").val();
  
  var filtre_method = $("input[name=optionsFiltre]:checked").val();
  var tickets_method = $("input[name=optionsMethode]:checked").val();

  setStore("filtre", filtre_method);
  setStore("methode", tickets_method);
  
  for(var i in data) {
    if(limit == "" || limit == 0) {
      filter.push(data[i]);
    } else if(filtre_method == "rang") {
    	if(data[i].rank <= limit) {
      	filter.push(data[i]);
      }
    } else {
    	if(data[i].coins >= limit) {
      	filter.push(data[i]);
      }   
    }
  }

  for(i in filter) {
  	var nb_ticket = (tickets_method == "lessya") ? filter.length - (filter[i].rank - 1) : 1;
  	for(var cpt = 0; cpt < nb_ticket; cpt++) {
    	tickets.push(filter[i].name);
    }
  }
  
  $("#options").addClass("hidden");
  $("#instruction").addClass("hidden");
  $("#result").removeClass("hidden");

  return tickets;
  
}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function setStore(key, data) {
  if(typeof localStorage != 'undefined') { 
    localStorage.setItem(key, data);
  }
};

function getStore(key) {
  if(typeof localStorage != 'undefined') { 
    return localStorage.getItem(key);
  }
  return null;
};

/* 
  Binding functions
*/

$("input[name=optionsDatas]").change(function() {

  var source = $("input[name=optionsDatas]:checked").val();

  setStore("source", source);

  if(source == 'csv') {
    $("#data").addClass("hidden");
    $("#optionsFiltrePanel").addClass("hidden");
    $("#csvdata").removeClass("hidden");
  } else {
    $("#data").removeClass("hidden");
    $("#optionsFiltrePanel").removeClass("hidden");
    $("#csvdata").addClass("hidden");
  }
});

$(".buttonParse").click(parse);

$("#tirage").click(function() {
  var tickets = generate();
  
  Shuffle(tickets);
  
  $("#randomorg").val(tickets.join("\n"));
  
  $("#winner").html("<b>Gagnant:</b> " + tickets[0]);
  
  $("#winner").removeClass("hidden");
});

$("#generate").click(function() {
  var tickets = generate();
  
  
  
  $("#randomorg").val(tickets.join("\n"));
});

/* 
  Loading functions
*/

if(getStore("source") == "csv") {
  $("#dataFromCSV").click();
} else {
  $("#dataFromMikuia").click();
}

if(getStore("filtre") == "rang") {
  $("#filtreRang").click();
} else {
  $("#filtrePoints").click();
}

if(getStore("methode") == "flat") {
  $("#filtreFlat").click();
} else {
  $("#filtreLessya").click();
}
