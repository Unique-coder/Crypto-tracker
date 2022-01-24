import "./Coin.css";

const Coin = ({ coin }) => {
  const {
    name,
    current_price,
    symbol,
    total_volume,
    market_cap,
    image,
    price_change_percentage_24h,
  } = coin;
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${current_price}</p>
          <p className="coin-volume">${total_volume.toLocaleString()}</p>

          {price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
