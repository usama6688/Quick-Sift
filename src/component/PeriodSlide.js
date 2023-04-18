import React from 'react';
import "../component/slider.css";

import $ from 'jquery';
const PeriodSlide = () => {
    $(function () {
        var range = $("#range3").attr("value");
        $("#demo3").html(range);
        $(".slide3").css("width", "0%");
        $(document).on("input change", "#range3", function () {
            $("#demo3").html($(this).val());
            var slideWidth = ($(this).val() * 100) / 20;

            $(".slide3").css("width", slideWidth + "%");
        });
    });
    return (
        <div className='d-flex flex-column w-90 mx-4' classname='myrange'>
            <div className="d-flex justify-content-between">

                <span id="demo3" style={{ color: "#BCBCBC" }}></span>
            </div>

            <div class="rSlider">
                <span class="slide3"></span>
                <input id="range3" defaultValue="0" type="range" min="0" max="20" />

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
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
            </div>
        </div>
    )
}

export default PeriodSlide;