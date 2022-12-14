import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Level from "./Level/Level";
import Home from "./Level/Home/Home";
import Level0 from "./Level/Level0/Level0";
import Level1 from "./Level/Level1/Level1";
import Level2 from "./Level/Level2/Level2";
import Level3 from "./Level/Level3/Level3";
// import Level4 from "./Level/Level4/Level4";
// import Level5 from "./Level/Level5/Level5";
// import Level6 from "./Level/Level6/Level6";

function App() {
    return (
    <>
        <Level/>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/level0" element={<Level0/>} />
            <Route path="/level1" element={<Level1/>}/>
            <Route path="/level2" element={<Level2/>}/>
            <Route path="/level3" element={<Level3/>}/>
            {/* <Route path="/level4" element={Level4}/>
            <Route path="/level5" element={Level5}/>
            <Route path="/level6" element={Level6}/> */}
        </Routes>
    </>
    )
}

export default App;
