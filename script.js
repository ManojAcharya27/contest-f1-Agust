let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    const developers = arr.filter(person => person.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' };
    arr.push(newEmployee);
    console.log('New employee added:', newEmployee);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedArr = arr.filter(person => person.profession !== 'admin');
    console.log('Array with admin removed:', updatedArr);

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: 'peter', age: '21', profession: 'admin' },
        { id: 6, name: 'lisa', age: '22', profession: 'developer' },
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log('Concatenated array:', concatenatedArray);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }