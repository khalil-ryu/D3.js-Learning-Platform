import React, {useState, useEffect} from "react";
import {csv, select, scaleLinear, extent, axisLeft, axisBottom } from "d3";
import Editor from "../../Editor";
import Level from "../Level";
export default function Level3()  {
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const[srcDoc, setSrcDoc] = useState(``);

  const [js, setJs] = useState(`const data = range(n + Math.sin(t) * 5).map(
    (d,i) => ({
      // find out the exact coordinates
      x: ,
      y: ,
      r: ,
    })
  );`);
  useEffect(() => {
    const csvUrl = [
        'https://gist.githubusercontent.com/',
        'curran/', // User
        'a08a1080b88344b0c8a7/', // Id of the Gist
        'raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/', // commit
        'iris.csv', // File name
      ].join('');
      const parseRow = (d) => {
        d.sepal_length = +d.sepal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_length = +d.petal_length;
        d.petal_width = +d.petal_width;
        return d;
      };
      const xValue = (d) => d.petal_length;
      const yValue = (d) => d.sepal_length;
      const margin = {
        top: 20,
        right: 20,
        bottom: 40,
        left: 50,
      };
      const radius = 5;
      const svg = select('body')
        .append('svg')
        .attr('width', width/2)
        .attr('height', height/2);
    
      const main = async () => {
        const data = await csv(csvUrl, parseRow);
    
        const x = scaleLinear()
          .domain(extent(data, xValue))
          .range([margin.left, width/2 - margin.right]);
    
        const y = scaleLinear()
          .domain(extent(data, yValue))
          .range([height/2 - margin.bottom, margin.top]);
    
        const marks = data.map((d) => ({
          x: x(xValue(d)),
          y: y(yValue(d)),
        }));
    
        svg
          .selectAll('circle')
          .data(marks)
          .join('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', radius);
    
        svg
          .append('g')
          .attr('transform', `translate(${margin.left},0)`)
          .call(axisLeft(y));
    
        svg
          .append('g')
          .attr(
            'transform',
            `translate(0,${height/2 - margin.bottom})`
          )
          .call(axisBottom(x));
      };
      main();
  }, [])
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body></body>
        <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [js]);


  return (
    <>
    <div className="lang active">
        Hello warrior, time to learn D3.js, let's start with a simple challenge!
        <br></br>
        use the range function from d3 to reproduce the same output.   
    </div>
    <div className="mainContainer">
      <div className="left-pane">
        <Editor
          language="javascript"
          displayName="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="right-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    </>
  );
}
