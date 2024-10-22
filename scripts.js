require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('code-editor'), {
        value: "// Type your code here\n",
        language: 'javascript',
        theme: 'vs-dark'
    });

    document.getElementById('run').onclick = function() {
        const code = editor.getValue();
        const iframe = document.getElementById('output');
        iframe.srcdoc = code;
    };
});
