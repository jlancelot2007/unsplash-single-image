## Unsplash utility

Unsplash.com provides beautiful photographic images by a variety of photographers that are accessible via an api delivered through a CDN to registered developers.

The Unsplash API documentation is comprehensive but for many developers all they probably need is a way to use the api with their API KEY to obtain a fraction of the data that the api returns by default.
The output.txt has a sample of the full output data from the api as a reference, if you need more or less than the default logged data in the index.js file


## What this repo does

Uses the node.js unsplash api libraries to set up a simple nodejs app that takes an unsplash image code as a parameter and returns only the data that you need.
It comes preconfigured to return:

- url to CDN of regular sized image you specify as a parameter
- text description of the image
- url to unsplash.com photographer's portfolio
- name of photographer

The last two are to enable you to accredit the photographer's work as per conditions of use 


## How to use this repo

- You will need to register as a developer with unsplash.com to obtain an API key

- Clone or install repo
- Create a .env file as follows

NODE_ENV='development'  //production
ACCESS_KEY='MY_UNSPLASH_ACCOUNT_ACCESS_KEY'


- npm install    //install dependencies

- at the command line run
node index UNSPLASH_IMAGE_CODE 

e.g.
λ node index VKkMXGp_bq0

default expected output should be similar to this

ES7UZqHJ8NPOVYNdR5rwQjwxRtcq_xVzmoIeeCOq9fA
https://images.unsplash.com/photo-1626999999946-bcd946d08030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDIzMjB8MHwxfGFsbHx8fHx8fHx8fDE2MjYwNDM4NTU&ixlib=rb-1.2.1&q=80&w=1080
Nyhavn buildings in Copenhagen
https://unsplash.com/photos/VKkMXGp_bq0
Mihai Moisa