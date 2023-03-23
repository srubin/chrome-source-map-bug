export function blockFor(durationMs) {
    var start = Date.now();
    while (Date.now() - start < durationMs) {
        // do nothing
    }
    console.log('done');
}
setInterval(function () {
    blockFor(100);
}, 1000);
//# sourceMappingURL=index.js.map