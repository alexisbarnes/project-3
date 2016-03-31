var county = [];
var childrate = [];
var individuals = [];
var district = [];
var childDisRate = [];
var Disindividuals = [];
var povertyrate = [];

$(document).ready(function loadDataMaps(){
  console.log("county map");
  loadMaps();
});

function loadMaps(){
  $.ajax({
    url: '../project_3/data/childpoverty.xml',
    type: 'GET',
    data: 'xml',
    success: parsePoverty
  })

  $.ajax({
    url: '../project_3/data/CAchild_mealgap.xml',
    type: 'GET',
    data: 'xml',
    success: parseCountyMap
  })

  $.ajax({
    url: '../project_3/data/CAchild_districts.xml',
    type: 'GET',
    data: 'xml',
    success: parseDistrictMap
  })
};

function parsePoverty(xml){
  console.log(xml);
  $(xml).find("county").each(function(index){
    var $county = $(this);
    var name = $county.attr("name");
    povertyrate.push(parseFloat($(this).find("rate").text()));
  })
  buildMap3();
}

function parseCountyMap(xml){
  console.log(xml);
  $(xml).find("county").each(function(index){
    var $county = $(this);
    var name = $county.attr("name");
    childrate.push(parseFloat($(this).find("child-rate").text()));
    individuals.push(parseFloat($(this).find("individuals").text()));
  })
  buildMap1();
}

function parseDistrictMap(xml){
  console.log(xml);
  $(xml).find("district").each(function(index){
    var $district = $(this);
    var number = $district.attr("number");
    childDisRate.push(parseFloat($(this).find("child-rate").text()));
    Disindividuals.push(parseFloat($(this).find("individuals").text()));
  })
  buildMap2();
};

