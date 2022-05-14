# phase-1-final-project

**About the Project**
This project focuses on building an interactive webpage 
that will showcase a collection of NFTs and will allow users
to like and unlike the NFTs to show their appreciation for the artists.
Additionally, the users will be able to see what the current 
most-appreciated/liked NFT is.

**Goals:**
Build a one-page application that:
- has 3 event listeners or more
- makes GET/POST requests to a backend API or JSON server
- uses one of the array methods 

**Project files:**
- index.html
- index.css
- src/index.js
- db.json


**Getting started**

- Prerequisites: 
json server

npm install -g json-server

- Installation 
git clone git@github.com:your_username/phase-1-final-project.git

* if any packages are needed
nmp install

**Usage**
This application has several features

1. function getNFT loads data from backend server 
2. function renderNFT creates element for each data item in the UI and updates the backend server if an interaction with a like button was identified to update the like count
3. function revealMostLiked identifies the most-liked data element unsing an array method find and renders the most-liked element in its own container
4. Additionally, function domLoaded is implemented to call the rest of the functions and ensure better user experience and minimal wait time to see content

**Contact **
Anna Shulyak as@10873@nuy.edu
Project Link: https://github.com/AnnaBaanana/phase-1-final-project.git
