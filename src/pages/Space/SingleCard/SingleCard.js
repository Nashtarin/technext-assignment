import React from 'react';

const SingleCard = ({spaceData}) => {
    console.log(spaceData)
    return (
        <div className="col">

        <div className="card border border-primary rounded-3 shadow  product h-100">
            {/* <img src={img} className="card-img-top" alt="..." /> */}
            <div className="card-body">

                <h4  className="card-title text-primary fw-bold">{spaceData.mission_name}</h4>
                {/* <p className="card-text">{description}</p> */}
                {/* <h4 style={{ color: 'hotpink' }} className="fw-bold">Price:${price}</h4> */}
                {/* <Link to={`/products/${_id}`}>
                    <Button style={{ backgroundColor: "hotpink", border: "2px solid purple" }} className="text-white fw-bold ">Purchase</Button>
                </Link> */}
            </div>
        </div>

    </div>
    );
};

export default SingleCard;