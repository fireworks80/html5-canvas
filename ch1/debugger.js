const log = (message) => {
  try {
    console.log(message);
  } catch (exception) {
    return;
  }
};

export default { log };
