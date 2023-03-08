import React from 'react';
import { ReactComponent as AttachIcon } from '../../assets/svg/paperclip.svg';
import './profile.css';
import './profile_wall.css';

export interface IProfileWall {
  userInfo: IStateUserProfile;
  wallInfo: IWallData;
}

export function ProfileWall(props: IProfileWall) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="block_ui create_post_block flex-column-gap-10 flex-column-padding-10">
      <div className="block-header">New Post</div>
      <div className="wall_inputs">
        <img className="profile__photo profile__wall_photo_size" src={props.userInfo.photo}></img>
        <textarea
          name=""
          id=""
          rows={1}
          className="input-text-wall"
          placeholder="What's new"
          autoFocus
        ></textarea>
        <input
          type="file"
          ref={inputRef}
          name=""
          id="input_file_wall"
          className="input_file_wall"
        />
        <button className="attach_file_btn" onClick={() => inputRef.current?.click()}>
          <AttachIcon></AttachIcon>
        </button>
      </div>
    </div>
  );
}
