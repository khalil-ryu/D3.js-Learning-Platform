import React, {useState, useEffect} from "react";
import { select, range } from 'd3';
import Editor from "../../Editor";
import Level from "../Level";
export default function Level0()  {
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const [js, setJs] = useState(`
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const {select, range} = d3;
  const n = 20;
  const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
let data = range(n).map((i) => ({
  // correct the coordinates
  x: width / 2,
  y: height/ 2,
  r: 50,
}));
svg
  .selectAll('circle')
  // the data function is used to pass our data
  .data(data)
  // using the date we then start to append circles equal to the number of data
  .join('circle')
  // correct the attributes
  .attr("cx", (d) => d.r)
  .attr("cy", (d) => d.r)
  .attr("r", (d) => d.r)

  `);
  const[srcDoc, setSrcDoc] = useState(``);
  useEffect(() => {
    const n = 20;
    const svg = select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
    let data = range(n).map((i) => ({
        x: i * 100,
        y: height/ 2,
        r: 10,
    }));
    svg
    .selectAll('circle')
    .data(data)
    .join('circle')
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => d.r)

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
        use the range and selection from d3 to reproduce the expected output.
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
