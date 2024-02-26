import React from 'react'
import SbLayerAccounts from './sb-layer-accounts'
import SbLayerCategories from './sb-layer-categories'

const SidebarLayer = (props) => {
  return (
    <div className={`sidebar-layer ${props.focusStatus}`} >
        
        <SbLayerAccounts />

        <SbLayerCategories />
        {/* 
        
        Accounts component at the top which contains;
        1. Image of the account
        2. User name 
        3. Change user button

        */}

        {/* 

            Categories component that has all the categories
            along with a scroll bar

        */}

    </div>
  )
}

export default SidebarLayer