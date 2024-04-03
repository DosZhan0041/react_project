import { FaLocationDot } from "react-icons/fa6";
import "./Profile.css"

let Profile = ({authUser, totalHouses, totalReviews})=>{
    let userData = authUser
    return(
        <div className="profile">
            {
                userData ?
                (
                    <div className="container">
                        <div className="wrapper-profile">
                            <div className="profile-up"></div>
                            <div className="profile-down">
                                <div className="first-side">
                                    <div className="image-profile">
                                        <img src={userData.urlImg ? (userData.urlImg) : ("https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png")}></img>
                                    </div>
                                    <div className="name-profile">
                                        <p>{userData.name}</p>
                                        <p>{userData.surname}</p>
                                    </div>
                                    <div className="location-profile">
                                        <div className="location-dev">
                                            <FaLocationDot /> {userData.country} 
                                        </div>   
                                    </div>
                                    <div className="number-profile">
                                    {userData.phone}
                                    </div>
                                    <div className="email-profile">
                                    {userData.email}
                                    </div>
                                </div>
                                <div className="second-side">
                                    <div className="houses-profile">
                                        <h1>{totalHouses}</h1>
                                        <p>houses</p>
                                    </div>
                                    <div className="comments-profile">
                                        <h1>{totalReviews}</h1>
                                        <p>comments</p>
                                    </div>
                                </div>
                                <div className="button-profile">
                                    <button>Change the Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div></div>
                )
            }
        </div>
    )
}
export default Profile