import React from 'react';

type Props = {
  name: string;
  prefix?: string;
  placeHolder?: string;
  type: string;
}

const Input: React.FC<Props> = ({ placeHolder, prefix, type }: Props) => {
  return (
    <input
      className={`input ${prefix ? `${prefix}__input` : ``}`}
      type={type}
      id={name}
      name={name}
      placeholder={`${placeHolder ? `${placeHolder}` : ``}`}
    />
  );
};

export default Input;
