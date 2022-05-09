import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpace} from '../../redux/slices/spaceSlice';

const Space = () => {
    const data=useSelector((state)=>state.spaces.data)
    console.log(data)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(fetchSpace())

    },[])
    return (
        <div>
            <h1>It's space</h1>
        </div>
    );
};

export default Space;