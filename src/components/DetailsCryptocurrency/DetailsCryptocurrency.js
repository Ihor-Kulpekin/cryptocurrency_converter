import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import {useDispatch} from "react-redux";
import {getHistoricalData} from "../../actions/actions";

const DetailsCryptocurrency = () => {
  const dispatch = useDispatch();
  const {location} = useHistory();
  const currency = location.search.split('=');
  console.log(currency[1]);

  const fetchHistoricalData = ()=>{
    dispatch(getHistoricalData(currency[1]))
  };

  useEffect(fetchHistoricalData,[currency[1]]);

  return (
    <div style={{backgroundColor:'black',width:'100%',height:'150px'}}>
      <p>sdasdsdas</p>
    </div>
  )
};

export default DetailsCryptocurrency;