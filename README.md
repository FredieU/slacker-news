# Slacker News

You've been tasked to build the next big thing in tech, Slacker News! It's a 
site where users can submit stories about coding, technology or anything they 
find interesting. Once they've submitted it, they can _upvote_ the story to 
get it to the front page and seen by the world. They can also see when it was 
submitted, who submitted it and the number of comments it has. 

if you're unsure what we mean, [take a look at the original for inspiration!](https://news.ycombinator.com/)

Don't worry about the design _too_ much as we're more interested in the 
JavaScript stuff but HTML & CSS are also important. 

We've already built the back-end (Express, Mongo) so you just need to build 
the front-end. The specificiation is deliberately open to show your skills in 
web development. Obviously using a framework that we're using day-to-day would 
be great (React, AngularJS) but equally as impressive would be using plain JS.

**Play to your strengths!**

We are also very interested in _non-coding_ aspects and how you approach
problems. Please supply any notes you make, such as showing your working,
questions you might want to ask and assumptions you may have made. We also
strongly recommend you use comments in any code you supply to communicate
your reasoning as you work.

There are some scenarios in the `features` folder to aid your process but they 
are not complete. Just like working in the real world! Start by reading through
these feature files, they should give you a sense of what is required.

## Getting started

You'll probably need to install some things. If you already have it installed, 
skip to the next.

### Homebrew

[Installation is pretty straightforward.](https://brew.sh/)

### MongoDB

You'll need [Homebrew](https://brew.sh/) installed first. Once it's installed, 
run:

`brew install mongodb`

and follow the prompts.

### API

We've already built the API but you'll need to install the modules. 

If you have `yarn` installed you can just do a `yarn` from within the `api`
folder.

Otherwise, you can run `npm install` from within the `api` folder.

Finally, to run the API, either:

`yarn start` or `npm start` from within the `api` folder. Your API calls will 
be: 

- List all stories: `GET - http://localhost:3000/stories`
- Create a story:   `POST - http://localhost:3000/stories`
- View a story:   `GET - http://localhost:3000/stories/:id`
- Add a comment: `POST - http://localhost:3000/stories/:id/comments`
- Upvote a story: `PUT - http://localhost:3000/stories/:id`

### Things to remember

We covered this on the phone interview but it's worth mentioning again that we 
take code quality very seriously here. To help with that goal, we practice 
Test Driven Development (TDD). There are loads of tutorials and guides online 
to help you get started writing some tests. Some tools to help you write tests 
might be Karma, Jamine, Mocha, Chai, Tape.

I just stumbled upon [this](https://github.com/dwyl/learn-tdd) which seems like 
a nice gentle introduction. I would ignore the bonus bits at the bottom though.

Finally, play to your strengths, have fun and don't stress yourself out! We're 
looking forward to seeing what you come up with. Good luck!

## Submitting your test

- Check your source code into a public github repository and email me the 
location.