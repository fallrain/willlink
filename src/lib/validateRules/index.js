import { Validator } from 'vee-validate';

const dictionary = {
  en: {
    messages: {
      alpha: () => 'Some English Message'
    }
  }
};

// Override and merge the dictionaries
Validator.localize(dictionary);
export default {
  rules: {
    phone: {
      getMessage: field => 's',
      validate: value => !!value
    }
  }
};
