import React from 'react'
import DomainHeader from '../Components/Domain/DomainHeader'
import DomainName from '../Components/Domain/DomainName'
import DomainPrices from '../Components/Domain/DomainPrices'
import DomainOffers from '../Components/Domain/DomainOffers'
import FreeDomain from '../Components/Domain/FreeDomain'
import HelpCenter from '../Components/Domain/HelpCneter'
import WhyNameCheap from '../Components/Domain/WhyNameCheap'
import DomainFaq from '../Components/Domain/DomainFaq'

function DmainPage() {
  return (
    <div>
      <DomainHeader />
      <DomainName />
      <DomainPrices />
      <DomainOffers />
      <FreeDomain />
      <HelpCenter/>
      <WhyNameCheap/>
      <DomainFaq/>
    </div>
  )
}

export default DmainPage
