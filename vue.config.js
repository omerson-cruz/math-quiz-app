module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/math-quiz-app/" // <== name of your GH repository
      : "/",
};
