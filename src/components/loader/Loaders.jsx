import React from 'react';
import { FallingLines } from 'react-loader-spinner';

export function LinesLoader() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
      />
    </div>
  );
}