# Funções

<!-- toc -->

- [Arrays](#arrays)
  - [O que são Arrays?](#o-que-são-arrays)
    - [Inicializando um array vazio](#inicializando-um-array-vazio)
  - [arrayLength](#arraylength)
  - [Accessando elementos de um array](#accessando-elementos-de-um-array)
  - [Métodos de array](#métodos-de-array)
    - [Iterar um Array - foreach](#iterar-um-array---foreach)
    - [Adicionar um item ao final do Array - push](#adicionar-um-item-ao-final-do-array---push)
    - [Remover um item do final do Array - pop](#remover-um-item-do-final-do-array---pop)
    - [Remover do início do Array - shift](#remover-do-início-do-array---shift)
    - [Adicionar ao início do Array - unshift](#adicionar-ao-início-do-array---unshift)
    - [Procurar o índice de um item na Array](#procurar-o-índice-de-um-item-na-array)
    - [Remover um item pela posição do índice - splice](#remover-um-item-pela-posiçãodo-índice---splice)
    - [Copiar um Array - slice](#copiar-um-array---slice)
    - [Mesclar dois arrays - concat](#mesclar-dois-arrays---slice)
    - [Buscar um elemento - find](#buscar-um-elemento---find)
    - [Horizontaliza um array - flat](#horizontaliza-um-array---flat)
    - [Ordenar elementos - sort](#ordenar-elementos---sort)
    - [Faz uma ação em cada elemento do Array pra gerar um novo array - map](#faz-uma-ação-em-cada-elemento-do-array-pra-gerar-um-novo-array---map)
    - [Faz um cálculo em cada elemento do array e retorna um valor - reduce](#faz-um-cálculo-em-cada-elemento-do-array-e-retorna-um-valor---reduce)
    - [Faz uma validação em cada elemento do array e retorna true ou false - some](#faz-uma-validação-em-cada-elemento-do-array-e-retorna-true-ou-false---some)
    - [Filtra elementos do array que estão em uma condição - filter](#filtra-elementos-do-array-que-estão-em-uma-condição---filter)
- [Referências](#referências)


<!-- toc -->

## Arrays

### O que são Arrays?

Arrays são estruturas de dados que armazenam uma coleção de elementos, geralmente do mesmo tipo, em uma única variável. Eles permitem acessar os elementos por meio de índices, que começam em 0. Veja os exemplos abaixo:

```javascript
// JavaScript
// Criando um array de frutas
const frutas = ['Maçã', 'Banana', 'Laranja'];

// Acessando elementos do array
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

// Adicionando um elemento ao array
frutas.push('Uva');
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']

// Iterando sobre os elementos do array
frutas.forEach((fruta) => {
    console.log(fruta);
});
```

Veja o mesmo código em TypeScript:

```typescript
// TypeScript
// Criando um array de frutas
const frutas: string[] = ['Maçã', 'Banana', 'Laranja'];

// Acessando elementos do array
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

// Adicionando um elemento ao array
frutas.push('Uva');
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']

// Iterando sobre os elementos do array
frutas.forEach((fruta: string) => {
    console.log(fruta);
});
```

#### Inicializando um array vazio

```typescript
// Inicializando um array vazio com tipo explícito
const vazio1: string[] = [];
// ou
const vazio1: string[] = new Array();
```

### arrayLength

A propriedade `length` de um array retorna o número de elementos presentes no array. É útil para determinar o tamanho do array ou iterar sobre seus elementos.

```typescript
// TypeScript
const frutas: string[] = ['Maçã', 'Banana', 'Laranja'];

// Obtendo o tamanho do array
console.log(frutas.length); // 3

// Iterando sobre os elementos usando o tamanho do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### Accessando elementos de um array

Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na posição equivalente ao valor da propriedade length (tamanho) menos 1.

```typescript
// TypeScript
var arr: string[] = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]); // exibe 'este é o primeiro elemento'
console.log(arr[1]); // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe o último elemento
```

Não podemos acessar os elementos como propriedade (como acontece nos objetos):

```typescript
// TypeScript
var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos.0); // um erro de sintaxe
console.log(anos[0]); // funciona corretamente
```

### Métodos de array

Considere o array abaixo para os exemplos seguintes:

```typescript
// TypeScript
var frutas: string[] = ['Maçã', 'Banana'];
```

#### Iterar um Array - `foreach`

```typescript
// TypeScript
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
});
// Maçã 0
// Banana 1
```

#### Adicionar um item ao final do Array - `push`

```typescript
// TypeScript
var adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
```

#### Remover um item do final do Array - `pop`

```typescript
// TypeScript
var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
```

#### Remover do início do Array - `shift`

Usado para remover do início do Array.

```typescript
// TypeScript
var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];
```

#### Adicionar ao início do Array - `unshift`

```typescript
// TypeScript
var adicionar = frutas.unshift('Morango'); // adiciona ao início
// ['Morango', 'Banana'];
```

#### Procurar o índice de um item na Array

```typescript
// TypeScript
frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1
```

#### Remover um item pela posição do índice - `splice`

```typescript
// TypeScript
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
```

#### Copiar um Array - `slice`

```typescript
// TypeScript
var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
```

#### Mesclar dois arrays - `concat`

```typescript
const array1: string[] = ['a', 'b', 'c'];
const array2: string[] = ['d', 'e', 'f'];
const array3: string[] = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

#### Buscar um elemento - `find`

```typescript
const array1: number[] = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

#### Horizontaliza um array - `flat`

```typescript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
```

#### Ordenar elementos - `sort`

O método `sort()` ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de [código unicode](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html).

```typescript
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números veem antes de letras maiúsculas,
// as quais veem antes das minúsculas.
```

#### Faz uma ação em cada elemento do Array pra gerar um novo array - `map`

O método map usa uma função como parâmetro, em que essa função pode ter o elemento e o index do elemento. Essa função é executada em cada elemento e a saída dela será um novo array destes novos elementos.

```typescript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

Outros exemplos:

```typescript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]
```

```typescript
var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
    return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```

Se não ficou tão claro, não tem problema. `map` e `reduce` são métodos mais avançados. Com o tempo, vamos nos habituando ao seu uso.

#### Faz um cálculo em cada elemento do array e retorna um valor - `reduce`

O método reduce, assim como a map, usa uma função como parâmetro, em que essa função pode ter o acumulador, o elemento, o índice do elemento e o array original `function(acumulador, valorAtual, indice, array)`. Essa função é executada em cada elemento. A saída da função reduce é o acumulador, que vai passando de execução em execução. Veja os exemplos abaixo:

```typescript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

**Explicação do funcionamento do `reduce`**

| acumulador       | valorAtual | index | array           | valor de retorno |
| ---------------- | ---------- | ----- | --------------- | ---------------- |
| primeira chamada | 0          | 1     | [0, 1, 2, 3, 4] | 1                |
| segunda chamada  | 1          | 2     | [0, 1, 2, 3, 4] | 3                |
| terceira chamada | 3          | 3     | [0, 1, 2, 3, 4] | 6                |
| quarta chamada   | 6          | 4     | [0, 1, 2, 3, 4] | 10               |

O retorno da última chamada 20,é retornado como resultado da função reduce().

**Exemplo com ArrowFunction**

```typescript
const total: number = [0, 1, 2, 3].reduce(
    (acumulador: number, valorAtual: number) => acumulador + valorAtual,
    0
);
```

#### Faz uma validação em cada elemento do array e retorna true ou false - `some`

O método some, assim como o reduce e o a map, usa uma função como parâmetro, em que essa função tem o elemento, o índice do elemento e o array original `function(element, index, array)`. Essa função é executada em cada elemento e deve retornar `true` ou `false`. A saída do `some` é `true` se qualquer um das validações for `true`. Veja os exemplos abaixo:

```typescript
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

#### Filtra elementos do array que estão em uma condição - `filter`

Se em vez de saber se aquela condição é satisfeita ou não você quiser quais elementos estão na condição, pode usar o `filter`.

```typescript
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].filter(isBiggerThan10); // []
[12, 5, 8, 1, 4].filter(isBiggerThan10); // [12]
```

## Referências

-   [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [W3Schools - TypeScript Arrays](https://www.w3schools.com/typescript/typescript_arrays.php)
