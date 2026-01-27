import React from 'react'
import WordlPressHeader from '../Components/WorldPress/WordlPressHeader'
import HighRatedWp from '../Components/WorldPress/HighRatedWp'
import Rating from '../Components/WorldPress/Rating'
import FastHosting from '../Components/WorldPress/FastHosting'
import OptimizedHosting from '../Components/WorldPress/OptimizedHosting'
import HostingWP from '../Components/WorldPress/HostingWP'
import HomeDomain from '../Components/WorldPress/HomeDomain'
import BeleivePrice from '../Components/WorldPress/BeleivePrice'

function WorldPress() {
  return (
    <div>
      <WordlPressHeader />
      <HighRatedWp/>
      <Rating/>
      <FastHosting/>
      <OptimizedHosting/>
      <HostingWP/>
      <HomeDomain/>
      <BeleivePrice/>
    </div>
  )
}

export default WorldPress
