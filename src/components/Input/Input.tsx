import React from 'react';

type Props = {
  className?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  name: string;
  prefix?: string;
  placeHolder?: string;
  type: string;
}

const Input: React.FC<Props> = ({
  className, isDisabled = false, name, placeHolder, prefix, isRequired = false, type
}: Props) => {
  return (
    <input
      className={`input ${prefix ? `input--${prefix}` : ``} ${className ? className : ``}`}
      disabled={isDisabled}
      id={name}
      name={name}
      placeholder={`${placeHolder ? `${placeHolder}` : ``}`}
      required={isRequired}
      type={type}
    />
  );
};

export default Input;
