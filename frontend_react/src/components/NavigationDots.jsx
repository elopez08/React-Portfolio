import React from 'react'

const NavigationDots = ( { active } ) => {
  return (
    <div className = "app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a 
            href = {`#${item}`}
            className = "app__navigation-dot"
            key={item + index}
            style={active === item ? {backgroundColor: '#313BAC' }: {} }
            
            />
        ))}        
    </div>
  )
}

export default NavigationDots