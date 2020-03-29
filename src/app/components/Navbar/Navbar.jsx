import React from 'react';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser, logOut } from './../../store/reducers/user/userSlice';
import { removeLocation } from './../../store/reducers/location/locationSlice';

export default function Navbar (props) {
  const dispatch = useDispatch();
  let token = useSelector(selectToken);
  let user = useSelector(selectUser);
  return (
    <nav className={props.className}>
      <ul className="list">
        <li className="nes-text is-primary list-item"><a className="nes-pointer" href="/findr">findr</a></li>
        {user ? <li className="nes-text list-item">{user.username}</li> : false}
        {token ? <li className="nes-text is-error list-item"><button className="logout-button" onClick={()=>{ dispatch(logOut()); dispatch(removeLocation())}}>logout</button></li> : false}
      </ul>
    </nav>
  )
}