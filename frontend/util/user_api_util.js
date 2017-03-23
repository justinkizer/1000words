export const fetchUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: "GET"
  })
);

export const updateUserProfile = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: "PATCH",
    data: {
      user
    }
  })
);
