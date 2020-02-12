import React from "react";
import Box from "@material-ui/core/Box";
import styled from 'styled-components';


const CardWrapper = styled.div`
    border: 1px red solid;
    width: 300px; 
    height: 100px; 
    margin: 20px;
    display: inline-box;
    box-shadow:  19px 16px 50px -21px rgba(0,0,0,0.35);;
`

export default function GameCard(props) {
  return (
    <CardWrapper>
      <Box display="flex" p={1} flexWrap="nowrap">
        <div style={{ margin: "1px black solid" }}>Teeeeste</div>
      </Box>
    </CardWrapper>
  );
}
