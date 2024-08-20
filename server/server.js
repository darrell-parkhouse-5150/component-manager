const newComponent = async () => {
    const answers = await prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your component?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component do you want to create?',
        choices: [
          {
            name: 'React Component',
            value: 'react',
          },
          {
            name: 'Vue Component',
            value: 'vue',
          },
          {
            name: 'Angular Component',
            value: 'angular',
          },
          {
            name: 'Web Component',
            value: 'web',
          },
          {
            name: 'Custom Component',
            value: 'custom',
          },
        ],
        default: 'react',
      },
      {
        type: 'confirm',
        name: 'git',
        message: 'Do you want to initialize a Git repository for this component?',
        default: false,
      },
    ]);
  
    if (answers.type === 'custom') {
      const customType = await prompt({
        type: 'input',
        name: 'customType',
        message: 'Please enter the custom component type:',
      });
      answers.type = customType.customType;
    }
  
    createComponent(answers.name, answers);
  };

  const fs = require('fs')
  const path = require('path')
  const { prompt } = require('inquirer')

  const templates = {
    react: (name) => {
        return `
        
            ${name}.js
        `
    },
    
  }

  // create file for the various file types
  function parseLoc(loc) {
    return parseInt(loc.replace(/,/g, ''), 10);
  }
  
  // Calculate total LOC
  let totalLoc = components.reduce((total, component) => {
    return total + parseLoc(component.loc);
  }, 0);
  
  console.log('Total LOC:', totalLoc);