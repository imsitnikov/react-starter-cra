export type TestFormStateType = {
  errorTextValue?: string;
};

export type FullStoreType = {
  testFormStorage: TestFormStateType;
};

export type SubmitFormActionParams = {
  failedActionType?: string;
  resetError?: string;
  success?: string;
  loading?: string;
  formValues: any;
  url: string;
  method: string;
};
