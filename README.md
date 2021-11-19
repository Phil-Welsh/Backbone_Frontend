# Backbone
The Backbone application displays a map of crowdsourced internet speeds. The data is crowdsourced by users at cafes, coffeeshops, libraries, etc.

## Goal
- Create a tool that helps users find cafes, libraries, and other public wifi access points with internet speeds that suit their needs

## Features required for MVP
- Average internet speed for cities
- Embedded internet speedtest that logs user internet speed
- Comments on city pages with CRUD functionality
- Login functionality

## Stretch features
- Headless browser that takes the CSV from Ookla daily then inputs data into db
- Use browser location permission to determine where user is
- Incorporate Google Places API so location autofills as user types
- "Categorizing" internet speed (e.g. Joe's coffeeshop has a VERY fast average internet speed)
- Map displaying places
    - Clickable icons for Places
- After speedtest, user is taken to page to input location
    - Use Google auto-fill for location dropdown
    - Log IP address here to link test with IP address

## User stories
- User goes to home page and is presented with map
- User is able to search for their location to zoom map
- There is a link in the navbar that takes the user to the speedtest page
- On the speedtest page, user can run the test
- On the speedtest page, there is an input to enter location
    - IP address is grabbed during this input

## Potential problems
- Doesn't really have CRUD functionality
- IP addresses change
- Junk data/User saying they're at wrong location
- Headless browser shenanigans


## Technologies used
- MERN stack
- Google Maps API
- Ookla Speedtest
