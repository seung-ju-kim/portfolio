/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'removeTitle',
                                    active: false,
                                    name: 'removeViewBox',
                                    active: false,
                                    name: 'removeDimensions',
                                    active: false,
                                    throwIfNamespace: false,
                                },
                            ],
                        },
                    },
                },
            ],
        });
        return config;
    },
};

module.exports = nextConfig;
