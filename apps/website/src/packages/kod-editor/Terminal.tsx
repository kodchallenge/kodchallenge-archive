import React, { useState } from 'react'
import KodLayout from 'kod-layout'

export type OutputTab = {
  name: string;
  element: React.ReactElement;
}


const Terminal = () => {
  return (
    <KodLayout.Tab>
      <div className='card'>

      </div>
    </KodLayout.Tab>
  )
}

export default Terminal