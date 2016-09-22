export default function middlewares(/* runtimeSettings */) {
    return [function *(next) {
        yield next;
        if (!this.body) {
            this.body = 'Not other content! :)';
        }
    }];
}
