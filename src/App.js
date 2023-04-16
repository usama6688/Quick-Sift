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
  const [showName, setShowName] = useState("Taylor Sift");
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
                    onClick={() => { setActiveClass(index); setShowName(user?.name) }}
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

                <div className="col-8 pr-0 custDiv">
                  <div className="searchDiv">

                    <div style={{ position: "relative", width: "100%" }}>
                      <select className="form-select selectSearch">
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                      </select>
                      {/* <img src={searchImg} className="searchImg" /> */}
                      <i class={`fa fa-search ${theme == "dark-theme" ? "searchImg" : "searchImg-light"}`} aria-hidden="true"></i>
                      <input type="text" className={theme == "dark-theme" ? "searchBar" : "searchBar-light"} placeholder="Search by: location, position, company, keywords..." />
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
              <div className={theme == "dark-theme" ? "gradBorder-dark" : "gradBorder-light"}>
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
              <div className={theme == "dark-theme" ? "gradBorder-dark" : "gradBorder-light"}>
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
              <div className={theme == "dark-theme" ? "gradBorder-dark" : "gradBorder-light"}>
                <label className="labels">Location</label>
                <div className="p-3">
                  <svg version="1.1" id="mapsection" x="0px" y="0px"
                    width="200px" height="230px" viewBox="0 0 1200 1230" enable-background="new 0 0 1200 1230"
                  >

                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#1968FA", stopOpacity: "1" }} />
                        <stop offset="100%" style={{ stopColor: "#A05CE6", stopOpacity: "1" }} />
                        <stop offset="0%" style={{ stopColor: "#D952CA", stopOpacity: "1" }} />
                        <stop offset="0%" style={{ stopColor: "#FF51AC", stopOpacity: "1" }} />
                      </linearGradient>
                    </defs>

                    <g id="g3248">

                      <path id="path3246"
                        d="M 887.21875 477.4375 L 887.1875 477.4375 L 879.46875 480.28125 L 879.46875 468.5 L 875 460 L 867.53125 457.15625 L 861.5 423.625 L 855 421 L 855 426.6875 L 843.5625 426.6875 L 849.5 431.125 L 850.5 445 L 833.34375 467 L 817.1875 456.375 L 806.5 460.3125 L 806.5 466 L 797.15625 469 L 797 463.15625 L 776.5625 462.5 L 776.5625 469.875 L 757 469.875 L 750.5 470.5 L 746 461.875 L 740.5 461.875 L 732.5 461.875 L 717.96875 490.3125 L 717.9375 490.59375 C 718.10172 490.66577 718.31159 490.66768 718.46875 490.75 C 720.56475 493.685 721.439 497.26925 731.125 496.15625 L 736.71875 501.28125 C 735.50975 509.77125 748.0845 514.4505 755.4375 520.5625 L 762.28125 534.0625 C 768.17025 536.9235 775.249 538.15125 776.125 548.03125 C 780.046 550.25925 781.58775 553.52325 784.46875 556.40625 C 785.79275 557.73125 784.56 558.99925 785.875 560.03125 C 789.604 562.95925 796.327 563.67575 797.25 559.46875 C 797.25 559.46875 803.47175 561.82425 807.96875 561.28125 C 810.76075 560.94425 810.50425 558.30875 813.28125 557.71875 L 833.28125 575.21875 L 836.84375 572.625 C 850.57175 575.81 864.30425 573.983 878.03125 572 L 894.40625 557.96875 L 917.0625 557.15625 L 917.28125 545.375 L 905.625 541.34375 L 897.5625 523.5 L 885.875 513.625 C 887.918 510.479 882.339 507.3335 879.625 504.1875 C 875.947 505.1875 871.956 504.38375 867.75 502.21875 L 870.75 498.375 L 870.6875 492.84375 L 881.40625 492.65625 C 883.49025 491.34525 885.75175 490.776 887.34375 487.5 L 887.21875 477.4375 z " />

                      <a>
                        <path
                          d="m 331.8811,534.46486 11.918,-3.438 -7.908,-61.995 c -1.01,-4.726 -5.704,-6.82 -9.287,-9.709 l 1.899,-10.132 -14.053,-1.819 c -2.631,5.257 -1.229,10.261 5.146,14.955 5.15,21.002 4.51,41.177 6.124,61.673 l 6.161,10.465 z"
                          id="Togo" />
                      </a>

                      <a>
                        <path
                          d="m 582.9531,608.78886 c -4.477,-1.97 -9.832,-6.433 -12.992,-4.672 l -11.288,-4.027 -22.589,-0.207 h -35.465 l -24.154,0.265 2.451,-18.526 -6.352,-8.205 2.382,-2.911 -1.588,-2.382 -4.234,1.323 c -5.231,-0.649 -7.104,-4.352 -8.331,-8.642 -2.825,-1.062 -6.777,-0.68 -6.755,-5.386 5.941,-10.284 7.232,-24.325 18.829,-30.042 l 0.404,-4.533 16.558,-0.784 c 6.184,3.971 4.209,8.533 14.712,7.201 7.271,-13.125 12.545,-37.237 22.016,-38.272 5.734,-14.116 7.436,-34.146 17.203,-42.347 4.813,-1.72 8.919,-3.762 10.7,-6.859 1.039,-1.809 1.287,-7.657 0.421,-10.331 -0.622,-1.923 -1.819,-0.425 -3.711,-2.924 l -2.842,-10.84 2.301,-1.864 8.746,7.41 c 1.242,6.065 4.265,11.687 3.678,18.209 -0.634,9.487 -4.55,10.844 4.91,21.668 1.611,2.685 1.978,5.524 1.631,8.454 l -17.63,-1.75 c -1.966,4.812 -6.324,15.74 11.047,19.597 l 8.193,24.614 -15.271,25.396 2.129,18.538 c 6.444,11.88 13.91,24.253 24.338,33.865 l 0.553,18.964 z"
                          id="Cameroon" />
                      </a>

                      <a>
                        <path
                          d="m 1015.5761,664.11086 c -2.197,3.432 -4.604,6.603 -9.435,6.744 -1.799,4.765 -4.121,9.115 -10.103,10.577 -6.587,11.898 -11.596,25.57 -19.824,35.622 l -23.012,-15.42 -3.615,-13.409 -70.107,-44.024 23.074,-35.278 0.492,-19.766 -7.926,-6.533 c -0.984,-7.629 -2.769,-14.523 -9.045,-17.3 l 8.16,-7.133 22.812,-1.031 14.192,1.215 c 4.865,2.514 7.447,2.602 20.319,13.333 l 25.842,3.884 c 4.124,-1.42 7.955,-3.528 10.826,-9.271 6.239,-0.901 12.857,-6.3 20.955,1.4 2.651,0.941 6.895,0.542 11.099,-0.068 -4.82,7.704 -9.888,13.917 -14.921,20.338 l 0.427,64.114 9.79,12.006 z"
                          id="Kenya" />
                      </a>

                      <a>
                        <path
                          d="m 1069.9931,1078.4809 47.992,-102.13904 c 3.67,-11.525 5.846,-23.05 11.263,-34.575 3.674,-4.858 8.334,-9.365 5.401,-16.583 l 1.043,-9.907 c 0.538,-2.994 2.188,-2.932 4.692,-0.521 l 1.47,5.983 c 1.784,-0.566 3.534,-1.174 3.396,-4.143 l -4.865,-52.939 -9.175,-9.944 -5.304,4.393 -1.38,13.589 -3.065,2.696 c -1.61,-0.49 -3.966,-2.918 -3.271,2.586 l -4.551,4.993 c -5.176,-9.601 -5.941,-1.083 -4.54,3.065 -0.137,1.812 0.372,4.914 -2.085,2.086 l -3.708,5.983 5.271,3.923 h -3.128 l -6.778,4.909 1.043,-5.951 -6.779,6.778 1.564,8.343 -4.571,0.184 0.896,-3.739 c -4.223,-2.776 -7.658,3.104 -11.445,5.119 l 4.172,6.778 -5.215,0.521 -2.086,-6.257 -8.405,1.38 c 0.263,2.956 -3.135,3.82 -6.194,4.877 l -0.521,-4.171 -4.692,4.692 -8.19,0.4 -1.596,7.053 -11.07,16.011 c 8.457,7.434 5.03,24.204 7.3,36.5 -3.114,9.919 -9.16,17.491 -14.6,25.55004 -6.326,4.177 -9.182,8.354 -10.144,12.531 -0.923,4.008 -2.866,11.887 -1.692,15.895 1.369,4.677 3.956,3.086 4.072,7.763 l 1.539,7.671 c -7.738,29.794 11.519,29.348 15.668,36.623 1.887,-0.858 4.285,0.602 6.128,-0.393 4.093,-2.208 9.326,-7.662 14.795,-5.85 4.574,1.517 8.006,-0.218 11.345,-1.763 z"
                          id="Madagaskar" />
                      </a>

                      <a>
                        <path
                          d="m 248.8661,206.17086 -25.483,0.686 1.204,147.051 6.721,2.374 -4.711,14.377 -75.104,-4.249 -8.644,6.059 -4.723,-1.744 -3.271,-9.709 -4.294,-1.147 c -8.457,18.489 -9.755,16.338 -12.896,19.501 0.513,1.891 -0.72,3.695 -0.112,5.427 1.903,5.419 3.097,10.916 0.232,13.26 3.912,3.483 8.96,6.256 10.411,11.276 0.279,6.403 -0.07,11.342 -1.793,13.076 -1.707,1.71 0.32,5.697 3.869,2.711 l 3.451,-2.097 c 1.134,1.807 3.636,2.794 3.271,5.502 l 7.605,-5.2 9.287,3.858 c 0.943,-1.423 -0.24,-3.556 3.372,-4.089 1.897,0.052 3.231,-1.304 3.791,-4.596 l 5.098,1.237 c 1.372,4.802 3.044,9.647 2.163,14.127 l 7.523,5.681 -5.746,5.26 1.591,2.402 4.191,-2.794 0.622,10.063 5.294,4.864 c 2.171,-2.154 5.636,-4.87 8.257,-3.509 2.472,1.284 3.623,6.31 5.954,4.74 2.438,-1.641 2.896,-3.176 6.673,-3.171 2.846,0.004 -2.439,-4.915 1.104,-4.813 1.646,0.048 4.218,-1.891 7.063,-1.143 2.728,0.717 -0.664,10.876 1.335,8.695 4.956,-5.407 14.831,-3.313 15.785,-2.104 2.765,-9.899 -2.639,-19.029 16.328,-30.458 l 8.371,-17.632 c 11.159,-4.682 23.137,-2.551 33.397,-14.727 12.899,-8.617 25.79,-15.097 32.756,-13.165 l 13.022,0.014 7.318,-6.245 35.029,0.438 c 0.888,-1.72 1.376,-2.984 6.215,-5.363 0.038,-4.229 3.831,-4.462 6.467,-5.794 l 1.375,-51.91 -13.15,1.896 c -5.193,-3.376 -0.825,-4.452 -0.777,-11.961 -2.961,-6.667 -6.726,-7.67 -10.424,-7.013 -3.248,0.578 -4.71,-4.028 -6.414,-3.681 -2.935,0.598 -6.149,-2.219 -8.096,-6.363 -0.661,-1.409 -2.479,-2.051 -3.708,-2.896 -2.732,-1.876 -5.224,-3.318 -4.517,-6.244 0.004,0.001 -62.547,-47.775 -92.282,-70.758 z"
                          id="Mali" />
                      </a>

                      <a>
                        <path
                          d="m 882.7691,801.72186 9.959,32.83 -2.939,29.147 c 5.91,5.324 11.79,9.645 20.084,23.483 1.041,1.737 2.131,6.079 1.764,9.561 l -3.609,15.409 -9.016,3.926 0.699,13.48 -4.787,0.073 c 2.466,-6.329 0.105,-5.147 -0.958,-5.531 -6.536,-4.128 -8.985,-10.204 -10.188,-15.653 5.347,-8.23 5.03,-14.844 4.42,-21.206 l -8.847,-1.636 c -6.83,1.669 -8.158,-0.837 -8.817,-3.115 -3.706,-8.681 -5.409,-5.336 -6.769,-5.923 l -5.276,-7.262 9.254,-17.156 7.219,-0.811 -4.913,-6.4 4.302,-22.312 4.096,-3.021 -11.83,-23.379 c 3.439,3.017 7.242,4.044 16.152,5.496 z"
                          id="Malawi" />
                      </a>

                      <a>
                        <path
                          d="m 198.9331,157.45086 2.576,-19.744 15.475,-7.987 3.494,0.999 5.491,-4.493 9.125,0.66 0.499,-4.353 c 19.079,0.932 22.947,-4.17 26.317,-9.286 l 15.974,-6.489 h 5.99 l -2.995,-3.993 0.998,-3.693 -0.499,-4.793 c 6.247,-0.817 13.952,0.185 13.998,-6.35 l 25.937,0.359 3.494,-7.986 c -4.954,-1.818 -5.84,-8.981 -5.177,-16.593 0.493,-5.651 0.046,-18.509 0.046,-18.509 -1.71,-2.063 -3.84,-4.006 -4.332,-6.97 -4.159,-0.767 -9.265,-0.859 -11.004,-3.354 -6.038,-1.037 -12.02,-1.588 -17.419,-1.045 -9.885,0.994 -13.953,-2.567 -18.022,-11.934 -9.52,-0.621 -19.613,19.836 -26.956,29.95 -17.757,4.938 -30.607,12.943 -39.436,23.462 1.18,4.276 -0.893,5.923 -5.202,8.746 -2.785,1.825 -12.583,17.465 -9.273,26.196 0.041,6.822 -5.276,18.192 -20.557,25.758 0,0 -7.125,6.659 -18.394,10.336 -4.754,1.551 -15.776,2.787 -19.111,5.862 l 68.963,5.244 z"
                          id="Morocco" />
                      </a>

                      <a>
                        <path
                          d="m 510.4281,78.56786 c 0,0 2.498,9.674 -4.972,14.979 -3.758,2.669 -16.044,11.679 -16.044,11.679 1.042,5.499 2.328,19.254 -9.604,21.128 -8.201,1.287 -3.903,7.917 1.581,16.909 l 0.349,46.824 c 0,0 -7.297,1.425 -6.78,3.354 1.16,4.329 1.247,7.437 6.713,12.303 3.51,3.123 3.575,8.763 3.272,12.224 -0.349,3.994 4.144,5.712 5.197,5.687 8.208,-0.199 14.685,-4.102 22.46,17.337 l 38.566,1.188 c 4.494,0.951 9.253,7.835 9.253,7.835 l 22.087,-6.275 130.045,64.3 -0.234,-10.444 c 14.377,1.171 16.028,-0.484 16.028,-0.484 l -8.887,-151.927 c -5.223,-7.167 -10.371,-14.193 -4.092,-22.142 0,0 0.042,-8.431 -1.53,-13.213 -1.636,-4.978 2.852,-8.362 2.852,-8.362 -0.07,-6.441 -12.435,-5.952 -18.94,-6.286 -8.537,-0.438 -14.273,-1.608 -12.787,-8.003 0,0 -22.316,-8.013 -30.953,-2.73 -4.589,2.807 -14.265,7.291 -16.026,13.041 -1.185,3.865 -0.124,6.486 2.18,10.412 4.034,6.873 -9.587,30.471 -25.157,11.586 0,0 -20.452,-5.63 -32.004,-8.155 -11.306,-2.471 -19.107,-12.385 -14.415,-18.386 0.459,-0.586 -30.685,-9.596 -30.685,-9.596 -14.384,2.224 -24.915,-1.982 -27.473,-4.783 z"
                          id="Libya" />
                      </a>

                      <a>
                        <path
                          d="m 116.5321,262.88586 c 2.054,-14.697 -7.083,-35.352 21.465,-35.941 l 5.99,-44.427 50.916,4.492 3.87,-29.992 -68.104,-5.03 c -6.32,9.701 -9.989,17.914 -19.53,21.698 -9.004,3.571 -12.526,14.683 -15.073,24.307 l -26.8,30.666 c -0.965,6.963 -5.012,11.615 -10.427,15.24 -4.896,6.405 -7.887,14.363 -8.639,21.439 l 6.829,-6.191 59.503,3.739 z"
                          id="Western_Sahara" />
                      </a>

                      <a>
                        <path
                          d="m 495.5201,10.18686 c -3.016,0.103 -14.837,-6.059 -21.478,3.602 0,0 -5,2.215 -5.281,7.344 -0.435,7.901 -1.188,32.5 -1.188,32.5 -0.831,-1.329 -6.753,-0.325 -7.688,3.688 -1.271,5.454 -7.419,4.026 -7.906,6.781 -0.981,5.547 3.862,10.65 9.563,15.625 1.461,1.276 -0.542,8.334 0.906,9.625 4.415,3.939 12.25,6.625 12.25,6.625 1.817,18.073 5.031,30.563 5.031,30.563 1.191,0.745 13.819,-3.591 9.465,-21.346 -0.504,-2.056 25.883,-10.603 21.146,-27.118 -0.492,-1.717 -4.788,0.316 -5.485,-2.8 -1.565,-6.991 -1.364,-8.713 -4.021,-9.763 -1.335,-0.527 -6.857,4.775 -7.979,4.098 -2.504,-1.513 -5.628,-5.035 -4.276,-6.779 2.329,-3.005 19.157,-13.436 19.325,-19.187 0.251,-8.559 -2.908,-9.384 -7.105,-11.663 -2.384,-1.294 -1.527,-5.349 -0.756,-7.662 0.473,-1.418 9.558,-4.51 8.51,-7.796 -0.711,-2.229 -2.029,-2.571 -2.512,-4.314 -0.356,-1.286 -7.221,5.885 -7.654,4.777 -1.145,-2.921 -1.489,-4.709 -2.867,-6.8 z"
                          id="Tunisia" />
                      </a>

                      <a>
                        <path id="Sudan"
                          d="M 893.90625 240.4375 L 888.46875 245.96875 L 884 244.96875 L 881.90625 254 L 872.25 256.53125 L 871.375 263.875 L 862.84375 264.84375 L 858.78125 260.59375 L 726.6875 264.59375 L 728.28125 297.6875 C 722.66525 298.1135 716.8745 298.13 712.3125 297.5 L 712.5625 308.03125 L 714.09375 370.625 L 696.1875 371.59375 L 696.40625 378.28125 L 686.15625 391.25 L 686.8125 400.46875 L 683.375 402.03125 C 683.047 407.78825 682.38675 412.83025 679.96875 414.40625 L 680.09375 421.875 L 687.5625 420.3125 C 689.0655 428.6965 689.43175 437.503 696.46875 443.875 L 697.375 449.46875 L 694.03125 449.9375 C 699.67225 456.9585 706.181 463.53725 709.875 471.53125 C 703.60505 490.95062 712.51974 488.21763 717.9375 490.59375 L 717.96875 490.3125 L 732.5 461.875 L 740.5 461.875 L 746 461.875 L 750.5 470.5 L 757 469.875 L 776.5625 469.875 L 776.5625 462.5 L 797 463.15625 L 797.15625 469 L 806.5 466 L 806.5 460.3125 L 817.1875 456.375 L 833.34375 467 L 850.5 445 L 849.5 431.125 L 843.5625 426.6875 L 855 426.6875 L 855 421 L 861.5 423.625 L 867.53125 457.15625 L 875 460 L 879.46875 468.5 L 879.46875 480.28125 L 887.1875 477.4375 L 887.21875 477.4375 L 886.96875 457.03125 L 892 449.5625 L 897.09375 449.625 L 899.59375 436.71875 C 905.62775 429.29375 907.9985 419.7735 917.6875 414.4375 L 920.75 390.03125 C 918.986 372.80425 924.22075 357.932 926.71875 342.125 C 929.21375 341.098 932.06575 342.99175 934.09375 338.21875 L 945.25 332.5625 C 947.451 331.0965 948.19675 327.662 948.84375 324.125 C 947.33075 320.746 945.16225 321.3565 943.15625 320.9375 C 939.86325 314.6115 934.39925 314.05475 929.65625 311.59375 L 923.03125 271.5 L 917.78125 265.9375 C 919.12125 251.5695 902.20525 249.0215 893.90625 240.4375 z " />
                      </a>

                      <a>
                        <path
                          d="m 879.4831,644.11086 -6.065,9.036 -46.022,0.783 7.543,15.499 c -11.881,11.988 -4.325,14.259 -1.5,18.894 -5.211,9.704 -9.22,21.556 -19.644,21.952 -2.62,0.659 -4.539,0.003 -5.029,3.224 -1.148,7.538 2.157,23.151 5.187,32.171 3.106,6.962 8.596,11.673 11.575,17.504 2.745,4.045 3.418,8.09 4.716,12.135 l 6.382,7.199 c 2.693,-0.8 5.693,-0.075 9.94,6.894 l 19.154,6.323 c 4.13,3.828 10.656,4.859 17.069,6.024 l 10.041,33.134 18.765,0.479 c 3.244,-2.041 6.487,-1.867 9.732,2.35 6.985,-1.101 13.227,-2.945 22.413,-1.845 2.905,-3.117 6.517,-5.44 12.536,-5.056 7.209,5.747 27.77,-5.938 36.626,-11.659 -2.159,-3.896 -6.097,-6.015 -9.753,-8.414 0.295,-4.43 -1.493,-9.276 -3.091,-14.085 -1.863,-2.938 -3.301,-5.77 -2.069,-7.935 l -4.353,-9.512 2.731,-0.891 c -0.71,-7.253 -0.661,-14.098 3.663,-18.64 -2.969,-6.142 -13.075,-11.014 -12.495,-18.3 l 8.632,-24.304 -22.905,-15.171 -3.794,-13.516 -69.985,-44.273 z"
                          id="Tanzania" />
                      </a>

                      <a>
                        <path
                          d="m 712.3601,307.75586 -130.179,-64.109 -17.243,5.211 c 1.18,10.185 0.312,18.07 0.495,24.304 0.268,9.14 6.628,15.548 15.348,18.638 l -3.86,9.394 -5.548,50.3 -27.169,29.898 c -0.862,1.696 -1.342,3.393 -1.24,5.089 -0.86,1.945 -1.965,2.793 -3.144,3.302 -1.897,1.178 -0.961,3.169 -1.181,4.648 -1.58,10.598 20.577,26.294 20.577,26.294 1.141,4.788 2.828,9.041 3.674,14.095 0.912,5.449 -1.756,12.025 -0.988,16.747 1.115,6.854 8.721,7.542 7.681,18.005 l -17.444,-1.605 c -5.063,10.107 -1.52,16.693 10.913,19.644 l 8.212,24.515 c 13.192,-3.011 22.482,-1.409 39.717,-9.197 l 15.68,-1.553 c 2.892,-4.933 9.013,-7.559 6.914,-16.055 l 21.697,-2.369 c 1.696,-1.58 2.51,-4.042 5.265,-4.563 4.253,-0.132 5.497,-2.896 6.635,-5.753 1.982,-4.697 6.979,-6.38 10.734,-9.306 0.677,-15.492 12.387,-11.057 19.523,-13.988 l -0.854,-5.376 c -4.084,-4.453 -7.606,-9.507 -8.884,-23.677 l -7.613,1.431 -0.168,-6.887 c 2.331,-2.5 4.005,-8.431 3.408,-12.646 l 3.545,-1.663 -0.873,-8.954 10.48,-13.396 -0.325,-6.563 18.064,-0.95 -1.849,-62.905 z"
                          id="Chad" />
                      </a>

                      <a>
                        <path
                          d="m 833.6651,575.04886 3.304,-2.504 c 13.282,3.388 27.125,1.448 40.967,-0.48 l 8.291,-6.858 c 4.707,2.772 8.229,7.527 8.935,17.447 l 7.976,6.378 0,19.369 -29.683,44.683 -46.276,0.855 -7.082,5.738 -2.764,0.054 -1.591,-2.128 1.062,-27.608 10.372,-15.741 16.543,-14.84 -10.001,-6.323 -0.057,-18.042 z"
                          id="Uganda" />
                      </a>

                      <a>
                        <path
                          d="m 571.3631,511.99486 -15.382,25.232 2.063,18.345 c 6.573,12.911 14.235,24.841 24.452,34.473 6.34,-7.057 9.128,-12.498 21.686,-15.749 l 10.926,4.75 12.254,-3.449 c 3.037,-3.527 2.791,-9.108 3.029,-14.387 4.211,-6.869 8.748,-10.479 13.319,-13.749 3.388,2.621 9.387,0.601 9.839,8.439 4.014,4.516 7.8,7.208 10.725,3.018 3.392,5.015 17.807,3.414 27.725,4.513 0.572,-1.861 1.624,-4.32 3.654,-8.004 3.321,-0.504 6.307,-1.811 11.373,1.876 l 20.946,-7.328 1.364,3.092 8.378,-1.346 -0.146,-3.12 18.507,-1.537 4.121,5.291 1.909,-2.861 3.161,2.307 2.664,-3.061 8.625,-0.337 c -1.764,-4.888 -1.012,-10.684 -14.083,-13.765 l -6.721,-13.729 c -6.738,-6.45 -18.681,-9.431 -19.552,-19.793 l -5.165,-4.99 c -4.377,0.204 -8.188,2.101 -13.065,-5.813 -7.882,-1.198 -13.231,-2.433 -8.054,-18.396 -4.049,-9.774 -10.235,-14.402 -15.604,-21.867 -11.3,2.161 -15.836,1.584 -16.234,13.267 -3.589,2.858 -8.86,4.315 -10.5,8.799 -1.422,3.313 -2.597,5.865 -7.624,6.294 -1.434,0.885 -3.173,2.686 -4.968,4.655 l -21.414,2.233 c 1.122,4.028 0.688,7.659 -3.921,12.155 -1.229,1.201 -2.112,2.672 -3.261,3.964 l -15.42,1.435 c -17.826,7.865 -26.773,6.195 -39.606,9.143 z"
                          id="Central_African_Republic" />
                      </a>

                    </g>
                  </svg>
                  {/* <img src={mapImg} className="img-fluid mt-4 w-100" /> */}
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="col-3 customDiv">
          <div className={`${theme == "dark-theme" ? "gradBorderRight-dark" : "gradBorderRight-light"} customScroll`}>
            <div className="circleDiv d-flex justify-content-center">
              <div className="percDiv">
                <h5 className="percSize">90 <sup>%</sup></h5>
                <h5 className="percSizeText">match</h5>
              </div>
              <CircleProgress percentage={90} width="180" primaryColor={primaryColor} strokeWidth={10} fontColor="white" fontSize="45px" />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-3">
              <h6 className="userName">{showName}</h6>
              {/* <img src={pdfImg} className="ml-4" /> */}
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div>

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

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" : "smallBox-light mx-auto mt-3"}>
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

            <div className="mt-3 text-center">
              <h6 className="heads">QUALIFICATIONS</h6>

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" : "smallBox-light mx-auto mt-3"}>
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

            <div className="mt-3 mb-3 text-center">
              <h6 className="heads">FILTER QUESTIONS</h6>

              <div className={theme == "dark-theme" ? "smallBox-dark mx-auto mt-3" : "smallBox-light mx-auto mt-3"}>
                <div style={{ margin: "15px 23px" }}>
                  <div className="d-flex align-items-center justify-content-start mt-2">
                    {/* <img src={tickImg} className="mr-2" /> */}
                    <p className="addText tick">Right to work</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    {/* <img src={crossImg} className="mr-2" style={{ marginLeft: "-4px" }} /> */}
                    <p className="addText cross">Portfolio: no</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-start mt-2">
                    {/* <img src={tickImg} className="mr-2" /> */}
                    <p className="addText tick">Portfolio: no</p>
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
