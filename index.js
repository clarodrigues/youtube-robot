const readline = require('readline-sync')



function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    //função para criar o input para obter o termo de busca na wikipedia
    function askAndReturnSearchTerm(){
        return readline.question('Digite um termo para pesquisar no Wikipedia: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)



}

start()