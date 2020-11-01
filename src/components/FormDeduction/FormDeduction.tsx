import React, { useState } from 'react';

import Button from '../Button/Button';
import EarlyPay from '../EarlyPay/EarlyPay';
import Input from '../Input/Input';

const MAX_TAX_DEDUCTION = 260000;

const emptyFunc = () => `Empty`;

const getTaxDeductionInYear = (salary: number) => {
  return (salary * 12) * 0.13;
};

const getNumberOfYearsTaxDeduction = (taxDeductionInYear: number, rest: number) => {
  return (MAX_TAX_DEDUCTION - rest) / taxDeductionInYear;
};

const getTaxDeductionList = (taxDeduction: number, restTaxDeduction: number, numberOfYear: number) => {
  const taxDeductionList = new Array(Math.round(numberOfYear)).fill(Math.round(taxDeduction));
  if (restTaxDeduction !== 0) {
    taxDeductionList.push(Math.round(restTaxDeduction));
  }

  return taxDeductionList;
};

const FormDeduction: React.FC = () => {
  const [deductionList, setDeductionList] = useState<Array<number>>([]);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (+evt.target.value < 10000) {
      setDeductionList([]);
      return;
    }
    const taxDeductionInYear = getTaxDeductionInYear(+evt.target.value);
    const rest = MAX_TAX_DEDUCTION % taxDeductionInYear;
    const numberOfYearsTaxDeduction = getNumberOfYearsTaxDeduction(taxDeductionInYear, rest);

    setDeductionList(getTaxDeductionList(taxDeductionInYear, rest, numberOfYearsTaxDeduction));
  };

  return (
    <form
      action="#"
      className="form-deduction"
    >
      <label className="form-deduction__title" htmlFor="salary">
        Ваша зарплата в месяц
      </label>
      <Input
        className={'form-deduction__sum'}
        isRequired={true}
        name={'salary'}
        onChange={onChangeInput}
        placeHolder={'Введите данные'}
        type={'number'}
      />

      {deductionList.length !== 0 && (
        <EarlyPay
          deductionList={deductionList}
        />
      )}

      <div className="form-deduction__container-decrease">
        <strong className="form-deduction__title">
          Что уменьшаем?
        </strong>
        <div className="form-deduction__group-buttons">
          <Button
            className={`form-deduction__button-pay`}
            isVisibleTitle={true}
            onClick={emptyFunc}
            prefix={`decrease button--decrease-active`}
            title={`Платёж`}
          />
          <Button
            isVisibleTitle={true}
            onClick={emptyFunc}
            prefix={`decrease`}
            title={`Срок`}
          />
        </div>
      </div>
      <Button
        className={`form-deduction__button-submit`}
        isVisibleTitle={true}
        onClick={emptyFunc}
        prefix={`add`}
        title={`Добавить`}
        type={`submit`}
      />
    </form>
  );
};

export default FormDeduction;
