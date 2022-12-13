import React from 'react'
import { Download,Features,SectionWrapper } from './components'
import assets from './assets'
const App = () => {
  return (
    < >
      <SectionWrapper 
        title="Your own store of Nifty NFTs. Start Growing & Selling."
        description="Buy, store and collect NFTs, exchange and earn crypto. Join people using this marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner = "banner"
      />
      </>
  )
}

export default App