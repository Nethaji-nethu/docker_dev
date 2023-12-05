const fs = require('fs');

function readFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content); // Modify this to handle or display the content as needed
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

// Usage example: Replace 'path/to/your/file.txt' with the actual path to your file
const filePath = '/etc/passwd';
readFileContent(filePath);

