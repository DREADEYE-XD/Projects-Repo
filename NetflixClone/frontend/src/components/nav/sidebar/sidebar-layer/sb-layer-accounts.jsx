import React from 'react'

const SbLayerAccounts = () => {
  return (
    <div className='sb-layer-accounts'>
        <div className="user-cont">
        <img src="./images/userAvatar.png" alt="" cla0ssName="userAvatar" height='48' width='48' />
        <h3 className="userName">John</h3>
        </div>
        <button id='switch-user' >
            <img src="./icons/oppositeArrows.png" alt="" height='20' width='20' />
        </button>
    </div>
  )
}

export default SbLayerAccounts