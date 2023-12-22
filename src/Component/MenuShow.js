
//Load Local Data
import React from 'react'
import { menuData } from './menuData'
import NavigationButton from './NavigationButton'

const MenuShow = () => {
  return (
    <>
     <button>
     {
      menuData.map((data, index) => {
          return (
            <NavigationButton
              key={index}
              image={data.image}
              title={data.title}
            />
          );
        })}
     </button>
    </>
  )
}

export default MenuShow