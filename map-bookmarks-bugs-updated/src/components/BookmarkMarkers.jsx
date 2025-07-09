import { Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import { editBookmark } from '../actions/editBookmark';

const BookmarkMarkers = ({ bookmarks, editBookmark: editBookmarkProp }) => (
  <>
    {Object.values(bookmarks).map(bm => (
      <Marker
        key={bm.id}
        position={bm.position}
        eventHandlers={{
          click: () => {
            const newText = window.prompt('Edit bookmark description:', bm.text);
            if (newText !== null && newText.trim() !== '') {
              editBookmarkProp(bm.id, newText);
            }
          },
        }}
      >
        <Popup>{bm.text}</Popup>
      </Marker>
    ))}
  </>
);

const mapStateToProps = state => ({
  bookmarks: state.bookmarks.data,
});

export default connect(mapStateToProps, { editBookmark })(BookmarkMarkers);