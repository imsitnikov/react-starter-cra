import * as React from 'react';
import { connect } from 'react-redux';
import { BaseAction } from 'redux-actions';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { TextField } from '@/_components/atoms';
import {
  getTestFormError,
  submitFormAction as submitForm,
  resetErrorAction as resetError,
  REMOVE_ERROR,
  SET_ERROR,
} from '@/redux/modules/test-module';
import { validateFormValues } from '@/services/validations';
import styles from './index.module.css';

type TestFormValues = {
  firstName?: string;
  lastName?: string;
};

type SubmitValues = {
  submitFormAction: any;
  resetErrorAction: () => BaseAction;
  formError?: string;
};

const onSubmit = ({
  formError,
  submitFormAction,
  resetErrorAction,
}: SubmitValues) => (values: TestFormValues) => {
  // reset the form error
  resetErrorAction();

  const { isValidFormValues, errors } = validateFormValues(values);

  // check the validation error
  if (!isValidFormValues) {
    return errors;
  }

  // if the validation is ok - check the error from the server
  if (formError) {
    return {
      firstName: formError,
      lastName: formError,
    };
  }

  // saga to submit goes
  submitFormAction({
    failedActionType: SET_ERROR,
    resetError: REMOVE_ERROR,
    // you can add some flags like the loading type or the success type of an action
    formValues: values,
    url: '/test',
    method: 'POST',
  });
};

export const TestWrappedForm = ({
  formError,
  submitFormAction,
  resetErrorAction,
}: SubmitValues) => {
  return (
    <div className={styles.testFormWrapper}>
      <h1 className={styles.testFormTitleBlock}>
        React Final Form Simple Example
      </h1>
      <Form
        onSubmit={onSubmit({
          formError,
          submitFormAction,
          resetErrorAction,
        })}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.testFormField}>
              <Field
                name="firstName"
                type="text"
                placeholder="first name"
                formError={formError}
                render={props => <TextField {...props} />}
              />
            </div>
            <div className={styles.testFormField}>
              <Field
                name="lastName"
                type="text"
                placeholder="last name"
                formError={formError}
                render={props => <TextField {...props} />}
              />
            </div>
            <div className={styles.testFormButton}>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (store: any): { formError?: string } => ({
  formError: getTestFormError(store),
});

export const TestForm = connect(
  mapStateToProps,
  { submitFormAction: submitForm, resetErrorAction: resetError },
)(TestWrappedForm);
