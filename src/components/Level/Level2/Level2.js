import React, {useState, useEffect} from "react";
import { select, range } from 'd3';
import Editor from "../../Editor";
import Level from "../Level";
export default function Level2()  {
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const [js, setJs] = useState(`
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const {select, range} = d3;
  const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
  let t = 1;
  setInterval(() => {
    let n = 20;
    let data = range(n).map((d, i) => ({
    x:
      Math.cos(i + t)*10 + width/2,
    y:
        Math.sin(i + t)*100 + height/2,
    r: 0.6 * i,
      }));
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      // correct the attributes
      .attr('cx', (d) => d.y)
      .attr('cy', (d) => d.r)
      .attr('r', (d) => d.x)
      .attr('fill', 'black');
    t += 0.01;
  }, 1000/60);`);
  const[srcDoc, setSrcDoc] = useState(``);
  useEffect(() => {
    const svg = select('body')
  .append('svg')
  .attr('width', width/2)
  .attr('height', height);
  let t = 1;
  setInterval(() => {
    let n = 20;
    let data = range(n).map((d, i) => ({
    x:
      Math.cos(i + t)*100 + width/4,
    y:
        Math.sin(i + t)*100 + height/4,
    r: 0.6 * i,
      }));
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.r)
      .attr('fill', 'black');
    t += 0.01;
  }, 1000/60);
  
  }, []);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body></body>
        <script src= "https://unpkg.com/d3@7.7.0/dist/d3.min.js"></script>
        <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [js]);


  return (
    <>
    <div className="lang active">
        it's time to learn the attr attribute of d3 selection element
        <br></br>
        figure out how to use them to get the expected output  
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
