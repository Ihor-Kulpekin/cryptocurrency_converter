import React, {useEffect} from 'react';
import './App.css';
import './css/style.css'
import {useDispatch, useSelector} from "react-redux";
import {messageSocket} from "./actions/actions";

function App() {
  const {cryptocurrencies} = useSelector((state)=>state.cryptocurrencies);
  const dispatch = useDispatch();

  const socketOpen = ()=>{
    dispatch(messageSocket());
  };

  useEffect(socketOpen,[]);

  return (
    <div className="App">
      {console.log(cryptocurrencies)}
      <p>Add a little style!.</p>
    </div>
  );
}

export default App;
