import { useReducer } from 'react';
import { ProfilesData } from '../../data/users_data';

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
  const [state, dispatch] = useReducer(reducer, ProfilesData[1]);
}
