
import React from "react";

function Card({ img, Name, type, index }) {
    return (

        <div className="card h-96 w-96 bg-primary text-primary-content shadow-xl m-4">
            <figure style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={img} className="w-60 m-3" alt={Name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title "style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >{Name}</h2>


                <div className="card-actions justify-end">
                    <div className="badge badge-outline" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{index}</div>
                    <div className="badge badge-outline" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {type}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
