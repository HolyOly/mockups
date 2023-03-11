import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as AttachIcon } from '../../assets/svg/paperclip.svg';
import './profile.css';
import './profile_wall.css';

export interface IProfileWall {
  userInfo: IStateUserProfile;
  wallInfo: IWallData;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function ProfileWall(props: IProfileWall) {
  const [isExpandTextArea, setIsExpandTextArea] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // fixme
    if (textareaRef.current?.value !== '') {
      setIsExpandTextArea(true);
    } else {
      setIsExpandTextArea(false);
    }
  }, [isExpandTextArea]);

  return (
    <div
      className={`block_ui create_post_block flex-column-gap-10 flex-column-padding-10 ${
        isExpandTextArea ? 'expand-block-height' : ''
      }`}
    >
      <div className="block-header">New Post</div>
      <div className={`wall_inputs`}>
        <img className="profile__photo profile__wall_photo_size" src={props.userInfo.photo}></img>
        <textarea
          name="post-text"
          id=""
          rows={isExpandTextArea ? 5 : 1}
          ref={textareaRef}
          className="input-text-wall"
          placeholder="What's new"
          autoFocus
          onChange={props.onChange}
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
