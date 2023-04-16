import { React, useState } from "react";

import { crossImg, linkedinImg, locImg, logoImg, mailImg, mapImg, pdfImg, phoneImg, profileImg, searchImg, settingImg, textsImg, tickImg } from "../assets";
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
    const ToggleTheme = () => {
        if (theme === "dark-theme") {

            setTheme("light-theme");
        } else {

            setTheme("dark-theme");
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const primaryColor = ['#1968FA', '#FF51AC'];
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

    const words = [
        { value: 'AWS EC2', count: 21 },
        { value: 'Cloud Computing', count: 20 },
        { value: 'BSC', count: 28 },
        { value: 'Streams', count: 25 },
        { value: 'Machine', count: 43 },
        { value: 'Virtuous', count: 18 },
        { value: 'Learning', count: 20 },
        { value: 'GPC', count: 28 },
        { value: 'Full Stack', count: 23 },
        { value: 'Big Data', count: 18 },
        { value: 'IOT', count: 15 },
        { value: 'GPT4', count: 26 },
    ]

    const pages = [
        {
            page: "1",
        },
        {
            page: "2",
        },
        {
            page: "3",
        },
        {
            page: "4",
        },
        {
            page: "5",
        },
        {
            page: "6",
        },
        {
            page: ">",
        },
    ]
    return (
        <div className="container-fluid wraper">
            
            <div className="row gap-2">

                <div className={theme == "dark-theme" ? "col-3  styleDiv-dark sidbar" : "col-3 sidbar styleDiv-light"}>

                    <div className="text-center">
                        <img src={logoImg} className="mb-3" height={30} width={128} style={{ objectFit: "contain" }} />
                    </div>

                    <ul className="nav nav-pills flex-column ">


                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(0)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 0 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src="#" className="mr-3" height="22px" width="22px" />
                                Settings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 2 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src="#" className="mr-3" height="22px" width="22px" />
                                Radar Chart
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 3 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src="#" className="mr-3" height="22px" width="22px" />
                                Experience
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => setActiveClass(1)}
                                className={`nav-link d-flex align-items-center  ${activeClass === 4 ? 'active' : ""}`}
                                data-toggle="tab"
                            >
                                <img src="#" className="mr-3" height="22px" width="22px" />
                                Filter Questions
                            </NavLink>
                        </li>


                    </ul>

                    <div className="theme d-flex justify-content-center">
                        <div className="dark mx-2" onClick={() => setTheme("dark-theme")}>Dark</div>
                        <div className="light" onClick={() => setTheme("light-theme")}>Light</div>
                    </div>

                </div>

                <div className="col-9">



                    <div className={theme === "dark-theme" ? "row desk-dark" : "row desk-light"}>
                        <div className="row col-12">
                            <div className="col-8  d-flex flex-column justify-content-center">
                                <label className="labels">Radar Chart</label>
                                <span className="label-content ">Number of candidates shown on radar chart</span>
                                <ChartSlider/>
                            </div>
                            <div className="col-4 ">
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
                        <div className="col-12 b-border"></div>

                        <div className="col-12  d-flex flex-column justify-content-center">
                            <label className="labels">Experience</label>
                            <span className="label-content">Choose minimum years experience</span>
                            <PeriodSlide />
                        </div>
                        <div className="col-12 b-border"></div>

                        <div className="col-12  d-flex flex-column justify-content-center">
                            <label className="labels">Filter Questions</label>
                            <span className="label-content">Choose minimum years experience</span>
                        </div>
                        <div className="col-12 b-border"></div>
                    </div>

                </div>


            </div >
        </div>
    )
}

export default Desktop