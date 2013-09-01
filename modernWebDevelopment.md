
# Moderne webudvikling - del 1

Jeg kommer fra en C# backend developer baggrund og har et stykke tid haft lyst til at få et indblik i webudvikling.

viden om moderne webudvikling. Dette er det første blog indlæg i en serie om open source moderne webudvikling foretaget primært på en Mac Air.

ikke tutorial mere lærings og dokumentations process

## Server
Oprindeligt blev Javascript vist mest opfattet som en klient teknologi brugt i internet browsere. Vi har på det senere set en trend med at Javascript er blevet brugt mere og mere til flere og større projekter. Dette var ikke udgangspunktet for Javascript som programmeringssprog, hvorfor det giver nogle udfordringer med blandt andet at organisere ens kodebase så man ikke ender med en omgang spagettikode. Frameworks som [Angular](http://angularjs.org/) og [Ember](http://emberjs.com/) har set dagens lys og åbnet muligheder for bedre organisering af Javascript kode efter MVC design pattern. Samtidig ser vi eksempler på "programmeringssprog" [Typescript](http://www.typescriptlang.org/) og [Coffeescript](http://coffeescript.org/) som giver nye muligheder for højere abstraktion i Javascript med indførelse af OO koncepter som indkapsling, nedarvning, moduler og interfaces  ... og generics. (er det mon FP).    Underscore 


Node.js er en serverbaseret platform designet som en eventbaseret ikke-blokerende I/O model uafhængig af webbrowsere. Node.js blev introduceret af Ryan Dahl i 2009 og overordnet kan Node.js beskrives som:

libuv + V8 + core library (JS/C++) = Node.js

Udover Node.js bruger jeg følgende moduler:

- [express](http://expressjs.com/). Express er et webudviklings framework bygget på node.js med inspiration hentet fra Sinatra. Måske nævne NancyFX. connect middleware
- [mongojs](https://github.com/gett/mongojs). MongoDB driver til Node.js
- [mongodepository](https://github.com/iainjmitchell/mongorepositiory)
- [jasmine-node](https://github.com/mhevery/jasmine-node)

## Database

Data gemmes i den populære noSql database [MongoDB](http://www.mongodb.org/). Der findes en række forskellige MongoDB klienter hvoraf [Robomongo](http://robomongo.org) virker intuitiv og nem at komme i gang med.

## Klient

Indtil videre er projektet alene et REST API. På et senere tidspunkt bygger jeg en webbaseret klient. Der er flere valgmuligheder som fx Angular og Ember som begge er MVC baserede klient frameworks.

## Andre værktøjer
sublime text
webstorm
curl
git
github


## Continious deployment

chrome

rest.api



mongod (start db)
mongo (commandline client)
use quotes
show collections
db.find.quotes()

coffescript
Repository patterm
unit of work??

Source koden findes på GitHub. Jeg skal gøre opmærksom på, at koden ikke er velegnet til produktion. Projektet her er tænkt som learning by doing

Senere indlæg i denne serie vil fokusere mere på unit test, brugen af en message queue, authentication,
sessions og cloud deployment. Sikker også MEAN 

# Links
http://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/

# Moderne webudvikling - del 0

Introducing the “Learn Something New” series
Today I am introducing what I hope will be a long term project for this blog, my “Learn Something New” series.

The series will be mainly focussed on web development and learning the basics of a tool or framework I did not previously know. Where possible I will be providing all the source on GitHub and links to the project up and running on a free cloud service like AppHarbor or Heroku.

To set a few ground rules

These projects will not be “best practice”. Where possible I am trying to focus on a single new piece of kit and anything else will be kept at a minimum to make it work.
Unless the post is about a UI tool, then there is likely to be no design work put into the project. See point 1, I am aiming for a quick turn around on each project.
These will be frameworks and tools I am new to, so I may make mistakes and I may do things the wrong way. If you see me doing that, I would be more than happy to hear from you and pointed in the right direction.
In the end this is some motivation and structure to my own learning. The blog gets to come along for the ride. So set your expectations appropriately and everything should be cool.
