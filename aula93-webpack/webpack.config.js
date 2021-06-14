const path  = require('path');//CommonJS

module.exports = {
    mode: 'development', //o modo que vamos utilizar, - para mudar para produção é só mudar o development para production
    entry: './src/index.js',// o caminho de onde ficara a nossa index
    output:{ 
        path: path.resolve(__dirname, 'public', 'Assets', 'js'), //estamos setando o caminho de onde vai ficar o bundle.js, usando o __dirname torna desnecessario o uso das / 
        filename: 'bundle.js'//setando o nome do arquivo
    },
    module: {
        rules: [{ //rules são regras, sao arrays de objetos contendo diversas regras 
            exclude: /node_modules/, //o exclude dentro dos / / não inclui o arquivo selecionado para a leitura, ignorando ele
            test: /\.js$/, //qual arquivo que será analisado
            use:{
                loader:'babel-loader', //especifica o que será utilizado, no nosso caso será o babelloader que esta no package.json
                options:{
                    presets:['@babel/env']// usando o env selecionado
                }
            }
        }]
    },

    devtool: 'source-map' //mapeia os erros e mostra em qual arquivo ele esta
    };