import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import {getHistoricalData} from '../../actions/actions';
import  '../global.scss';
import GraphicCryptocurrency from './GraphicCryptocurrency';

const DetailsCryptocurrencyContainer = () => {
  const dispatch = useDispatch();
  const {historicalData} = useSelector((state) => state.historicalData);
  const {id} = useParams();

  const fetchHistoricalData = () => {
    dispatch(getHistoricalData(id))
  };

  useEffect(fetchHistoricalData, [id]);

  return (
    <div className="wrapper">
      <GraphicCryptocurrency historicalData={historicalData}/>
    </div>
  )
};

export default DetailsCryptocurrencyContainer;