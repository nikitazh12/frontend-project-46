import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }

  if (_.isString(data)) {
    return `'${data}'`;
  }

  return `${data}`;
};

const plain = (tree) => {
  const iter = (currentValue, path = []) => {
    const result = currentValue.map((item) => {
      const newPath = [...path, item.key].join('.');

      switch (item.type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(item.value)}`;
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(item.value.old)} to ${stringify(item.value.new)}`;
        case 'node':
          return iter(item.children, newPath.split('.'));
        case 'unchanged':
          return '';
        default:
          throw new Error(`Error type - ${item.type}`);
      }
    });

    return result.filter((item) => item !== '').join('\n');
  };

  return iter(tree);
};

export default plain;
