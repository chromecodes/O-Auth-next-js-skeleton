export const validationCheck = (value: string, type: string): boolean => {
  switch (type) {
    case "email":
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(value.toLowerCase());
    case "password":
      const passwordRegex = /^.{8,}$/; // Minimum 8 characters
      return passwordRegex.test(value);
    default:
      return true;
  }
};
