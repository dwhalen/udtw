var gameState;

// set up the map and the rest of the window.
window.onload = function () {
  // set up the map
  var map_div = $("#map_div");
  for (var i in territories) {
      map_div.append($("<img class=territory id=\"" + territories[i].filename +"\"/>"));
      mapSetToFront(states[0], territories[i]); // mostly for debugging
  }
  // set up the state dictionary
  setUpStateDictionary();

  // set up the resource table
  generateResourceTable();

  // set up the list of territory selectors
  generateSelectors();

  gameState = new GameState();
}

class GameState {
  constructor() {
    // create turn 0
    this.turns = [new Turn(0)];
    this.displayedTurn = 0;

    // create turn 1
    this.appendTurn();

    // update the interface
    this.updateAll();
  }
  appendTurn() {
    this.turns.push(this.turns[this.turns.length-1].nextTurn());
    this.displayedTurn = this.turns.length-1;
    this.updateAll();
  }
  nextTurn() {
    // View the next turn.
    this.displayedTurn++;
    if (this.displayedTurn >= this.turns.length) {
      this.displayedTurn = this.turns.length - 1;
      console.error("Attempted to advance turn beyond end of game.")
    }
    this.updateAll();
  }
  prevTurn() {
    // View the previous turn.
    this.displayedTurn--;
    if (this.displayedTurn <= 0) {
      this.displayedTurn = 1;
      console.error("Attempted to decrease turn beyond beginning of game.")
    }
    this.updateAll();
  }
  deleteLaterTurns() {
    // Deletes all later turns.
    this.turns = this.turns.slice(0, this.displayedTurn + 1);
    this.updateAll();
  }
  updateResourceTable() {
    // display resources gained from last turn's territories, as well as
    // adjustments from captures this turn.
    console.assert(this.displayedTurn > 0)
    var currentRes = this.turns[this.displayedTurn-1].getResources();
    var nextRes = this.turns[this.displayedTurn].getResources();
    updateResourceTable(currentRes, nextRes);
  }
  updateMap() {this.turns[this.displayedTurn].updateMap();}
  updateSelectors() {
    updateSelectors(this.turns[this.displayedTurn-1].territories,
      this.turns[this.displayedTurn].territories);
  };
  updateHeaders() {
    var contents = "Viewing turn " + this.displayedTurn + " / " + (this.turns.length-1);
    $("#viewing_turn_header").text(contents);
  };
  updateAll() {
    // Update the current state of the interface
    console.log("updating interface");
    this.updateMap();
    this.updateSelectors();
    this.updateResourceTable();
    this.updateHeaders();
    updatePopOutMap();
  };
  setDisplayTurnToLast() {this.setDisplayedTurn(this.turns.length -1);}
  setDisplayedTurn(n) {
    console.assert(n > 0);
    console.assert(n < this.turns.length);
    this.displayedTurn = n;
    this.updateAll();
  }
  updateTerritoryOwner(state, territory) {
    // update who owns the territory
    this.turns[this.displayedTurn].setOwner(state, territory);
    this.updateAll();
  }
}

encodeGameStateAsJSON = function (state) {
  return JSON.stringify(state);
}
decodeGameStateFromJSON = function (string) {
  // May not work on oldder browsers
  var ob = JSON.parse(string);
  ob = Object.assign(new GameState, ob);
  for (n in ob.turns) {
    ob.turns[n] = Object.assign(new Turn, ob.turns[n]);
  }
  return ob;
}

