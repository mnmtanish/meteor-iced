var coffee = Npm.require('iced-coffee-script');

Plugin.registerSourceHandler('iced', function(compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + '.js';

  var options = {
    bare: true,
    filename: compileStep.inputPath,
    sourceMap: true,
    inline: true,
    generatedFile: "/" + outputFile,
    sourceFiles: [compileStep.pathForSourceMap]
  };

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: coffee.compile(source, options).js,
  });
});
