# **1000words**

[1000words Live][1000words]

[1000words]: http://one-thousand-words.herokuapp.com/

1000words is a Full-Stack, Single-Page photography sharing web application inspired by 500px.com, built with React/Redux on a Rails/Postgres backend.

## User Features

### Creating and Updating User Profiles

![image of authentication modal](docs/production_screenshots/Authentication%20Modal.png)

As users' can create new accounts and login/logout, all password information is hashed and salted with BCrypt prior to being stored in the database.

A Demo Login is also available such that visitors may easily access all of the site's features.

On the front-end, the Join/Login/Demo functionality is implemented using a React-Bootstrap modal.

![image of user profile](docs/production_screenshots/User%20Profile.png)


Upon login, users can upload/create their own Profile Photo, Cover Photo, and Profile Description.

The Profile Photo's url is dynamically modified upon upload, so as to resize the image appropriately, center its content via face-detection algorithms, and convert it to a png, thereby facilitating use of alpha layers.

### Uploading and Managing Photos

![image of photo upload modal](docs/production_screenshots/Photo-Upload%20Modal.png)

Users can upload photos to their profile via public URLs, their personal desktop files, or their mobile photo libraries.

The Photo Upload functionality is implemented using the Cloudinary API, styled with custom CSS to ensure its representation is consistent with the rest of the application.

Once uploaded, a signed-in user can delete their own photos individually, instantly removing said photos from their photo feed in live time.

### Viewing Varied Feeds of Photos

![image of profile photo feeds](docs/production_screenshots/Profile%20Page%20Photo%20Feeds.png)


All users (i.e. whether logged in or logged out) can view a "Discover" photo feed linked on the main navigation bar. This feed reflects a Photo Grid React component accessing all photos available in the database, though signed-in users' photos will not be included in the "Discover" feed while logged in.

There are three Photo Feed options on a given user's Profile Page, being:

  - Followed

    + This view reflects photos from users that the owner of this profile previously "followed" and groups said photos by owner/user


  - My Photos

    + This view reflects photos from the owner of the loaded profile


  - Discover

    + This view loads the "Discover" feed mentioned above, which randomizes the order of all available photos in the feed upon each load, and is included here for user convenience


![image of discover feed](docs/production_screenshots/Discover%20Page%20Feed.png)


Each of the three feeds can be scrolled through and viewed as a Photo Grid, but can be further accessed by clicking a photo, which opens a Photo Show modal displaying the image at full-size (or a scaled down size, should the photo's dimensions be larger than the view window).

The Photo Show modal allows users to click on the left or right of the current photo to load the previous or next photo in the list, respectively, or to utilize the left and right arrow keys on their keyboard for photo navigation instead.

In addition, each photo opened via the Show Photo modal reflects a "Follow" button, which can be used to follow the photo's owner, alongside a scaled profile photo of the photo's owner, which links to the photo owner's profile page.

### Following and Unfollowing Other Users

![image of photo show modal](docs/production_screenshots/Photo%20Show%20Modal.png)


Users can also follow other users via a "Follow" button located on the user's profile page. If the Photo Show modal is open on the owner's profile page, the "Follow" or "Unfollow" statuses of both button are synchronized appropriately.

The "Follow" functionality is implemented utilizing a SQL Join Table on the back-end, with "follower_id" and "followee_id" used as foreign keys to respectively reference the current user who clicked the "Follow" button and the user that is being followed.

Unfollowing a user while viewing the "Followed" feed instantly removes said user's photos from the feed in live time.

Should a user who is not signed-in click any of the "Follow" buttons across the site, the Login/Join authentication modal will appear, and upon successful login or new account creation, the "Follow" button in question will be immediately toggled so as to preserve and respect the user's previous interaction.

## Future Plans for the Project

As 1000words was completed in a short timeframe, I still have future implementation plans I'd like to pursue, as are detailed below.

### Tags

One of the most popular user experiences is the ability to create and search posts and images via user-generated Tags, which is a perfect fit for discovering new photos on 1000words.

### Notifications

To encourage better awareness and interaction between users, a notification system will be implemented that alerts users when they have been followed by another user (this feature will also include the ability to silence said notifications).

### Username and Password Updates and Profile/Account Deletion

Although not required for the current scope of this project, users' ability to update username and password information, as well as delete their accounts, are required staples of a professional service and will thus be incorporated here.

### Image processing optimizations for scalability

Time complexity and input size have not yet been significant factors affecting application performance (given the size of the database's seeded content), however I plan to further test the application's performance with larger input sizes and implement additional optimizations as/when needed.
