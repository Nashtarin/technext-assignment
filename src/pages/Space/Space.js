import React, { useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpace} from '../../redux/slices/spaceSlice';
import i4 from '../../images/i4.jpg'
import i3 from '../../images/i3.jpg'
import i2 from '../../images/i2.jpg'
import i1 from '../../images/i1.jpg'
import SingleCard from './SingleCard/SingleCard';

const Space = () => {
    const data=useSelector((state)=>state.spaces.data)
    console.log(data)
    
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(fetchSpace())

    },[])
    return (
       <>
       <div>
       <Carousel>
  <Carousel.Item interval={1000}>
    <img
    style={{height:"300px"}}
      className="w-100 img-thumbnail"
      src={i1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    style={{height:"300px"}}
      className="w-100 img-thumbnail"
      src={i2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{height:"300px"}} className="w-100 img-thumbnail"
      src={i3}
      alt="Third slide"
    />
  
  </Carousel.Item>

</Carousel>
       </div>
       <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
       


{data.length === 0 ? <Spinner style={{ marginLeft: "500px" }} animation="border" variant="primary" /> : data.map(space => <SingleCard key={space.flight_number}
    spaceData={space}></SingleCard>)}


</div>
       
       </>
    );
};

export default Space;