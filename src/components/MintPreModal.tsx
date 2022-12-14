import React, { useState } from "react";
import {Typography,Button} from 'antd'

const {Title, Text} = Typography;

interface PropShape{
  setDisplayModal: () =>void
}

const MintPreModal: React.FC<PropShape> = ({ setDisplayModal }) => {
  

  return (
    <div style = {{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 15px', margin:'1em',borderRadius:'10px',border:'1px solid #e5e5e5e5'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Title style={{margin:'0'}} level={5} className="font-medium">Mint Song NFT</Title>
        <Text>
          Get paid for all songs uploaded to our platform
        </Text>
      </div>
      <Button
       type="primary"
        shape='round'
        onClick={setDisplayModal}
      >
        Mint Song NFT
      </Button>
    </div>
  );
}

export default MintPreModal;
