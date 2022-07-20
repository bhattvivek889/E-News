import React from "react";
function Card(props){
    return (
        <div className="Card" key={props.id}>
            <a className="carda" href={props.url} target="_blank">
                <img className="cardimg" src={props.image}></img>
                <div className="card-div1">
                    <div className="card-div2">
                        <p className="card-source-p">{props.source}</p>
                        <p className="card-publish-p">{props.publish}</p>
                    </div>
                    <h1 className="card-h1">{props.title}</h1>
                    <p className="card-des">{props.description}..</p>
                </div>
            </a>
        </div>
    )
}
export default Card;