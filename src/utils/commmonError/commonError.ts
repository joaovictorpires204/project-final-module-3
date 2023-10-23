interface CommonErrorInterface {
  error: Boolean;
  message: string ;
  status: number;
}

function commonError(message: String, status: number) {
  return {
    error: true,
    status,
    message,
  };
}

export { commonError, CommonErrorInterface};
