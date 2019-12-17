import React from 'react';
import {startLogin} from '../actions/auth';
import { connect } from 'react-redux';


export const LoginPage = ({startLogin}) => {
    return(
        <div className="login__page">
            <div className="login__box">
                <h2 className="login__title">Boilerplate</h2>
                <h4>Empty sub-title</h4>
                <button className="bigButton" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);