class Turn {
  constructor(n) {
    this.turn = n;
    this.territories = {};
    for (var i in territories) {
      this.territories[territories[i].filename] = getStateByName(territories[i].init).filename;
    }
  }
  updateMap() {
    // update the map so that it shows the current state for this turn
    for (var i in territories) {
      var state = this.ownerOfTerritory(territories[i]);
      mapSetToFront(state, territories[i]);
    }
  }
  setOwner(state, territory) {
    // update ownership of the territory
    this.territories[territory.filename] = state.filename;
  }
  ownerOfTerritory(territory) {
    // just looks up who owns that territory currently.
    return stateDict[this.territories[territory.filename]];
  }
  getResources() {
    // add up all the resources for all the players
    // for example,
    // { jp: {Steel: 10, Food:100}, usa: {Steel:17, Food:3}}
    var out = {};
    for (var j in states) {
      out[states[j].filename] = [];
    }

    for (var n in resourceNames) {
      var res = resourceNames[n];
      var resources = this.getResource(n);
      for (var stateFilename in resources) {
        //out[stateFilename][res] = resources[stateFilename];
        out[stateFilename].push(resources[stateFilename]);
      }
    }
    return out;
  }
  getResource(n) {
    // add up the nth resouces
    var out = {}
    for (var j in states) {
      out[states[j].filename] = 0;
    }
    for (var i in territories) {
      var state = this.ownerOfTerritory(territories[i]);
      out[state.filename] += territories[i].resources[n];
    }
    return out;
  }
  nextTurn() {
    // generates a new Turn that would be the next turn.
    var out = new Turn();
    out.turn = this.turn + 1;
    out.territories = deepCopyWithJSON(this.territories);
    return out;
  }
}

// hackish, but it works here
function deepCopyWithJSON(ob) {
  return JSON.parse(JSON.stringify(ob));
}

// Some stuff for players
function getStateByName(name) {
  for (var j in states) {
    if (states[j].name === name) {
      return states[j]
    }
  }
}

// maps name to the state
// stateDict["usa"] = state for USA
var stateDict = {}
function setUpStateDictionary () {
  for (j in states) {
    stateDict[states[j].filename] = states[j];
  }
}

// Map manipulation
function getImagePath(state, territory) {
  var path = "resources/" + territory.filename + "_" + state.color[0] + "_" + state.color[1] + "_" + state.color[2] + ".png";
  return path;
}
function mapSetToFront(state, territory) {
  for (var j in states) {
    var id = "#" + territory.filename;
    var path = getImagePath(state, territory);
    $(id).attr('src', path);
  }
}
function generateResourceTable() {
  // returns an html element that is the appropriate table.
  var out = $("<table class=resource_table></table>");
  var header = $("<tr class=resource_table_headings><th></th></tr>");
  for (n in resourceNames) {
    header.append($("<th>"+resourceNames[n] +"</th>"));
  }
  out.append(header);
  for (j in states) {
    var row = $("<tr class=resource_table_row><td>" + states[j].name + "</td></tr>");
    for (n in resourceNames) {
      row.append($("<td>"+0+"</td>"));
    }
    out.append(row);
  }
  $("#resource_div").append(out);
}

// Resource Table manipulation
function updateResourceTable(currentTurn, nextTurn) {
  rows = $(".resource_table_row");
  console.assert(rows.length === states.length);

  for (var j in states) {
    for (var n in resourceNames) {
      n = parseInt(n); // wtf?
      var filename = states[j].filename
      //console.log(n+1, rows[j].children, rows[j].children[n+1]);
      rows[j].children[n+1].innerHTML = tableItemInnerHTML(currentTurn[filename][n], nextTurn[filename][n]);
    }
  }

}
function tableItemInnerHTML(currentVal, nextVal) {
  if (currentVal === nextVal) {return "" + currentVal;}
  delta = nextVal - currentVal;
  if (delta > 0) {
    return currentVal + "<font color=red>(+"+ delta + ")</font>";
  } else {
    return currentVal + "<font color=red>(" + delta + ")</font>";
  }
}

