// Merge all summary parts into one SUMMARIES_DATA object
const SUMMARIES_DATA = Object.assign(
  {},
  typeof SUMMARIES_PART1 !== 'undefined' ? SUMMARIES_PART1 : {},
  typeof SUMMARIES_PART2 !== 'undefined' ? SUMMARIES_PART2 : {},
  typeof SUMMARIES_PART3 !== 'undefined' ? SUMMARIES_PART3 : {}
);
