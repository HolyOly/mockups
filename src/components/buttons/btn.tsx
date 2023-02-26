import React from 'react';
import './btn.css';

interface IButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  placeholder: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ type, placeholder, className, onClick }: IButton) {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {placeholder}
      </button>
    </div>
  );
}
