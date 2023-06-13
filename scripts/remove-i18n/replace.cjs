const fs = require('fs');
const path = require('path');


const replace_Second_FilePath = path.resolve(__dirname, './replace/replace_Second.jsx');
const Second_Filepath = path.resolve(__dirname, '../../src/Second.jsx');

const routerFilePath = path.resolve(__dirname, '../../src/routes/index.jsx');

function replace_default_page () {
  let replace_Second_FileContent = fs.readFileSync(replace_Second_FilePath, 'utf8')
  Second_Filepath && fs.writeFileSync(Second_Filepath, replace_Second_FileContent, 'utf8');
  console.log('Second.jsx 已替换')
}


// (fs.existsSync(replace_Second_FilePath) && fs.existsSync(Second_Filepath)) && replace_default_page()

function replace_route_index_jsx (params) {
  const routerFileContent = fs.readFileSync(routerFilePath, 'utf8')
  console.log(routerFileContent)
}

fs.existsSync(routerFilePath) && replace_route_index_jsx()
