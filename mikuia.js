var data = [];

function parse() {
	data = [];
	var lines = $("#rawdata").val().split("\n");
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
  $("#options").removeClass("hidden");
}

function generate() {
	var filter = [];
  var tickets = [];
  var limit = $("#limit").val();
  
  var filtre_method = $("input[name=optionsFiltre]:checked").val();
  var tickets_method = $("input[name=optionsMethode]:checked").val();
  
  for(var i in data) {
    if(filtre_method == "rang") {
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
  $("#result").removeClass("hidden");

  return tickets;
  
}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

$("#parse").click(parse);

$("#tirage").click(function() {
  var tickets = generate();
  
  Shuffle(tickets);
  
  $("#randomorg").val(tickets.join("\n"));
  
  $("#winner").html("<b>Gagnant:</b> " + tickets[0]);
  
  $("#result").removeClass("hidden");
});

$("#generate").click(function() {
  var tickets = generate();
  
  
  
  $("#randomorg").val(tickets.join("\n"));
});
