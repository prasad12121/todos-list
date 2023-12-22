import React, { useState } from 'react'

const  NotificationCard = ()=> {

    const [notificationNumber,setNotificationNumber]=useState(1);

  return (
    <div>
        { notificationNumber >=1 &&(
      <p>notificationNumber is {notificationNumber}</p>
      ) }
    
    </div>
  )
}

export default NotificationCard
