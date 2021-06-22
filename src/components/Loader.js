import React ,{ useState } from 'react';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
const Loader = (loading) => {
    
    return (
        <div className="sweet-loading">
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}
  
        <HashLoader color={"#60C5FE"} loading={loading} css={override} size={100} />
      </div>
    );
}

export default Loader;

