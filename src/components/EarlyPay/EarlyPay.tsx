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
        label={`78 000 рублей в 1-ый год`}
        prefix={`early-pay`}
      />
    </div>
  );
};

export default EarlyPay;
