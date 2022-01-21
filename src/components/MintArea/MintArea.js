import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import Socials from "../Socials/Socials";
import "./mintArea.css";
import { FormText, Button, Image, Card } from "react-bootstrap";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Welcome to the club! the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="container">
      <div className="nftData">
        <Card className="charityInfo">
          <FormText className="text1"> 
          <h1> Our Goal </h1>
            Our goal with The IIC is create an ongoing community driven story
            arch that will span from collection to collection! With a rich lore
            and storyline we can take our infants ANYWHERE! We are committed to
            our community and doing things naturally! We want our growth to be
            real and genuine! The main purpose of The IIC is not only to foster
            an AMAZING community but to also give back to those in need! 10% of
            each phase sales will go to The Children's Miracle Network, that
            works directly with Children's Hospitals!
          </FormText>
        </Card>
        <br></br>
        <Card className="charityInfo1">
          <h1>📓 COLORING BOOKS 📓</h1>
          <p>
             With such a rich backstory and almost
            unlimited amount of characters to choose from we will be creating
            our very own IMMATURE INFANT COLORING BOOKS! - They will be made
            from YOUR infants and aside from each token holder receiving a book
            we will be donating 1 book for each holder to the Children's
            Hospital where we will personally hand them out to kids! - We will
            release a book for each of our future collections!
          </p>
          <br></br>
          <FormText> MINT BELOW </FormText>
        </Card>
        <Image src={"/config/images/bg3.png"} className="logo" />
        <Card>
          <div>
            <Socials />
          </div>
          <FormText className="mintNumber">MINT COUNT:</FormText>
          <br></br>
          <FormText className="mintNumber">
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </FormText>
          <p className="mintNumber3">
            <a target={"_blank"} href={CONFIG.SCAN_LINK}>
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </a>
          </p>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <p>The sale has ended.</p>
              <p>You can still find {CONFIG.NFT_NAME} on</p>
              <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </a>
            </>
          ) : (
            <>
              <FormText className="mintNumber">
                1 {CONFIG.SYMBOL} costs {CONFIG.DISFormTextLAY_COST}
                {"6 "}
                {CONFIG.NETWORK.SYMBOL}
              </FormText>
              <br></br>
              <FormText className="mintNumber2">Excluding gas fees.</FormText>
              <br></br>
              <FormText className="mintNumber5">
                DUE TO NETWORK ISSUES PLEASE SET PRIORITY TO MEDIUM OR HIGH FOR
                MINTING
              </FormText>
              <br></br>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <div>
                  <FormText className="mintNumber2">
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </FormText>
                  <br></br>
                  <Button
                    className="mintButton"
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT YOUR WALLET
                  </Button>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <p>{blockchain.errorMsg}</p>
                    </>
                  ) : null}
                </div>
              ) : (
                <>
                  <FormText>{feedback}</FormText>
                  <div>
                    <Button
                      className="mintButton2"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </Button>
                    <p>{mintAmount}</p>
                    <Button
                      className="mintButton2"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="mintButton"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "INCUBATING INFANT" : "MINT"}
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </Card>
      </div>
      <Card className="polyInfo">
        <FormText className="mintNumber3">
          Please make sure you are connected to the right network (
          {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
          Once you make the purchase, you cannot undo this action.
        </FormText>
        <p className="mintNumber3">
          We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
          successfully mint your NFT. We recommend that you don't lower the gas
          limit.
        </p>
        <br></br>
        <FormText className="mintNumber4">The Immature Infants Club©</FormText>
      </Card>
    </div>
  );
}

export default App;
