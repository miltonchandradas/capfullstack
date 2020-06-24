module.exports = cds.service(srv => {
    srv.before("*", req => console.debug(">>>", req.method, req.target.name));

    srv.on("READ", "Products", async (req, next) => {
        const products = await next();
        return products.filter(product => product.status === "active");
    });
});

