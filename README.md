# reactFirstWeek

Hejsa :) 

alle tirsdags og onsdagsopgaverne ligger i mappen /reactFirstweek/opgaverne tirsdag, onsdag
derinde finder du alle .js og .css filerne alt andet har jeg fjernet

i reactTorsdagsOpgave mappen finder du torsdagsopgaven helt løst, der ligger også en .zip fil du skal ignorer.

jeg blev ikke færdig med fredagsopgaven, men ellers skulle jeg mene det meste var løst :) 



vi skulle også besvare nogle spørgsmål og svarne finder du nedenfor: 





Tirsdag – Besvarelser til eksamensspørgsmål

What is the purpose of the key value, which must be given to individual rows in a react-list

•	En key værdi bruges til at opdatere DOM’en, således at det kun er ændringer i den virtuelle DOM, der opdateres og ikke hele DOM’en.

It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?

•	Det anbefales ikke, men man kan bruge index som en key.

What is the difference(s) between state and props?

•	Man kan ikke lave om på værdier i props (immutable), hvorimod state er mutable og re-render hver gang værdierne ændres.

For which scenarios would you use props, and for which would you use state?

•	Scenarier med props:
o	Til at kalde værdier fra en Komponent til en anden.
•	Scenarier med state:
o	Til at holde værdier, som eventuelt skal ændres med tiden, og re-renders.

Where is the only place you can set state directly as in:  this.state = {name: "Peter"};

•	I en konstruktør, ved at sige this.state vil Komponenten ikke re-render. 

How must you set state all other places?

•	Alle andre steder, skal man skrive setState().

Onsdag – Besvarelser til eksamensspøgsmål

In a Controlled Component React state is made the "Single source of truth", so how:

Do we ensure that input controls like text, textarea or select always presents the value found in the components state? Do we ensure that a controls state, always matches the value found in an input control?

•	Inputfeltets navn skal være det samme som variabel navnet i state.

What is the purpose of doing event.preventDefault() in an event handler?

•	For ikke at lave et serverkald, dette definerer også en SPA, hvor vi kun arbejder med klienten og ikke serveren. 
What would be the effect of NOT doing event.preventDefault in a submit handler?

•	Effekten vil være at der vil blive lavet et serverkald når der trykkes submit. Hvis input er indtastet, vil dette betyde at siden nulstilles. 

Why don't we want to submit the traditional way, in a single page application?

•	SPA er en webapplikation eller et websted, der interagerer med brugeren ved dynamisk at omskrive den aktuelle side i stedet for at indlæse hele nye sider fra en server. Denne tilgang undgår afbrydelse af brugeroplevelsen mellem flere sider, hvilket får applikationen til at opføre sig mere som en desktop-applikation. Siden indlæses ikke på noget tidspunkt i processen.

Explain in words what it takes to implement the "Controlled Component" pattern for a form

•	Controlled Component pattern har en changeHandler, submitHandler, State, Initalvalue, inputfelter og MEGET VIGTIGT event.preventDefault().


What is meant by the react term “Lifting State Up”?

•	”Lifting State Up” opnås ved at flytte State op til den nærmeste relative til de komponenter, der har brug for den.

Where do you lift it up to?

•	Op til den nærmeste relative til komponenterne.

Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
•	Op til ned.

Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?

•	Boilerplate code er dele af koden, der skal inkluderes mange steder med næsten ingen eller ingen ændringer. Der skal altså skrives en masse kode for kun at opnå mindre funktionalitet.

