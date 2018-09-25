let hljs = require("highlight.js");

hljs.configure({
  languages: [
    "json",
    "clojure",
    "xml",
    "javascript",
    "js",
    "html",
    "python",
    "ruby",
    "perl",
    "php",
    "bash",
    "go",
    "golang",
    "java",
    "objective-c",
    "objectivec",
    "scala",
    "c#",
    "c-sharp",
    "haxe",
    "coffeescript"
  ]
});

window.hljs = hljs;
