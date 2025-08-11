import { useState, useEffect } from "react";

function Records(){
    //define a variable to accept the User ID
    //needs to use the Sessions API to retrieve a set of sessions based on the ID


    return(
        <>
            <h1>Sessions</h1>
            <p>User ID: </p><input type="text"></input>
            <p>Filter By: </p>
            <label >Date</label>
            <input type="text"></input>
            <br />
            <label >Duration</label>
            <input type="text"></input>
            <br />
            <br />
            <hr />
            <div>
                <div>
                    <p>Sessions Here</p>
                </div>
            </div>
        </>
    )
}

export default Records;
