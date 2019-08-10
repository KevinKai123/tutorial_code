var graph = [4, 18, 3, 8, 13, 19, 1, 6, 5, 14, 7, 11, 15, 2, 9, 20];

function drawBar(height, margin){
  
  var barHeight = height * 20;
  var graphHeight = 500 - barHeight;
  
  var div = document.createElement("div");
  
  div.style.position = 'absolute';
  div.style.width = '40px';
  div.style.height = barHeight + "px";
  div.style.background = 'green';
  div.style.margin = graphHeight+'px '+margin+'px 0px '+margin+'px';
  
  document.querySelector('#grahicSort').appendChild(div);
  
}

function refresh(){
  clearGraph();
  graph = [4, 18, 3, 8, 13, 19, 1, 6, 5, 14, 7, 11, 15, 2, 9, 20, 12, 10];
  var margin = 0;
  graph.forEach(function(item){
    drawBar(item, margin);
    margin += 50;
 })
};

function clearGraph(){
  document.querySelector('#grahicSort').innerHTML = '';
}

function sort(){
  clearGraph();
  
  var margin = 0;
  var i = 0;
  var sortArray = graph.sort(function(a,b){return b-a});
 
  var interval = setInterval(function(){
    drawBar(graph[i], margin);
    i++;
    margin += 50;
  }, 1000)
  
  if(i > graph.length){
     clearInterval(interval)
     }
  
}

