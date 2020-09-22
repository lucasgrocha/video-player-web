
## About the project
* This repository is the frontend of the [Video Player](https://github.com/lucasgrocha/video_player) Ruby on Rails API.
* To make this react app work properly, please follow the Video Player API documentation.

Best regards.

---

## Video Player

This application is a platform that you can see a lot of videos and upload yours providing a name and description, when you watch a video, a view is registered, while you watch the video, you also can see a list of other videos.


## Technology 

Here are the technologies used in this project.

* Javascript
* React version ^16.13.1


## Javascript libs

* axios
* react-router-dom
* react-bootstrap
* react-icons
* react-player


## Getting started

* Download project
>    $ https://github.com/lucasgrocha/video-player-web.git
* Install the libs:
>    $ yarn install
* Run the project:
>    $ yarn start

You have to create a .env file in the root of app containing these values to consume the Rails API:

```
	PORT=3006
	REACT_APP_API_BASE_URL=http://localhost:3000
```


## How to use

### Home Page

![Home page](https://bit.ly/33RKe1d)

### Video player
You can watch a video that starts automatically

![Video player](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/show.png?raw=true)

### Sign in page

You provide your email and password to sign in

![Sign in](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/login.png?raw=true)

### Register page

You provide your name, email and password to create a new account

![Register page](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/register.png?raw=true)

### Create video

Choose a name, description and video file to upload a video

![Create video](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/createVideo.png?raw=true)

### Edit video

You change your video's data

![Edit video](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/editVideo.png?raw=true)

### My videos

A list of your uploaded videos, here you can see your video, edit and delete

![My videos](https://github.com/lucasgrocha/markdown_images/blob/master/video_player/myVideos.png?raw=true)


## Author

* **Lucas G Rocha**: @lucasgrocha (https://github.com/lucasgrocha)
