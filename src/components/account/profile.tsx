import React, { useReducer, useState } from 'react';
import './profile.css';
import { ReactComponent as UserPhoto } from '../../assets/img/default-user.png';
import { ReactComponent as CoverPhoto } from '../../assets/img/default-background.png';

// TODO profile idea https://dribbble.com/shots/19337773-User-profile-Untitled-UI
// https://dribbble.com/shots/5581599-027-100-Daily-UI-Intranet-Employee-Profile/attachments/5581599?mode=media

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

interface IStateUserProfile {
  name: string;
  photo: string;
  coverPhoto: string;
  status: string;
  job: string;
  university: string;
  location_1: string;
  location_2: string;
  birthday: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  personalSite: string;
  draft: string;
}

const InitialStateUserProfile: IStateUserProfile = {
  name: '',
  photo: '',
  coverPhoto: '',
  status: '',
  job: '',
  university: '',
  location_1: '',
  location_2: '',
  birthday: '',
  email: '',
  phone: '',
  instagram: '',
  linkedin: '',
  personalSite: '',
  draft: '',
};

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
        name: action.newDraft,
        // draft: action.newDraft,
      };
    case ProfileActionKind.CHANGE_PHOTO:
      return {
        ...state,
        photo: '',
      };
    case ProfileActionKind.CHANGE_COVER_PHOTO:
      return {
        ...state,
        coverPhoto: '',
      };
    case ProfileActionKind.CHANGE_STATUS:
      return {
        ...state,
        status: '',
      };
    default:
      return state;
  }
};

export function Profile() {
  const [state, dispatch] = useReducer(reducer, InitialStateUserProfile);
  const [editHeader, setEditHeader] = useState(false);
  return (
    <div className="profile__container">
      <div className="profile__left-menu"></div>
      <div className="profile__content">
        <div className="profile__header block_ui">
          <div className="profile__cover"></div>
          <div className="profile__header__main">
            <div className="user_name">{state.name}</div>
            {editHeader && (
              <input
                type="text"
                value={state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: ProfileActionKind.CHANGE_NAME, newDraft: e.target.value });
                  console.log(state);
                }}
              />
            )}
            <div className="user_status">{state.status}</div>
          </div>
          <div className="profile__photo"></div>
          <div className="dots_settings">
            <button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                setEditHeader(!editHeader)
              }
            >
              . . .
            </button>
          </div>
        </div>
        <div className="profile__info block_ui">
          <div className="profile__intro">
            <div className="block-header">Introduction</div>
            <div className="job-position"></div>
            <div className="university"></div>
            <div className="location_1">Live in </div>
            <div className="location_2"></div>
            <div className="birthday"></div>
          </div>
          <div className="profile__contacts block_ui">
            <div className="block-header">Contacts</div>
            <div className="email"></div>
            <div className="phone"></div>
            <div className="instagram"></div>
            <div className="linkedin"></div>
            <div className="personal-site"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
