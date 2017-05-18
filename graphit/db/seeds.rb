# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Table.destroy_all

user = User.create(username: 'Guest', password: 'password')

Table.create(title:"Crime Index", content:{"0":{"Year":"2009","Crime Index Ranking ":"1","City":"New York","Rate":"2242.1"},"1":{"Year":"2009","Crime Index Ranking ":"2","City":"San Jose","Rate":"2745.7"},"2":{"Year":"2009","Crime Index Ranking ":"3","City":"San Diego","Rate":"2903.7"},"3":{"Year":"2009","Crime Index Ranking ":"4","City":"Los Angeles","Rate":"3074"},"4":{"Year":"2009","Crime Index Ranking ":"5","City":"Las Vegas","Rate":"4407.7"},"5":{"Year":"2009","Crime Index Ranking ":"6","City":"Phoenix","Rate":"4654.3"},"6":{"Year":"2009","Crime Index Ranking ":"7","City":"Philadelphia","Rate":"4849.5"},"7":{"Year":"2009","Crime Index Ranking ":"8","City":"Dallas","Rate":"4407.7"},"8":{"Year":"2009","Crime Index Ranking ":"9","City":"Houston","Rate":"6444.2"},"9":{"Year":"2009","Crime Index Ranking ":"10","City":"San Antonio","Rate":"7241.6"},"10":{"Year":""}}, owner_id: user.id)