//Selector manipulation
function generateSelectors() {
  var ul = $("#selector_ul");
  for (i in territories) {
    var sel = createSelector(territories[i]);
    ul.append(sel);
  }
}
function createSelector(territory) {
  var id = "territory_li_for_" + territory.filename;
  var li = $("<li id=\""+id+"\"><span class=selector_territory_span>" + territories[i].name + "</span><span class=prev_owner_span>unowned</span><span class=current_owner_span></span></li>");
  var id = "territory_dropdown_for_" + territory.filename;
  var dropdown = $("<select id=\""+id+"\" class=same_option></select>");
  dropdown.change(function(){change_owner(territory)});
  for (j in states) {
    state = states[j];
    var option = $("<option value=\""+state.filename+"\" class=\"same_option\">"+state.name+"</option>");
    // if (state.name == territory.init) {
    //   option.attr("selected", "selected");
    // }
    dropdown.append(option);

  }
  li.find(".current_owner_span").append(dropdown);
  return li;
}
function updateSelectors(prev, current) {
  // takes the territory maps from the previous and current turn.
  for (j in territories) {
    // update the text showing the previous owner
    var territory = territories[j];
    var id = "territory_li_for_" + territory.filename;
    var state = stateDict[prev[territory.filename]];
    $("#" + id+ " .prev_owner_span").text(state.name);

    // change the color shown in the dropdown menu
    // based off whether the owner has changed.
    var id = "territory_dropdown_for_" + territory.filename;
    var selector = $("#"+id);
    selector.val(stateDict[current[territory.filename]].filename) // Make sure it's up to date
    if (selector[0].value === state.filename) {
      selector.attr("class", "same_option");
    } else {
      selector.attr("class", "different_option");
    }

    // change the color of the items in the dropdown list
    // depending on the previous owner
    $("#"+id + " option").each(function() {
      if ($(this).attr("value") === state.filename) {
        $(this).attr("class", "same_option");
      } else {
        $(this).attr("class", "different_option");
      }
    });
  }
}

// UI
// change in territory ownership
function change_owner(territory) {
  var id = "#territory_dropdown_for_" + territory.filename;
  var selector = $(id);
  // console.log(territory, selector, selector[0].value);
  state = stateDict[selector[0].value];
  gameState.updateTerritoryOwner(state, territory);
}
function previousTurnButton() {
  gameState.prevTurn();
}
function nextTurnButton() {
  gameState.nextTurn();
}
function newTurnButton() {
  gameState.appendTurn();
}
function deleteLaterTurnsButton() {
  if (!confirm("Do you really want to delete later turns? This operation can not be undone.")) {return;}
  gameState.deleteLaterTurns();
}
function resetGameButton() {
  if (!confirm("Do you really want to reset the game? This operation can not be undone.")) {return;}
  gameState = new GameState();
}
var child_window = null;
function popOutMapButton() {
  if (child_window) {
    child_window.close();
  }
  child_window =  window.open("", "MsgWindow", "width=1619,height=1454");
  child_window.document.head.innerHTML = childWindowHead;
  updatePopOutMap();
}
function updatePopOutMap() {
  // update the pop out map by just capying the html over. No, this isn't
  // the best way to do this at all.
  if (child_window) {
    var turn_html =   "<h1 id=turn>\n"
      +"  Turn " + gameState.displayedTurn + "\n"
      +"</h1>\n";
    var map_html = $("#map_div")[0].outerHTML;
    child_window.document.body.innerHTML = turn_html + map_html;
  }
}


// some stuff for the child window
// The base is needed for relative paths to images.
childWindowHead = "<base href=\"" + document.baseURI + "\">\n"
+"\n"
+"<style>\n"
+"#turn {\n"
+"  font-size: 5vw;\n"
+"  z-index: 2;\n"
+"  top: 0px;\n"
+"  left: 0px;\n"
+"  width: 18vw;\n"
+"  position:absolute;\n"
+"  background: white;\n"
+"  margin-top: 0px;\n"
+"}\n"
+"#map_div {\n"
//+"  max-width: 100%;"
//+"  hwight: 1454px;\n"
//+"  width: 1619px;\n"
//+"  position: relative;\n"
+"}\n"
+"img {\n"
//+"  height: 454px;\n"
//+"  width: 619px;\n"
+"  width: 100%;\n"
+"  "
+"  height: auto;\n"
+"  position: absolute;\n"
+"  top: 0px;\n"
+"  left: 0px;\n"
+"}\n"
+".territory {\n"
+"  z-index:1;\n"
+"}\n"
+".background_img {\n"
+"  z-index:0;\n"
+"}\n"
+"</style>\n"

// Warn on leaving page
// https://stackoverflow.com/questions/7317273/warn-user-before-leaving-web-page-with-unsaved-changes
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'If you leave the game will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});
