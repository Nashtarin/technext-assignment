import React from 'react';

const SingleCard = ({spaceData}) => {
    console.log(spaceData)
    return (
        <div className="col">

        <div className="card border border-primary rounded-3 shadow  product h-100">
            <img src={spaceData.links.mission_patch_small} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">

                <h5  className="card-title text-primary fw-bold">Mission: <i>{spaceData.mission_name}</i></h5>
                <p className="card-text">{spaceData.details}</p>
                <h6>Launch Date:<i>{spaceData.launch_date_utc}</i></h6>
                <h6>Rocket:<i>{spaceData.rocket.rocket_name},type:{spaceData.rocket.rocket_type}</i></h6>
                {/* <Link to={`/products/${_id}`}>
                    <Button style={{ backgroundColor: "hotpink", border: "2px solid purple" }} className="text-white fw-bold ">Purchase</Button>
                </Link> */}
            </div>
        </div>

    </div>
    );
};

export default SingleCard;