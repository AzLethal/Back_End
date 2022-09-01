const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

/* splice: 3 parametros 
1º p: indice do array a qual sera iniciado
2º p: numero de elementos que serão removidos
3º p: o que será colocado no lugar (opcional)

Obs.: também pode ser utilizado para adição, sem remoção
utilizando a seguinte forma:
listaDeChamada.splice(1, 0, 'Rodrigo');
Resultado: ['João', 'Rodrigo', 'Ana',  'Caio', 'Lara', 'Marjorie', 'Leo']

*/
listaDeChamada.splice(1, 2, 'Rodrigo');

console.log(listaDeChamada);
