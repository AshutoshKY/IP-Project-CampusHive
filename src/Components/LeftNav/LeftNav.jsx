import React from 'react';
import { Avatar, Button } from '@chakra-ui/react';
import './LeftNav.css';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { TiHome } from 'react-icons/ti';
import { MdNotifications, MdNotificationsNone } from 'react-icons/md';
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiFileListLine, RiFileListFill } from 'react-icons/ri';
import { LeftNavContext } from '../../Context/LeftNavContext';
import { useNavigate } from 'react-router-dom';
import logo from '../logos/logooo.png';
const Base_Url = process.env.Base_Url;

export default function Left() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [logoutPopUp, setLogoutPopUp] = React.useState(false);
  const navigate = useNavigate();
  const { home, noti, book, story, handleClick, user, setUser } = React.useContext(LeftNavContext);
  const [loggedUser, setLoggedUser] = React.useState(user);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }
  const getUser = async (token) => {
    try {
      token = token || localStorage.getItem('token');
      let res = await fetch(`${Base_Url}/getUser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token
        }
      });
      let user = await res.json();
      setLoggedUser(user);
      setUser(user);
      // console.log(user);
    } catch (error) {
      console.log(error)
    }
  }


  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser(localStorage.getItem('token'))
    }
  }, [])
  return (
    <div className="left">
      <div className="mid">
        <div className="tem0">
          <Link to="/homepage">
            <h1 style={{ fontSize: "35px" }}>Campus</h1>
            <h1>Hive</h1>
            {/* <h5>For YOU!!</h5> */}
          </Link>
        </div>
        <div className="tem1">
          <Link to="/homepage">
            {home ? (
              <TiHome
                size={30}
                title='Home'
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  handleClick('home');
                }}
              />
            ) : (
              <VscHome
                size={30}
                title='Home'
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  handleClick('home');
                }}
              />
            )}

          </Link>
        </div>
        <div className="tem1">
          <Link to="/story">
            {!story ? (
              <RiFileListLine
                size={30}
                title='Stories'
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  handleClick('story');
                }}
              />
            ) : (
              <RiFileListFill
                size={30}
                title='Stories'
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  handleClick('story');
                }}
              />
            )}
          </Link>
        </div>
        <div className="tem1">

          <Link to="/create">
            <FiEdit size={30} style={{ marginLeft: "10px" }} title='Create' />
          </Link>
        </div>
      </div>

      <hr style={{ backgroundColor: "gray", borderColor: "gray", marginRight: "20px", marginLeft: "-30px", marginBottom: "30px" }} />


      <div className="tem1">
        {' '}
        <Link to="/">
          {' '}
          {!noti ? (
            <MdNotificationsNone
              size={30}
              title='Notifications'

              onClick={() => {
                openInNewTab('https://punjab.chitkara.edu.in/');
              }}
            />
          ) : (
            <MdNotifications
              size={30}
              title='Notifications'
              onClick={() => {
                openInNewTab('https://punjab.chitkara.edu.in/');
              }}
            />
          )}
        </Link>
      </div>

      <div className="tem1">
        <Link to="/">
          {!book ? (
            <BsBookmarks
              size={30}
              title='BookMarks'
              onClick={() => {
                openInNewTab('https://app.joinsuperset.com');
              }}
            />
          ) : (
            <BsBookmarksFill
              size={30}
              title='BookMarks'
              onClick={() => {
                openInNewTab('https://app.joinsuperset.com');
              }}
            />
          )}
        </Link>
      </div>

      <div className='tem1'>
        <img src='https://raw.githubusercontent.com/bytedance/IconPark/8dc132da4c85671ba6a5962c87aa2bdafbf158e9/source/Hardware/camera-one.svg'
          onClick={() => {
            openInNewTab('http://localhost:5173/');
          }} alt='VideoCall' style={{ marginLeft: "-4.5px", width: "40px", height: "40px", marginBottom: "0px" }}>

        </img>

        <img src='https://raw.githubusercontent.com/bytedance/IconPark/8dc132da4c85671ba6a5962c87aa2bdafbf158e9/source/Abstract/halo.svg'
          onClick={() => { openInNewTab ('https://chitkara.edu.in/');}} 
            alt='News' style={{ marginLeft: "-4.5px", width: "40px", height: "40px", marginTop: "50px" }}>

        </img>
      </div>

      <div>
        <Avatar
          marginLeft={'0.7vh'}
          marginTop={'10vh'}
          // w={'2.5vw'}
          // h={'5vh'}
          style={{ cursor: 'pointer' }}
          name={loggedUser ? loggedUser.name : ''}
          src={loggedUser ? loggedUser.avatar : ''}
          onClick={() => { setLogoutPopUp(!logoutPopUp) }}
        ></Avatar>
      </div>
      {
        logoutPopUp ? (<div style={{ position: "absolute", bottom: "43px", left: "87px" }}>
          <Button onClick={handleLogout}>Logout</Button>
        </div>) : null
      }
    </div>
  );
}
