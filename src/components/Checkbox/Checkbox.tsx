import React from 'react';

type Props = {
  children: JSX.Element;
  isDisabled: boolean;
  className?: string;
  prefix: string;
}

const Checkbox: React.FC<Props> = ({ children, isDisabled, className, prefix }: Props) => {
  return (
    <label className={`checkbox checkbox--${prefix} ${className ? `${className}` : ``}`}>
      {children}
      <input
        disabled={isDisabled}
        className="checkbox__input"
        type="checkbox"
      />
      <span className={`checkbox__icon ${prefix ? `checkbox__icon--${prefix}` : ``}`}></span>
    </label>
  );
};

export default Checkbox;
