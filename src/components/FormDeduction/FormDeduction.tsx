import React from 'react';

import Button from '../Button/Button';
import EarlyPay from '../EarlyPay/EarlyPay';
import Input from '../Input/Input';

const emptyFunc = () => `Empty`;

const FormDeduction: React.FC = () => {
  return (
    <form action="#" className="form-deduction">
      <label className="form-deduction__title" htmlFor="salary">
        Ваша зарплата в месяц
      </label>
      <Input
        name={'salary'}
        prefix={'form-deduction'}
        placeHolder={'Введите данные'}
        type={'number'}
      />
      <EarlyPay
        amountOfMoney={78000}
      />
      <strong className="form-deduction__title">
        Что уменьшаем?
      </strong>
      <div className="form-deduction__group-buttons">
        <Button
          isVisibleTitle={true}
          onClick={emptyFunc}
          prefix={`decrease`}
          title={`Платёж`}
        />
        <Button
          isVisibleTitle={true}
          onClick={emptyFunc}
          prefix={`decrease`}
          title={`Срок`}
        />
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
