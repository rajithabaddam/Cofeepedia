var Market_Year=[];//0
var Angola=[]; //2
var Bolivia=[]; //6
var Brazil=[]; //7
var Burundi=[];//8
var Colombia=[];//14
var Costa_Rica=[]; //15
var cuba=[];//17
var Democratic_Republic=[];
var Ecuador=[];
var ElSalvador=[];
var Ethiopia=[];
var Guatemala=[];
var Haiti=[];
var Honduras=[];
var India=[];
var Indonesia=[];
var Jamaica=[];
var Kenya=[];
var Madagascar=[];
var Malawi=[];
var Mexico=[];
var Nicaragua=[];
var Panama=[];
var PapuaNewGuinea=[];
var Paraguay=[];	
var Peru=[];	
var Philippines=[];	
var Rwanda=[];	
var SriLanka=[];	
var Tanzania=[];	
var Uganda=[];	
var UnitedStatesofAmerica=[];	
var Venezuela	=[];
var Vietnam	=[];
var Yemen	=[];
var Zambia=[];	
var Zimbabwe=[];

document.addEventListener('DOMContentLoaded', function () {
 fetch("arabica_pivot_short.csv",{method: 'GET'})
.then(response => response.text())
.then(ab => {
  // do stuff with `ArrayBuffer` representation of file
  console.log("hello there");
  //console.log(ab); reads all the test in a file
  console.log(ab.length) // give the length of the text i.e 22330
  var data = [];

    // split by line breaks
    var rows = ab.split("\r\n");
    console.log(rows.length); //length is 63 i.e 63 rows
    for(var i=0; i<rows.length; i++) {
    	// split each row by comma
    	var row_columns = rows[i].split(",");

    	data.push(row_columns);
	  }//for
    console.log(data); // all the csv data in the data in the array of list
    console.log(data[0]);//the header row
    console.log(data[0].length);// number of columns in the csv i.e 83

    console.log(data[0][0]);//Market_year
    
    //need coloum of data
    //Market_Year", 1"Algeria",2 "Angola",3 "Argentina", 4"Australia", 5"Benin",6 "Bolivia",7 "Brazil", 8"Burundi", 9"Cameroon", 10"Canada", 11"Central African Republic",12 "Chile",13 "China",14 "Colombia", 15"Costa Rica", 16"Croatia", 17"Cuba",18 "Democratic Republic of the Congo", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Ethiopia", "European Union", "Gabon", "Ghana", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "India", "Indonesia", "Iran", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Laos", "Liberia", "Madagascar", "Malawi", "Malaysia", "Mexico", "Morocco", "New Caledonia", "New Zealand", "Nicaragua", "Nigeria", "Norway", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Republic of Congo", "Republic of Serbia", "Russia", "Rwanda", "Sierra Leone", "Singapore", "South Africa", "South Korea", "Sri Lanka", "Switzerland", "Taiwan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Turkey", "Uganda", "Ukraine", "United States of America", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    
    for(var j=1;j<data.length;j++){
        //console.log(data[j][0]);
        Market_Year.push(data[j][0]);
        //if(data[j][2]!='') Angola.push(data[j][2]); else Angola.push('');
            
        Bolivia.push(parseInt(data[j][1]));
         //Angola.push(data[j][6]);
        Brazil.push(parseInt(data[j][2]));
        Burundi.push(parseInt(data[j][3]));
        Colombia.push(parseInt(data[j][7]));
        Costa_Rica.push(parseInt(data[j][8]));
        cuba.push(parseInt(data[j][9]));
        Democratic_Republic.push(parseInt(data[j][10]));
        Ecuador.push(parseInt(data[j][11]));
        ElSalvador.push(parseInt(data[j][12]));
        Ethiopia.push(parseInt(data[j][13]));
        Guatemala.push(parseInt(data[j][14]));
        Haiti.push(parseInt(data[j][15]));
        Honduras.push(parseInt(data[j][16]));
        India.push(parseInt(data[j][17]));
        Indonesia.push(parseInt(data[j][18]));
        Jamaica.push(parseInt(data[j][19]));
        Kenya.push(parseInt(data[j][20]));
        Madagascar.push(parseInt(data[j][21]));
        Malawi.push(parseInt(data[j][22]));
        Mexico.push(parseInt(data[j][23]));
        Nicaragua.push(parseInt(data[j][24]));
        Panama.push(parseInt(data[j][25]));
        PapuaNewGuinea.push(parseInt(data[j][26]));
        Paraguay.push(parseInt(data[j][27]));	
        Peru.push(parseInt(data[j][28]));	
        Philippines.push(parseInt(data[j][29]));	
        Rwanda.push(parseInt(data[j][30]));	
        SriLanka.push(parseInt(data[j][31]));	
        Tanzania.push(parseInt(data[j][32]));	
        Uganda.push(parseInt(data[j][33]));	
        UnitedStatesofAmerica.push(parseInt(data[j][34]));	
        Venezuela.push(parseInt(data[j][35]));	
        Vietnam.push(parseInt(data[j][36]));	
        Yemen.push(parseInt(data[j][37]));	
        Zambia.push(parseInt(data[j][38]));	
        Zimbabwe.push(parseInt(data[j][39]));
    
    }//for
   
    console.log("Market years: "+Market_Year);
     /*
    console.log("Angola :"+Angola);
    console.log("Bolivia: "+Bolivia);
    console.log("Brazil: "+Brazil);
    console.log("Burundi: "+Burundi);
    console.log("Colombia: "+Colombia);
    console.log("Costa_Rica: "+Costa_Rica);
    console.log("cuba: "+cuba);
    console.log("Democratic_Republic:"+Democratic_Republic);
    console.log("Ecuador:"+Ecuador);
    console.log("ElSalvador:"+ElSalvador);
    console.log("Ethiopia:"+Ethiopia);
    console.log("Guatemala:"+Guatemala);
    console.log("Haiti:"+Haiti);
    console.log("Honduras:"+Honduras);
    console.log("India:"+India);
    console.log("Indonesia:"+Indonesia);
    console.log("Jamaica:"+Jamaica);
    console.log("Kenya:"+Kenya);
    console.log("Madagascar:"+Madagascar);
    console.log("Malawi:"+Malawi);
    console.log("Mexico:"+Mexico);
    console.log("Nicaragua:"+Nicaragua);
    console.log("Panama:"+Panama);
    console.log("PapuaNewGuinea:"+PapuaNewGuinea);
    console.log("Paraguay:"+Paraguay);	
    console.log("Peru:"+Peru);	
    console.log("Philippines:"+Philippines);	
    console.log("Rwanda:"+Rwanda);	
    console.log("SriLanka:"+SriLanka);	
    console.log("Tanzania:"+Tanzania);	
    console.log("Uganda:"+Uganda);	
    console.log("UnitedStatesofAmerica:"+UnitedStatesofAmerica);	
    console.log("Venezuela	:"+Venezuela);
    console.log("Vietnam	:"+Vietnam);
    console.log("Yemen	:"+Yemen);
    console.log("Zambia:"+Zambia);	
    console.log("Zimbabwe:"+Zimbabwe);*/
})//fetch then
.catch(err => console.log(err));
Market_Year=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
Brazil=[ 26600,24400,41600,23600,34300,26000,36000,27650,40500,33000,41800,34700,42100,41800,37300,36100,45600,38500,48200,39900];
Burundi=[ 446,261,454,338,337,285,287,209,250,300,235,210,235,185,160,240,200,205,200,200];
Colombia=[ 2502,2338,2207,2106,1907,1751,1782,1867,1580,1475,1575,1775,1675,1450,1400,1625,1300,1525,1300,1375];
Costa_Rica=[ 313,285,239,224,154,125,100,70,127,120,120,170,125,150,150,150,150,100,100,100];
cuba=[ 73,88,45,55,58,54,100,115,100,105,100,90,80,70,70,70,70,75,70,75];
Democratic_Republic=[439,435,455,351,491,310,390,465,545,500,500,500,475,275,225,225,225,125,125,125];
Ecuador=[555,505,410,387,398,475,500,475,360,400,400,400,315,135,120,100,70,95,140,155];
ElSalvador=[1624,1610,1351,1343,1329,1387,1400,1650,1550,1300,1860,1200,1250,550,700,560,600,660,650,650];
Ethiopia=[2768,3756,3693,3875,4068,4500,5000,5000,5500,6000,6125,6320,6500,6345,6475,6510,6943,7055,7250,7350];
Guatemala=[4537,3503,3775,3644,3802,3700,4040,4100,3970,4000,3950,4400,4000,3500,3125,3125,3400,3600,3700,3500];
Haiti=[420,403,374,350,340,331,337,335,360,275,350,350,325,325,325,300,300,150,150,125];
Honduras=[2821,3098,2496,2968,2575,3204,3460,3642,3225,3550,3975,5600,4725,4400,5100,5300,7510,7600,7200,6500];
India=[1740,2350,2048,2073,1725,1570,1660,1540,1325,1575,1570,1690,1643,1703,1630,1725,1583,1583,1470,1250];
Indonesia=[455,495,550,650,950,1050,900,800,1300,1500,1375,1300,2000,1900,1270,1500,1300,1000,1200,1250];
Jamaica=[37,31,37,37,21,34,30,35,31,28,23,20,25,31,27,27,16,17,15,10];
Kenya=[862,867,924,845,754,805,876,750,900,900,710,750,660,850,750,750,815,715,775,775];
Madagascar=[21,9,25,27,25,30,30,30,30,25,25,25,25,25,25,25,25,25,30,25];
Malawi=[63,60,42,48,21,24,17,25,15,20,24,21,25,25,21,23,16,12,11,10];
Mexico=[4600,4000,4200,4200,3900,4000,4300,4100,4300,3950,3800,4100,4450,3750,2980,2125,3100,3800,3600,4350];
Nicaragua=[1610,895,1200,1547,1130,1718,1300,1850,1650,1925,1740,2100,1925,2000,2100,2100,2600,2700,2600,2300];
Panama=[170,160,140,172,90,150,150,150,100,100,125,100,100,95,120,85,95,75,75,75];
PapuaNewGuinea=[988,1009,1031,755,950,1200,780,925,1000,1050,825,1350,775,815,760,700,1065,760,825,850];
Paraguay=[46,20,26,52,26,35,20,0,0,0,0,0,0,0,0,0,0,0,0,0];
Peru=[2824,2550,2760,2870,3550,2420,4400,2800,4000,3300,4100,5200,4300,4250,2900,3500,4225,4375,4400,4500];
Philippines=[40,40,38,35,35,35,35,35,35,20,35,30,30,25,25,25,25,25,25,25];
Rwanda=[273,296,320,266,317,340,400,230,340,240,317,245,260,250,240,300,230,275,275,300];
SriLanka=[10,10,10,10,10,10,9,10,10,0,0,0,0,0,0,0,0,0,0,0];
Tanzania=[628,449,478,379,570,460,590,490,650,400,600,365,610,450,600,600,550,600,700,650];
Uganda=[355,415,450,524,545,625,579,508,650,818,644,875,800,850,750,750,1200,750,800,750];
UnitedStatesofAmerica=[183,163,163,186,140,161,152,136,125,53,53,46,42,51,45,40,33,32,32,35];
Venezuela	=[1027,1065,920,825,800,820,862,996,1000,725,625,700,730,700,460,500,530,575,585,600];
Vietnam	=[117,166,250,266,383,335,500,400,480,450,650,800,900,1175,1050,1100,1100,1026,1050,1120];
Yemen	=[189,198,192,193,171,189,200,150,150,150,145,135,140,135,130,130,125,125,125,100];
Zambia=[94,100,119,100,110,103,56,60,39,27,0,0,0,0,0,0,0,0,0,0];
Zimbabwe=[109,121,110,92,120,66,45,31,22,0,0,0,0,0,0,0,0,0,0,0];


var colors = Highcharts.getOptions().colors;

var myStreanChart = Highcharts.chart('container_arabica', {
  
    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },
    
    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'left',
        text: 'Arabica Coffee Production'
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: 'Source: <a href="https://apps.fas.usda.gov/psdonline/app/index.html">USDA Foreign Agricultural Service</a>'
    },

    xAxis: {
        maxPadding: 0,
        type: 'years',
        crosshair: true,
        categories: Market_Year,
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },
/*
    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Cancelled<br>during<br>World War II'
        }, {
            point: {
                x: 18,
                xAxis: 0,
                y: 90,
                yAxis: 0
            },
            text: 'Soviet Union fell,<br>Germany united'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],
*/
    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [ {
        name: "Bolivia",
        data: Bolivia
    }, {
        name: "Brazil",
        data: Brazil
    }, {
        name: "Burundi",
        data: Burundi
    }, {
        name: "Colombia",
        data: Colombia
    }, {
        name: "Cost rica",
        data: Costa_Rica
    }, {
        name: "Cuba",
        data: cuba        
    },  
    {
        name: "Democratic Republic",
        data: Democratic_Republic
    }, 
      {
        name: "Ecuador",
        data: Ecuador
      },
      {
        name: "Ethiopia",
        data: Ethiopia
      },
      {
        name: "El Salvador",
        data: ElSalvador
      
      }, {
        name: "Guatemala",
        data: Guatemala
    }, {
        name: "Haiti",
        data: Haiti
      }, 
      {
        name: "Honduras",
        data: Honduras
      }, 
      {
        name: "India",
        data: India
      }, 
      {
        name: "Indonesia",
        data: Indonesia
      }
      , 
      {
        name: "Jamaica",
        data: Jamaica
      }, 
      {
        name: "Kenya",
        data: Kenya
      }, 
      {
        name: "Madagascar",
        data: Madagascar
      }, 
      {
        name: "Malawi",
        data: Malawi
      }, 
      {
        name: "Mexico",
        data: Mexico
      }, 
      {
        name: "Nicaragua",
        data: Nicaragua
      }, 
      {
        name: "Panama",
        data: Panama
      }, 
      {
        name: "PapuaNewGuinea",
        data: PapuaNewGuinea
      }, 
      {
        name: "Paraguay",
        data: Paraguay
      }, 
      {
        name: "Peru",
        data: Indonesia
      }, 
      {
        name: "Philippines",
        data: Philippines
      }, 
      {
        name: "Rwanda",
        data: Rwanda
      }, 
      {
        name: "SriLanka",
        data: SriLanka
      }, 
      {
        name: "Tanzania",
        data: Tanzania
      }, 
      {
        name: "Uganda",
        data: Uganda
      }, 
      {
        name: "United States of America",
        data: UnitedStatesofAmerica
      }, 
      {
        name: "Venezuela",
        data: Venezuela
      }, 
      {
        name: "Vietnam",
        data: Vietnam
      }, 
      {
        name: "Yemen",
        data: Yemen
      }, 
      {
        name: "Zambia",
        data: Zambia
      }, 
      {
        name: "Zimbabwe",
        data: Zimbabwe
      }
      
  ],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
});