# Firebase

Q. What is Firebase?

Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a database, analytics, messaging, and crash reporting. It also provides a development environment for building and testing apps.

Q. What is Firebase Realtime Database?

Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. Firebase Realtime Database is a NoSQL database. It is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. Firebase Realtime Database is a NoSQL database.

Q. What is Firebase Cloud Firestore?

Firebase Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps - at global scale. It is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. Firebase Cloud Firestore is a NoSQL database.

Q. What is Firebase Authentication?

Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Q. What is Firebase Storage?

Firebase Storage is a cloud-hosted storage service for Firebase apps, made for storing and serving user-generated content. It is a cloud-hosted storage service for Firebase apps, made for storing and serving user-generated content.

Q. What is Firebase Cloud Messaging?

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably deliver messages at no cost. Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably deliver messages at no cost.

Q. What is Firebase Crashlytics?

Firebase Crashlytics is a lightweight, realtime crash reporter that helps you track, prioritize, and fix stability issues that erode app quality. Firebase Crashlytics is a lightweight, realtime crash reporter that helps you track, prioritize, and fix stability issues that erode app quality.

Q. What is Firebase Remote Config?

Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update. Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to download an app update.

Q. What is Firebase Test Lab?

Firebase Test Lab is a cloud-based service that enables you to test your Android and iOS apps on a variety of devices and configurations. Firebase Test Lab is a cloud-based service that enables you to test your Android and iOS apps on a variety of devices and configurations.

Q. What is Firebase Analytics?

Firebase Analytics is a free app measurement solution that provides insight on app usage and user engagement.

Q. What is Firebase Hosting?

Firebase Hosting is a fast and secure content delivery network (CDN) for web apps. Firebase Hosting is a fast and secure content delivery network (CDN) for web apps.

Q. What is Firebase Cloud Functions?

Firebase Cloud Functions is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Firebase Cloud Functions is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.

Q. What is Firebase Performance Monitoring?

Firebase Performance Monitoring is a free app performance management solution that provides insight on app usage and user engagement.

Q. What is Firebase Test Lab for Games?

Firebase Test Lab for Games is a cloud-based service that enables you to test your Android games on a variety of devices and configurations.

# Firebase Setup

## Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Give your project a name and click on **Create Project**.
3. Once your project is created, click on **Continue**.
4. Click on **Add Firebase to your web app**.
5. Copy the config object and paste it in the `firebase.js` file in the `src` folder.

## Using firebase npm

1. Install firebase npm by running the following command in the terminal:

```bash
npm install firebase --save
```

2. Import firebase in the `firebase.js` file in the `src` folder.

```javascript
import firebase from "firebase";
```

3. Initialize firebase in the `firebase.js` file in the `src` folder.

```javascript
firebase.initializeApp(config);
```

4. Export firebase in the `firebase.js` file in the `src` folder.

```javascript
export default firebase;
```

## Using Firebase Authentication

1. Go to **Authentication** in the Firebase Console.
2. Click on **Sign-in method**.
3. Enable **Email/Password** and **Google** sign-in methods.
4. Click on **Save**.

## Authentication Flow using auth tokens

1. Create a new file `auth.js` in the `src` folder.
2. Import firebase in the `auth.js` file in the `src` folder.

```javascript
import firebase from "./firebase";
```

3. Export the `auth` object from firebase in the `auth.js` file in the `src` folder.

```javascript
export const auth = firebase.auth();
```

4. Export the `googleAuthProvider` object from firebase in the `auth.js` file in the `src` folder.

```javascript
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
```

## CRUD

### Create

1. Go to **Database** in the Firebase Console.
2. Click on **Create Database**.
3. Select **Start in test mode** and click on **Enable**.
4. Click on **Rules**.
5. Change the rules to the following:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

6. Click on **Publish**.

### Read

1. Go to **Database** in the Firebase Console.
2. Click on **Realtime Database**.
3. Click on **Data**.
4. Click on **Add data**.
5. Add a new key-value pair.
6. Click on **Save**.

### Update

1. Go to **Database** in the Firebase Console.
2. Click on **Realtime Database**.
3. Click on **Data**.
4. Click on the key you want to update.
5. Update the value.
6. Click on **Save**.

### Delete

1. Go to **Database** in the Firebase Console.
2. Click on **Realtime Database**.
3. Click on **Data**.
4. Click on the key you want to delete.
5. Click on **Delete**.

## Using Firebase Database

1. Go to **Database** in the Firebase Console.
2. Click on **Create Database**.
3. Select **Start in test mode** and click on **Enable**.
4. Click on **Rules**.
5. Change the rules to the following:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

6. Click on **Publish**.

## Using Firebase Storage

1. Go to **Storage** in the Firebase Console.
2. Click on **Get Started**.
3. Click on **Next**.
4. Click on **Done**.

## Using Firebase Hosting

1. Go to **Hosting** in the Firebase Console.
2. Click on **Get Started**.
3. Click on **Next**.

## Deploying to Firebase Hosting

1. Run the following command in the terminal:

```bash
npm run build
```

2. Run the following command in the terminal:

```bash
firebase deploy
```

3. Copy the URL and paste it in the browser.

## Using Firebase Cloud Functions

1. Go to **Functions** in the Firebase Console.
2. Click on **Get Started**.
3. Click on **Next**.
