import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import moon from "../assets/icon-moon.svg";
import searchIcon from "../assets/icon-search.svg";
import playIcon from "../assets/icon-play.svg";
import wikiIcon from "../assets/icon-new-window.svg";
import axios from "axios";

function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [font, setFont] = useState("sans-serif");
  const [sourceUrls, setSourceUrls] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef(null);

  const getInformation = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      setResponseData(response.data[0]);
      setSourceUrls(response.data[0].sourceUrls);
      setAudioUrl(response.data[0].audio);
      console.log(response.data[0].audio);
    } catch (error) {}
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getInformation();
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
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
            <select value={font} onChange={(e) => setFont(e.target.value)}>
              <option value="sans-serif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
            <img src={arrowDown} alt="" className="w-[12px]" />
            <div className="bg-gray-200 w-px h-8"></div>
            <label className="relative flex justify-between items-center ">
              <input
                type="checkbox"
                className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
              />
              <span className="w-[40px] h-[20px] flex items-center flex-shrink-0  p-[3px] bg-meaning-color rounded-full duration-300 ease-in-out peer-checked:bg-purple-custom after:w-[14px] after:h-[14px] after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-1"></span>
            </label>
            <img src={moon} alt="" className="w-[20px]" />

            <div></div>
          </div>
        </div>
        <div id="container1" className="mt-6">
          <form
            className="w-full flex justify-center relative"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <div className="">
                <input
                  className="bg-gray-200 appearance-none border-2  border-gray-200 rounded-xl w-full py-2 px-4 text-keyboard-color  leading-tight focus:outline-none focus:bg-white focus:border-purple-custom "
                  id="searchBar"
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <img
              id="search_icon"
              src={searchIcon}
              alt=""
              className="w-[15.5px] absolute top-3 right-3"
            />
          </form>
          <div className="flex items-center justify-between mt-6">
            <div>
              <h1 className="font-inter  text-4xl leading-10 font-[700] text-keyboard-color">
                {responseData && responseData.word ? responseData.word : ""}
              </h1>
              <h2 className="font-inter font-[400] text-base leading-6 text-purple-custom mt-[8px]">
                {responseData && responseData.phonetic
                  ? responseData.phonetic
                  : ""}
              </h2>
            </div>
            <img src={playIcon} alt="" className="w-[48px]" style={{ cursor: 'pointer' }} onClick={playAudio} />
  </div>
  <audio ref={audioRef}>
    <source src={audioUrl} type="audio/mpeg" />
  </audio>
        </div>
        {responseData &&
          responseData.meanings &&
          responseData.meanings.map((meaning, index) => (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map((def, index) => (
                <div key={index}>
                  <p>{def.definition}</p>
                  {def.example && <p>Example: {def.example}</p>}
                  {def.synonyms && def.synonyms.length > 0 && (
                    <div>
                      <h4>Synonyms</h4>
                      <ul>
                        {def.synonyms.map((syn, index) => (
                          <li key={index}>{syn}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {def.antonyms && def.antonyms.length > 0 && (
                    <div>
                      <h4>Antonyms</h4>
                      <ul>
                        {def.antonyms.map((ant, index) => (
                          <li key={index}>{ant}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

        <div className="bg-gray-200 h-px w-full mt-[32px]"></div>
        <footer id="footer" className="mt-[24px]">
          <h2 className="font-inter font-[400] text-sm leading-6 underline text-meaning-color">
            Source
          </h2>
          {sourceUrls.map((url, index) => (
            <div
              key={index}
              id="wiki_div"
              className="flex items-center gap-x-[15px] mt-2"
            >
              <a
                href={url}
                className="font-inter font-[400] text-xs leading-none h-17 underline text-keyboard-color"
              >
                Wiktionary
              </a>
              <img src={wikiIcon} alt="" />
            </div>
          ))}
        </footer>
      </div>
    </>
  );
}

export { Landing };
