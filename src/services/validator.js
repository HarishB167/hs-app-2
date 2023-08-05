class Validator {
  constructor(data, schema) {
    this.data = data;
    this.schema = schema;
  }

  validate() {
    const result = Joi.validate(this.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  }

  validateProperty({ name, value }) {
    const obj = { [name]: value };
    const sch = { [name]: schema[name] };
    const { error } = Joi.validate(obj, sch);
    return error ? error.details[0].message : null;
  }
}

export default Validator;
