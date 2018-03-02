# swoosh
## Developed by Seungyun Todd Oh, some rights reserved.
## This project contains some open-source libraries.

## TO CONFIGURE

1. Upload (via SFTP) or push (via Git remote configuration) the files in this directory.
2. Set up Node and NPM in the server instance.
3. Install all required dev/non-dev dependencies in package.json using npm command line interface. (npmjs.com)
4. Run app.js, dbapp.js, db_deskfocus.js, db_observer.js, db_trending.js using Node.

## ENV CONFIGURATION

### There's a hidden ".env" file in the root directory and this contains a static DB URL value for database connection. In order to run the backend properly, you have to change the DB URL to point a new MongoDB instance.

## MONGODB CONFIGURATION

### COLLECTIONS REQUIRED FOR RUNNING

1. "subscribers"
2. "notice_subscribers"
3. "desk_feedback"

* Other collections will be automatically created when needed. (Observers, Trending, Desk Focus Curation)

### SAMPLE DOCUMENT FORMAT FOR SUBSCRIBERS COLLECTION

_id: 58c53478ffea141ecd14ec94 (MongoDB ObjectId format)
email: info@inthenewsrooms.com
username: string
password: string
referral_accepted_ids: []
age: 20
gender: other
briefing_contents: []
subscribed_tags: []
briefings: []
devices: []
saved_stories: []
subscriptions: []
stance_socpol: LIBERAL-2