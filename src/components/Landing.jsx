import React, { useState, useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import moon from "../assets/icon-moon.svg";
import searchIcon from "../assets/icon-search.svg";
import playIcon from "../assets/icon-play.svg";
import wikiIcon from "../assets/icon-new-window.svg";
import axios from "axios";

function Landing() {
  const [checked, setChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [information, setInformation] = useState(null);

  const getInformation = () => {
    axios
      .get(`https://dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => {
        setInformation(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div id="container" className="box-border pt-6 pl-6 pr-6 pb-[84px]">
        <div id="header" className="flex flex-row justify-between items-center">
          <img id="logo" src={logo} alt="" className="w-[28px]" />
          <div
            id=""
            className="flex flex-row justify-center items-center gap-x-4"
          >
            <h3 className="font-inter  font-[700] text-sm leading-6 text-right text-keyboard-color">
              Sans Serif
            </h3>
            <img src={arrowDown} alt="" className="w-[12px]" />
            <div className="bg-gray-200 w-px h-8"></div>
            <input
              type="checkbox"
              role="switch"
              id="flexSwitchChecked"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchChecked"
            ></label>
            <img src={moon} alt="" className="w-[20px]" />

            <div></div>
          </div>
        </div>
        <div id="container1" className="mt-6">
          <form
            className="w-full flex justify-center"
            onSubmit={getInformation}
          >
            <div className="w-full">
              <div>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-keyboard-color leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="searchBar"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <img src={searchIcon} alt="" />
          </form>
          <div className="flex items-center justify-between mt-6">
            <div>
              {information && (
                <>
                  <h1 className="font-inter text-4xl leading-10 font-[700] text-keyboard-color">
                    {information.word}
                  </h1>
                  {information.phonetics && (
                    <h2 className="font-inter font-[400] text-base leading-6 text-purple-custom mt-[8px]">
                      {information.phonetics[0].text}
                    </h2>
                  )}
                </>
              )}
            </div>
            <img src={playIcon} alt="" className="w-[48px]" />
          </div>
        </div>
        <div id="container2" className="mt-[29px]">
          <div id="noun-div" className="flex items-center gap-x-4">
            <h3 className="font-inter font-[700] italic  text-base leading-5 text-keyboard-color">
              noun
            </h3>
            <div className="bg-gray-200 h-px w-full"></div>
          </div>
          <div className="mt-[31px]" id="meaning">
            <h3 className="font-inter font-[400] text-sm leading-5 text-meaning-color">
              Meaning
            </h3>
            <div
              id="p_div"
              className="mt-[17px] flex flex-row items-start justify-start gap-5"
            >
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full mt-[10px]"
              ></div>
              <p
                id="p-text"
                className="font-inter font-[400]  text-xs leading-6 text-keyboard-color w-[302px]"
              >
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </p>
            </div>
            <div
              id="p_div"
              className="mt-[13px] flex flex-row items-start justify-start gap-5"
            >
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full mt-[10px]"
              ></div>
              <p
                id="p-text"
                className="font-inter font-[400] text-xs leading-6 text-keyboard-color w-[302px]"
              >
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </p>
            </div>
            <div
              id="p_div"
              className="mt-[13px] flex flex-row items-start justify-start gap-5"
            >
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full mt-[10px]"
              ></div>
              <p
                id="p-text"
                className="font-inter font-[400] text-xs leading-6 text-keyboard-color w-[302px]"
              >
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </p>
            </div>
          </div>
          <div
            id="synonyms_div"
            className="flex items-center gap-x-6 mt-[24px]"
          >
            <h3 className="font-inter font-[400] leading-tight text-meaning-color">
              Synonyms
            </h3>
            <h3 className="font-inter font-[700] text-base leading-tight text-purple-custom">
              electronic keyboard
            </h3>
          </div>
        </div>
        <div id="container_3" className="mt-[33px]">
          <div id="verb-div" className="flex items-center gap-x-4 ">
            <h3 className="font-inter italic font-[700] text-lg leading-none text-keyboard-color">
              verb
            </h3>
            <div className="bg-gray-200 h-px w-full"></div>
          </div>
          <div id="meaning">
            <h3 className="font-inter font-[400] text-base leading-tight text-meaning-color mt-[31px]">
              Meaning
            </h3>
            <div
              id="p_div"
              className="mt-[13px] flex flex-row items-start justify-start gap-5"
            >
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full mt-[10px]"
              ></div>
              <p
                id="p-text"
                className="font-inter font-[400] text-sm leading-6  text-keyboard-color w-[302px]"
              >
                To type on a computer keyboard.
              </p>
            </div>

            <p
              id="p-text-add"
              className="font-inter font-[400] text-sm leading-6 text-meaning-color pl-6 box-border rounded"
            >
              “Keyboarding is the part of this job I hate the most.”
            </p>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full mt-[32px]"></div>
        <footer id="footer" className="mt-[24px]">
          <h2 className="font-inter font-[400] text-sm leading-6 underline text-meaning-color">
            Source
          </h2>
          <div id="wiki_div" className="flex items-center gap-x-[15px] mt-2">
            <a
              href="https://en.wiktionary.org/wiki/keyboard"
              className="font-inter font-[400] text-xs leading-none h-17 underline text-keyboard-color"
            >
              Wiktionary
            </a>
            <img src={wikiIcon} alt="" />
          </div>
        </footer>
      </div>
    </>
  );
}

export { Landing };
