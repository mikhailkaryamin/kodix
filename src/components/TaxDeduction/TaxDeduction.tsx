import React from 'react';

import Button from '../Button/Button';
import FormDeduction from '../FormDeduction/FormDeduction';

type Props = {
  onClosePopup: () => void;
}

const TaxDeduction: React.FC<Props> = ({ onClosePopup }: Props) => {
  return (
    <section className="tax-deduction">
      <h1 className="tax-deduction__title tax-deduction__title--main">
        Налоговый вычет
      </h1>
      <Button
        isVisibleTitle={false}
        onClick={onClosePopup}
        prefix={`close-popup`}
        title={`Закрыть попап`}
      />
      <p className="tax-deduction__description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </p>

      <FormDeduction />
    </section>
  );
};

export default TaxDeduction;
