(function() {

    var width = 800;
    var height = 500;
    var margin = ({top: 20, right: 0, bottom: 30, left: 40});
    var data = [
      {name: 'Object 1', value: 10},
      {name: 'Object 2', value: 8},
      {name: 'Object 3', value: 8},
      {name: 'Object 4', value: 80},
      {name: 'Object 5', value: 2}
    ]
  var x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  var y= d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

  var yAxis = function(g){
    g.attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select(".domain").remove())
  }

  var xAxis = function(g){
    g.attr("transform", `translate(0,${height - margin.bottom})`)
   .call(d3.axisBottom(x).tickSizeOuter(0))
  }
  function displaygraph(data) {


    const svg = d3.select("#d3")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  const bar = svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
      .style("mix-blend-mode", "multiply")
      .attr("x", d => x(d.name))
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value))
      .attr("width", x.bandwidth());

  const gx = svg.append("g")
      .call(xAxis);

  const gy = svg.append("g")
      .call(yAxis);
  }

  // Add your JS here
  window.addEventListener('load', function() {

    displaygraph(data)

  });
})();
