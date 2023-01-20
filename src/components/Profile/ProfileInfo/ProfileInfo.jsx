import p from "./ProfileInfo.module.css";

import Preloader from '../../common/Preloader/Preloader'
import defaultIcon from '../../../assets/images/icon.png'
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e) => {
    e.target.files.length && props.savePhoto(e.target.files[0])
  }

  // MyID - 27260
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={p.ProfileInfo}>
      <div className={p.descriptionBlock}>

        {editMode ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} updateStatus={props.updateStatus} status={props.status}/> : <ProfileData status={props.status} editModeOn={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner} updateStatus={props.updateStatus}/>}

        <div className={p.userImg}>
          <img src={props.profile.photos.large || defaultIcon} width='300' height='300' alt="userPhoto"/>
          { props.isOwner && <input type={"file"} onChange={ mainPhotoSelected }/>}
        </div>
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div className={p.userInfo}>
      {props.isOwner && <button onClick={props.editModeOn}>Edit</button>}
      <div className={p.userName}>
        <p>Name: {props.profile.fullName != null ? props.profile.fullName : 'unknown' }</p>
        <p>Status: <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/></p>

        <p>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</p>

        {props.profile.lookingForAJob && 
        <p> My professional skills: {props.profile.lookingForAJobDescription} </p>}
        <p>About me: {props.profile.aboutMe}</p>
      </div>
      <div className={p.userContacts}>
        <h4>Contacts: </h4>
        {Object.keys(props.profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
      </div>
      {/* <ul>
        <li>VK: { props.profile.contacts.vk != null ? <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> : 'unknown'} </li>
        <li>GitHub: { props.profile.contacts.github != null ? <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a> : 'unknown'}</li>
        <li>Youtube: { props.profile.contacts.youtube != null ? <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a> : 'unknown'}</li>
      </ul> */}

    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  // if (contactValue) return <p><b>{contactTitle}:</b> {contactValue}</p>
  return <p><b>{contactTitle}:</b> {contactValue ? contactValue : "none"}</p>
}

export default ProfileInfo;
