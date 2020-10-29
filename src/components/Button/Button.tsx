import React from 'react';

type Props = {
  classNameEl?: string;
  isVisibleTitle: boolean;
  onClick: () => void;
  prefix: string;
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = (
    { isVisibleTitle, onClick, prefix, title, type = 'button', classNameEl }: Props
) => {
  return (
    <button
      className={`button button--${prefix} ${classNameEl ? classNameEl : ``}`}
      onClick={onClick}
      type={type}
      title={title}
    >
      {isVisibleTitle ? title : ``}
    </button>
  );
};

export default Button;
