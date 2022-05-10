import React, { useEffect, useState } from 'react';
import { Button, Carousel, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpace} from '../../redux/slices/spaceSlice';
import i4 from '../../images/i4.jpg'
import i3 from '../../images/i3.jpg'
import i2 from '../../images/i2.jpg'
import i1 from '../../images/i1.jpg'
import SingleCard from './SingleCard/SingleCard';

const Space = () => {
    const data=useSelector((state)=>state.spaces.data)
   //  console.log(data)
    
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(fetchSpace())

    },[])
    const [input,setInput]=useState('')
    const [searchbyRocket,setSearchbyRocket]=useState(false)
    const [searchresult,setSearchResult]=useState([])
    const handleInput=e=>{
       const rocket=e.target.value
      //  console.log(rocket)
       setInput(rocket)
    }
    console.log(input)
    const search=()=>{
       const searchresult=data.filter(result=>result.rocket.rocket_name.toLowerCase()===input.toLowerCase())
       setSearchResult(searchresult)
       setSearchbyRocket(true)

    }
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
       <div>
          <h4 className="text-primary mt-3">Search By Rocket Name</h4>
          <InputGroup className="mb-3 w-75 mx-auto">
    <FormControl
      placeholder="Search by Rocket Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onBlur={handleInput}
    />
    <Button onClick={search} variant="primary" id="button-addon2">
      Search
    </Button>
  </InputGroup>
       </div>
       <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
       


{searchbyRocket?searchresult.map(space => <SingleCard 
    spaceData={space}></SingleCard>):data.map(space => <SingleCard 
    spaceData={space}></SingleCard>)}


</div>
       
       </>
    );
};

export default Space;