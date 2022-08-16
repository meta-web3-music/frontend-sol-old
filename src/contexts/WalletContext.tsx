import React, { useState } from "react";

const WalletContext = React.createContext();

function WalletProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
