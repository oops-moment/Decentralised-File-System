import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload.js";
import Display from "./components/Display.js";
import Modal from "./components/Modal.js";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Provider helps us to read the data from blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []); // Automatically opens the metamask account as soon as the dapp runs
        const signer = provider.getSigner(); // Allows to write into blockchain
        const address = await signer.getAddress(); // Gets the adress of the account
        setAccount(address);
        let contractAddress = " 0x5FbDB2315678afecb367f032d93F642f64180aa3";

        // creating an instance of the contract
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
      <div className="App">
        <h1 style={{ color: "white" }}>Imagedrive 3.0</h1>

        <div class="wave"></div> {/* The three divs are on the purpose of background */}
        <div class="wave"></div>
        <div class="wave"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
      </div>
    </>
  );
}

export default App;
