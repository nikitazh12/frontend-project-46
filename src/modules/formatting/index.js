import stylish from './stylish.js';
import plain from './plain.js';

const formatting = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    case 'plain': {
      return plain(data);
    }
    case 'json': {
      return JSON.stringify(data, null, 2);
    }
    default: {
      throw new Error(`Error formatting: ${format}`);
    }
  }
};

export default formatting;
