import React from 'react';

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="section container">
        <h1 className="text-center mb-4">Portfolio</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/StockAnalyzer.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Stock Analyzer</h5>
                <p className="card-title mb-3 p-2">
                  Website that analyzes a stock to verify if it is
                  a good purchase.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/mandocino/Stock-Analyzer"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://mandoh.pythonanywhere.com/analyzeHomepage"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/backtest.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Stock Strategy Tester</h5>
                <p className="card-title mb-3 p-2">
                  Website that can create stock strategies based on
                  various parameters and backtest how profitable it was
                  using a propiertary library I created.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/mandocino/Trading-Bot-MACD"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://mandoh.pythonanywhere.com/backtestHomepage"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/sectorsearch.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Stock Sector Scanner</h5>
                <p className="card-title mb-3 p-2">
                  Website that scans for all stocks within a specific sector.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/mandocino/Stock-Sector-Search"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://mandoh.pythonanywhere.com/sectorAnalyzeUSA"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/nksdsite.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">
                  Website for Non-Profit Organization
                </h5>
                <p className="card-title mb-3 p-2">
                  Website that was developed for a non-profit organization to
                  educate the public on a Levy Vote.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://test85908.live-website.com/"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/volumescanner.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Stock Volume Scanner</h5>
                <p className="card-title mb-3 p-2">
                  Website that scans stocks which have unusual volume compared
                  to their daily average volume on various exchanges.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/mandocino/Stock-Volume-Scanner"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://mandoh.pythonanywhere.com/volumeUSA"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/cryptodashboard.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Crypto Holdings Dashboard</h5>
                <p className="card-title mb-3 p-2">
                  Website that displays crypto holdings from a connected wallet.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/Cinodevv/CryptoDashboard"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://crypto-dashboard-qjicjjfp7-cinodevv.vercel.app/overviewEthDashboard"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/cryptoapi.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">Crypto Api Platform</h5>
                <p className="card-title mb-3 p-2">
                  Website that displays information regarding cryptocurrencies
                  and news articles.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/Cinodevv/CryptoDashApi"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://crypto-dash-api.vercel.app/"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-dark text-center mb-4">
              <img
                src="/StockAnalyzer.PNG"
                className="card-img"
                alt="Project 1"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center p-0 overlay-content">
                <h5 className="card-title mb-3">...</h5>
                <p className="card-title mb-3 p-2">
                  Analyzes a stock using python to verify if it is a good
                  purchase.
                </p>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/mandocino/Stock-Analyzer"
                    className="text-white"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a
                    href="https://mandoh.pythonanywhere.com/analyzeHomepage"
                    className="text-white"
                  >
                    <i className="fas fa-external-link-alt fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
