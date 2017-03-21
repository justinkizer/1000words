export const fetchUserPhotos = id => (
  $.ajax({
    url: `/api/users/${id}/photos`,
    method: "GET"
  })
);

export const fetchAllPhotos = () => (
  $.ajax({
    url: `/api/photos`,
    method: "GET"
  })
);

export const fetchPhoto = id => (
  $.ajax({
    url: `/api/photos/${id}`,
    method: "GET"
  })
);

export const deletePhoto = id => (
  $.ajax({
    url: `/api/photos/${id}`,
    method: "DELETE"
  })
);

export const createPhoto = photo => (
  $.ajax({
    url: "api/photos",
    method: "POST",
    data: {
      photo: {img_url: photo.url}
    }
  })
);

export const editPhoto = photo => (
  $.ajax({
    url: "api/photos",
    method: "PATCH",
    data: {
      photo: {description: photo.description}
    }
  })
);
