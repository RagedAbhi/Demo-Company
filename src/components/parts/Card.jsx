import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = (props) => {

    let { image, cate, main } = props;

    return (
        <div className="cardbox">
            <img src={require(`../../assets/${image}.png`)} alt="" />
            <div className="cardContent">
                <div className="cardCategory">
                    <span id='category'>{cate}</span>
                    <span>2 hours ago</span>
                </div>
                <p>{main}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                <div className="lastLine">
                    <p>Read More</p>
                    <ArrowForwardIcon style={{ marginLeft: '19px', color: "#FFBB29", scale: '0.8' }} />
                </div>
            </div>
        </div>
    )
}

export default Card
