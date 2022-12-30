import p from "./ProfileInfo.module.css";

import Preloader from '../../common/Preloader/Preloader'
import defaultIcon from '../../../assets/images/icon.png'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  // MyID - 27260

  return (
    <div className={p.ProfileInfo}>
      {/* <div className={p.profilebg}>
        <img
          src="https://www.feit.com/wp-content/uploads/2017/03/old-new.jpg"
          alt="main-png"
        />
      </div> */}
      <div className={p.descriptionBlock}>
        <div className={p.contacts}>
          <p>Name: {props.profile.fullName != null ? props.profile.fullName : 'unknown' }</p>
          <p>Status: {props.profile.aboutMe != null ? props.profile.aboutMe : 'unknown' }</p>
          <p>Contacts: </p>
          <ul>
            <li>VK: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> : 'unknown'} </li>
            <li>Twitter: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> : 'unknown'}</li>
            <li>Instagram: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a> : 'unknown'}</li>
          </ul>
        </div>
        <div className="userImg">
          <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultIcon} width='300' height='300' alt="ava"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