function buildMap1() {

  console.log("maps are here");

// Prepare demo data
var data = [
    {
        "hc-key": "us-ca-083",
        "value": 21420
    },
    {
        "hc-key": "us-ca-111",
        "value": 43470
    },
    {
        "hc-key": "us-ca-071",
        "value": 145320
    },
    {
        "hc-key": "us-ca-115",
        "value": 6460
    },
    {
        "hc-key": "us-ca-101",
        "value": 7650
    },
    {
        "hc-key": "us-ca-031",
        "value": 12300
    },
    {
        "hc-key": "us-ca-053",
        "value": 28230
    },
    {
        "hc-key": "us-ca-057",
        "value": 4350
    },
    {
        "hc-key": "us-ca-059",
        "value": 151310
    },
    {
        "hc-key": "us-ca-065",
        "value": 148520
    },
    {
        "hc-key": "us-ca-073",
        "value": 161680
    },
    {
        "hc-key": "us-ca-041",
        "value": 9250
    },
    {
        "hc-key": "us-ca-075",
        "value": 21830
    },
    {
        "hc-key": "us-ca-095",
        "value": 22680
    },
    {
        "hc-key": "us-ca-097",
        "value": 22420
    },
    {
        "hc-key": "us-ca-055",
        "value": 6290
    },
    {
        "hc-key": "us-ca-013",
        "value": 51540
    },
    {
        "hc-key": "us-ca-009",
        "value": 1990
    },
    {
        "hc-key": "us-ca-077",
        "value": 54380
    },
    {
        "hc-key": "us-ca-035",
        "value": 1520
    },
    {
        "hc-key": "us-ca-091",
        "value": 160
    },
    {
        "hc-key": "us-ca-067",
        "value": 91650
    },
    {
        "hc-key": "us-ca-017",
        "value": 8600
    },
    {
        "hc-key": "us-ca-099",
        "value": 11280
    },
    {
        "hc-key": "us-ca-061",
        "value": 17880
    },
    {
        "hc-key": "us-ca-043",
        "value": 870
    },
    {
        "hc-key": "us-ca-063",
        "value": 1020
    },
    {
        "hc-key": "us-ca-049",
        "value": 44290
    },
    {
        "hc-key": "us-ca-089",
        "value": 11280
    },
    {
        "hc-key": "us-ca-109",
        "value": 2480
    },
    {
        "hc-key": "us-ca-039",
        "value": 12130
    },
    {
        "hc-key": "us-ca-003",
        "value": 1610
    },
    {
        "hc-key": "us-ca-069",
        "value": 3630
    },
    {
        "hc-key": "us-ca-047",
        "value": 25360
    },
    {
        "hc-key": "us-ca-079",
        "value": 10970
    },
    {
        "hc-key": "us-ca-011",
        "value": 1810
    },
    {
        "hc-key": "us-ca-007",
        "value": 12470
    },
    {
        "hc-key": "us-ca-081",
        "value": 28310
    },
    {
        "hc-key": "us-ca-087",
        "value": 12610
    },
    {
        "hc-key": "us-ca-085",
        "value": 83460
    },
    {
        "hc-key": "us-ca-029",
        "value": 72490
    },
    {
        "hc-key": "us-ca-005",
        "value": 1610
    },
    {
        "hc-key": "us-ca-113",
        "value": 10560
    },
    {
        "hc-key": "us-ca-033",
        "value": 4320
    },
    {
        "hc-key": "us-ca-045",
        "value": 5180
    },
    {
        "hc-key": "us-ca-103",
        "value": 4640
    },
    {
        "hc-key": "us-ca-023",
        "value": 7280
    },
    {
        "hc-key": "us-ca-093",
        "value": 2890
    },
    {
        "hc-key": "us-ca-027",
        "value": 920
    },
    {
        "hc-key": "us-ca-001",
        "value": 70680
    },
    {
        "hc-key": "us-ca-037",
        "value": 590910
    },
    {
        "hc-key": "us-ca-025",
        "value": 18000
    },
    {
        "hc-key": "us-ca-021",
        "value": 2090
    },
    {
        "hc-key": "us-ca-107",
        "value": 44290
    },
    {
        "hc-key": "us-ca-019",
        "value": 85200
    },
    {
        "hc-key": "us-ca-015",
        "value": 8600
    },
    {
        "hc-key": "us-ca-105",
        "value": 800
    },
    {
        "hc-key": "us-ca-051",
        "value": 630
    }
];

// Initiate the chart
$('#map1').highcharts('Map', {

    title : {
        text : 'Estimated Food Insecure Children Under 18 by County (2013)'
    },

    subtitle : {
        text : 'Source: <a href="http://www.feedingamerica.org/hunger-in-america/our-research/map-the-meal-gap/2013/CA_AllCounties_CDs_CFI_2013.pdf">Feeding America</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
      min: 0,
      max: 600000,
      minColor: '#FF7A62',
      maxColor: '#7F1D0B'
    },

    series : [{
        data : data,
        mapData: Highcharts.maps['countries/us/us-ca-all'],
        joinBy: 'hc-key',
        name: 'Estimated Food Insecure Children',
        states: {
            hover: {
                color: '#7F3D31'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});
};

function buildMap2() {

  var data = [
      {
          "hc-key": "us-ca-26",
          "value": 75400
      },
      {
          "hc-key": "us-ca-24",
          "value": 112350
      },
      {
          "hc-key": "us-ca-47",
          "value": 116610
      },
      {
          "hc-key": "us-ca-14",
          "value": 89340
      },
      {
          "hc-key": "us-ca-51",
          "value": 116450
      },
      {
          "hc-key": "us-ca-28",
          "value": 130880
      },
      {
          "hc-key": "us-ca-33",
          "value": 109450
      },
      {
          "hc-key": "us-ca-36",
          "value": 112160
      },
      {
          "hc-key": "us-ca-31",
          "value": 112520
      },
      {
          "hc-key": "us-ca-45",
          "value": 86350
      },
      {
          "hc-key": "us-ca-48",
          "value": 98650
      },
      {
          "hc-key": "us-ca-46",
          "value": 90030
      },
      {
          "hc-key": "us-ca-34",
          "value": 127220
      },
      {
          "hc-key": "us-ca-40",
          "value": 96130
      },
      {
          "hc-key": "us-ca-30",
          "value": 108290
      },
      {
          "hc-key": "us-ca-12",
          "value": 129650
      },
      {
          "hc-key": "us-ca-18",
          "value": 88010
      },
      {
          "hc-key": "us-ca-13",
          "value": 147440
      },
      {
          "hc-key": "us-ca-20",
          "value": 89570
      },
      {
          "hc-key": "us-ca-16",
          "value": 138090
      },
      {
          "hc-key": "us-ca-37",
          "value": 141810
      },
      {
          "hc-key": "us-ca-43",
          "value": 140020
      },
      {
          "hc-key": "us-ca-32",
          "value": 81050
      },
      {
          "hc-key": "us-ca-35",
          "value": 83660
      },
      {
          "hc-key": "us-ca-42",
          "value": 97480
      },
      {
          "hc-key": "us-ca-44",
          "value": 111470
      },
      {
          "hc-key": "us-ca-09",
          "value": 122470
      },
      {
          "hc-key": "us-ca-15",
          "value": 92680
      },
      {
          "hc-key": "us-ca-10",
          "value": 120380
      },
      {
          "hc-key": "us-ca-41",
          "value": 109300
      },
      {
          "hc-key": "us-ca-08",
          "value": 120810
      },
      {
          "hc-key": "us-ca-27",
          "value": 103060
      },
      {
          "hc-key": "us-ca-17",
          "value": 100720
      },
      {
          "hc-key": "us-ca-53",
          "value": 112630
      },
      {
          "hc-key": "us-ca-52",
          "value": 104270
      },
      {
          "hc-key": "us-ca-49",
          "value": 99960
      },
      {
          "hc-key": "us-ca-25",
          "value": 93950
      },
      {
          "hc-key": "us-ca-07",
          "value": 126480
      },
      {
          "hc-key": "us-ca-06",
          "value": 156260
      },
      {
          "hc-key": "us-ca-04",
          "value": 109720
      },
      {
          "hc-key": "us-ca-39",
          "value": 80830
      },
      {
          "hc-key": "us-ca-38",
          "value": 63830
      },
      {
          "hc-key": "us-ca-05",
          "value": 107250
      },
      {
          "hc-key": "us-ca-02",
          "value": 109110
      },
      {
          "hc-key": "us-ca-11",
          "value": 106470
      },
      {
          "hc-key": "us-ca-03",
          "value": 120620
      },
      {
          "hc-key": "us-ca-23",
          "value": 114860
      },
      {
          "hc-key": "us-ca-50",
          "value": 101800
      },
      {
          "hc-key": "us-ca-01",
          "value": 126750
      },
      {
          "hc-key": "us-ca-21",
          "value": 110260
      },
      {
          "hc-key": "us-ca-22",
          "value": 112350
      },
      {
          "hc-key": "us-ca-19",
          "value": 93740
      },
      {
          "hc-key": "us-ca-29",
          "value": 97620
      }
  ];

  // Initiate the chart
  $('#map2').highcharts('Map', {

      title : {
          text : 'Estimated Food Insecure Children Under 18 by Congressional District (2014)'
      },

      subtitle : {
          text : 'Source: <a href="http://www.feedingamerica.org/hunger-in-america/our-research/map-the-meal-gap/2013/CA_AllCounties_CDs_CFI_2013.pdf">Feeding America</a>'
      },

      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
        min: 70000,
        max: 200000,
        minColor: '#FF7A62',
        maxColor: '#7F1D0B'
      },

      series : [{
          data : data,
          mapData: Highcharts.maps['countries/us/custom/us-ca-congress-113'],
          joinBy: 'hc-key',
          name: 'Estimated Food Insecure Children',
          states: {
              hover: {
                  color: '#7F3D31'
              }
          },
          dataLabels: {
              enabled: false,
              format: '{point.name}'
          }
      }]
  });
};

function buildMap3() {

  console.log("maps are here");

  // Prepare demo data
      var data = [
          {
              "hc-key": "us-ca-083",
              "value": 19.86
          },
          {
              "hc-key": "us-ca-111",
              "value": 17.71
          },
          {
              "hc-key": "us-ca-071",
              "value": 26.99
          },
          {
              "hc-key": "us-ca-115",
              "value": 27.01
          },
          {
              "hc-key": "us-ca-101",
              "value": 27.01
          },
          {
              "hc-key": "us-ca-031",
              "value": 30.21
          },
          {
              "hc-key": "us-ca-053",
              "value": 26.56
          },
          {
              "hc-key": "us-ca-057",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-059",
              "value": 18.21
          },
          {
              "hc-key": "us-ca-065",
              "value": 23.79
          },
          {
              "hc-key": "us-ca-073",
              "value": 19.69
          },
          {
              "hc-key": "us-ca-041",
              "value": 9.02
          },
          {
              "hc-key": "us-ca-075",
              "value": 14.47
          },
          {
              "hc-key": "us-ca-095",
              "value": 19.17
          },
          {
              "hc-key": "us-ca-097",
              "value": 14.23
          },
          {
              "hc-key": "us-ca-055",
              "value": 12.48
          },
          {
              "hc-key": "us-ca-013",
              "value": 15.06
          },
          {
              "hc-key": "us-ca-009",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-077",
              "value": 25.39
          },
          {
              "hc-key": "us-ca-035",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-091",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-067",
              "value": 25.44
          },
          {
              "hc-key": "us-ca-017",
              "value": 12.75
          },
          {
              "hc-key": "us-ca-099",
              "value": 31.96
          },
          {
              "hc-key": "us-ca-061",
              "value": 10.69
          },
          {
              "hc-key": "us-ca-043",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-063",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-049",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-089",
              "value": 23.16
          },
          {
              "hc-key": "us-ca-109",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-039",
              "value": 34.90
          },
          {
              "hc-key": "us-ca-003",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-069",
              "value": 26.56
          },
          {
              "hc-key": "us-ca-047",
              "value": 37.83
          },
          {
              "hc-key": "us-ca-079",
              "value": 16.78
          },
          {
              "hc-key": "us-ca-011",
              "value": 25.15
          },
          {
              "hc-key": "us-ca-007",
              "value": 26.20
          },
          {
              "hc-key": "us-ca-081",
              "value": 9.92
          },
          {
              "hc-key": "us-ca-087",
              "value": 14.20
          },
          {
              "hc-key": "us-ca-085",
              "value": 12.72
          },
          {
              "hc-key": "us-ca-029",
              "value": 32.69
          },
          {
              "hc-key": "us-ca-005",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-113",
              "value": 18.87
          },
          {
              "hc-key": "us-ca-033",
              "value": 33.06
          },
          {
              "hc-key": "us-ca-045",
              "value": 33.06
          },
          {
              "hc-key": "us-ca-103",
              "value": 25.15
          },
          {
              "hc-key": "us-ca-023",
              "value": 23.19
          },
          {
              "hc-key": "us-ca-093",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-027",
              "value": 18.90
          },
          {
              "hc-key": "us-ca-001",
              "value": 16.21
          },
          {
              "hc-key": "us-ca-037",
              "value": 26.76
          },
          {
              "hc-key": "us-ca-025",
              "value": 29.23
          },
          {
              "hc-key": "us-ca-021",
              "value": 25.15
          },
          {
              "hc-key": "us-ca-107",
              "value": 38.77
          },
          {
              "hc-key": "us-ca-019",
              "value": 39.99
          },
          {
              "hc-key": "us-ca-015",
              "value": 24.06
          },
          {
              "hc-key": "us-ca-105",
              "value": 25.15
          },
          {
              "hc-key": "us-ca-051",
              "value": 18.90
          }
      ];


// Initiate the chart
$('#map3').highcharts('Map', {

    title : {
        text : 'Child Poverty Rate by County (2011-2013)'
    },

    subtitle : {
        text : 'Source: <a href="http://www.ppic.org/main/dataSet.asp?i=1399">Public Policy Institute of California</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0,
        max: 40,
        minColor: '#FF7A62',
        maxColor: '#7F1D0B'
    },

    series : [{
        data : data,
        mapData: Highcharts.maps['countries/us/us-ca-all'],
        joinBy: 'hc-key',
        name: 'Poverty Rate (%)',
        states: {
            hover: {
                color: '#7F3D31'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});
};
