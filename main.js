let Calculator = {
    average: function(x) {
      let num = 0;
      for (let i = 0; i < x.length; i++) 
      num = num + x[i];
      let divide = num/x.length;
      return divide;
   }
  };

  document.getElementById('choice').innerHTML = Calculator.average([1,2,3]);
  document.getElementById('choice').innerHTML = Calculator.average([1,2,3,4]);
  document.getElementById('choice').innerHTML = Calculator.average([0]);