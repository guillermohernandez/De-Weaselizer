var input = document.getElementById('lingo');

var output = document.getElementById('deweazeled');

input.addEventListener('input', function() {
  switch (input.value) {
  case 'crusty':
    deweazeled.textContent = 'dude';
    break;
      
   case 'grindage':
    deweazeled.textContent = 'food';
    break;
      
    case 'grinding':
    deweazeled.textContent = 'eating';
    break;
      
    case 'melon':
    deweazeled.textContent = 'head';
    break;
      
    case 'weeze':
    deweazeled.textContent = 'weeze';
    break;
      
    case 'nugs':
    deweazeled.textContent = 'nugs';
    break;
      
    case 'beak':
    deweazeled.textContent = 'face';
    break;
      
    default:
    deweazeled.textContent = 'Hey, BU-DDY.';
}

  //deweazeled.textContent = input.value;
});
