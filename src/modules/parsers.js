import yaml from 'js-yaml';

const parsers = (extname, data) => {
  switch (extname) {
    case '.json': {
      return JSON.parse(data);
    }
    case '.yml':
    case '.yaml': {
      return yaml.load(data);
    }
    default: {
      throw new Error(`Error parsers file - ${extname}`);
    }
  }
};

export default parsers;
