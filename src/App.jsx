import { useState } from "react";
import logo from "./assets/logo.svg";
import arrowDown from "./assets/icon-arrow-down.svg";
import moon from "./assets/icon-moon.svg";
import searchIcon from "./assets/icon-search.svg";
import playIcon from "./assets/icon-play.svg";
import wikiIcon from "./assets/icon-new-window.svg";

function App() {
  return (
    <>
      <div id="container" className="box-border pt-6 pl-6 pr-6 pb-21">
        <div id="header" className="flex flex-row justify-between items-center">
          <img id="logo" src={logo} alt="" />
          <div
            id=""
            className="flex flex-row justify-center items-center gap-x-4"
          >
            <h3>Sans Serif</h3>
            <img src={arrowDown} alt="" />
            <div className="bg-gray-200 w-px h-8"></div>

            <input
              class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchChecked"
              checked
            />
            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="flexSwitchChecked"
            ></label>
            <img src={moon} alt="" />

            <div></div>
          </div>
        </div>
        <div id="container1">
          <form class="w-full flex justify-center">
            <div class="w-full">
              <div class="">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value="keyboard"
                />
              </div>
            </div>
            <img src={searchIcon} alt="" />
          </form>
          <div className="flex items-center justify-between">
            <div>
              <h1>keyboard</h1>
              <h2>/ˈkiːbɔːd/</h2>
            </div>
            <img src={playIcon} alt="" />
          </div>
        </div>
        <div id="container2">
          <div id="noun-div" className="flex items-center gap-x-4">
            <h3>noun</h3>
            <div className="bg-gray-200 h-px w-full"></div>
          </div>
          <div id="meaning">
            <h3>Meaning</h3>

            <p id="p-text">
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full"
              ></div>{" "}
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </p>
            <p id="p-text">
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full"
              ></div>{" "}
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </p>
            <p id="p-text">
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full"
              ></div>{" "}
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </p>
          </div>
          <div id="synonyms_div" className="flex items-center gap-x-6">
            <h3>Synonyms</h3>
            <h3>electronic keyboard</h3>
          </div>
        </div>
        <div id="container_3">
          <div id="verb-div" className="flex items-center gap-x-4">
            <h3>verb</h3>
            <div className="bg-gray-200 h-px w-full"></div>
          </div>
          <div id="meaning">
            <h3>Meaning</h3>

            <p id="p-text">
              <div
                id="dot"
                className="bg-purple-custom h-5px w-5px rounded-full"
              ></div>{" "}
              To type on a computer keyboard.
            </p>
            <p id="p-text-add">
              “Keyboarding is the part of this job I hate the most.”
            </p>
          </div>
        </div>
        <div className="bg-gray-200 h-px w-full"></div>
        <footer id="footer">
          <h2>Source</h2>
          <div id="wiki_div" className="flex items-center gap-x-[15px]">
            <a href="https://en.wiktionary.org/wiki/keyboard">Wiktionary</a>
            <img src={wikiIcon} alt="" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
