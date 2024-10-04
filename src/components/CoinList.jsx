import { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom/client";
import { css } from '@emotion/css';
import { coinData } from './coin-data';
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';

const coinListStyle = css`
  padding: 20px;
`;

const coinItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const coinNameStyle = css`
  font-weight: bold;
`;

const priceStyle = css`
  margin-left: 20px;
`;

const CoinList = () => {
  const defaultCoins = useRef([])
  const [coins, setCoins] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      console.log(response)
      
      const data = response.ok ? await response.json() : coinData;
      
      console.log("%c Line:33 🥟 data", "color:#33a5ff", data);
      setCoins(data);
      defaultCoins.current = data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log(coinData)
    fetchData();
  }, []);

  const searchCrypto = (event) => {
    event.preventDefault()
    const newCoins = defaultCoins.current.filter(coin => coin.id.includes(event.target.value) || coin.symbol.includes(event.target.value))
    setCoins(newCoins)
  }

  if(coins.length ===0){
    return <CircularProgress />
  }

  const columns =[
    { field: 'image', headerName: 'Image', width: 100, renderCell: (params) => <img width={20} height={20} src={params.value} />, },
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'total_volume', headerName: 'Total Volume', width: 100 },
  { field: 'current_price', headerName: 'Price', width: 100 },
  { field: 'market_cap_rank', headerName: 'Rank', width: 100 },
  { field: 'low_24h', headerName: 'high 24h', width: 100 },
  { field: 'high_24h', headerName: 'low 24h', width: 100 },
  ]

  const onRowClick = (parameters) => {
    console.log("%c Line:72 🍔 parameters", "color:#33a5ff", parameters);
    navigate(`coins/${parameters.id}/`);
  }

  return (
    <div className={coinListStyle}>
      <ButtonAppBar />
      <div>
      <DataGrid
        rows={coins}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 100]}
        loading={false}
        onRowClick={onRowClick}
      />
      </div>
    </div>
  );
};

export default CoinList;