module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/style/global.scss";`
      }
      // pass Less.js Options to less-loader
      // less:{
      //   // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
      //   // `primary` is global variables fields name
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: false
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
