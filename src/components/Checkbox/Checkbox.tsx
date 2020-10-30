import React from 'react';

type Props = {
  className?: string;
  label: string;
  prefix: string;
}

const Checkbox: React.FC<Props> = ({ className, label, prefix }: Props) => {
  return (
    <label className={`checkbox checkbox--${prefix} ${className ? `${className}` : ``}`}>
      {label}
      <input
        className="checkbox__input"
        type="checkbox"
      />
      <span className={`checkbox__icon ${prefix ? `checkbox__icon--${prefix}` : ``}`}></span>
    </label>
  );
};

export default Checkbox;
