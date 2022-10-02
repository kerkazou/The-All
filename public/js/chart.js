anychart.onDocumentReady(function () {

  // set the data
  var data = [
    { x: "Commentare", value: 223553265 },
    { x: "Avis", value: 38929319 }
  ];

  // create the chart
  var chart = anychart.pie();

  // set the chart title
  // chart.title("Statistque de WebSite");

  // add the data
  chart.data(data);

  // set legend position
  chart.legend().position("right");
  // set items layout
  chart.legend().itemsLayout("vertical");

  // display the chart in the container
  chart.container('container');
  chart.draw();

});