Table.create(title: "Jeopardy Questions", content:{"0":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"HISTORY"," Value":"$200"," Question":"For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory"," Answer":"Copernicus"},"1":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"ESPN's TOP 10 ALL-TIME ATHLETES"," Value":"$200"," Question":"No. 2: 1912 Olympian; football star at Carlisle Indian School; 6 MLB seasons with the Reds, Giants \u0026 Braves"," Answer":"Jim Thorpe"},"2":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EVERYBODY TALKS ABOUT IT..."," Value":"$200"," Question":"The city of Yuma in this state has a record average of 4,055 hours of sunshine each year"," Answer":"Arizona"},"3":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"THE COMPANY LINE"," Value":"$200"," Question":"In 1963, live on \"The Art Linkletter Show\", this company served its billionth burger"," Answer":"McDonald's"},"4":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EPITAPHS \u0026 TRIBUTES"," Value":"$200"," Question":"Signer of the Dec. of Indep., framer of the Constitution of Mass., second President of the United States"," Answer":"John Adams"},"5":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"3-LETTER WORDS"," Value":"$200"," Question":"In the title of an Aesop fable, this insect shared billing with a grasshopper"," Answer":"the ant"},"6":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"HISTORY"," Value":"$400"," Question":"Built in 312 B.C. to link Rome \u0026 the South of Italy, it's still in use today"," Answer":"the Appian Way"},"7":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"ESPN's TOP 10 ALL-TIME ATHLETES"," Value":"$400"," Question":"No. 8: 30 steals for the Birmingham Barons; 2,306 steals for the Bulls"," Answer":"Michael Jordan"},"8":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EVERYBODY TALKS ABOUT IT..."," Value":"$400"," Question":"In the winter of 1971-72, a record 1,122 inches of snow fell at Rainier Paradise Ranger Station in this state"," Answer":"Washington"},"9":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"THE COMPANY LINE"," Value":"$400"," Question":"This housewares store was named for the packaging its merchandise came in \u0026 was first displayed on"," Answer":"Crate \u0026 Barrel"},"10":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EPITAPHS \u0026 TRIBUTES"," Value":"$400"," Question":"\"And away we go\""," Answer":"Jackie Gleason"},"11":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"3-LETTER WORDS"," Value":"$400"," Question":"Cows regurgitate this from the first stomach to the mouth \u0026 chew it again"," Answer":"the cud"},"12":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"HISTORY"," Value":"$600"," Question":"In 1000 Rajaraja I of the Cholas battled to take this Indian Ocean island now known for its tea"," Answer":"Ceylon (or Sri Lanka)"},"13":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"ESPN's TOP 10 ALL-TIME ATHLETES"," Value":"$600"," Question":"No. 1: Lettered in hoops, football \u0026 lacrosse at Syracuse \u0026 if you think he couldn't act, ask his 11 \"unclean\" buddies"," Answer":"Jim Brown"},"14":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EVERYBODY TALKS ABOUT IT..."," Value":"$600"," Question":"On June 28, 1994 the nat'l weather service began issuing this index that rates the intensity of the sun's radiation"," Answer":"the UV index"},"15":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"THE COMPANY LINE"," Value":"$600"," Question":"This company's Accutron watch, introduced in 1960, had a guarantee of accuracy to within one minute a  month"," Answer":"Bulova"},"16":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EPITAPHS \u0026 TRIBUTES"," Value":"$600"," Question":"Outlaw: \"Murdered by a traitor and a coward whose name is not worthy to appear here\""," Answer":"Jesse James"},"17":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"3-LETTER WORDS"," Value":"$600"," Question":"A small demon, or a mischievous child (who might be a little demon!)"," Answer":"imp"},"18":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"HISTORY"," Value":"$800"," Question":"Karl led the first of these Marxist organizational efforts; the second one began in 1889"," Answer":"the International"},"19":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"ESPN's TOP 10 ALL-TIME ATHLETES"," Value":"$800"," Question":"No. 10: FB/LB for Columbia U. in the 1920s; MVP for the Yankees in '27 \u0026 '36; \"Gibraltar in Cleats\""," Answer":"(Lou) Gehrig"},"20":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EVERYBODY TALKS ABOUT IT..."," Value":"$800"," Question":"Africa's lowest temperature was 11 degrees below zero in 1935 at Ifrane, just south of Fez in this country"," Answer":"Morocco"},"21":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"THE COMPANY LINE"," Value":"$800"," Question":"Edward Teller \u0026 this man partnered in 1898 to sell high fashions to women"," Answer":"(Paul) Bonwit"},"22":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EPITAPHS \u0026 TRIBUTES"," Value":"$2,000"," Question":"1939 Oscar winner: \"...you are a credit to your craft, your race and to your family\""," Answer":"Hattie McDaniel (for her role in Gone with the Wind)"},"23":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"3-LETTER WORDS"," Value":"$800"," Question":"In geologic time one of these, shorter than an eon, is divided into periods \u0026 subdivided into epochs"," Answer":"era"},"24":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"HISTORY"," Value":"$1000"," Question":"This Asian political party was founded in 1885 with \"Indian National\" as part of its name"," Answer":"the Congress Party"},"25":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"ESPN's TOP 10 ALL-TIME ATHLETES"," Value":"$1000"," Question":"No. 5: Only center to lead the NBA in assists; track scholarship to Kansas U.; marathoner; volleyballer"," Answer":"(Wilt) Chamberlain"},"26":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"THE COMPANY LINE"," Value":"$1000"," Question":"The Kirschner brothers, Don \u0026 Bill, named this ski company for themselves \u0026 the second-highest mountain"," Answer":"K2"},"27":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"EPITAPHS \u0026 TRIBUTES"," Value":"$1000"," Question":"Revolutionary War hero: \"His spirit is in Vermont now\""," Answer":"Ethan Allen"},"28":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Jeopardy!"," Category":"3-LETTER WORDS"," Value":"$1000"," Question":"A single layer of paper, or to perform one's craft diligently"," Answer":"ply"},"29":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"DR. SEUSS AT THE MULTIPLEX"," Value":"$400"," Question":"\u003ca href=\"http://www.j-archive.com/media/2004-12-31_DJ_23.mp3\"\u003eBeyond ovoid abandonment, beyond ovoid betrayal... you won't believe the ending when he \"Hatches the Egg\"\u003c/a\u003e"," Answer":"Horton"},"30":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"PRESIDENTIAL STATES OF BIRTH"," Value":"$400"," Question":"California"," Answer":"Nixon"},"31":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"AIRLINE TRAVEL"," Value":"$400"," Question":"It can be a place to leave your puppy when you take a trip, or a carrier for him that fits under an airplane seat"," Answer":"a kennel"},"32":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"THAT OLD-TIME RELIGION"," Value":"$400"," Question":"He's considered the author of the Pentateuch, which is hard to believe, as Deuteronomy continues after his death"," Answer":"Moses"},"33":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"MUSICAL TRAINS"," Value":"$400"," Question":"Steven Tyler of this band lent his steamin' vocals to \"Train Kept A-Rollin'\", first popularized by the Yardbirds"," Answer":"Aerosmith"},"34":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"\"X\"s \u0026 \"O\"s"," Value":"$400"," Question":"Around 100 A.D. Tacitus wrote a book on how this art of persuasive speaking had declined since Cicero"," Answer":"oratory"},"35":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"PRESIDENTIAL STATES OF BIRTH"," Value":"$800"," Question":"1 of the 2 born in Vermont"," Answer":"Coolidge (or Chester Arthur)"},"36":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"AIRLINE TRAVEL"," Value":"$800"," Question":"When it began on Pan Am \u0026 Qantas in the late '70s, it was basically a roped-off part of the economy cabin with free drinks"," Answer":"business class"},"37":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"THAT OLD-TIME RELIGION"," Value":"$800"," Question":"Ali, who married this man's daughter Fatima, is considered by Shia Muslims to be his true successor"," Answer":"Muhammed"},"38":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"MUSICAL TRAINS"," Value":"$800"," Question":"During the 1954-1955 Sun sessions, Elvis climbed aboard this train \"sixteen coaches long\""," Answer":"the \"Mystery Train\""},"39":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"\"X\"s \u0026 \"O\"s"," Value":"$800"," Question":"The shorter glass seen \u003ca href=\"http://www.j-archive.com/media/2004-12-31_DJ_12.jpg\" target=\"_blank\"\u003ehere\u003c/a\u003e, or a quaint cocktail made with sugar \u0026 bitters"," Answer":"an old-fashioned"},"40":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"DR. SEUSS AT THE MULTIPLEX"," Value":"$1200"," Question":"\u003ca href=\"http://www.j-archive.com/media/2004-12-31_DJ_26.mp3\"\u003eRipped from today's headlines, he was a turtle king gone mad; Mack was the one good turtle who'd bring him down\u003c/a\u003e"," Answer":"Yertle"},"41":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"AIRLINE TRAVEL"," Value":"$2,000"," Question":"In 2003 this airline agreed to buy KLM, creating Europe's largest airline"," Answer":"Air France"},"42":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"THAT OLD-TIME RELIGION"," Value":"$1200"," Question":"Philadelphia got its start as a colony for this religious group of which William Penn was a member"," Answer":"the Quakers"},"43":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"MUSICAL TRAINS"," Value":"$1200"," Question":"This \"Modern Girl\" first hit the Billboard Top 10 with \"Morning Train (Nine To Five)\""," Answer":"(Sheena) Easton"},"44":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"\"X\"s \u0026 \"O\"s"," Value":"$1200"," Question":"This stiff silken fabric is favored for bridal gowns, like Christina Applegate's in 2001"," Answer":"organza"},"45":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"DR. SEUSS AT THE MULTIPLEX"," Value":"$1600"," Question":"\u003ca href=\"http://www.j-archive.com/media/2004-12-31_DJ_25.mp3\"\u003eSomewhere between truth \u0026 fiction lies Marco's reality... on Halloween, you won't believe you saw it on this St.\u003c/a\u003e"," Answer":"Mulberry Street"},"46":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"AIRLINE TRAVEL"," Value":"$1600"," Question":"In 2004 United launched this new service that features low fares \u0026 more seats per plane"," Answer":"Ted"},"47":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"THAT OLD-TIME RELIGION"," Value":"$1600"," Question":"With Mary I's accession in 1553 he ran to Geneva; he returned in 1559 \u0026 reformed the Church of Scotland"," Answer":"(John) Knox"},"48":{"Show Number":"4680"," Air Date":"2004-12-31"," Round":"Double Jeopardy!"," Category":"MUSICAL TRAINS"," Value":"$1600"," Question":"This band's \"Train In Vain\" was a hidden track on its original 1979 \"London Calling\" album"," Answer":"The Clash"},"49":{"Show Number":""}}, owner_id: user.id)
