var Market_Year_c=[];//0
var Angola_c=[]; //2
var Brazil_c=[]; //6
var Cameroon_c=[]; 
var CentralAfricanRepublic_c=[]; //15
var cuba_c=[];//17
var Democratic_Republic_c=[];
var Ecuador_c=[];
var Ghana_c=[];
var Guatemala_c=[];
var Guinea_c=[];
var India_c=[];
var Indonesia_c=[];
var IvoryCoast_c=[];
var Laos_c=[];
var Liberia_c=[];
var Madagascar_c=[];
var Malaysia_c=[];
var Mexico_c=[];
var Nigeria_c=[];
var PapuaNewGuinea_c=[];
var Philippines_c=[];	
var SierraLeone_c=[];	
var Tanzania_c=[];
var Thailand_c=[];	
var Togo_c=[];	
var Uganda_c	=[];
var Vietnam_c	=[];


document.addEventListener('DOMContentLoaded', function () {
 fetch("robusta_pivot.csv",{method: 'GET'})
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

    console.log(data[0][0]);//Market_Year_c
    
    //need coloum of data
    //Market_Year_c", 1"Algeria",2 "Angola_c",3 "Argentina", 4"Australia", 5"Benin",6 "Bolivia",7 "Brazil_c", 8"Burundi", 9"Cameroon_c", 10"Canada", 11"Central African Republic",12 "Chile",13 "China",14 "Colombia", 15"Costa Rica", 16"Croatia", 17"cuba_c",18 "Democratic Republic of the Congo", "Dominican Republic", "Ecuador_c", "Egypt", "El Salvador", "Equatorial Guinea_c", "Ethiopia", "European Union", "Gabon", "Ghana_c", "Guatemala_c", "Guinea_c", "Guyana", "Haiti", "Honduras", "India_c", "Indonesia_c", "Iran", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Laos_c", "Liberia_c", "Madagascar_c", "Malawi", "Malaysia_c", "Mexico_c", "Morocco", "New Caledonia", "New Zealand", "Nicaragua", "Nigeria_c", "Norway", "Panama", "Papua New Guinea_c", "Paraguay", "Peru", "Philippines_c", "Republic of Congo", "Republic of Serbia", "Russia", "Rwanda", "Sierra Leone", "Singapore", "South Africa", "South Korea", "Sri Lanka", "Switzerland", "Taiwan", "Tanzania", "Thailand_c", "Togo_c", "Trinidad and Tobago", "Turkey", "Uganda_c", "Ukraine", "United States of America", "Venezuela", "Vietnam_c", "Yemen", "Zambia", "Zimbabwe"
    
    for(var j=1;j<data.length;j++){
        //console.log(data[j][0]);
        Market_Year_c.push(data[j][0]);
        //if(data[j][2]!='') Angola_c.push(data[j][2]); else Angola_c.push('');
        Angola_c.push(data[j][1]);    
        Brazil_c.push(parseInt(data[j][2]));
        Cameroon_c.push(parseInt(data[j][3]));
        CentralAfricanRepublic_c.push(parseInt(data[j][4]));
        Democratic_Republic_c.push(parseInt(data[j][5]));
        Ecuador_c.push(parseInt(data[j][6]));
        Ghana_c.push(parseInt(data[j][7]));
        Guatemala_c.push(parseInt(data[j][8]));
        Guinea_c.push(parseInt(data[j][9]));
        India_c.push(parseInt(data[j][10]));
        Indonesia_c.push(parseInt(data[j][11]));
        IvoryCoast_c.push(parseInt(data[j][12]));
        Laos_c.push(parseInt(data[j][13]));
        Liberia_c.push(parseInt(data[j][14]));
        Madagascar_c.push(parseInt(data[j][15]));
        Malaysia_c.push(parseInt(data[j][16]));
        Mexico_c.push(parseInt(data[j][17]));
        Nigeria_c.push(parseInt(data[j][18]));
        PapuaNewGuinea_c.push(parseInt(data[j][19]));
        Philippines_c.push(parseInt(data[j][20]));	
        SierraLeone_c.push(parseInt(data[j][21]));
        Tanzania_c.push(parseInt(data[j][22]));	
        Thailand_c.push(parseInt(data[j][23]));	
        Togo_c.push(parseInt(data[j][24]));	
        Uganda_c.push(parseInt(data[j][26]));	
        Vietnam_c.push(parseInt(data[j][27]));	
         
    
    }//for
 
    console.log("Market years: "+Market_Year_c);
   /*
    console.log("Angola_c :"+Angola_c);
    console.log("Brazil_c: "+Brazil_c);
    console.log("CentralAfricanRepublic_c: "+CentralAfricanRepublic_c);
    console.log("cuba_c: "+cuba_c);
    console.log("Democratic_Republic_c_c:"+Democratic_Republic_c);
    console.log("Ghana_c:"+Ghana_c);
    console.log("Guatemala_c:"+Guatemala_c);
    console.log("Guinea_c:"+Guinea_c);
    console.log("India_c:"+India_c);
    console.log("Indonesia_c:"+Indonesia_c);
    console.log("IvoryCoast_c:"+IvoryCoast_c);
    console.log("Laos_c:"+Laos_c);
    console.log("Madagascar_c:"+Madagascar_c);
    console.log("Liberia_c:"+Liberia_c);
    console.log("Mexico_c:"+Mexico_c);
    console.log("Malaysia_c:"+Malaysia_c);
    console.log("Nigeria_c:"+Nigeria_c);
    console.log("PapuaNewGuinea_c:"+PapuaNewGuinea_c);
    console.log("Nigeria_c:"+Nigeria_c);	
    console.log("Philippines_c:"+Philippines_c);	
    console.log("SierraLeone_c:"+SierraLeone_c);	
    console.log("Thailand_c	:"+Thailand_c);
    console.log("Tanzania_c	:"+Tanzania_c);
    console.log("Togo_c	:"+Togo_c);
    console.log("Uganda_c:"+Uganda_c);	
    console.log("Vietnam_c:"+Vietnam_c);*/
    
})//fetch then
.catch(err => console.log(err));

