import React from 'react';

type Props = {
  label: string;
  prefix: string;
}

const Checkbox: React.FC<Props> = ({ label, prefix }: Props) => {
  return (
    <label className={`checkbox ${prefix ? `checkbox--${prefix}` : ``}`}>
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
