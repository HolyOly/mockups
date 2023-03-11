import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { ProfilesData } from '../../data/users_data';
import { WallData } from '../../data/wall_users_data';
import { useOutsideClick } from '../../hooks/useOutsideClickProfile';
import './profile.css';
import { ProfileWall } from './profile_wall';

// TODO profile idea https://dribbble.com/shots/19337773-User-profile-Untitled-UI
// https://dribbble.com/shots/5581599-027-100-Daily-UI-Intranet-Employee-Profile/attachments/5581599?mode=media
// icons for info https://www.svgrepo.com/collection/primeng-interface-icons/2

enum ProfileActionKind {
  CHANGE_PHOTO = 'CHANGE_PHOTO',
  CHANGE_COVER_PHOTO = 'CHANGE_COVER_PHOTO',
  START_CHANGE_STATUS = 'START_CHANGE_STATUS',
  CHANGE_WALL_POST = 'CHANGE_WALL_POST',
  FOCUS_ON_TEXTAREA_WALL = 'FOCUS_ON_TEXTAREA_WALL',
  OUT_OF_FOCUS_TEXTAREA_EMPTY = 'OUT_OF_FOCUS_TEXTAREA_EMPTY',
  SUBMIT_WALL_POST = 'SUBMIT_WALL_POST',
  EXPAND_WALL_TEXTAREA = 'EXPAND_WALL_TEXTAREA',
}

const allProfileData: IUserProfileDataActions = {
  ...ProfilesData[1],
  ...WallData[0],
};

interface IReducerUserProfileAction {
  newDraft?: string;
  isEditStatus?: boolean;
  type: ProfileActionKind;
}

const reducer = (
  state: IUserProfileDataActions,
  action: IReducerUserProfileAction
): IUserProfileDataActions => {
  const { type } = action;
  switch (type) {
    case ProfileActionKind.START_CHANGE_STATUS:
      return {
        ...state,
        status: action.newDraft,
      };
    case ProfileActionKind.CHANGE_WALL_POST:
      return {
        ...state,
        text: action.newDraft,
      };
    default:
      return state;
  }
};

export function Profile() {
  const [state, dispatch] = useReducer(reducer, allProfileData);
  const [editStatus, setEditStatus] = useState(false);
  const inputStatusRef = useRef<HTMLInputElement>(null);

  useOutsideClick(inputStatusRef, setEditStatus);

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
          <div className="user_status" ref={inputStatusRef}>
            {!editStatus && <span>{state.status}</span>}
            {editStatus && (
              <input
                type="text"
                value={state.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({
                    type: ProfileActionKind.START_CHANGE_STATUS,
                    newDraft: e.target.value,
                  });
                }}
                autoFocus
              />
            )}
          </div>
          <img className="profile__photo profile__photo_size" src={state.photo}></img>
          {/* {editHeader ? (
            <input
              type="text"
              className="input-name"
              value={state.firstName + ' ' + state.surName}}
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              //   dispatch({ type: ProfileActionKind.CHANGE_NAME, newDraft: e.target.value });
              //   console.log(state);
              // }}
          //   />
          // ) : (
          //   <h2 className="user_name">{state.firstName + ' ' + state.surName}</h2>
          // )}
          {/* <div className="dots_settings">
            <button type="button" onClick={() => setEditHeader(!editHeader)}>
              . . .
            </button>
          </div> */}
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
              <div className={state.birthday ? 'birthday' : 'displayNone'}>
                Birthday: {state.birthday}
              </div>
            </div>
            <div className="profile__contacts flex-column-padding-10 block_ui">
              <div className="block-header">Contacts</div>
              <div className={state.email ? 'email' : 'displayNone'}>Еmail: {state.email}</div>
              <div className={state.phone ? 'phone' : 'displayNone'}>Phone: {state.phone}</div>
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
          <div className="profile__wall">
            <ProfileWall
              userInfo={ProfilesData[1]}
              wallInfo={WallData[0]}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                dispatch({
                  type: ProfileActionKind.CHANGE_WALL_POST,
                  newDraft: e.target.value,
                });
              }}
            ></ProfileWall>
          </div>
        </div>
      </div>
    </div>
  );
}
