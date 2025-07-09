export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';

export const createBookmark = coords => dispatch => {
  let result;
  // Keep prompting until user enters non-empty text or cancels
  while (true) {
    // eslint-disable-next-line no-alert
    result = window.prompt(
      'Enter a description for the bookmark (or press cancel to exit)',
      '',
    );
    if (result === null) return; // User cancelled
    if (result.trim() !== '') break; // Valid input
    // Otherwise, keep prompting
  }
  dispatch({ type: CREATE_BOOKMARK, result, coords });
};
  