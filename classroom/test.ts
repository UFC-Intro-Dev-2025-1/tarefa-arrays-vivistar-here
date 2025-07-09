import { execSync } from 'child_process';

let passed = 0;
const total = 4;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Valida o TypeScript
try {
    const outputLinter = execSync('npx eslint src/**/*.ts').toString();

    if (outputLinter.includes('problem') || outputLinter.includes('error')) {
        console.log('❌ Verifique o TypeScript no código.');
        console.log(outputLinter);
    } else console.log('✅ TypeScript validado!');
} catch (error) {
    console.log(
        '❌ Erros do ESLint:\n',
        error.stdout?.toString() || error.message
    );
}

// Teste 1: Verifica o main.ts
try {
    // testa se roda
    const saidasEsperadas = [
        'Tamanho: 5',
        'Array: 10,20,30,40,50',
        'Tamanho: 7',
        'Array: 10,20,30,40,50,60,70',
        'Tamanho: 6',
        'Array: 10,20,30,40,50,60',
        'Elemento excluído: 70',
        '10\n20\n30\n40\n50\n60',
        'Tamanho: 6',
        'Array: 20,40,60,80,100,120',
        'Soma dos elementos do array: 210',
    ];
    const output = execSync('npm run build').toString();
    if (saidasEsperadas.some((saida) => output.toString().includes(saida))) {
        passed++;
        console.log('✅ main.ts: Saída em texto do código é a esperada.');
    } else {
        console.log(
            '❌ main.ts: Saída em texto do código não é a esperada: \nSer ou não ser, eis a questão.'
        );
    }
} catch (e) {
    console.log('❌ main.ts: Erro: ' + e.message);
}

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
