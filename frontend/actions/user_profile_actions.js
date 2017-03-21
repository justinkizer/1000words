import * as UserAPIUtil from '../util/user_api_util.js';
import * as PhotosAPIUtil from '../util/photos_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";
export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveUserPhotos = photos => ({
  type: RECEIVE_USER_PHOTOS,
  photos
});

export const receiveNewPhoto = photo => ({
  type: RECEIVE_NEW_PHOTO,
  photo
});

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchUserPhotos = id => dispatch => (
  PhotosAPIUtil.fetchUserPhotos(id).then(photos => dispatch(receiveUserPhotos(photos)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createPhoto = photo => dispatch => (
  PhotosAPIUtil.createPhoto(photo).then(newPhoto => dispatch(receiveNewPhoto(newPhoto)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllPhotos = () => dispatch => (
  PhotosAPIUtil.fetchAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
