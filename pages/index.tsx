import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/css/homepage.module.scss";

function Index() {
  const [activeButton, setActiveButton] = useState<string>("button1");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="home-img">
        {/* <img src="/images/HomeBanner.jpg" alt="home-img.jpg" /> */}
      </div>
      {/* <div className="home-text-block">
        <div home-txt>
          <h1>Hundreds of Flavors Under One Roof</h1>
          <h3>Something Hot. Something Spicy.</h3>
        </div>
        <div className="order-btn-block">
          <Link href="/order-now" style={{textDecoration:"none"}}>
            <button className="btn-order-now">
              Order Now <KeyboardDoubleArrowRightOutlinedIcon />
            </button>
            <button
              className={`${styles.button} ${
                activeButton === "button2" ? styles.active : ""
              }`}
              style={{
                backgroundColor:
                  activeButton === "button2" ? "blue" : "initial",
              }}
              onClick={() => handleClick("button2")}
            >
              SELL BTC
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom:"20px"
            }}
          >
            <div
              style={{
                color: "white",
                border: "1px solid grey",
                borderRight: "none",
                fontSize: "10px",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              INSTANT TRADE
            </div>
            <div
              style={{
                color: "white",
                border: "none",
                fontSize: "10px",
                padding: "2px 20px",
                backgroundColor: "rgb(7 87 115)",
              }}
            >
              INSTANT TRADE
            </div>
          </div>
          <div className={styles.content_container}>
            <div
              id="content1"
              className={`${styles.content} ${
                activeButton === "button1" ? styles.active : ""
              }`}
            >
              <div>
                <div style={{ gap: "10px" }}>
                  <div>Amount</div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      gap: "10px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ flex: "1", position: "relative" }}>
                      <input type="text" style={{ width: "100%" }} />
                      <div
                        style={{
                          position: "absolute",
                          right: "1px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "grey",
                        }}
                      >
                        BTC
                      </div>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>-</span>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div style={{ gap: "10px" }}>
                  <div>Price</div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      gap: "10px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ flex: "1", position: "relative" }}>
                      <input type="text" style={{ width: "100%" }} />
                      <div
                        style={{
                          position: "absolute",
                          right: "1px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "grey",
                        }}
                      >
                        BTC
                      </div>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>-</span>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1", position: "relative" }}>
                  <div>Total</div>
                  <input type="text" style={{ width: "97%" }} />
                  <div
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      color: "grey",
                    }}
                  >
                    INR
                  </div>
                </div>
              </div>
              <div>
                <button
                  className={`${styles.buttonB} `}
                  style={{
                    backgroundColor: "green",
                    border: "none",
                    padding: "15px 40px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "100px",
                    cursor: "pointer",
                    marginTop: "30px",
                    color: "white",
                  }}
                  onClick={() => handleClick("button1")}
                >
                  Buy BTC
                </button>
              </div>
            </div>
            <div
              id="content2"
              className={`${styles.content} ${
                activeButton === "button2" ? styles.active : ""
              }`}
            >
              <div>
                <div style={{ gap: "10px" }}>
                  <div>Amount</div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      gap: "10px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ flex: "1", position: "relative" }}>
                      <input type="text" style={{ width: "100%" }} />
                      <div
                        style={{
                          position: "absolute",
                          right: "1px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "grey",
                        }}
                      >
                        BTC
                      </div>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>-</span>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div style={{ gap: "10px" }}>
                  <div>Price</div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      gap: "10px",
                      paddingBottom: "20px",
                    }}
                  >
                    <div style={{ flex: "1", position: "relative" }}>
                      <input type="text" style={{ width: "100%" }} />
                      <div
                        style={{
                          position: "absolute",
                          right: "1px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "grey",
                        }}
                      >
                        BTC
                      </div>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>-</span>
                    </div>
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        padding: "0px 10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1", position: "relative" }}>
                  <div>Total</div>
                  <input type="text" style={{ width: "97%" }} />
                  <div
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      color: "grey",
                    }}
                  >
                    INR
                  </div>
                </div>
              </div>
              <div>
                <button
                  className={`${styles.buttonB} `}
                  style={{
                    backgroundColor: "red",
                    border: "none",
                    padding: "15px 40px",
                    borderRadius: "5px",
                    width: "100%",
                    marginBottom: "100px",
                    cursor: "pointer",
                    marginTop: "30px",
                    color: "white",
                  }}
                  onClick={() => handleClick("button1")}
                >
                  Sell BTC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Index;
