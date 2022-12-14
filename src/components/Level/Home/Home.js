import React, {useState, useEffect} from "react";
import { select, range } from 'd3';
import Editor from "../../Editor";
import Level from "../Level";
export default function Home()  {
    
    useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let n = 25;
    let t = 1;
    let svg = select('body')
      .append("g")
      .append('svg')
      .attr('width', width)
      .attr("z-index", -1)
      .attr('height', height);
    setInterval(() => {
      let data = range(n).map((d, i) => ({
        x: Math.cos(i * 100 + t) * 200 + width / 2,
        y: Math.cos(i * 10 + t) * 200 + height / 2,
        color: `rgb(${Math.cos(i * 80) * 255}, ${
          Math.cos(i * 100) * 255
        }, ${Math.cos(i * 100) * 255})`,
        r: 0.6 * i,
      }));
      svg
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.r)
        .attr('fill', (d) => d.color);
      t += 0.01;
    }, 1000 / 60);
    }, [])
    
    // let lang = document.querySelectorAll(".lang");
    //   lang.forEach((element, index) => {
    //     let time  = 1300 * (index + 1);
    //     setTimeout(() => element.classList.add("active"), time);
    //    }); 
    // console.log(lang)
   
  return (
    
    <div style={{textAlign: "center"}}>
        <div className="lang active">
            D3 or Data Driven Documents D3.js is a JavaScript library for manipulating documents based on data. 
        </div>
        <br/>
        <div className="lang active">
            D3 helps you bring data to life using HTML, SVG, and CSS. 
        </div>
        <br/> 
        <div className="lang active">  
            D3’s emphasis on web standards gives you the full capabilities of modern browsers 
        </div>
        <br/>
        <div className="lang active">
        without tying yourself to a proprietary framework, combining powerful visualization components 
        </div>
        <br/>
        <div className="lang active">
        and a data-driven approach to DOM manipulation.
        </div>
    </div>

    
  );
  
}
