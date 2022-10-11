import Schema from 'async-validator';

export const onValidateField = (value, rules) => {
  const validator = new Schema(rules);
  return new Promise((resolve) => {
    validator.validate(value, (errors, fields) => {
      if (errors) {
        resolve(errors);
      } else {
        const errMsg = Object.keys(rules).map((key) => {
          return {
            field: key,
            message: undefined,
          };
        });
        resolve(errMsg);
      }
    });
  });
};
