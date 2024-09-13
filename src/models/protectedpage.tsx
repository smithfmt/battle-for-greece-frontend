import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { protectPage } from "../frontend-helpers";
import MenuButton from "../components/parts/MenuButton";

const p = () => {
    const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!authed.authed) {
          protectPage().then((res) => {
            if (res.expired) {return navigate(`/profile?redirect=${location.pathname}`)};
            setAuthed(res);
          });
        };
    },[authed]);
    
    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                {authed.loading? 
                    <p>Loading...</p>
                    :
                    authed.authed?
                    <>
                    <strong>Page</strong>
                    </>
                    :
                    <>
                    <div>Please <Link to="/profile">login</Link> to play</div>
                    </>
                }
                <MenuButton />
            </div>
    );
};

export default p;