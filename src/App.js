// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import logo from './image/logo.png';
import img1 from './image/img1.svg';
import img2 from './image/img2.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaGithub, FaTwitter, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <tbody>
      <div className="App">
        <div className='header'>
          <div className='logo'>
            <img src={logo}></img>
          </div>
          <div className='header_info'>
            <ul>
              <li>Docs</li>
              <li>About</li>
              <a href='#'>Support US</a>
            </ul>
          </div>
        </div>
        <div className='h1div'>
          <h1>The Rick and Morty API</h1>
        </div>
        <div className='bg_color'>
          <div className='item'>
            {
              data.map((ele, ind) => {
                return (
                  <>
                    <div className='child'>
                      <img src={ele.image}></img>
                      <div className='child_info'>
                        <h2>{ele.name}</h2>
                        <p><b style={{ color: ele.status === "Alive" ? 'green' : (ele.status === "unknown" ? 'gray' : 'red') }}><GoDotFill /></b>{ele.status}<b>-{ele.species}</b></p>
                        <font>Last know Location:</font>
                        <h5>{ele.origin.name}</h5>
                        <font>Gender:</font>
                        <h5>{ele.gender}</h5>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <footer className='text-center'>
          <div>
            <div className='pb-1'>
              <span className='me-4 s_hover'>CHARACTERS: 826</span>
              <span className='me-4 s_hover'>LOCATIONS: 126</span>
              <span className='s_hover'>EPISODES: 51</span>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <span className='me-2 s_hover'>SERVER STATUS</span>
              <span className='green_icon'></span>
            </div>
            <div className='pt-4'>
              <a className='me-4'><img src={img1}></img></a>
              <a><img src={img2}></img></a>
            </div>
            <div className='pt-4 f_icons'>
              <ul className='d-flex align-items-center justify-content-center'>
                <li className='me-4'><i><FaGithub></FaGithub></i></li>
                <li className='me-4'><i><FaTwitter></FaTwitter></i></li>
                <li className='me-4'><i><FaHeart></FaHeart></i></li>
              </ul>
            </div>
            <div className='last'>
              <span><ul><li><i><FaChevronLeft></FaChevronLeft></i><i><FaChevronRight></FaChevronRight></i></li></ul> </span>
              <span>by <a> Axel Fuhrmann </a> 2024</span>
            </div>
          </div>
        </footer>
      </div>
    </tbody>

  );
}

export default App;
