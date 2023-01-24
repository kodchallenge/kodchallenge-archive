import React from 'react'
import KodLayout from 'kod-layout'
import KodMarkdown from 'kod-markdown'

const ProblemDescription = () => {
  return (
    <KodLayout.Tab id='description-area' style={{ overflow: "auto !important" }}>
      <div className='p-10'>
        <KodMarkdown fromUrl='/assets/test/sample.md' theme='dark' />
      </div>
    </KodLayout.Tab>)
}

export default ProblemDescription