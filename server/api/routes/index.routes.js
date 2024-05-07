const jobsRoutes = require("./jobs.routes")
const companyRoutes = require("./company.routes")
const cvRoutes = require("./cv.routes")
const tagsRoutes = require("./tags.routes")
const accountRoutes = require("./register.routes")
const loginRoutes = require("./login.routes")
module.exports = (app) =>{
    app.use("/jobs",jobsRoutes)
    app.use("/company",companyRoutes)
    app.use("/cv",cvRoutes)
    app.use("/tags",tagsRoutes)
    app.use("/account",accountRoutes)
    app.use("/login",loginRoutes)
}