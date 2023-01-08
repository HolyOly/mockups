import React from 'react';
import { createRefFromTag } from '../../utils/card_helpers';
import './tag.css';

function Tag(props: { tag: string }) {
  return (
    <li>
      <a href={createRefFromTag(props.tag)} className="tag">
        {props.tag}
      </a>
    </li>
  );
}

export default Tag;
