import * as UserAPIUtil from '../util/user_api_util.js';
import * as PhotosAPIUtil from '../util/photos_api_util.js';
import * as FollowingsAPIUtil from '../util/followings_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";
export const RECEIVE_NEW_PHOTO = "RECEIVE_NEW_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_FOLLOWED_PHOTOS = "RECEIVE_FOLLOWED_PHOTOS";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

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

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveFollowedPhotos = photos => ({
  type: RECEIVE_FOLLOWED_PHOTOS,
  photos
});

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
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

export const deletePhoto = id => dispatch => (
  PhotosAPIUtil.deletePhoto(id).then(() => dispatch(removePhoto(id)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchAllPhotos = () => dispatch => (
  PhotosAPIUtil.fetchAllPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchFollowedPhotos = followerId => dispatch => (
  FollowingsAPIUtil.fetchFollowedPhotos(followerId).then(photos => dispatch(receiveFollowedPhotos(photos)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchFollows = followee => dispatch => (
  FollowingsAPIUtil.fetchFollows(followee).then(follows => dispatch(receiveFollows(follows)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const createFollowing = followee => dispatch => (
  FollowingsAPIUtil.createFollowing(followee).then(follow => dispatch(receiveFollow(follow)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const deleteFollowing = followeeId => dispatch => (
  FollowingsAPIUtil.deleteFollowing(followeeId).then(() => dispatch(removeFollow(followeeId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
