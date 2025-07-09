export const EDIT_BOOKMARK = 'EDIT_BOOKMARK';

export const editBookmark = (id, newText) => ({
  type: EDIT_BOOKMARK,
  id,
  newText,
});