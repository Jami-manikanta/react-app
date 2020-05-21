import React, { Component } from 'react'

class StoryBookExample extends Component {
   render() {
      return (
         <div>
            <button className='text-xl'>click me</button>
         </div>
      )
   }
}

export default { title: 'StoryBookExample' }

export const button = () => <StoryBookExample />
