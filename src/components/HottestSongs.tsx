import React, { useState } from "react";
import MintPreModal from "./MintPreModal";
import MintModal from "./MintModal";
import { FaCaretDown } from "react-icons/fa";

const HottestSongs: React.FC = () => {
  const [displayModal, setDisplayModal] = useState(false);

  // function to handle toggling of minting modal
  const handleModal = () =>{
    setDisplayModal(!displayModal);
  }

  const handleMintForm = (formData:Object) =>{
    
    // query IPFS and store music
    // take back returned music CID
    // create an object payload, stringify and pass as argument to contract function
    console.log(formData);

    // close modal
    handleModal()
  }
  

  return (
    <div className="flex flex-col align-center justify-center w-full md:w-4/5 lg:w-2/3 m-2 md:m-auto px-2 text-left">
      <h2 className="text-2xl font-bold">Hottest Songs</h2>
      <h4>Place your ads under the hottest songs</h4>
      <MintPreModal setDisplayModal={setDisplayModal} />
      <MintModal
        onHandleModal={handleModal}
        onHandleMintForm={handleMintForm}
        isVisible = {displayModal}
      />
      <div className="flex flex-row align-center">
        <span>Filter by:</span>
        <form>
          <select>
            <option value="1ETH">1ETH and under</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default HottestSongs;