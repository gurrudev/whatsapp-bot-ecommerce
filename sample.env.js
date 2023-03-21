const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    Meta_WA_VerifyToken: process.env.Meta_WA_VerifyToken,
    Meta_WA_accessToken: process.env.Meta_WA_accessToken,
    Meta_WA_SenderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId,
    Meta_WA_wabaId: process.env.Meta_WA_wabaId,
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
