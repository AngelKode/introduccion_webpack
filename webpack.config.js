//Configuracion de webpack donde se va a construir 

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const optionsForBabelReact = {
    presets : [
        [
            '@babel/preset-react',
            {
                runtime : 'automatic'
            }
        ]
    ]
}

const ruleForJS = {
    test : /\.js$/,
    loader :'babel-loader',
    options: optionsForBabelReact
}

const ruleForStyles = {
    test : /\.css$/,
    use : ['style-loader', 'css-loader']
}

const rules = [
    ruleForJS, ruleForStyles
]

module.exports = (env, argv) => {

    const {mode} = argv
    const isProduction = mode === 'production'

    return {
        output : {
            filename : isProduction ? '[name].[contenthash].js' : 'main.js',
            path : path.resolve(__dirname,'build')
        },
        plugins : [
            new HtmlWebpackPlugin({template : 'src/index.html'})
        ],
        module : {
            rules
        },
        devServer : {
            open : true, //Abrimos el navegador
            port : 8080
        }
    }
} 