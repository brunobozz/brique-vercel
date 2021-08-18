const PROXY_CONFIG = [
  {
    context: ["/api"],
    target:
      "http://feb477fa-klabrique-backend-1088-681629770.us-east-1.elb.amazonaws.com",
    secure: false,
    logLevel: "debug",
    pathRewrite: { "/api": "" },
  },
];

module.exports = PROXY_CONFIG;
