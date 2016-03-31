var xml;
var all = [];
var household = [];
var thousands = [];
var percent = [];
var insecurity = [];
var trend = [];
var low = [];
var very = [];

//bar charts
$(document).ready(function loadDataBar(){
  console.log("doc ready");
  loadData();
  $('#example').DataTable({
    "ajax": 'js/table.json'
  });
});

function loadData(){
  $.ajax({
    url: '../project_3/data/households.xml',
    type: 'GET',
    data: 'xml',
    success: parseBarChart
  })

  $.ajax({
    url: '../project_3/data/trends.xml',
    type: 'GET',
    data: 'xml',
    success: parseLineChart
  })
};

function parseBarChart(xml){
  console.log(xml);
  $(xml).find("household").each(function(index){
    var $household = $(this);
    var type = $household.attr("type");
    thousands.push(parseFloat($(this).find("sevens").text()));
    percent.push(parseFloat($(this).find("percent").text()));
  });
  buildBar()

};



function buildBar() {
  console.log(percent)
    $('#chart1').highcharts({

        chart: {
            type: 'column'
        },
        title: {
            text: 'Prevalence of Food Insecurity in Selected Households (2014)'
        },
        subtitle: {
            text: 'Source: <a href="http://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-us/key-statistics-graphics.aspx">USDA</a>'
        },
        xAxis: {
            type: 'category',
            categories: ['All households', 'With children < 18', 'With children < 6', 'Married-couple families', 'Female head, no spouse', 'Male head, no spouse', 'Other household with child', 'With no children < 18', 'More than one adult', 'Women living alone', 'Men living alone', 'With elderly', 'Elderly living alone'],
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                },
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Food Insecure (percent)'
            }
        },
        plotOptions: {
          column: {
            colorByPoint: true
          }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Rate in 2014: <b>{point.y:.1f}%</b>'
        },
        series: [{
            name: 'Household Type',
            data: percent,
            colors: ['#FF7A62', '#7F1D0B', '#7F1D0B', '#FF7A62', '#7F1D0B', '#7F1D0B', '#7F1D0B', '#FF7A62', '#FF7A62', '#FF7A62', '#FF7A62', '#FF7A62', '#FF7A62'],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });


};

function parseLineChart(xml){
  console.log(xml);
  $(xml).find("trend").each(function(index){
    var $trend = $(this);
    var year = $trend.attr("year");
    low.push(parseFloat($(this).find("low").text()));
    very.push(parseFloat($(this).find("very").text()));
  })
  buildLine()
};

function buildLine() {
    $('#chart2').highcharts({
        chart: {
            type: 'line'
        },
        colors: ['#FF3A16', '#FF7A62'],
        title: {
            text: 'Prevalence Rates of Low and Very Low Food Security (1995-2014)'
        },
        subtitle: {
            text: 'Source: <a href="http://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-us/key-statistics-graphics.aspx">USDA</a>'
        },
        xAxis: {
            categories: ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Food Insecurity (percent)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Low Food Security',
            data: low
        }, {
            name: 'Very Low Food Security',
            data: very
        }]
    });
};
