import {
  RECEIVE_USER,
  RECEIVE_USER_PHOTOS,
  RECEIVE_ALL_PHOTOS,
  RECEIVE_NEW_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_FOLLOWED_PHOTOS,
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_ERRORS
} from '../../actions/user_profile_actions.js';
import merge from 'lodash/merge';

const initialState = {errors: [],
  userId: null,
  username: null,
  profileDesc: null,
  profileImgUrl: null,
  coverImgUrl: null,
  userPhotos: [],
  discoverPhotos: [],
  followedPhotos: [],
  currentUserFollows: []
};

const UserProfileReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      newState.userId = action.user.id;
      newState.username = action.user.username;
      newState.profileDesc = action.user.profile_desc || "";
      newState.profileImgUrl = action.user.profile_img_url || "http://res.cloudinary.com/one-thousand-words/image/upload/w_400,h_400,e_saturation:-25,r_max/w_200/v1490143448/fmkoxogiotu2haw9gswf.png";
      newState.coverImgUrl = action.user.cover_img_url || "http://res.cloudinary.com/one-thousand-words/image/upload/e_saturation:-30/v1490144881/yrruzlpd3kguhmflafpb.jpg";
      newState.followedPhotos = action.user.followedPhotos;
      return newState;
    case RECEIVE_USER_PHOTOS:
      newState.userPhotos = action.photos;
      return newState;
    case RECEIVE_NEW_PHOTO:
      window.newState = newState;
      newState.userPhotos.push(action.photo);
      return newState;
    case RECEIVE_ALL_PHOTOS:
      newState.discoverPhotos = action.photos;
      return newState;
    case RECEIVE_FOLLOWED_PHOTOS:
      newState.followedPhotos = action.photos;
      return newState;
    case REMOVE_PHOTO:
      let photoId = newState.userPhotos.map(photo => photo.id).indexOf(action.photo);
      newState.userPhotos.splice(photoId,1);
      return newState;
    case RECEIVE_FOLLOWS:
      let ids = [];
      for (let i = 0; i < action.follows.length; i++) {
        ids.push(action.follows[i].id);
      }
      newState.currentUserFollows = ids;
      return newState;
    case RECEIVE_FOLLOW:
      newState.currentUserFollows.push(action.follow.followee_id);
      return newState;
    case REMOVE_FOLLOW:
      newState.currentUserFollows.splice(newState.currentUserFollows.indexOf(action.follow), 1);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UserProfileReducer;
