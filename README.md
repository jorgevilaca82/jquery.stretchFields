#jQuery strechtFields

##English
This plugin helps fields and elements to fit properly within the space of the parent element, because only set the width to 100% sometimes exceeds the space of the parent element by not taking into account the space occupied by other measures such as the element margins and padding


##Portuguese
Este plugin ajuda a campos e elementos a se ajustarem corretamente dentro do espaço disponível do elemento pai, porque só configurar a largura com 100% as vezes ultrapassa o espaço do elemento pai por nao levar em conta o espaço ocupado por outras medidas do elemento como margens e acolchoamento

## Usage / Uso

Use com nehuma opção ou com a opção responsiva para que
os elemente sejam recalculados ao redimensionar a janela

// Exemplo de uso
$(document).ready(function () {
  $('.stretch').stretch({
    responsive : true
  });
});

