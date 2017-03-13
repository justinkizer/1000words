# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_desc    | text      |
profile_img_url | string    |

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
img_url     | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [followee_id]
followee_id | integer   | not null, foreign key (references users), indexed
