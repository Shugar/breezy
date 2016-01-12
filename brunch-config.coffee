exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(?!app)/

    stylesheets:
      joinTo: 'stylesheets/app.css'

    templates:
      joinTo: 'javascripts/app.js'

  plugins:
    jaded:
      jade:
        pretty: no

    postcss:
      processors: [
        require('autoprefixer')(['> 1%','last 8 versions','ie 9']),
        require('postcss-flexbugs-fixes'),
        require('postcss-flexibility')
      ]

    babel:
      presets: ['es2015']
      ignore: [
        /^(bower_components|vendor)/
        'app/legacyES5Code/**/*'
      ]
      pattern: /\.(es6|jsx)$/