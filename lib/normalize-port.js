module.exports = (intValue) => {
  let port = parseInt(intValue, 10);
  if (isNaN(port)) {
    return intValue;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}