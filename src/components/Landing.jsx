import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import purpleMoon from "../assets/moonPurple.svg";
import searchIcon from "../assets/icon-search.svg";
import playIcon from "../assets/icon-play.svg";
import wikiIcon from "../assets/icon-new-window.svg";
import axios from "axios";
import Select from "react-select";
import Emoji from "../assets/emoji.png";

const fontOptions = [
  { value: "inter", label: "Inter" },
  { value: "inconsolata", label: "Inconsolata" },
  { value: "lora", label: "Lora" },
];

function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [sourceUrls, setSourceUrls] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef(null);
  const [isLight, setIsLight] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const getInformation = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const responseData = response.data[0];
      setResponseData(responseData);
      if (responseData.sourceUrls) {
        setSourceUrls(responseData.sourceUrls);
      }
      if (responseData.phonetics && responseData.phonetics[0].audio) {
        setAudioUrl(responseData.phonetics[0].audio);
      }
      setNotFound(false); // Clear the "not found" state
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
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

  const [font, setFont] = useState("inter");

  const handleFontChange = (selectedOption) => {
    setFont(selectedOption.value);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontFamily = fontFamily[font];
  }, [font]);

  const fontFamily = {
    inter: "Inter, sans-serif",
    inconsolata: "Inconsolata, monospace",
    lora: "Lora, serif",
  };

  const handleCheckboxChange = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      <div
        id="container"
        className={`min-h-screen box-border pt-6 pl-6 pr-6 pb-[84px] ${
          isLight ? "" : "bg-night-black"
        }`}
      >
        <div
          id="header"
          className={`flex flex-row justify-between items-center ${
            isLight ? "" : "bg-night-black"
          }`}
        >
          <img id="logo" src={logo} alt="" className="w-[28px]" />
          <div
            id=""
            className="flex flex-row justify-center items-center gap-x-4"
          >
            <Select
              className="w-[147px]"
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  boxShadow: state.isFocused ? "0 0 0 2px #8F19E8" : "none",
                  border: "none",
                  backgroundColor: "none",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: isLight ? "black" : "white",
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "#8F19E8",
                }),

                indicatorSeparator: () => ({
                  display: "none",
                }),

                indicatorsContainer2: (provided) => ({
                  ...provided,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected
                    ? "#8F19E8"
                    : isLight
                    ? "white"
                    : "#050505",
                  color: state.isSelected
                    ? "white"
                    : isLight
                    ? "#050505"
                    : "white",
                }),
              }}
              value={fontOptions.find((option) => option.value === font)}
              options={fontOptions}
              onChange={handleFontChange}
            />

            <div className="bg-gray-200 w-px h-8"></div>
            <label className="relative flex justify-between items-center ">
              <input
                type="checkbox"
                className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                onChange={handleCheckboxChange}
              />
              <span className="w-[40px] h-[20px] flex items-center flex-shrink-0  p-[3px] bg-meaning-color rounded-full duration-300 ease-in-out peer-checked:bg-purple-custom after:w-[14px] after:h-[14px] after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-1"></span>
            </label>
            {isLight ? (
              <img src={moon} alt="" className="w-[20px]" />
            ) : (
              <img src={purpleMoon} alt="" className="w-[20px]" />
            )}
            <div></div>
          </div>
        </div>
        <form
          className="w-full flex justify-center relative mt-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <div className="">
              <input
                className="bg-gray-200 appearance-none border-2 rounded-xl w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-custom"
                style={{
                  backgroundColor: isLight ? "#F3F4F6" : "#1F1F1F",
                  color: isLight ? "black" : "white",
                  border: isLight ? "" : " 2px solid black",
                }}
                id="searchBar"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search"
              />
            </div>
          </div>
          <img
            id="search_icon"
            src={searchIcon}
            alt=""
            className="w-[15.5px] absolute top-3 right-3 cursor-pointer"
            onClick={handleSubmit}
          />
        </form>

        {!notFound &&
          responseData &&
          responseData.meanings &&
          responseData.meanings.map((meaning, index) => (
            <div key={index}>
              <div id="container1">
                {responseData && (
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <h1
                        id="word"
                        className={`font-${font} text-4xl leading-10 font-[700] ${
                          isLight ? "text-keyboard-color" : "text-white"
                        }`}
                      >
                        {responseData.word}
                      </h1>
                      <h2
                        id="phonetic"
                        className="{`font-${font} font-[400] text-base leading-6 text-purple-custom mt-[8px]"
                      >
                        {responseData.phonetic}
                      </h2>
                    </div>
                    <img
                      src={playIcon}
                      alt=""
                      className="w-[48px]"
                      style={{ cursor: "pointer" }}
                      onClick={playAudio}
                    />
                  </div>
                )}
                <audio ref={audioRef} src={audioUrl} />
              </div>
              <div
                id="noun_div"
                className="flex flex-row items-center gap-[25px] mt-[31px]"
              >
                <h3
                  id="noun"
                  className={`font-${font} font-bold text-base leading-tight ${
                    isLight ? "text-keyboard-color" : "text-white"
                  } italic`}
                >
                  {meaning.partOfSpeech}
                </h3>
                <div
                  id="line"
                  className={`bg-gray-200 h-px w-full ${
                    isLight ? "" : "bg-gray-700"
                  }`}
                ></div>
              </div>
              {responseData && (
                <h3 className="{`font-${font} font-[400] text-sm leading-5 text-meaning-color mt-[31px]">
                  Meaning
                </h3>
              )}
              {meaning.definitions.map((def, index) => (
                <div key={index}>
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
                      className={`font-${font} font-[400] text-xs leading-6 ${
                        isLight ? "text-keyboard-color" : "text-white"
                      } w-[302px]`}
                    >
                      {def.definition}
                    </p>
                  </div>

                  {def.example && (
                    <p className="{`font-${font} font-[400] text-sm leading-6 text-meaning-color pl-6 box-border rounded mt-[13px]">
                      "{def.example}"
                    </p>
                  )}
                  {def.synonyms && def.synonyms.length > 0 && (
                    <div className="flex items-center gap-x-6 mt-[24px]">
                      <h4 className="{`font-${font} font-[400] leading-tight text-meaning-color">
                        Synonyms
                      </h4>
                      <ul className="flex items-center gap-x-4 {`font-${font} font-[700] text-base leading-tight text-purple-custom">
                        {def.synonyms.map((syn, index) => (
                          <li key={index}>{syn}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {def.antonyms && def.antonyms.length > 0 && (
                    <div className="flex items-center gap-x-6 mt-[24px]">
                      <h4 className="{`font-${font} font-[400] leading-tight text-meaning-color">
                        Antonyms
                      </h4>
                      <ul className="flex items-center gap-x-4 {`font-${font} font-[700] text-base leading-tight text-purple-custom">
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

        {notFound && (
          <div className="flex flex-col items-center justify-center mt-6">
            <img src={Emoji} alt="" className="w-[64px] mt-[132px]" />
            <h2 className={`font-${font} font-bold text-2xl leading-6 text-center ${isLight ? "text-keyboard-color" : "text-white"} mt-[44px]`}>
              No Definitions Found
            </h2>
            <h2 className="{`font-${font} mt-[24px] font-normal text-base leading-6 text-meaning-color text-center">
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </h2>
          </div>
        )}

        {responseData && !notFound && (
          <>
            <div className="bg-gray-200 h-px w-full mt-[32px]"></div>
            <footer id="footer" className="mt-[24px]">
              <h2 className="{`font-${font} font-[400] text-sm leading-6 underline text-meaning-color">
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
                    className={`font-${font} font-[400] text-xs leading-none h-17 underline ${
                      isLight ? "text-keyboard-color" : "text-white"
                    }`}
                  >
                    Wiktionary
                  </a>
                  <img
                    src={wikiIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => window.open(url, "_blank")}
                  />
                </div>
              ))}
            </footer>
          </>
        )}
      </div>
    </>
  );
}

export { Landing };
