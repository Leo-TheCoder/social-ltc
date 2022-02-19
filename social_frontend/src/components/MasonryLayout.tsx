import React from 'react';
import Masonry from 'react-masonry-css';
import { IPins } from '../types/pin.interface';
import Pin from './Pin';

const breakPointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1500: 4,
    1250: 3,
    1000: 2,
    500: 1,
}


const MasonryLayout: React.FC<IPins> = ({pins}) => {
  return (
    <Masonry className='flex animate-slide-fwd' breakpointCols={breakPointObj}>
        {pins?.map((pin) => <Pin key={pin._id} pin={pin}/>)}
    </Masonry>
  )
}

export default MasonryLayout