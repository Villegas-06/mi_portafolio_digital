//configurar nuestro path
const path = require('path');

//plugin que descargamos
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //entrada al elemento principal
    entry: './src/index.js',
    //elemento de salida 
    output :{
        //directorio del proyecto
        //crea el dist donde se va a guardar el proyecto
        path : path.resolve(__dirname, 'dist'),
        //llama al JS de como se va a construir
        filename : 'bundle.js',
      },

      //configurar archivos de trabajo
      resolve :{
          //extensiones de trabajo
          extensions:['.js','.jsx']
      },

      //módulo para las reglas
      module : {
          //definimos las reglas por medio de arreglas
          rules: [
              {
                  //creamos una expresión regular para identificar estos archivos
                    test:/\.(js|jsx)$/,
                    //excluir carperta de node modules
                    exclude: /node_modules/,
                    //utilizamos el loader de babel
                    use: {
                        loader:"babel-loader"
                    }
              },
              
              //identificamos archivos html de nuestro proyecto, entendemos y preparamos
              {
                  test: /\.html$/,
                  //uso el loader que previamente instalamos
                  use:{
                      loader: "html-loader"
                  }
              }

            ]
      },

      //agregar el plugin que instalamos para entender el archivo index y el que vamos a generar en la carpeta dist para enviar a producción
      plugins: [
          new HtmlWebPackPlugin({
              template: "./public/index.html",
              //empuja como
              filename: "./index.html"
          })
      ]

}