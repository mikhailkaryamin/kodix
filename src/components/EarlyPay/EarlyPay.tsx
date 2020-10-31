import React from 'react';

import Checkbox from '../Checkbox/Checkbox';

type Props = {
  sum: number;
  year: number;
}

const PREFIX_YEARS = [
  ``,
  `в 1-ый год`,
  `во 2-ой год`,
  `в 3-ий год`,
  `в 4-ый год`,
  `в 5-ый год`,
  `в 6-ой год`,
  `в 7-ой год`,
  `в 8-ой год`,
  `в 9-ый год`,
  `в 10-ый год`,
  `в 11-ый год`,
  `в 12-ый год`,
  `в 13-ый год`,
  `в 14-ый год`,
  `в 15-ый год`,
];

const format = (sum: number) => {
  return sum
  .toString()
  .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
};

const getLabelCheckbox = (sum: number, year: number) => {
  return (
    <>
      <span className="checkbox__sum">
        {`${format(sum)} рублей `}
      </span>
      <span className="checkbox__year">
        {PREFIX_YEARS[year]}
      </span>
    </>
  );
};

const EarlyPay: React.FC<Props> = ({ sum }: Props) => {
  return (
    <div className="early-pay">
      <label className="early-pay__label">
        Итого можете внести в качестве досрочных:
      </label>
      <Checkbox
        isDisabled={false}
        className={`early-pay__checkbox`}
        prefix={`early-pay`}
      >
        {getLabelCheckbox(sum, 1)}
      </Checkbox>
    </div>
  );
};

export default EarlyPay;
