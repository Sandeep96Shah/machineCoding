import React from 'react'
import List from './list'

const VirtualizedList = () => {
    const lists = Array.from({length: 100000}, (_, index) => `Item - ${index + 1}`)
  return (
    <div>
        <List height={400} width={300} itemHeight={35} list={lists} />
    </div>
  )
}

export default VirtualizedList