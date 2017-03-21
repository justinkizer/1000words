import {
  RECEIVE_USER,
  RECEIVE_USER_PHOTOS,
  RECEIVE_ALL_PHOTOS,
  RECEIVE_ERRORS,
} from '../../actions/user_profile_actions.js';
import merge from 'lodash/merge';

const initialState = {errors: [],
  userId: null,
  username: null,
  profileDesc: null,
  profileImgUrl: null,
  coverImgUrl: null,
  userPhotos: null,
  discoverPhotos: null,
  followsPhotos: null
};

const UserProfileReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      newState.userId = action.user.id;
      newState.username = action.user.username;
      newState.profileDesc = action.user.profile_desc || "I enjoy long walks on the Death Star and baking snickerdoodles with my cat.";
      newState.profileImgUrl = action.user.profile_img_url || "http://res.cloudinary.com/one-thousand-words/image/upload/w_1000,h_1000,c_crop,r_max,e_saturation:-25/w_200/v1489894963/DarthVaderProfile_f1sxav.png";
      newState.coverImgUrl = action.user.cover_img_url || "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos12_hfs2pt.jpg";
      newState.followsPhotos = action.user.followsPhotos;
      return newState;
    case RECEIVE_USER_PHOTOS:
      newState.userPhotos = action.photos;
      return newState;
    case RECEIVE_ALL_PHOTOS:
      newState.discoverPhotos = action.photos;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UserProfileReducer;
