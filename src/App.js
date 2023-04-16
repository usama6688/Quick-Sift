import { React, useState } from "react";
import './App.css';
import { crossImg, linkedinImg, locImg, logoImg, mailImg, mapImg, pdfImg, phoneImg, profileImg, searchImg, settingImg, textsImg, tickImg } from "./assets";
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend
} from 'recharts';
import { CircleProgress } from 'react-gradient-progress';
import ReactWordcloud from 'react-wordcloud';

import userData from "./data";
import { NavLink } from "react-bootstrap";
import { TagCloud } from "react-tagcloud";
import { useEffect } from "react";

function App() {
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

  // const text = [
  //   {
  //     text: 'AWS EC2',
  //     value: 30,
  //   },
  //   {
  //     text: 'Cloud Computing',
  //     value: 35,
  //   },
  //   {
  //     text: 'BSC',
  //     value: 40,
  //   },
  //   {
  //     text: 'Streams',
  //     value: 30,
  //   },
  //   {
  //     text: 'Machine',
  //     value: 100,
  //   },
  //   {
  //     text: 'Virtuous',
  //     value: 33,
  //   },
  //   {
  //     text: 'Learning',
  //     value: 50,
  //   },
  //   {
  //     text: 'GPC',
  //     value: 36,
  //   },
  //   {
  //     text: 'Full Stack',
  //     value: 40,
  //   },
  //   {
  //     text: 'Big Data',
  //     value: 35,
  //   },
  //   {
  //     text: 'IOT',
  //     value: 40,
  //   },
  //   {
  //     text: 'GPT4',
  //     value: 45,
  //   },
  // ]

  // const options = {
  //   rotations: 0,
  // };

  const primaryColor = ['#1968FA', '#FF51AC'];

  return (
    <>
      <div className="mytheme">
        {theme === "light-theme" ? (
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/665/616/original/sun-clipart-illustration-free-png.png"
            width="24px"
            height="24px"
            alt=""
            onClick={() => ToggleTheme()}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Font_Awesome_5_regular_moon.svg/1200px-Font_Awesome_5_regular_moon.svg.png"
            onClick={() => ToggleTheme()}
            width="24px"
            height="24px"
            alt=""
            className="pointer"
          />
        )}
      </div>
      <div className="row">
      
        <div className={theme == "dark-theme" ? "col-2 customDiv styleDiv-dark" : "col-2 customDiv styleDiv-light"}>

          <div className="text-center">
            <img src={logoImg} className="mb-3" height={30} width={128} style={{ objectFit: "contain" }} />
          </div>

          <ul className="nav nav-pills flex-column ">

            {userData?.map((user, index) => {
              return (
                <li className="nav-item">
                  <NavLink
                    onClick={() => setActiveClass(index)}
                    className={`nav-link d-flex align-items-center  ${activeClass === index ? 'active' : ""}`}
                    data-toggle="tab"
                  >
                    <img src={user?.image[0]} className="mr-3" height="22px" width="22px" />
                    {user?.name}
                  </NavLink>
                </li>
              )
            })}

          </ul>

          <ul className="nav navPagination">

            {pages?.map((data, index) => {
              return (
                <li className="nav-item itemPages">
                  <NavLink
                    onClick={() => setActiveClass(index)}
                    className={`nav-link d-flex align-items-center ${activeClass === index ? 'active' : ""}`}
                    data-toggle="tab"
                  >
                    {data?.page}
                  </NavLink>
                </li>
              )
            })}

          </ul>

        </div>

        <div className="col-7 customDiv2">

          <div className="row">
            <div className="col-11">
              <div className="row">

                <div className="col-8 custDiv">
                  <div className="searchDiv">

                    <div style={{ position: "relative", width: "100%" }}>
                      <select className="form-select selectSearch">
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                      </select>
                      <img src={searchImg} className="searchImg" />
                      <input type="text" className={theme=="dark-theme"?"searchBar":"searchBar-light"} placeholder="Search by: location, position, company, keywords..." />
                    </div>

                  </div>
                </div>

                <div className="col-4 custDiv2">
                  <button className="searchBtn">Search</button>
                  <button className={theme == "dark-theme" ? "showFilterBtn ml-3" : "showFilterBtn-light ml-3"}>Show Filters</button>
                </div>
              </div>
            </div>

            <div className="col-1 p-0">
              <div className="d-flex align-items-center" style={{ marginLeft: "-20px" }}>
                <img src={profileImg} height={42} width={42} />
                <img src={settingImg} className="ml-2" height={24} width={24} />
              </div>
            </div>
          </div>

          <div className="row mt-5">

            <div className="col-6 mb-4">
              <div className={theme == "dark-theme" ? "gradBorder-dark radarFont" : "gradBorder-light radarFont"}>
                <label className="labels">Radar Chart</label>
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

            <div className="col-6 mb-4">
              <div className={theme=="dark-theme"?"gradBorder-dark":"gradBorder-light"}>
                <label className="labels">Skills & Keywords</label>

                <div style={{ padding: "20px" }}>
                  {/* <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={words}
                  /> */}
                  <ResponsiveContainer>
                    <TagCloud
                      minSize={12}
                      maxSize={35}
                      tags={words}
                    />
                    {/* <ReactWordcloud
                      words={text}
                      options={options}
                    /> */}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-6 mb-4">
              <div className={theme=="dark-theme"?"gradBorder-dark":"gradBorder-light"}>
                <label className="labels">Experience & Tenure</label>

                <div style={{ margin: "0 20px 20px 20px" }}>
                  <label className="chartLabel">Total Experience (Years)</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "35%" }}>
                    </div>
                  </div>

                  <label className="chartLabel">Industry Experience</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "45%" }}>
                    </div>
                  </div>

                  <label className="chartLabel">Longest Tenure</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}>
                    </div>
                  </div>

                  <label className="chartLabel">Shortest Tenure</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <label className="chartLabelCount">0</label>
                    <label className="chartLabelCount">5</label>
                    <label className="chartLabelCount">10</label>
                    <label className="chartLabelCount">15</label>
                    <label className="chartLabelCount">20</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mb-4">
              <div className={theme=="dark-theme"?"gradBorder-dark":"gradBorder-light"}>
                <label className="labels">Location</label>
                <div className="p-3">
                  <img src={mapImg} className="img-fluid mt-4 w-100" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="col-3 customDiv">
          <div className={theme == "dark-theme" ? "gradBorderRight-dark" : "gradBorderRight-light"}>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <div className="circleDiv">
                  <div className="percDiv">
                    <h5 className="percSize">90 <sup>%</sup></h5>
                    <h5 className="percSizeText">match</h5>
                  </div>
                  <CircleProgress percentage={90} width="180" primaryColor={primaryColor} strokeWidth={10} fontColor="white" fontSize="45px" />
                </div>

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <h6 className="userName">Taylor Sift</h6>
                  <img src={pdfImg} className="ml-4" />
                </div>

                <div>
                  <div className="d-flex align-items-center justify-content-start mt-3">
                    <img src={locImg} className="mr-2" />
                    <p className="addText">London, United Kingdom</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={mailImg} className="mr-2" />
                    <p className="addText">taylor.sift@outlook.com</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={phoneImg} className="mr-2" />
                    <p className="addText ml-1">44 2258 257 021</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={linkedinImg} className="mr-2" />
                    <p className="addText">linkedin.com/taylor-sift</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-4 text-center">
              <h6 className="heads">RECENT ROLES</h6>

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" :"smallBox-light mx-auto mt-3"}>
                <div class="accordion" id="faq">
                  <div>
                    <div id="faqhead1">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq1"
                        aria-expanded="true" aria-controls="faq1">Lead Data Scientist</a>
                    </div>

                    <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div id="faqhead2">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq2"
                        aria-expanded="true" aria-controls="faq2">Machine Learning Lead</a>
                    </div>

                    <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div id="faqhead3">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq3"
                        aria-expanded="true" aria-controls="faq3">ML DevOps</a>
                    </div>

                    <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 text-center">
              <h6 className="heads">QUALIFICATIONS</h6>

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" :"smallBox-light mx-auto mt-3"}>
                <div class="accordion" id="faq2">
                  <div>
                    <div id="faqhead4">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq4"
                        aria-expanded="true" aria-controls="faq4">Phd Data Scientist</a>
                    </div>

                    <div id="faq4" class="collapse" aria-labelledby="faqhead4" data-parent="#faq2">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div id="faqhead5">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq5"
                        aria-expanded="true" aria-controls="faq5">BS Computer</a>
                    </div>

                    <div id="faq5" class="collapse" aria-labelledby="faqhead5" data-parent="#faq2">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div id="faqhead6">
                      <a href="#" class="btn-header-link" data-toggle="collapse" data-target="#faq6"
                        aria-expanded="true" aria-controls="faq6">AWS Engineer</a>
                    </div>

                    <div id="faq6" class="collapse" aria-labelledby="faqhead6" data-parent="#faq2">
                      <p class="addText">
                        Anim pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 mb-3 text-center">
              <h6 className="heads">FILTER QUESTIONS</h6>

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" :"smallBox-light mx-auto mt-3"}>
                <div style={{ margin: "15px 23px" }}>
                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={tickImg} className="mr-2" />
                    <p className="addText">Right to work</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={crossImg} className="mr-2" style={{ marginLeft: "-4px" }} />
                    <p className="addText">Portfolio: no</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    <img src={tickImg} className="mr-2" />
                    <p className="addText">Portfolio: no</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
