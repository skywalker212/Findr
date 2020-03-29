import React from 'react';
import { connect } from 'react-redux'
import AriaModal from 'react-aria-modal';
import RootModal from '../Modal';
import { setLocation as setLocationAction } from '../../../store/reducers/location/locationSlice';
import { logInAsync } from './../../../store/reducers/user/userSlice';
import './Login.css';
import Location from './Location/Location';
import UserForm from './UserForm/UserForm';
import Spinner from './../../spinner/Spinner';

class Modal extends RootModal {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  setLocation = () => {
    this.setLoading(true);
    navigator.geolocation.getCurrentPosition( position => {
      this.setLoading(false);
      this.props.setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, this.denyLocation, { enableHighAccuracy: true, timeout: 5000 });
  }

  denyLocation = () => {
    this.setLoading(false);
    this.props.setLocation({
      lat: 30.590485,
      lng: 114.324765
    });
  }

  setLoading = (loading) => {
    this.setState({
      ...this.state,
      loading
    });
  }

  render () {
    const modal = (this.props.location === undefined || this.props.isLoggedIn === false)
      ? <AriaModal
          titleText="Location Modal"
          initialFocus="#login-dialog-root"
          getApplicationNode={this.getApplicationNode}
          underlayClickExits={false}
          verticallyCenter={true}
          underlayStyle={this.props.style}
        >
          <div id="login-dialog-root" className="nes-dialog is-rounded modal custom-pointer">
            {
              this.state.loading ?
              (<div className="location-modal-spinner-parent">
                <div>Loading...</div>
                <Spinner className="la-dark"/>
              </div>):
              this.props.isLoggedIn === false ?
              <UserForm login={this.props.logIn}/> :
              <Location locationSupport={this.props.locationSupport} setLocation={this.setLocation} denyLocation={this.denyLocation}/>
            }
          </div>
        </AriaModal>
      : false;
    return (
      modal
    )
  }
}

const mapStateToProps = state => {
  return { location: state.location.value, locationSupport: state.location.locationSupport, isLoggedIn: state.user.loggedIn, user: state.user.value }
}

const mapDispatchToProps = dispatch => {
  return {
    setLocation: (location) => dispatch(setLocationAction(location)),
    logIn: (user) => dispatch(logInAsync(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);