import React, {useState, useEffect} from "react";
import { select, range } from 'd3';
import Editor from "../../Editor";
import "./level1.css";
import Level from "../Level";
export default function Level1()  {
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
  let t = 0;
  setInterval(() => {
    let n = 20;
    const data = range(n + Math.sin(t) * 5).map(
      (d,i) => ({
        // correct the coordinates
        x: i * 40 + 50,
        y: 250 + Math.sin(i * 10 + t) * 200,
        r: 15 + Math.sin(i * 0.5 + t) * 10,
      })
    );
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', (d) => d.r)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', (d) => d.color);
    t += 0.01;
  }, 1000 / 60);`);
  const[srcDoc, setSrcDoc] = useState(``);
  useEffect(() => {
    const svg = select('body')
  .append('svg')
  .attr('width', width/2)
  .attr('height', height);
  let t = 0;
  setInterval(() => {
    let n = 20;
    const data = range(n + Math.sin(t) * 5).map(
      (d,i) => ({
        x: i * 40 + 50,
        y: 250 + Math.sin(i * 0.5 + t) * 200,
        r: 15 + Math.sin(i * 0.5 + t) * 10,
        color: `rgb(${i/5 * 255}, ${i/60 * 255}, ${i/20 * 255})`,
      })
    );
    svg
      .selectAll('circle')
      .data(data)
      .join('circle') // returns the merged selection of enter and update
      .attr('r', (d) => d.r)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', (d) => d.color);
    t += 0.01;
  }, 1000 / 60);
  }, [])
  

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
