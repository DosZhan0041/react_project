
import Profile from "./Profile";
import React from "react";
import { connect } from 'react-redux';
import withAuthRedirect from "../HOC/withAuthRedirect";

let ProfileContainer = ({ totalReviews, totalHouses, authUser, ...props}) => {
    return <Profile {...props} authUser={authUser} totalHouses={totalHouses} totalReviews={totalReviews}/>
}

const mapStateToProps = (state) => {
    const authUser = localStorage.getItem("user");
    return {
        totalHouses: state.housesPage.totalHouses,
        totalReviews: state.reviewsPage.totalReviews,
        authUser,
        ...state
    }
};

let AuthRedirect = withAuthRedirect(ProfileContainer);
export default connect(mapStateToProps, {})(AuthRedirect);
