exports.debug = (title, obj, status) => {
  const spacer = '\n============================================================\n';
  let stat = status;
  if (!stat) {
    stat = '';
  }
  const output = `[ = = = DEBUGGING UTILITY = = = ] ${title} ${stat} ${spacer}`;
  if (process.env.DEBUG) {
    console.log(output, obj, spacer);
  }
};
