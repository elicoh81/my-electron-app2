module.exports = function (api) {
    const isDevelopment = process.env.BABEL_ENV;
    api.cache(true);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        node: "current",
                    },
                },
            ],
            [
                "@babel/preset-react",
                {
                    pragma: "dom",
                    pragmaFrag: "DomFrag",
                    throwIfNamespace: false,
                    runtime: "classic",
                    development: isDevelopment,
                },
            ],
            "@babel/preset-typescript"
        ],
    };
};
