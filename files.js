const fs = require('fs');


// Reading files
fs.readFile('./docs/blog.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});


// Writing file
fs.writeFile('./docs/blog.txt', 'Hello world', () => { // Overwrite existing content 
  console.log('File written successfully');
});

fs.writeFile('./docs/blog2.txt', 'Changing the world', () => { // Create and write file
  console.log('Second file created and written');
});


// Directory
fs.mkdir('./assests', (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Directory created successfully')
});


// To check if it exist before creating a directory
if (!fs.existsSync('./assests/styles')) {
  fs.mkdir('./assests/styles', (error) => {
    if (error) {
      console.log(error);
    }
    console.log('Directory created successfully')
  });
} else { // Remove a folder if it already exists.
  fs.rmdir('./assests/images', (error) => {
    if (error) {
      console.log(error);
    }
    console.log('Folder deleted successfully');
  });
}


// Deleting a file
if (fs.existsSync('./docs/deletefile.txt')) {
  fs.unlink('./docs/deletefile.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('File deleted successfully');
  });
}
