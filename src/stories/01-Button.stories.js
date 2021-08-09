import React from 'react'

import '../styles/main.scss'

import PageStory from './PageStory'

import { withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions'


export default {
  title: 'Buttons',
  component: PageStory,
  decorators: [withDesign],
  
}

export const Basics = () => {
  return (
    <div className="btn">boton</div>
    
  )
} 
Basics.parameters = {  
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/1GJ22GkdHPztRPU7ZYvtWy/BXvdl-UI-components?node-id=340%3A309',
  },
}