  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      theme: "theme2",
      title:{
        text: "Chart Test"
      },
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMM",
        interval:1,
        intervalType: "month"
        
      },
      axisY:{
        includeZero: false
        
      },
      data: [
      {        
        type: "line",
        //lineThickness: 3,        
        dataPoints: [
        { x: new Date(2012, 00, 1), y: 1000 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
        { x: new Date(2012, 01, 2), y: 1500},
        { x: new Date(2012, 02, 3), y: 1200},
        { x: new Date(2012, 03, 4), y: 1600 },
        { x: new Date(2012, 04, 5), y: 1800 , indexLabel: "highest",markerColor: "red", markerType: "triangle"},
        { x: new Date(2012, 05, 6), y: 1300 },
        { x: new Date(2012, 06, 7), y: 1100 },
        { x: new Date(2012, 07, 8), y: 1300 },
        { x: new Date(2012, 08, 9), y: 1800 , indexLabel: "highest",markerColor: "red", markerType: "triangle"},
        { x: new Date(2012, 09, 10), y: 1200},
        { x: new Date(2012, 10, 11), y: 1500 },
        { x: new Date(2012, 11, 12), y: 1800 }
        
        ]
      }
      
      
      ]
    });

chart.render();
}