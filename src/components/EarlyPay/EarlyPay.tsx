import React, { useState } from 'react';

import Checkbox from '../Checkbox/Checkbox';

type Props = {
  deductionList: number[];
}

const PREFIX_YEARS = [
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
  `в 16-ый год`,
  `в 17-ый год`,
  `в 18-ый год`,
  `в 19-ый год`,
];

const format = (deduction: number) => {
  return deduction
  .toString()
  .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
};

const getLabelCheckbox = (deduction: number, year: number) => {
  return (
    <>
      <span className="checkbox__sum">
        {`${format(deduction)} рублей `}
      </span>
      <span className="checkbox__year">
        {PREFIX_YEARS[year]}
      </span>
    </>
  );
};

const getShortDeductionList = (deductionList: number[], cb: (evt: React.MouseEvent) => void) => {
  const preEndEl = deductionList.length - 2;
  const endEl = deductionList.length - 1;

  const arrIndex = [0, 1, 2, preEndEl, endEl];

  const shortDeductionList = arrIndex.map((el) => {
    if (el === 2) {
      return (
        <Checkbox
          key={el}
          isDisabled={false}
          className={`early-pay__checkbox`}
          onClick={cb}
          prefix={`button-load-more`}
          type={`button`}
        >
          <span>Показать остальные</span>
        </Checkbox>
      );
    }

    return (
      <Checkbox
        key={el}
        isDisabled={false}
        className={`early-pay__checkbox`}
      >
        {getLabelCheckbox(deductionList[el], el)}
      </Checkbox>
    );
  });

  return shortDeductionList;
};

const EarlyPay: React.FC<Props> = ({ deductionList }: Props) => {
  const [isOpenList, setOpenList] = useState(false);

  const isLongList = deductionList.length <= 5 || isOpenList;
  const isShortList = deductionList.length > 5 && !isOpenList;

  return (
    <div className="early-pay">
      <label className="early-pay__label">
        Итого можете внести в качестве досрочных:
      </label>
      {isLongList && (
        deductionList.map((deduction, i) => {
          return (
            <Checkbox
              key={`${deduction}-${i}`}
              isDisabled={false}
              className={`early-pay__checkbox`}
            >
              {getLabelCheckbox(deduction, i)}
            </Checkbox>
          );
        })
      )}
      {isShortList && (
        getShortDeductionList(deductionList, () => setOpenList(true))
      )}
    </div>
  );
};

export default EarlyPay;
