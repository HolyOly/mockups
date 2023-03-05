import React, { useReducer, useState } from 'react';
import { ProfilesData } from '../../data/users_data';
import './profile.css';

// TODO profile idea https://dribbble.com/shots/19337773-User-profile-Untitled-UI
// https://dribbble.com/shots/5581599-027-100-Daily-UI-Intranet-Employee-Profile/attachments/5581599?mode=media
// icons for info https://www.svgrepo.com/collection/primeng-interface-icons/2

enum ProfileActionKind {
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_PHOTO = 'CHANGE_PHOTO',
  CHANGE_COVER_PHOTO = 'CHANGE_COVER_PHOTO',
  CHANGE_STATUS = 'CHANGE_STATUS',
  CHANGE_JOB = 'CHANGE_JOB',
  CHANGE_UNIVERSITY = 'CHANGE_UNIVERSITY',
  CHANGE_LOCATION_1 = 'CHANGE_LOCATION_1',
  CHANGE_LOCATION_2 = 'CHANGE_LOCATION_2',
  CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  CHANGE_PHONE = 'CHANGE_PHONE',
  CHANGE_INST = 'CHANGE_INST',
  CHANGE_LINKEDIN = 'CHANGE_LINKEDIN',
  CHANGE_PERSONAL_SITE = 'CHANGE_PERSONAL_SITE',
}

interface IReducerUserProfileAction {
  newDraft: string;
  type: ProfileActionKind;
}

const reducer = (
  state: IStateUserProfile,
  action: IReducerUserProfileAction
): IStateUserProfile => {
  const { type } = action;
  switch (type) {
    case ProfileActionKind.CHANGE_NAME:
      return {
        ...state,
        // firstName: action.newDraft,
        // draft: action.newDraft,
      };
    case ProfileActionKind.CHANGE_STATUS:
      return {
        ...state,
        // status: '',
      };
    default:
      return state;
  }
};

export function Profile() {
  const [state, dispatch] = useReducer(reducer, ProfilesData[0]);
  const [editHeader, setEditHeader] = useState(false);
  console.log(state);
  return (
    <div className="profile__container">
      <div className="profile__left-menu flex-column-gap-10 block_ui">
        <div className="menu-item">Favorites</div>
        <div className="menu-item">Notifications</div>
        <div className="menu-item">Preferences</div>
        <div className="menu-item">Feedback</div>
      </div>
      <div className="profile__content flex-column-gap-10">
        <div className="profile__header block_ui">
          <div
            className="profile__cover"
            style={{ backgroundImage: `url(${state.coverPhoto})` }}
          ></div>
          <div className="user_status">{state.status}</div>
          <img className="profile__photo" src={state.photo}></img>
          {editHeader ? (
            <input
              type="text"
              className="input-name"
              value={state.firstName + '' + state.surName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch({ type: ProfileActionKind.CHANGE_NAME, newDraft: e.target.value });
                console.log(state);
              }}
            />
          ) : (
            <h2 className="user_name">{state.firstName + ' ' + state.surName}</h2>
          )}
          <div className="dots_settings">
            <button type="button" onClick={() => setEditHeader(!editHeader)}>
              . . .
            </button>
          </div>
        </div>
        <div className="profile-info-wrapper">
          <div className="profile__info flex-column-gap-10">
            <div className="profile__intro flex-column-padding-10 block_ui">
              <div className="block-header">Introduction</div>
              <div className="job-position">
                {state.jobPosition} at {state.jobCompany}
              </div>
              <div className="university">{state.university}</div>
              <div className="location_1">Live in {state.location_1}</div>
              {/* <div className="location_2">Other location {state.location_2}</div> */}
              <div className="birthday">Birthday {state.birthday}</div>
            </div>
            <div className="profile__contacts flex-column-padding-10 block_ui">
              <div className="block-header">Contacts</div>
              <div className={state.email ? 'email' : 'displayNone'}>Еmail {state.email}</div>
              <div className={state.phone ? 'phone' : 'displayNone'}>Phone {state.phone}</div>
              <div className={state.instagram ? 'instagram' : 'displayNone'}>
                Inst: {state.instagram}
              </div>
              <div className={state.linkedin ? 'linkedin' : 'displayNone'}>
                Linkedin: {state.linkedin}
              </div>
              <div className={state.personalSite ? 'personal-site' : 'displayNone'}>
                Personal website: <a href={state.personalSite}>link</a>
              </div>
            </div>
          </div>
          <div className="profile__wall flex-column-padding-10 block_ui">
            <div className="block-header">Wall</div>
          </div>
        </div>
      </div>
    </div>
  );
}
