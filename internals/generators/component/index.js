const fs = require('fs');
const path = require('path');
const componentExists = (type, sceneName, componentName) => {
  let dir = '';
  switch (type) {
    case 'Shared Component': {
      dir = path.join(__dirname, '../../../src/components');
      break;
    }
    case 'Scene Component': {
      dir = path.join(__dirname, `../../../src/scenes/${sceneName}/components`);
      break;
    }
  }
  const componentsContent = fs.readdirSync(dir);
  return componentsContent.indexOf(componentName) >= 0;
};

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Shared Component',
    choices: () => ['Shared Component', 'Scene Component']
  }, {
    type: 'input',
    name: 'componentName',
    message: 'What should it be called?',
    default: '',
    validate: (value) => value ? true : 'The name is required'
  }, {
    type: 'input',
    name: 'sceneName',
    message: 'Input scene name (skip if this shared component)',
    default: ''
  }],
  actions: (data) => {

    // if scene name was not provided
    if (data.type === 'Scene Component' && !data.sceneName) {
      console.log('Scene name was not provided. Exit.');
      process.exit(0);
    }

    // if component exists
    if (componentExists(data.type, data.sceneName, data.componentName)) {
      console.log('Component already exists. Exit.');
      process.exit(0);
    }

    let path = [];

    switch (data.type) {
      case 'Shared Component': {
        path = [
          '../../src/components/{{properCase componentName}}/index.jsx',
          '../../src/components/{{properCase componentName}}/styles.js'
        ];
        break;
      }
      case 'Scene Component': {
        path = [
          `../../src/scenes/${data.sceneName}/components/{{properCase componentName}}/index.jsx`,
          `../../src/scenes/${data.sceneName}/components/{{properCase componentName}}/styles.js`
        ];
        break;
      }
    }

    const actions = [{
      type: 'add',
      path: path[0],
      templateFile: './component/index.jsx.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: path[1],
      templateFile: './component/styles.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  }
};
