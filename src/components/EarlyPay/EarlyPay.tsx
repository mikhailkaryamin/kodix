import React from 'react';

import Checkbox from '../Checkbox/Checkbox';

type Props = {
  amountOfMoney: number;
}

const EarlyPay: React.FC<Props> = ({ amountOfMoney }: Props) => {
  return (
    <div className="early-pay">
      <label className="early-pay__label">
        Итого можете внести в качестве досрочных:
      </label>
      <Checkbox
        className={`early-pay__checkbox`}
        label={`${amountOfMoney} рублей в 1-ый год`}
        prefix={`early-pay`}
      />
    </div>
  );
};

export default EarlyPay;
