# Clark Newell Repo Fork

## Built product live here:
>http://lavish-reason.surge.sh/

## Instructions on running the app locally

1. Fork this repo in Github
2. git clone url in desired directory
3. cd into evernym-challenge
4. ```npm install```
5. ```npm install create-react-app```
6. ```npm start```
7. App should load in localhost:3000

## My approach to this challenge is to break it down into 10 steps:

1. Create react app
    a) What is Aphrodite?
    b) What is Redux?
2. Learn how to fetch/get api data into react, in particular the specified endpoints.
3. Learn how to build a table in react including column headers that sort.
4. Get api data to render in the table dynamically.
5. Is there a table library I can use?
6. Is the styling/css of the app responsive (mobile-first) and is the styling acceptable for mvp?
7. If there is still time, should I beautify the app with some boostrapped styling?
8. If there is still time, implement testing.
9. Return zipped file to Evernym
10. Ask for feedback, and what else they would like at this point.

## Result/Immediate challenges:

1. Creating react app was pretty straight forward, I have practiced doing this a few times and have recently created my own personal app in React, which is currently a static site using GatsbyJS.
    a) I have learned that Aphrodite is a css library for React, this dependency is installed in case I have time to try using it.
    b) Along with my current studies of React, I am definitely planning to dive into Redux, but for now I'm learning it's meant to help manage state in complex apps, which doesn't seem to apply to this challenge so I will shelf that for now.
It doesn't seem the architecture for this needs to be too complicated, just added a table component to render in app.js.
2. Getting external data into React: This is where I was getting super stuck. The challenge provides a simple data.json file in the forked repo. With advice from the team, I was able to find a temporary solution and move on (more on this below).
4. Next I worked on getting a simple table to render with just a few of the prescribed columns populated with static data. I decided to implement the sorting column headers at this point rather than later. Data was rendering and sorting but css needed fixing. After leaning how to fetch data externally by setting up a mock api I was able to render the table info dynamically.
5. In searching for sortable react table solutions I determined I should give the react-table library a try. This approach totally worked and instantly provided a sortable table that was relatively responsive to window size.
6. The app is somewhat responsive but only with properties inherent to react. Since I have exceeded the recommended 10 hour time limit, will ask if I should puruse this further.
7. The styling provided by react-table is somewhat decent already, will ask if the team wants me to pursue more styling at this time.
8. Create-react-app automatically implements a couple of basic tests, will ask if the team wants me to puruse more detailed testing.
9. Will open an issue to ask if the team wants me to continue on this project before building the current app candidate for production.
10. Waiting for team response.


## Trying to get API data into React

1. This is my first time calling data into React. (Prior to this I have called local json data into vanilla javascript/DOM manipulation and fetched external apis into Vue.js).
2. In my table component I created a componentWillMount lifecycle.
3. My first instinct here was to try some fetch and response syntax.
4. Did not work. Reviewed my code a few times and tried different syntax variations.
5. Learned that "Unhandled Rejection (SyntaxError): Unexpected token < in JSON at position 0" probably means you are getting html back instead of json, first clue is the "<".
6. Opened the network tab in dev tools and sure enough I am getting back public/index.html.
7. Next, I tried moving the data.json file around to different locations including the public directory to no avail.
8. Imported Axios to try that approach. 
9. In my reserach I'm learning the create-react-app does not work well with local data, it seems it prefers data to be served up externally.
10. Renamed data.json to db.json and tried my-json-server to no avail.
11. Other things I could still try: Ajax, jQuery, jsonData, or building a simple express server and deploying that somewhere external like heroku.
12. Before I go down the rabbit-hole of building my own server I should ask for advice from the team.
13. While waiting for iput from the team, I can continue learning how to build a table in React and see if I can get that to render with some jsx placeholders.
14. Trevor reported back on my issue, he suggested const stuff require(...), I didn't mention I had tried this before, but I finally got it to work by moving data.json direclty into the src folder. While this hack doesn't seem very "real world," for the sake of this challenge it will save me the time of setting up an external database.
16. Working with static and local data proved to constantly cause issues, I finally figured out that I could easily use Postman to create a mock api.


# `EVERNYM ui challenge`

This is our challenge for the ui engineering position at [@evernym](https://github.com/evernym).

## About the challenge

This is a challenge, not a college test, so there are multiple correct answers.

We'll give you some requirements that must be done and for which you'll be evaluated, but you're free to choose a solution method.

What we expect to learn from you with this challenge:

- Your work style.
- How you think and solve problems.
- How you communicate.

What we expect that you learn from us:

- How we work as a team.
- Have a close look at some of the problems we face daily.

## Next steps

1. Fork this repository to your personal account.
2. Follow the instructions in the [`challenge-description`](/challenge-description.md) file.
3. Solve the challenge in the best way you can.
4. Submit your code in a git repo (zipped and emailed, not on github) where you have committed throughout the process so that we can see your progress as you code the solution.

## Considerations

- We won't limit your choice of tools or libraries. But make choices that suits your needs. There's no need to use a bazooka to kill an ant but the point of the challenge is to evaluate your skills.
- Despite not having a time limit, we recommend that you don't spend more than **10 hours** working on this challenge.
- Try to write the best code you possibly can. It will make our life easier when evaluating your solution. Adding things like comments and tests are what would really help us out here.

## Doubts?

Do you have in doubt related to the process? Open an [issue](https://github.com/evernym/ui-challenge/issues) and we'll be happy to help.

**Good luck!**


