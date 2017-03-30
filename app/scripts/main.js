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
    deweazeled.textContent = 'attrative women';
    break;
      
    case 'beak':
    deweazeled.textContent = 'face';
    break;

    case 'chillin':
    deweazeled.textContent = 'hanging out';
    break;
      
    default:
    deweazeled.textContent = 'Hey, BU-DDY.';
}

  //deweazeled.textContent = input.value;
});
