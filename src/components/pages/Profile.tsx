import axios from "axios";
import React, { FormEventHandler, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import MenuButton from "../parts/MenuButton";
import { UserType } from "../../frontend-types";
import LobbyService from "../../services/LobbyService";

const Profile = () => {
    const [authed, setAuth] = useState(false || window.localStorage.getItem("auth")==="true");
    const [profile, setProfile] = useState<undefined|UserType>(undefined);
    const usernameRef: React.RefObject<HTMLInputElement> = React.createRef();
    const { search } = useLocation();
    const redirect = new URLSearchParams(search).get('redirect');
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/profile`);
            console.log(res.data)
            setProfile(res.data.user);
        } catch (err:any) {
            console.log(err.response.data)
            if (err.response.data.msg==="Token Expired") {
                localStorage.removeItem("bfgToken");
                localStorage.removeItem("auth");
                setAuth(false);
            };
        };
    };

    useEffect(() => {
        if (authed) {fetchProfile()};
        const auth = getAuth();
        auth.onAuthStateChanged(async userCred => {
            if (userCred) {
                window.localStorage.setItem("auth", "true");
                const token = await userCred.getIdToken();
                window.localStorage.setItem("bfgToken", "bearer " + token);
                setAuth(true);
                if (redirect) navigate(redirect);
            };
        });
        return () => {
            getAuth();
            return undefined;
        };
    },[authed]);

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            const userCred = await signInWithPopup(auth, provider);
            if (userCred) {
                window.localStorage.setItem("auth", "true");
                setAuth(true);
            };
        } catch (err:any) {
            console.log(err.message);
        };
    };

    const logout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth)
            window.localStorage.removeItem("auth");
            window.localStorage.removeItem("bfgToken");
            setAuth(false);
            setProfile(undefined);
        } catch (err) {
            console.log(err);
        };
    };

    const deleteAccount = async () => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_ADDRESS}/account`);
            logout();
        } catch (err:any) {
            console.log(err.response.data)
        };    
    };

    const setUsername:FormEventHandler = async (e) => {
        e.preventDefault();
        if (!usernameRef.current) return;
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/account`, { username: usernameRef.current.value });
            setProfile(res.data.user);
        } catch (err:any) {
            console.log(err.response.data)
        };        
    };

    const leaveGame = async (type:string, name:string|false) => {
        if (!profile) return;
        const res = await LobbyService.leave(type, name, profile.uid);
        if (res.error) return console.log(res.error);
        setProfile(res.response?.data.user);
    };

    return (
        <div className="app-page">
            <div className="menu-backdrop" />
            <div className="menu-page bordered">
            {!authed ? 
                <button className="menu-button" onClick={loginWithGoogle}>Sign in with Google</button>
                :
                <div className="profile-container">
                    {profile?
                        profile.uid?
                            <>
                            <h2>Welcome to your profile {profile.first}!</h2>
                            <div className="profile-info">
                                <p className="flex">Your username (shown in game) is <strong style={{marginLeft:"0.5vw"}}className="highlight">{profile.username}</strong></p>
                                <p>You have played <strong className="highlight">{Object.keys(profile.games).length}</strong> games</p>
                                <p>You have won <strong className="highlight">{profile.wins}</strong> games</p>
                                {profile.open.lobby?
                                    <p className="column">
                                        {`You are currently in lobby:`} 
                                        <div className="container" style={{justifyContent: "flex-start"}}>
                                        <Link className="highlight" to={`/lobby/${profile.open.lobby}`}>{profile.open.lobby}</Link>
                                        <button className="leave-game-button container" onClick={() => leaveGame("lobby", profile.open.lobby)}>x</button>
                                        </div>
                                    </p>
                                    :
                                    profile.open.game?
                                        <p className="column">
                                            {`You are currently in game:`} 
                                            <div className="container" style={{justifyContent: "flex-start"}}>
                                            <Link className="highlight" to={`/game/${profile.open.game}`}>{profile.open.game}</Link> 
                                            <button className="leave-game-button container" onClick={() => leaveGame("game", profile.open.game)}>x</button>
                                            </div>
                                        </p>
                                        :
                                        <p>You are not currently in a lobby or game: <Link to={"/host"} className="highlight">Host</Link></p>}
                            </div>
                            <div className="profile-button-container">
                                <button className="profile-button menu-button" onClick={logout}>Logout</button>
                                <button className="profile-button menu-button" onClick={deleteAccount}>Delete Account</button>
                            </div>
                            </>
                            :
                            <>
                            <h2>Choose a <strong className="highlight">username</strong> to create your account!</h2>
                            <div className="container" style={{flexDirection: "column"}}>
                                <form className="menu-button" style={{cursor: "auto"}} autoComplete="off" spellCheck="false" onSubmit={setUsername}> 
                                    <input className="menu-input" type="text" ref={usernameRef} name="username" required placeholder="Username" />
                                    <button className="profile-username-submit" type="submit" onClick={(e) => setUsername(e)}><strong>⇨</strong></button>
                                </form>
                                <button className="menu-button cancel-button" onClick={logout}>Cancel Account</button>
                            </div>
                            
                            </>
                        :
                        <p>Loading...</p>
                    }
                </div>
            }
            <MenuButton />
            </div>
        </div>
    );
};

export default Profile;
