function quarter(date) 
  {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
  }


console.log(quarter(new Date()));
console.log(quarter(new Date(2015, 1, 21))); 
console.log(quarter(new Date(2015, 10, 18)));
