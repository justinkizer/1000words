# 1000words

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://one-thousand-words.herokuapp.com/
[trello]: https://trello.com/b/dtgUqHvh/1000words

## Minimum Viable Product

1000words is a Full-Stack, Single-Page photography sharing web application inspired by 500px, built with React/Redux on a Rails/Postgres backend.

By the project's deadline, this application will fulfill the following requirements, as well as maintain a smooth, bug-free user experience, with professional CSS styling (including parallax scrolling and background video) and sufficient database seed data:

- [ ] New user account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] User ability to post pictures
- [ ] User ability to follow other users
- [ ] User's Home Feed featuring photos from followed users
- [ ] Profile Page featuring user's photos

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup, Front End User Authentication, and Auth-Modals (2 days)

**Objective:** Functioning Rails project with front-end Authentication, using Auth-Modals

### Phase 2: Photos, Photo Grid, and Photo-Show-Modal (2 days)

**Objective:** Photos can be created, read, and destroyed, with a functioning Photo Grid, and Photo-Show-Modal.

### Phase 3: Followings Model, API, and components (2 days)

**Objective:** Implement followings API and its use on Photo-Show, such that users can be followed and unfollowed.

### Phase 4: Profile Page (1 day)

**Objective:** Profile Page is complete, with functioning Profile Edit modal and Photo Upload modal, as well as the followed users feed thereon.

### Phase 5: - Home Page expansion and overall Styling/Polish (1 day)

**Objective:** Ensure site is as polished as possible, with a consistent style throughout now that all other required portions have been completed.

### Phase 6: Discover Page (1 day)

**Objective:** Complete Discover page.

### Bonus features (TBD)
- [ ] Discover photos feature
- [ ] Location-based photo lookup/discovery with Google Maps API
- [ ] Tags
- [ ] Notifications
