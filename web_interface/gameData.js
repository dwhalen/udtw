// Yes, this is kind of ugly. No, I don't care.
states = [
{name:"China (CPC)",  filename:"cpc",   color:[215,182,114]},
{name:"China (KMT)",  filename:"kmt",   color:[176,243,203]},
{name:"France",       filename:"fr",   color:[51,165,56]},
{name:"Germany",      filename:"ger",   color:[255,255,0]},
{name:"Iran",         filename:"iran",   color:[1,7,144]},
{name:"Italy",        filename:"it",   color:[80,240,99]},
{name:"Japan",        filename:"jp",   color:[248,249,190]},
{name:"Netherlands",  filename:"nl",   color:[255,30,0]},
{name:"Poland",       filename:"pol",   color:[196,0,92]},
{name:"Romania",      filename:"rom",   color:[199,92,40]},
{name:"Turkey",       filename:"turk",   color:[255,174,0]},
{name:"United Kingdom",filename:"uk",   color:[94,222,249]},
{name:"USSR",         filename:"ussr",   color:[180,180,180]},
{name:"USA",          filename:"usa",   color:[255,255,255]},
{name:"Yugoslavia",   filename:"yugo",   color:[229,187,190]},
{name:"unowned",      filename:"npc",   color:[221,221,221]}
]
//resourceNames = ["Territories",	"Research",	"Steel",	"Uranium",	"Oil",	"Food", "Consumption",	"Production"]
resourceNames = ["terr.",	"research",	"steel",	"uranium",	"oil",	"food", "consum.",	"prod."]
territories =[
{name:"Aden",                   filename:"aden",                  init:"United Kingdom", resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Afghanistan",            filename:"afghanistan",           init:"unowned",        resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Alaska",                 filename:"alaska",                init:"USA",            resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Albania",                filename:"albania",               init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Algeria",                filename:"algeria",               init:"France",         resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"American Midwest",       filename:"americanmidwest",       init:"USA",            resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"American Northwest",     filename:"americannorthwest",     init:"USA",            resources:[1, 0, 2, 0, 0, 0, 0, 0]},
{name:"American South",         filename:"americansouth",         init:"USA",            resources:[1, 0, 0, 1, 1, 1, 0, 0]},
{name:"American Southwest",     filename:"americansouthwest",     init:"USA",            resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"Angolia",                filename:"angolia",               init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 2]},
{name:"Ankara",                 filename:"ankara",                init:"Turkey",         resources:[1, 0, 1, 0, 1, 0, 0, 0]},
{name:"Apulia",                 filename:"apulia",                init:"Italy",          resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"Argentina",              filename:"argentina",             init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Armenia",                filename:"armenia",               init:"Turkey",         resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"Beijing",                filename:"beijing",               init:"China (KMT)",    resources:[1, 1, 2, 0, 1, 0, 1, 4]},
{name:"Belgium",                filename:"belgium",               init:"unowned",        resources:[1, 1, 0, 0, 0, 0, 1, 0]},
{name:"Berlin",                 filename:"berlin",                init:"Germany",        resources:[1, 0, 1, 0, 1, 0, 1, 4]},
{name:"Bohemia",                filename:"bohemia",               init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Borneo",                 filename:"borneo",                init:"Netherlands",    resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"Brazil",                 filename:"brazil",                init:"unowned",        resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Brest",                  filename:"brest",                 init:"France",         resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"British Columbia",       filename:"britishcolumbia",       init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Budapest",               filename:"budapest",              init:"Romania",        resources:[1, 0, 0, 0, 1, 1, 0, 2]},
{name:"Bulgaria",               filename:"bulgaria",              init:"unowned",        resources:[1, 0, 2, 0, 0, 0, 0, 0]},
{name:"Burgandy",               filename:"burg",                  init:"France",         resources:[1, 0, 1, 1, 0, 0, 0, 0]},
{name:"Burma",                  filename:"burma",                 init:"United Kingdom", resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Central America",        filename:"centralamerica",        init:"USA",            resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Chad",                   filename:"chad",                  init:"France",         resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Clyde",                  filename:"clyde",                 init:"United Kingdom", resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Congo",                  filename:"congo",                 init:"unowned",        resources:[1, 0, 0, 1, 0, 0, 0, 0]},
{name:"Constantinople",         filename:"const",                 init:"Turkey",         resources:[1, 1, 2, 0, 0, 0, 1, 4]},
{name:"Demark",                 filename:"denmark",               init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"East Australia",         filename:"eastaustralia",         init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"East New Guinea",        filename:"eastnewguinea",         init:"United Kingdom", resources:[1, 0, 1, 0, 0, 0, 0, 1]},
{name:"East Siberia",           filename:"eastsiberia",           init:"USSR",           resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Edinburgh",              filename:"edinburgh",             init:"United Kingdom", resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Egypt",                  filename:"egypt",                 init:"United Kingdom", resources:[1, 0, 1, 0, 0, 0, 0, 1]},
{name:"Finland",                filename:"finland",               init:"unowned",        resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Galacia",                filename:"galacia",               init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Gascony",                filename:"gascony",               init:"France",         resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Greece",                 filename:"greece",                init:"unowned",        resources:[1, 1, 0, 0, 0, 0, 0, 0]},
{name:"Guangzhou",              filename:"guangzhou",             init:"China (CPC)",    resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Hawaii",                 filename:"hawaii",                init:"USA",            resources:[1, 0, 0, 0, 0, 0, 0, 2]},
{name:"Hokkaido",               filename:"hokkaido",              init:"Japan",          resources:[1, 0, 2, 0, 0, 0, 0, 0]},
{name:"Holland",                filename:"holland",               init:"Netherlands",    resources:[1, 0, 1, 0, 1, 0, 0, 4]},
{name:"Honshu",                 filename:"honshu",                init:"Japan",          resources:[1, 1, 2, 0, 1, 0, 1, 4]},
{name:"India",                  filename:"india",                 init:"United Kingdom", resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"Indochina",              filename:"indochina",             init:"France",         resources:[1, 0, 0, 0, 1, 0, 0, 4]},
{name:"Iraq",                   filename:"iraq",                  init:"United Kingdom", resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Iran",                   filename:"usa",                   init:"Iran",           resources:[1, 1, 2, 0, 2, 0, 1, 0]},
{name:"Kamchaka",               filename:"kamchaka",              init:"USSR",           resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Kazakh",                 filename:"kazakh",                init:"USSR",           resources:[1, 0, 0, 0, 0, 1, 0, 2]},
{name:"Khabarovsk",             filename:"khabarovsk",            init:"USSR",           resources:[1, 0, 1, 0, 0, 0, 0, 4]},
{name:"Kiel",                   filename:"kiel",                  init:"Germany",        resources:[1, 1, 2, 0, 0, 0, 1, 4]},
{name:"Korea",                  filename:"korea",                 init:"Japan",          resources:[1, 1, 0, 1, 0, 0, 0, 2]},
{name:"Libya",                  filename:"libya",                 init:"Italy",          resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Liverpool",              filename:"liverpool",             init:"United Kingdom", resources:[1, 1, 0, 0, 0, 0, 0, 0]},
{name:"Livonia",                filename:"livonia",               init:"Poland",         resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"London",                 filename:"london",                init:"United Kingdom", resources:[1, 1, 0, 0, 0, 0, 1, 4]},
{name:"Madagascar",             filename:"madagascar",            init:"France",         resources:[1, 0, 1, 0, 0, 0, 0, 1]},
{name:"Malaya",                 filename:"malaya",                init:"United Kingdom", resources:[1, 0, 0, 0, 0, 0, 0, 1]},
{name:"Manchuria",              filename:"manchuria",             init:"Japan",          resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Marianas Islands",       filename:"marianasislands",       init:"USA",            resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Marseilles",             filename:"mars",                  init:"France",         resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"Mexico",                 filename:"mexico",                init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Moscow",                 filename:"moscow",                init:"USSR",           resources:[1, 1, 0, 0, 1, 0, 1, 4]},
{name:"Munich",                 filename:"munich",                init:"Germany",        resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"Naples",                 filename:"naples",                init:"Italy",          resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"New Caledonia",          filename:"newcaledonia",          init:"France",         resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"New England",            filename:"newengland",            init:"USA",            resources:[1, 1, 2, 0, 0, 0, 1, 2]},
{name:"New Zealand",            filename:"newzealand",            init:"United Kingdom", resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"North Africa",           filename:"na",                    init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"North Sakalin",          filename:"northsakalin",          init:"USSR",           resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Northwest Territories",  filename:"northwestterritories",  init:"unowned",        resources:[1, 0, 0, 1, 0, 0, 0, 0]},
{name:"Norway",                 filename:"norway",                init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Ontario",                filename:"ontario",               init:"unowned",        resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Outer Mongolia",         filename:"outermongolia",         init:"USSR",           resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Pacific Coast",          filename:"pacificcoast",          init:"USA",            resources:[1, 1, 2, 0, 0, 0, 1, 4]},
{name:"Pakistan",               filename:"pakistan",              init:"United Kingdom", resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Paris",                  filename:"paris",                 init:"France",         resources:[1, 1, 1, 0, 0, 0, 1, 4]},
{name:"Peru",                   filename:"peru",                  init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Phillippines",           filename:"phillippines",          init:"USA",            resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Picardy",                filename:"picardy",               init:"France",         resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Piedmont",               filename:"piedmont",              init:"Italy",          resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Portugal",               filename:"port",                  init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Prussia",                filename:"prussia",               init:"Poland",         resources:[1, 0, 0, 0, 1, 0, 0, 2]},
{name:"Quebec",                 filename:"quebec",                init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 4]},
{name:"Rome",                   filename:"rome",                  init:"Italy",          resources:[1, 1, 1, 0, 0, 0, 1, 4]},
{name:"Ruhr",                   filename:"ruhr",                  init:"Germany",        resources:[1, 1, 2, 0, 0, 0, 1, 2]},
{name:"Rumania",                filename:"rumania",               init:"Romania",        resources:[1, 1, 1, 0, 1, 0, 1, 2]},
{name:"Russia",                 filename:"russia",                init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Saudia Arabia",          filename:"saudiaarabia",          init:"unowned",        resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Serbia",                 filename:"serbia",                init:"Yugoslavia",     resources:[1, 0, 1, 0, 1, 0, 0, 1]},
{name:"Sevastapol",             filename:"sev",                   init:"USSR",           resources:[1, 0, 1, 0, 1, 0, 1, 3]},
{name:"Sichuan",                filename:"sichuan",               init:"China (KMT)",    resources:[1, 0, 1, 0, 0, 1, 0, 0]},
{name:"Silesia",                filename:"silesia",               init:"Germany",        resources:[1, 0, 0, 1, 0, 0, 0, 0]},
{name:"Sinkiang",               filename:"sinkiang",              init:"China (CPC)",    resources:[1, 0, 1, 0, 1, 0, 0, 4]},
{name:"Smyna",                  filename:"smyrna",                init:"Turkey",         resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Somalia",                filename:"somalia",               init:"Italy",          resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"South Africa",           filename:"southafrica",           init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"South Sakalin",          filename:"southsakalin",          init:"Japan",          resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Spain",                  filename:"spain",                 init:"unowned",        resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"St. Petersburg",         filename:"stp",                   init:"USSR",           resources:[1, 1, 1, 0, 0, 0, 0, 1]},
{name:"Sumatra",                filename:"sumatra",               init:"Netherlands",    resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Sweden",                 filename:"sweden",                init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Syria",                  filename:"syria2",                init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Syria",                  filename:"syria",                 init:"France",         resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Tanganyika",             filename:"tanganyika",            init:"United Kingdom", resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Thailand",               filename:"thailand",              init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Tibet",                  filename:"tibet",                 init:"China (CPC)",    resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Trieste",                filename:"trieste",               init:"Yugoslavia",     resources:[1, 0, 1, 0, 0, 0, 0, 2]},
{name:"Tunis",                  filename:"tunis",                 init:"Italy",          resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Tuscany",                filename:"tuscany",               init:"Italy",          resources:[1, 0, 0, 0, 0, 0, 0, 0]},
{name:"Tyrolia",                filename:"tyrolia",               init:"unowned",        resources:[1, 0, 0, 0, 0, 1, 0, 0]},
{name:"Ukraine",                filename:"ukraine",               init:"USSR",           resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Uzbek",                  filename:"uzbek",                 init:"unowned",        resources:[1, 0, 0, 1, 0, 0, 0, 0]},
{name:"Venezuela",              filename:"venezuela",             init:"unowned",        resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Venice",                 filename:"venice",                init:"Italy",          resources:[1, 0, 0, 0, 0, 0, 0, 2]},
{name:"Vienna",                 filename:"vienna",                init:"unowned",        resources:[1, 0, 1, 0, 0, 0, 0, 0]},
{name:"Wales",                  filename:"wales",                 init:"United Kingdom", resources:[1, 0, 2, 0, 0, 0, 1, 2]},
{name:"Warsaw",                 filename:"warsaw",                init:"Poland",         resources:[1, 0, 2, 0, 0, 0, 1, 4]},
{name:"West Africa",            filename:"westafrica",            init:"France",         resources:[1, 0, 1, 0, 0, 0, 0, 1]},
{name:"West Australia",         filename:"westaustralia",         init:"unowned",        resources:[1, 0, 0, 0, 0, 0, 0, 2]},
{name:"West New Guinea",        filename:"westnewguinea",         init:"Netherlands",    resources:[1, 0, 1, 0, 0, 0, 0, 1]},
{name:"West Siberia",           filename:"westsiberia",           init:"USSR",           resources:[1, 0, 0, 0, 1, 0, 0, 0]},
{name:"Yorkshire",              filename:"yorkshire",             init:"United Kingdom", resources:[1, 0, 0, 0, 0, 0, 0, 0]}
]
