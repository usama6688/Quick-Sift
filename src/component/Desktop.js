import { React, useState } from "react";

import { calImg, crossImg, linkedinImg, locImg, logoImg, logoLightImg, mailImg, mapImg, pdfImg, phoneImg, profileImg, radarImg, searchImg, settImg, settingImg, textsImg, tickImg, toltipImg } from "../assets";
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend
} from 'recharts';
import { CircleProgress } from 'react-gradient-progress';
import ReactWordcloud from 'react-wordcloud';

import userData from "../data";
import { NavLink } from "react-bootstrap";
import { TagCloud } from "react-tagcloud";
import { useEffect } from "react";
import PeriodSlide from "./PeriodSlide";
import ChartSlider from "./ChartSlider";
const Desktop = () => {
    const [theme, setTheme] = useState("dark-theme");
    const [activeClass, setActiveClass] = useState(0);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const data = [
        {
            "name": "LOCATION",
            "A": 120,
            "B": 110,
        },
        {
            "name": "SKILLS & KEYWORDS",
            "A": 98,
            "B": 130,
        },
        {
            "name": "QUALIFICATIONS",
            "A": 86,
            "B": 130,
        },
        {
            "name": "EXPERIENCE",
            "A": 99,
            "B": 100,
        },
        {
            "name": "PREVIOUS EMPLOYERS",
            "A": 85,
            "B": 90,
        }
    ]

    return (
        <div className="container-fluid wraper">

            <div className="row gap-2 pb-5">

                <div className={theme == "dark-theme" ? "col-3 customDiv styleDiv-dark" : "col-3 customDiv styleDiv-light"}>

                    <div className="text-center">
                        <img src={theme == "dark-theme" ? logoImg : logoLightImg} className="mb-3" height={30} width={128} style={{ objectFit: "contain" }} />
                    </div>

                    <ul className="nav nav-pills flex-column ">

                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(0)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 0 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src={settImg} className="mr-3" height="22px" width="22px" />
                                Settings
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 2 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src={radarImg} className="mr-3" height="22px" width="22px" />
                                Radar Chart
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 3 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src={calImg} className="mr-3" height="22px" width="22px" />
                                Experience
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 4 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src={toltipImg} className="mr-3" height="22px" width="22px" />
                                Filter Questions
                            </NavLink>
                        </li>


                    </ul>

                    <div className="d-flex justify-content-center">
                        <div className="theme">
                            <input type="checkbox" class="checkbox" id="checkbox" defaultChecked={1} />
                            <label for="checkbox" className={theme == "dark-theme" ? "checkbox-label" : "checkbox-label-light"}>

                                <i class="fa fa-sun-o" aria-hidden="true" onClick={() => setTheme("light-theme")}><span className="themName">Light</span></i>

                                <i class="fa fa-moon-o" aria-hidden="true" onClick={() => setTheme("dark-theme")}><span className="themName">Dark</span></i>

                                <span class="ball">
                                    {theme === "dark-theme" ?
                                        <i class="fa fa-moon-o dimClr" aria-hidden="true" onClick={() => setTheme("dark-theme")}><span className="themName">Dark</span></i>
                                        :
                                        <i class="fa fa-sun-o dimClr" aria-hidden="true" onClick={() => setTheme("light-theme")}><span className="themName">Light</span></i>
                                    }
                                </span>
                            </label>
                        </div>
                        
                    </div>

                </div>

                <div className="col-9 customDiv4">

                    <div className={theme === "dark-theme" ? "desk-dark ml-0" : "desk-light ml-0"}>
                        <div className="divPad">
                            <div className="row">
                                <div className="col-8 d-flex flex-column justify-content-center">
                                    <label className="labels mb-2">Radar Chart</label>
                                    <span className="label-content mt-0 mb-4">Number of candidates shown on radar chart</span>
                                    <ChartSlider />
                                </div>

                                <div className="col-4">
                                    <div className={theme == "dark-theme" ? " radarFont" : " radarFont"}>

                                        <ResponsiveContainer width="100%" height={240} className="radarCont">
                                            <RadarChart
                                                outerRadius="80%" data={data}>
                                                <PolarGrid />
                                                <PolarAngleAxis dataKey="name" />
                                                <PolarRadiusAxis />

                                                <Radar dataKey="A" stroke="#FF51AC" fill="#9822F4" fillOpacity={0.4} />
                                                <Radar dataKey="B" stroke="#A05CE6" fill="#B744E3" fillOpacity={0.4} />

                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" b-border"></div>

                        <div className="col-12 d-flex flex-column justify-content-center divPad pb-5">
                            <label className="labels mb-4">Experience</label>
                            <span className="label-content mt-0 mb-4">Choose minimum years experience</span>
                            <PeriodSlide />
                        </div>

                        <div className="col-12 b-border"></div>

                        <div className="col-12  d-flex flex-column justify-content-center divPad">
                            <label className="labels mb-4">Filter Questions</label>
                            <span className="label-content mt-0 mb-4">Choose minimum years experience</span>
                        </div>
                        <div className="col-12 b-border"></div>
                    </div>

                </div>


            </div >
        </div>
    )
}

export default Desktop