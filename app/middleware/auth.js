module.exports = options => {
    return async function auth(ctx, next) {
        if (!ctx.loginUser) {
            const helper = ctx.helper;
            ctx.body = helper.codeErrorResult(null, helper.errorCodes.ERROR_FORBIDDEN, '请传入用户标识！');
            return;
        }
        await next();
    };
};