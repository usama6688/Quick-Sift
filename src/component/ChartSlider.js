import React from 'react';
import "../component/slider.css";

import $ from 'jquery';
const ChartSlider = () => {
    $(function () {
        var range = $("#range").attr("value");
        $("#demo1").html(range);
        $(".slide1").css("width", "0%");
        $(document).on("input change", "#range", function () {
            $("#demo1").html($(this).val());
            var slideWidth = ($(this).val() * 100) / 10;

            $(".slide1").css("width", slideWidth + "%");
        });
    });
    return (
        <div className='d-flex flex-column w-90 ml-4' classname='myrange'>
            <div className="d-flex justify-content-between">

                <span id="demo1" style={{ color: "#BCBCBC" }}></span>
            </div>

            <div class="rSlider">
                <span class="slide1"></span>
                <input id="range" defaultValue="0" type="range" min="0" max="10" />

            </div>
            <div className="d-flex justify-content-between">
                <span>1</span>
                <span>2</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
        </div>
    )
}

export default ChartSlider;