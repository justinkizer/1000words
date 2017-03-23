export const fetchFollowedPhotos = followerId => (
  $.ajax({
    url: `/api/users/${followerId}/followings`,
    method: "GET"
  })
);

export const fetchFollows = followeeId => (
  $.ajax({
    url: `api/followings/${followeeId}`,
    method: "GET"
  })
);

export const deleteFollowing = followeeId => (
  $.ajax({
    url: `/api/followings/${followeeId}`,
    method: "DELETE",
    data: {
      following: {followee_id: followeeId}
    }
  })
);

export const createFollowing = followeeId => (
  $.ajax({
    url: "api/followings",
    method: "POST",
    data: {
      following: {followee_id: followeeId}
    }
  })
);
