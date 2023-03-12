import React from "react";
import "./Sidebarr.css";
import logo from "../images/logo.png";
import slide1 from "../images/slide1.jpg";
import plyicon from "../images/plyicon.jpg"
import ft from "../images/ft.jpg"

import { AiOutlineInstagram } from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {MdOutlineFacebook} from 'react-icons/md';
import {MdArrowBackIosNew} from 'react-icons/md';
import {MdArrowForwardIos} from 'react-icons/md';

import {BiHome} from 'react-icons/bi';
import {CiSearch} from 'react-icons/ci';
import {BiLibrary} from 'react-icons/bi';
import {BsPlusSquare} from 'react-icons/bs';
import {CgHeart} from 'react-icons/cg';

export default function Sidebarr() {
  return (
    <div class="sidebar">
      <div class="aside">
        <img src={logo} alt="missing image" />
        <ul>
          <div class="toplink">
            <li>
              <a href="#" class="flex "><span><BiHome/></span>Home</a>
            </li>
            <li>
              <a href="#" class="flex"><span><CiSearch/></span>Search</a>
            </li>
            <li>
              <a href="#" class="flex"><span><BiLibrary/></span>Your Library</a>
            </li>
          </div>
          <div class="midlink">
            <li>
              <a href="#" class="flex"><span><BsPlusSquare/></span>Create Playlist</a>
            </li>
            <li>
              <a href="#" class="flex"><span><CgHeart/></span>Liked Songs</a>
            </li>
          </div>
        </ul>

        <div class="downlink">
          <a>Legal</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>privacy center</a>
          &nbsp;&nbsp;&nbsp;&nbsp; <a>Privacy Policy</a> <br />
          <br />
          <a>Cookies</a>&nbsp;&nbsp;&nbsp;&nbsp; <a>About Adds</a>
          <br />
          <br />
          <a>Cookies</a>
        </div>
        <div class="downbtn">
          <button>English</button>
        </div>
      </div>

      <div class="container">
        <div class="navigation">

        <div class="arowwicon">
        <a href="#"><span><MdArrowBackIosNew/></span></a><a href="#"><span><MdArrowForwardIos/></span></a>
        </div>

           
               <div className="lastlink">
            <a href="#"> <b>Premium</b></a>
            <a href="#"> <b>Support</b></a>
            <a href="#"> <b>Download</b></a>
            </div>
            

          <div class="signup">

            <a href="#">
              <b>Sign up</b>
            </a>
          </div>
          <div class="login">
            <a href=""><b>Log in</b></a>
          </div>
        </div>

        <div class="contain">
          <div class="shower">
            <a href="#">
              {" "}
              <h1 class="focus">
                <b>Focus</b>
              </h1>
            </a>
            <a href="">
              {" "}
              <h4>Show all</h4>
            </a>
          </div>

          <div class="slides">
            
            <div class="slide1 n">
            <a href="#">
              <div class="hoverimg">
              <img class="ft" src={ft} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>

              <h3>
                <b>Peaceful Piano</b>
              </h3>
              <p>Relax and indugle with</p>
              <p>beautifu piano pieces</p>
              </a>
            </div>
            
            <div class="slide2 n">
                <a href="#">

              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>
              <h3>
                <b>Peaceful Piano</b>
              </h3>
              <p>Relax and indugle with</p>
              <p>beautifu piano pieces</p>
              </a>
            </div>
            <div class="slide3 n">
            <a href="#">
              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>
              <h3>
                <b>Peaceful Piano</b>
              </h3>
              <p>Relax and indugle with</p>
              <p>beautifu piano pieces</p>
              </a>
            </div>
            <div class="slide4 n">
            <a href="#">
              
            <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>
              <h3>
                <b>Peaceful Piano</b>
              </h3>
              <p>Relax and indugle with</p>
              <p>beautifu piano pieces</p>
              </a>
            </div>
          </div>

          <div>
            <div class="shower">
              <a href="#">
               
                <h1 class="focus">
                  <b>SpotifyPlaylists</b>
                </h1>
              </a>
              <a href="">
               
                <h4>Show all</h4>
              </a>
            </div>

            <div class=" slides">
              <div class="slide1 n down">
              <a href="#">
              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>

                <h3>
                  <b>Peaceful Piano</b>
                </h3>
                <p>Relax and indugle with</p>
                <p>beautifu piano pieces</p>
                </a>
              </div>
              <div class="slide2 n">
              <a href="#">
              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>
                <h3>
                  <b>Peaceful Piano</b>
                </h3>
                <p>Relax and indugle with</p>
                <p>beautifu piano pieces</p>
                </a>
              </div>
              <div class="slide3 n">
              <a href="#">
              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>
                <h3>
                  <b>Peaceful Piano</b>
                </h3>
                <p>Relax and indugle with</p>
                <p>beautifu piano pieces</p>
                </a>
              </div>
              <div class="slide4 n">
              <a href="#">
              <div class="hoverimg">
              <img class="slideimg" src={slide1} />
              <div class="plyicon"><img  src={plyicon} /></div>
              </div>

                <h3>
                  <b>Peaceful Piano</b>
                </h3>
                <p>Relax and indugle with</p>
                <p>beautifu piano pieces</p>
                </a>
              </div>
            </div>

            <div class="down-contain">

                <div class="downcontain1" > 
                 <h2 class="Company"><b>Company</b></h2>
                 <a href="#"><h4 class="h">About</h4></a>
                 <a href="#"> <h4 class="h">Jobs</h4></a>
                 <a href="#"> <h4 class="h">For the Records</h4></a>
                </div>
               
                <div class="downcontain1" >
                <h2 class="Company"><b>Communities</b></h2>
                <a href="#"><h4 class="h">For Artists</h4></a>
                <a href="#"><h4 class="h">Developers</h4></a>
                <a href="#"><h4 class="h">Advertising</h4></a>
                <a href="#"><h4 class="h">Investors</h4></a>
                <a href="#"><h4 class="h">Vendors</h4></a>
                
                </div>

                <div class="downcontain1">
                <h2 class="Company"><b>Useful links</b></h2>
                <a href="#"><h4 class="h">Support</h4></a>
                <a href="#"><h4 class="h">Free MobileApp</h4></a>
                </div>

                <div class="downcontain1 icon">
                    <span class="iconssss"><AiOutlineInstagram/></span>  <span class="iconssss"><FiTwitter/></span>
                    <pan class="iconssss"><MdOutlineFacebook/></pan>
                </div>

            </div>

            <hr />

            <div class="footer">
           <p>&copy;2023Spotify AB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
