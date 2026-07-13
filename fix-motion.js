const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/components');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('motion')) {
    let newContent = content
      .replace(/<motion\./g, '<m.')
      .replace(/<\/motion\./g, '</m.')
      .replace(/import\s+\{\s*motion\s*(,\s*[^}]+)?\}\s+from\s+['"]framer-motion['"]/g, (match, p1) => {
        return p1 ? `import { m${p1}} from 'framer-motion'` : "import { m } from 'framer-motion'";
      })
      .replace(/import\s+\{\s*([^,]+),\s*motion\s*\}\s+from\s+['"]framer-motion['"]/g, "import { $1, m } from 'framer-motion'");
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated', file);
    }
  }
})
