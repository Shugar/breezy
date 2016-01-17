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
      joinTo: 'javascripts/app.js': /.+\.jade$/

  plugins:
    jade:
      pretty: no # Adds pretty-indentation whitespaces to output (false by default)

    static_jade:                        # all optionals
      extension:  ".static.jade"        # static-compile each file with this extension in `assets`
      asset:      "app/assets"     # specify the compilation output

    postcss:
      processors: [
        require('autoprefixer')(['> 1%','last 8 versions','ie 9'])
      ]