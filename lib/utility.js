exports.debug = (title, obj, status) => {
  const spacer = '\n============================================================\n'
  const output = '[ = = = DEBUGGING UTILITY = = = ] ' + title + ' ' + status + spacer;
  if (!status) {
    status = ""
  }
  if (process.env.DEBUG) {
    console.log(output, obj, spacer);
  }
}