Market_Year_c=[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
Angola_c=[50,21,57,38,15,25,35,30,30,30,25,35,29,31,30,25,20,19,20,20];
Brazil_c=[7500,10700,12000,9600,9300,10100,10700,11450,12800,11800,12700,14500,15500,15400,17000,13300,10500,12400,16600,18100];
CentralAfricanRepublic_c=[122,75,92,25,20,21,45,50,10,30,27,10,7,6,6,8,5,3,2,0];
cuba_c=[88,45,55,58,54,100,115,100,105,100,90,80,70,70,70,70,75,70,75];
Democratic_Republic_c=[435,455,351,491,310,390,465,545,500,500,500,475,275,225,225,225,125,125,125];
Ghana_c=[76,13,29,17,13,17,29,27,19,30,57,70,30,6,4,1,1,1,0,0];
Guatemala_c=[27,27,27,27,15,15,10,10,10,10,10,10,10,15,60,170,170,180,100,100];
Guinea_c=[368,236,328,366,316,525,400,250,400,445,325,425,165,50,150,280,200,190,160,150];
India_c=[3280,2660,2540,2435,2870,3000,3140,2825,3050,3250,3465,3540,3660,3372,3810,4075,3617,3683,3700,3910];
Indonesia_c=[6040,5665,6250,6600,7500,8400,6600,7200,8700,9000,7950,6670,9900,10000,9200,10600,9300,9400,9400,9450];
IvoryCoast_c=[5100,3568,1825,2689,1801,2062,2447,2098,1853,2350,1600,1600,1750,1675,1400,1600,1090,1250,2000,1800];
Laos_c=[392,430,537,464,385,300,420,355,350,390,500,450,460,475,475,475,410,450,460,475];
Liberia_c=[14,12,63,66,68,71,53,25,7,2,4,5,5,1,3,5,10,11,10,10];
Madagascar_c=[345,138,420,408,497,562,552,525,500,450,525,525,500,525,475,230,270,225,175,160];
Malaysia_c=[700,800,950,1000,1000,700,500,770,975,1000,1100,1450,1400,1500,2100,2200,2100,2100,2100,2000];
Mexico_c=[200,200,150,100,100,200,200,250,250,200,200,200,200,200,200,175,200,200,200,200];
Nigeria_c=[48,44,50,36,35,59,51,35,30,30,30,40,30,20,20,20,10,5,0,0];
PapuaNewGuinea_c=[53,54,54,58,50,65,30,45,35,35,40,50,50,40,50,50,50,50,50,50];
Philippines_c=[670,665,660,630,640,650,645,425,325,225,425,425,425,425,450,400,450,425,400,425];
SierraLeone_c=[53,79,42,34,15,60,31,42,87,90,45,90,70,45,65,60,60,50,50,50];
Tanzania_c=[181,175,346,233,500,150,325,250,500,200,450,200,570,350,550,500,500,550,600,600];
Thailand_c=[1692,715,732,827,884,1000,850,900,800,900,1000,1000,1000,1000,1000,700,800,700,650,700];
Togo_c=[197,112,68,144,166,140,180,255,185,436,615,560,200,165,175,120,80,130,125,125];
Uganda_c=[2742,2850,2306,2221,2149,1550,2326,2982,2610,2052,2568,2200,2800,3000,2800,2900,4000,3600,4000,3500];
Vietnam_c	=[15216,12667,10917,14734,14117,16000,19000,17600,16500,18050,18765,25200,25600,28658,26350,27830,25600,28274,29350,31105];

var colors = Highcharts.getOptions().colors;

var myStreanChart = Highcharts.chart('container_robusta', {
  
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
        text: 'Robusta Coffee Production'
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
        categories: Market_Year_c,
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
        name: "Angola",
        data: Angola_c
    }, {
        name: "Brazil",
        data: Brazil_c
    }, {
        name: "Central African Republic",
        data: CentralAfricanRepublic_c
    }, {
        name: "cuba",
        data: cuba_c
    }, {
        name: "Democratic Republic",
        data: Democratic_Republic_c
    }, {
        name: "Ghana",
        data: Ghana_c        
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
        data: Guatemala_c
    }, {
        name: "Guinea",
        data: Guinea_c
      }, 
      {
        name: "India",
        data: India_c
      }, 

      {
        name: "Indonesia",
        data: Indonesia_c
      }
      , 
      {
        name: "Ivory Coast",
        data: IvoryCoast_c
      }, 
      {
        name: "Laos",
        data: Laos_c
      }, 
      {
        name: "Liberia",
        data: Liberia_c
      }, 
      {
        name: "Madagascar",
        data: Madagascar_c
      }, 
      {
        name: "Malaysia",
        data: Malaysia_c
      }, 
      {
        name: "Mexico",
        data: Mexico_c
      }, 
      {
        name: "Nigeria",
        data: Nigeria_c
      }, 
      {
        name: "Papua New Guinea",
        data: PapuaNewGuinea_c
      },
      {
        name: "Philippines",
        data: Philippines_c
      }, 
      {
        name: "Sierra Leone",
        data: SierraLeone_c
      },
      {
        name: "Tanzania",
        data: Tanzania
      },
      {
        name: "Thailand",
        data: Thailand_c
      },
      {
        name: "Togo",
        data: Togo_c
      }, 
      {
        name: "Uganda",
        data: Uganda_c
      },
      {
        name: "Vietnam",
        data: Vietnam_c
      }, 
       
      
      
  ],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
});