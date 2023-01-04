import p from "./ProfileInfo.module.css";

import Preloader from '../../common/Preloader/Preloader'
import defaultIcon from '../../../assets/images/icon.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  // MyID - 27260

  return (
    <div className={p.ProfileInfo}>
      <div className={p.descriptionBlock}>
        <div className={p.contacts}>
          <p>Name: {props.profile.fullName != null ? props.profile.fullName : 'unknown' }</p>
          <p>Status: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></p>
          <p>Contacts: </p>
          <ul>
            <li>VK: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> : 'unknown'} </li>
            <li>Twitter: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> : 'unknown'}</li>
            <li>Instagram: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a> : 'unknown'}</li>
          </ul>
        </div>
        <div className="userImg">
          <img src={props.profile.photos.large != null ? props.profile.photos.large : defaultIcon} width='300' height='300' alt="userPhoto"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
