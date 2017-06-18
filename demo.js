var job = require("./src/job.js")

job.search("art director")
//human.search()

setTimeout(function(){
    job.visit("https://www.linkedin.com/jobs/view/333013540")
}, 5000)
