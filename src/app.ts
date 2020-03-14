export const dva = {
    config: {
        onError(err: ErrorEvent) {
            err.preventDefault();
            console.error('app Error>>>>>>>', err.message);
        },
    },
    plugins: [require('dva-logger')()],
};
