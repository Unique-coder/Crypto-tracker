import "./Token.css";

const Token = ({ coin }) => {
  return (
    <div>
      <div className="coin_page">
        <div className="coin_container">
          <img src={coin.image.large} alt={coin.name} className="coin_image" />
          <h1 className="coin_name">{coin.name}</h1>
          <p className="coin_ticker">{coin.symbol}</p>
          <p className="coin_current">{coin.market_data.current_price.usd}</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
