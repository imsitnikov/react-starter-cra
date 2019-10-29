import { TIMEOUT_VALUE } from '@/constants';

type requestRacerParams = {
  request: Promise<any>;
};

// функция для отключения запроса по таймауту
export const requestRacer = async ({
  request,
}: requestRacerParams): Promise<Array<any>> => {
  const timeoutException = new Promise(resolve =>
    setTimeout(
      () => resolve({ error: 'request-error', message: '' }),
      TIMEOUT_VALUE,
    ),
  );

  return Promise.race([request, timeoutException]);
};
