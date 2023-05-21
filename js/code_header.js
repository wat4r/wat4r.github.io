var copyHtml = '<i class="fa-regular fa-clipboard"></i>Copy';
var copiedHtml = '<i class="fa-solid fa-check"></i>Copied!';

document.addEventListener('DOMContentLoaded', function() {
    var codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(function(codeBlock) {
        var headerDiv = document.createElement("div");
        headerDiv.className = "code-header";
        var dataLang = codeBlock.firstChild.getAttribute("data-lang");
        headerDiv.innerHTML = `<span class="data-lang">${dataLang}</span>`;
        var copyBtn = document.createElement("button");
        copyBtn.className = "copy-btn";
        copyBtn.innerHTML = copyHtml
        headerDiv.appendChild(copyBtn);
        codeBlock.insertBefore(headerDiv, codeBlock.firstChild);
    });

    window.onload = function() {
        var buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(function(button) {
            var code = button.parentNode.parentNode.querySelector('code').innerText;
            var clipboard = new ClipboardJS(button, {
                text: function() {
                    return code;
                }
            });
            clipboard.on('success', function() {
                button.innerHTML = copiedHtml;
                setTimeout(function() {
                    button.innerHTML = copyHtml;
                }, 3000);
            });
        });
    };
});

// document.addEventListener('DOMContentLoaded', function() {
//     var codeBlocks = document.querySelectorAll('pre');
//     codeBlocks.forEach(function(codeBlock) {
//         var button = document.createElement('button');
//         button.className = 'copy-button';
//         button.innerHTML = 'Copy';
//         codeBlock.appendChild(button);
//     });
//     window.onload = function() {
//         var buttons = document.querySelectorAll('.copy-button');
//         buttons.forEach(function(button) {
//             var code = button.parentNode.querySelector('code').innerText;
//             var clipboard = new ClipboardJS(button, {
//                 text: function() {
//                     return code;
//                 }
//             });
//             clipboard.on('success', function() {
//                 button.innerHTML = 'Copied!';
//                 setTimeout(function() {
//                     button.innerHTML = 'Copy';
//                 }, 2000);
//             });
//         });
//     };
// });