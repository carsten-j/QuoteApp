# Moderne webudvikling - del 1



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

Mongodb startes fra kommandolinien med ``mongod``. Der er også en kommandolinie klient ``mongo``. Herfra kan man vise de citater som findes i database:

    use quotes
    show collections
    db.find.quotes()

Endelig findes der 2 programmer til hhv at importere og eksportere data. Dette kan gøres på følgende måde:

    mongoexport -d quotes -c quotes -o quotes.json
    mongoimport -d quotes -c quotes --file quotes.json

### Design patterns
repository og unit of work

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



coffescript
Repository patterm
unit of work??

Source koden findes på GitHub. Jeg skal gøre opmærksom på, at koden ikke er velegnet til produktion. Projektet her er tænkt som learning by doing

Senere indlæg i denne serie vil fokusere mere på unit test, brugen af en message queue, authentication,
sessions og cloud deployment. Sikker også MEAN 

# Links
http://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/

# Moderne webudvikling - del 0

## Lær noget nyt

Jeg har en baggrund som C# backend developer og har et stykke tid haft lyst til at få et indblik i moderne open source webudvikling. Dette blog indlæg er det første i en serie af indlæg hvor fokus vil være at lære noget nyt. Det er mit håb, at det bliver et længerevarende projekt med undertitlen "Lær noget nyt".

Første del af serien vil være om moderne webudvikling. Mere specifikt om en web applikation skrevet 100% i Javascript for både server og klient. Server-delen vil være baseret på Node.js mens klient-delen bliver et MVC framework som fx Angular.js.

For at få en smule struktur på projekterne vil jeg bruge disse retningslinier:

* 'Lær noget nyt' projekterne skal ikke opfattes som 'best practice' eller produktionskode. Fokus er på at få indblik i for mig nye teknologier, programmeringsprog, værktøjer m.v.
* Når man taler webudvikling kommer man ikke uden om UI men forvent ikke gennemarbejdede UI designs.
* Dette er et 'Do it yourself' projekt, og jeg kommer derfor til at begå fejl og/eller bevæge mig i den forkerte retning. Hvis du som læser bemærker dette og har viden på området, så hører jeg meget gerne fra dig med konstruktion kritik.
* Blog indlæg vil __IKKE__ være 'yet another tutorial' men vil mere blive brugt til at dokumentere en læringsproces.
* Sourcekoden til projekter findes på GitHub.
* Jeg skriver for mig selv til mig selv. Men alle er naturligvis velkomne til at læse med og give feedback.