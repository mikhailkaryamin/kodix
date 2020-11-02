import React, { useState } from 'react';

import Button from '../Button/Button';
import EarlyPay from '../EarlyPay/EarlyPay';
import Input from '../Input/Input';

const MAX_TAX_DEDUCTION = 260000;

const emptyFunc = () => `Empty`;

const getDeductionList = (taxDeduction: number, rest: number, numberOfYear: number) => {

  const taxDeductionList = new Array(Math.round(numberOfYear)).fill(Math.round(taxDeduction));

  if (rest !== 0) {
    taxDeductionList.push(Math.round(rest));
  }

  return taxDeductionList;
};

const FormDeduction: React.FC = () => {
  const [deductionList, setDeductionList] = useState<Array<number>>([]);

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const salaryInMonth = +evt.target.value;

    if (salaryInMonth < 10000) {
      setDeductionList([]);
      return;
    }

    const taxDeductionInYear = (salaryInMonth * 12) * 0.13;
    const rest = MAX_TAX_DEDUCTION % taxDeductionInYear;
    const numberOfYears = (MAX_TAX_DEDUCTION - rest) / taxDeductionInYear;
    const taxDeductionList = getDeductionList(taxDeductionInYear, rest, numberOfYears);

    setDeductionList(taxDeductionList);
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
