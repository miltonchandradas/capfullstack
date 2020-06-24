const cds = require('@sap/cds');

module.exports = cds.service.impl(srv => {
    srv.before("*", req => console.debug(">>>", req.method, req.target.name));

    srv.on("READ", "ProductSet", async (req, next) => {
        const products = await next();
        return products.filter(product => product.status === "active");
    });
});

