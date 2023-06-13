const fs = require('fs');
const path = require('path');


const replace_Second_FilePath = path.resolve(__dirname, './replace/replace_Second.jsx');
const Second_Filepath = path.resolve(__dirname, '../../src/Second.jsx');

function replace_default_page () {
  let replace_Second_FileContent = fs.readFileSync(replace_Second_FilePath, 'utf8')
  Second_Filepath && fs.writeFileSync(Second_Filepath, replace_Second_FileContent, 'utf8');
  console.log('Second.jsx 已替换')
}


(replace_Second_FilePath && Second_Filepath) && replace_default_page()
