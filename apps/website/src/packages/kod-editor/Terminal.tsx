import React, { useState } from 'react'
import KodLayout from 'kod-layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export type OutputTab = {
  name: string;
  element: React.ReactElement;
}


const Terminal = () => {
  return (
    <KodLayout.Tab>
      <div className='card'>
        <Tabs>
          <TabList className={"tabs tabs-boxed justify-between items-center shadow-md"}>
            <div>
              <Tab selectedClassName="tab-active" className={"tab"}>Konsol</Tab>
              <Tab selectedClassName="tab-active" className={"tab"}>Test Case</Tab>
            </div>
            <div className='flex items-center space-x-2'>
              <button className='btn btn-sm'>Çalıştır</button>
              <button className='btn btn-sm btn-primary'>Testleri Başlat</button>
              <button className='btn btn-success btn-sm' disabled>Gönder</button>
            </div>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </KodLayout.Tab>
  )
}

export default Terminal