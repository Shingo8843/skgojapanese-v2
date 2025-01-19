import json

# Original data

ListOfSources = [
				[
					[
						'1. Greeting During DayTime',
						["Expressions/images/Greeting/おはよう.png","Expressions/Audio/あいさつ/おはよう.mp3","おはよう。","Japanese use 'おはよう Ohayō' to greet people in the morning. Say 'おはよう Ohayō' any time between getting up and noon. Good morning."],
						["Expressions/images/Greeting/おはようございます.png","Expressions/Audio/あいさつ/おはようございます.mp3","おはようございます。","Polite greeting for Good morning is 'おはようございます Ohayou gozaimasu'. Say 'おはようございます Ohayou gozaimasu'  to elder people than you or in formal situations."],
						["Expressions/images/Greeting/こんにちは.png","Expressions/Audio/あいさつ/こんにちは.mp3","こんにちは。","Japanese use 'こんにちは Konnichiwa' to greet people in the afternoon. Say 'こんにちわ Konnichiwa' any time between noon and sunset. Note;Hiragana は in the greeting phrase is pronounced 'wa'. Hello/Good afternoon."],
					],
					[
						'2. Greeting Before And After Meal',
						["Expressions/images/Greeting/いただきます.png","Expressions/Audio/あいさつ/いただきます.mp3","いただきます。","Saying 'いただきます itadakimasu' before a meal is a significant piece of Japanese etiquette. Usually, everyone will say the phrase together, but it's also normal for each person to say it individually as they begin eating."],
						["Expressions/images/Greeting/ごちそうさま.png","Expressions/Audio/あいさつ/ごちそうさまでした.mp3","ごちそうさまでした。","Saying 'ごちそうさまでした gochisousamadeshita'  after a meal. It means 'Thank you for the meal; it was a feast.'"],
					],
					[
						'3. Greeting At Night',
						["Expressions/images/Greeting/こんばんは.png","Expressions/Audio/あいさつ/こんばんは.mp3","こんばんは。","Japanese use 'こんばんは Konbanwa' to greet people in the evening. Say 'こんばんわ Konnichiwa' any time between sunset and bedtime. Note; Hiragana は in the greeting phrase is pronounced 'wa'. Good evening."],
						["Expressions/images/Greeting/おやすみなさい.png","Expressions/Audio/あいさつ/おやすみなさい.mp3","おやすみなさい。","Japanese use 'おやすみなさい oyasuminasai' to greet people at the bedtime. Say 'おやすみなさい oyasuminasai' before going to bed."],
					],
					[
						'4. Greeting For Leaving And Returning Home',
						["Expressions/images/Greeting/いってきます.png","Expressions/Audio/あいさつ/いってきます.mp3","いってきます。","The Japanese have greetings specific for when someone leaves the house. The person who leaves says, ittekimasu, literally 'I'll go and come back.'"],
						["Expressions/images/Greeting/いってきます.png","Expressions/Audio/あいさつ/いってらっしゃい.mp3","いってらっしゃい。","The person staying says itterasshai, literally 'please go and come back.''' These are used daily but only at the home or somewhere the people are based, since it only makes sense when they will go and come back."],
						["Expressions/images/Greeting/ただいま.png","Expressions/Audio/あいさつ/ただいま.mp3","ただいま。","The returning person says 'ただいま Tadaima'', literally 'I have come back now.'"],
						["Expressions/images/Greeting/おかえり.png","Expressions/Audio/あいさつ/おかえりなさい.mp3","おかえりなさい。"," The welcoming person says 'おかえりなさい Okaerinasai'. This phrase originally means a remnant of the literal 'Please come back soon' prayer."],
					],
					[
						'5. Greeting And Response',
						["Expressions/images/Greeting/げんきですか.png","Expressions/Audio/あいさつ/げんきですか.mp3","げんき　ですか。","Genki means 'lively; full of spirit; energetic; vigorous; vital; spirited' in Japanese. How are you? How are you doing?"],
						["Expressions/images/Greeting/はい、げんきです.png","Expressions/Audio/あいさつ/はい、げんきです（圭吾）.mp3","はい、げんきです。","If you are feeling 'genki' you can say, 'げんきです' which simply means, 'yeah, I'm fine'. Yes, I am Genki."],
					],
					[
						'6. Saying Goodbye',
						["Expressions/images/Greeting/さようなら.png","Expressions/Audio/あいさつ/さようなら.mp3","さようなら。","さようなら (sayonara) is the formal greeting used when someone leaves. For example, it used as 'goodbye' between teacher and students in the classroom. Japanese people don't use sayonara in everyday conversation that much."],
						["Expressions/images/Greeting/また　らいしゅう.png","Expressions/Audio/あいさつ/またらいしゅう.mp3","また らいしゅう。","Bye. See you. Japanese people use 'じゃあね (Jā ne)' instead of 'さようなら sayonara' for greeting in general conversation."],
						["Expressions/images/Greeting/またね.png","Expressions/Audio/あいさつ/またね（圭吾）.mp3","またね。","またね(matane) is closer to 'see you again' or 'see you next time'"],
						["Expressions/images/Greeting/ばいばい.png","Expressions/Audio/あいさつ/またあした.mp3","またあした。","またあした(mata ashita) is closer to 'see you next tomorrow'"],
						["Expressions/images/Greeting/ばいばい.png","Expressions/Audio/あいさつ/ばいばい.mp3","ばいばい。","ばいばい(baibai) is used to close friends. Bye-bye."],
					]
				],
				[
					[
						'1. なまえ  Name',
						["Expressions/images/IntroduceYourSelf/わたしはMaryです.png","Expressions/Audio/じこしょうかい/わたしはメリーです.mp3","わたしはMaryです。","Watashi wa Mary desu. I'm Mary."],
						["Expressions/images/IntroduceYourSelf/ぼくはTomです.png","Expressions/Audio/じこしょうかい/ぼくはTomです.mp3","ぼくはトムです。","Boku wa Tom desu. I'm Tom."],
						["Expressions/images/IntroduceYourSelf/わたしはMaryです.png","Expressions/Audio/じこしょうかい/わたしのなまえはメリーです.mp3","わたしの なまえは Maryです。","Watashi no mamae wa Mary desu. My name is Mary."],
						["Expressions/images/IntroduceYourSelf/ぼくはTomです.png","Expressions/Audio/じこしょうかい/ぼくのなまえはTomです.mp3","ぼくの なまえは Tomです。","Boku no Namae wa Tom desu. My name is Tom."],
					],
					[
						'2. とし age',
						["Expressions/images/IntroduceYourSelf/なんさいですか.png","Expressions/Audio/じこしょうかい/なんさいですか.mp3","なんさいですか。","Nan sai desu ka. How old are you?"],
						["Expressions/images/IntroduceYourSelf/なんさいですか.png","Expressions/Audio/じこしょうかい/いくつですか.mp3","いくつですか。","Ikutu desu ka. How old are you?"],
						["Expressions/images/IntroduceYourSelf/1.png","Expressions/Audio/じこしょうかい/いっさいです.mp3","いっさいです。","Issai desu.1 year old."],
						["Expressions/images/IntroduceYourSelf/2.png","Expressions/Audio/じこしょうかい/にさいです.mp3","にさいです。","Nisai desu. 2 year old."],
						["Expressions/images/IntroduceYourSelf/3.png","Expressions/Audio/じこしょうかい/さんさいです.mp3","さんさいです。","Sansai desu.  3 year old."],
						["Expressions/images/IntroduceYourSelf/4.png","Expressions/Audio/じこしょうかい/よんさいです.mp3","よんさいです。","Yonsai desu. 4 year old."],
						["Expressions/images/IntroduceYourSelf/5.png","Expressions/Audio/じこしょうかい/ごさいです.mp3","ごさいです。","Gosai desu.  5 year old."],
						["Expressions/images/IntroduceYourSelf/6.png","Expressions/Audio/じこしょうかい/ろくさいです.mp3","ろくさいです。","Roku sai desu. 6 year old."],
						["Expressions/images/IntroduceYourSelf/7.png","Expressions/Audio/じこしょうかい/ななさいです.mp3","ななさいです。","Nana sai desu. 7 years old."],
						["Expressions/images/IntroduceYourSelf/8.png","Expressions/Audio/じこしょうかい/はっさいです.mp3","はっさいです。","Hassai desu. 8 years old."],
						["Expressions/images/IntroduceYourSelf/9.png","Expressions/Audio/じこしょうかい/きゅうさいです.mp3","きゅうさいです。","Kyūsai desu. 9 years old."],
						["Expressions/images/IntroduceYourSelf/10.png","Expressions/Audio/じこしょうかい/じゅっさいです.mp3","じゅっさいです。","Jussai desu. 10 years old."],
					],
					[
						'3. がくねん School Grade',
						["Expressions/images/IntroduceYourSelf/なんさいですか.png","Expressions/Audio/じこしょうかい/なんねんせいですか.mp3","なんねんせいですか。","Nan nen sei desu ka. What grade are you in?"],
						["Expressions/images/IntroduceYourSelf/1.png","Expressions/Audio/じこしょうかい/いちねんせいです.mp3","いちねんせいです。","Ichi nen sei desu.   I'm a first-grader."],
						["Expressions/images/IntroduceYourSelf/2.png","Expressions/Audio/じこしょうかい/にねんせいです.mp3","にねんせいです。","Ni nen sei desu. I'm a second-grader."],
						["Expressions/images/IntroduceYourSelf/3.png","Expressions/Audio/じこしょうかい/さんねんせいです.mp3","さんねんせいです。","Sani nen sei desu. I'm a third-grader."],
						["Expressions/images/IntroduceYourSelf/4.png","Expressions/Audio/じこしょうかい/よねんせいです.mp3","よねんせいです。","Yo nen sei desu. I'm a fourth-grader."],
						["Expressions/images/IntroduceYourSelf/5.png","Expressions/Audio/じこしょうかい/ごねんせいです.mp3","ごねんせいです。","Go nen sei desu. I'm a fifth-grader."],
						["Expressions/images/IntroduceYourSelf/6.png","Expressions/Audio/じこしょうかい/ろくねんせいです.mp3","ろくねんせいです。","Roku nen sei desu. I'm a sixth-grader."],
						["Expressions/images/IntroduceYourSelf/7.png","Expressions/Audio/じこしょうかい/ななねんせいです.mp3","ななねんせいです。","Nana nen sei desu. I'm a seventh-grader."],
						["Expressions/images/IntroduceYourSelf/8.png","Expressions/Audio/じこしょうかい/はちねんせいです.mp3","はちねんせいです。","Hachi nen sei desu. I'm an eighth-grader."],
						["Expressions/images/IntroduceYourSelf/9.png","Expressions/Audio/じこしょうかい/きゅうねんせいです.mp3","きゅうねんせいです。","Kyū nen sei desu. I'm a ninth-grader."],
						["Expressions/images/IntroduceYourSelf/10.png","Expressions/Audio/じこしょうかい/じゅうねんせいです.mp3","じゅうねんせいです。","Juu nen sei desu. I'm a tenth-grader."],
						["Expressions/images/IntroduceYourSelf/11.png","Expressions/Audio/じこしょうかい/じゅういちねんせいです.mp3","じゅういちねんせいです。","Jū ichi nen sei desu. I'm an eleventh-grader."],
						["Expressions/images/IntroduceYourSelf/12.png","Expressions/Audio/じこしょうかい/じゅうにねんせいです.mp3","じゅうにねんせいです。","Jū ni nen sei desu. I'm a twelfth-grader."],
					],
					[
						'5. よろしくおねがいします magic words for Japanese self-introduction.',
						["Expressions/images/IntroduceYourSelf/はじめまして.png","Expressions/Audio/じこしょうかい/はじめまして.mp3","はじめまして。","When people meet for the first time, the Japanese say 'Hajimemashite' This expression is a wish for a good relationship."],
						["Expressions/images/IntroduceYourSelf/はじめまして.png","Expressions/Audio/じこしょうかい/よろしくおねがいします.mp3","よろしくおねがいします。","Say 'Yoroshiku onegaishimasu,' to end your initial introduction. This translates roughly to 'please be nice to me.'This is usually the last phrase that Japanese people use when they introduce themselves."],
					],
				],
				[
				    [
						'1. せんせいから せいと Instructions from teacher to students',
						["Expressions/images/クラスのにほんご/みてください.png","Expressions/Audio/クラスのにほんご/みてください.mp3","みてください。","Mite kudasai. Look at."],
						["Expressions/images/クラスのにほんご/かいてください.png","Expressions/Audio/クラスのにほんご/かいてください.mp3","かいてください。","Kaite kudasai. Write."],
						["Expressions/images/クラスのにほんご/いってください.png","Expressions/Audio/クラスのにほんご/いってください.mp3","いってください。","Itte kudasai. Say."],
						["Expressions/images/クラスのにほんご/きいてください.png","Expressions/Audio/クラスのにほんご/きいてください.mp3","きいてください。","Kiite kudasai. Listen."],
						["Expressions/images/クラスのにほんご/よんでください.png","Expressions/Audio/クラスのにほんご/よんでください.mp3","よんでください。","Yonde kudasai. Read."],
						["Expressions/images/クラスのにほんご/はなしてください.png","Expressions/Audio/クラスのにほんご/はなしてください.mp3","はなしてください。","Hanashite kudasai. Talk."],
						["Expressions/images/クラスのにほんご/もういっかい.png","Expressions/Audio/クラスのにほんご/もういっかい.mp3","もういっかい。","Mō ikkai. One more."],
					],
					[
						'2. せんせいから せいと from teacher to students',
						["Expressions/images/クラスのにほんご/もういっかい.png","Expressions/Audio/クラスのにほんご/わかりましたか.mp3","わかりましたか。","Wakarimashitaka. Did you understand?"],
						["Expressions/images/クラスのにほんご/よくできました.png","Expressions/Audio/クラスのにほんご/よくできました.mp3","よくできました。","Yoku dekimashita. Well done."],
						["Expressions/images/クラスのにほんご/すばらしいです.png","Expressions/Audio/クラスのにほんご/すばらしいです.mp3","すばらしいです。","Subarashīdesu. Great."],

					],
					[
						'3. Greeting At Night',
						["Expressions/images/クラスのにほんご/きこえません.png","Expressions/Audio/クラスのにほんご/きこえません.mp3","きこえません。","Kikoemasen. I can not hear."],
						["Expressions/images/クラスのにほんご/もういちど、いってください.png","Expressions/Audio/クラスのにほんご/もういちど いってください.mp3","もういちど、いってください。","Mō ichido, itte kudasai. Please say that again."],
						["Expressions/images/クラスのにほんご/わかりません.png","Expressions/Audio/クラスのにほんご/わかりません.mp3","わかりません。","Wakarimasen. I don't understand."],
						["Expressions/images/クラスのにほんご/もういちど、いってください.png","Expressions/Audio/クラスのにほんご/しつもんがあります.mp3","しつもんが あります。","Shitsu mon ga arimasu. I have a question."],
						["Expressions/images/クラスのにほんご/ちょっと せきを はずしても いいですか.png","Expressions/Audio/クラスのにほんご/ちょっと せきを はずしても いいですか.mp3","ちょっと せきを はずしても いいですか。","Chotto seki o hazushite mo iidesu ka. May I be excused for a minute?"],
						["Expressions/images/クラスのにほんご/すぐに もどります.png","Expressions/Audio/クラスのにほんご/すぐに もどります.mp3","すぐに もどります","Sugu ni modorimasu. I'll be right back."],
						["Expressions/images/クラスのにほんご/インターネットのちょうしが わるいです.png","Expressions/Audio/クラスのにほんご/インターネットのちょうしがわるいです.mp3","インターネットのちょうしが わるいです。","Internet no chōshi ga waruidesu. My internet connection isn't stable."],

					],

				],
				[
					[
						'1. Introducing your family',
						["Expressions/images/かぞく/わたしの かぞくです.png","Expressions/Audio/かぞく/わたしの かぞくです.mp3","わたしの かぞくです。","Watashi no kazoku desu. They are my family."],
						["Expressions/images/かぞく/ぼくの おかあさんです.png","Expressions/Audio/かぞく/ぼくの おかあさんです.mp3","ぼくの おかあさんです。","Boku no okāsan desu. She's my mother."],
						["Expressions/images/かぞく/いもうとの アンです.png","Expressions/Audio/かぞく/いもうとの アンです.mp3","いもうとの アンです。","Imōto no Ann desu. This is Ann, my sister."],
						["Expressions/images/かぞく/おとうとの Mike です.png","Expressions/Audio/かぞく/おとうとの Mike です.mp3","おとうとの Mike です。","Otōto no Mike desu. This is my brother Mike."],

					],
					[
						'2. ひとり、ふたり　Counting people',
						["Expressions/images/かぞく/ひとり.png","Expressions/Audio/かぞく/ひとり.mp3","ひとり。","Hitori."],
						["Expressions/images/かぞく/ふたり.png","Expressions/Audio/かぞく/ふたり.mp3","ふたり。","Futari."],
						["Expressions/images/かぞく/さんにん.png","Expressions/Audio/かぞく/さんにん.mp3","さんにん。","San nin."],
						["Expressions/images/かぞく/よにん.png","Expressions/Audio/かぞく/よにん.mp3","よにん。","Yo nin. Be careful! Although 4 is usually pronounced (yon) or (shi). When counting people, the Japanese say よにん (Yo nin), not Yonnin or Shinin."],
						["Expressions/images/かぞく/ごにん.png","Expressions/Audio/かぞく/ごにん.mp3","ごにん。","Go nin."],
						["Expressions/images/かぞく/ろくにん.png","Expressions/Audio/かぞく/ろくにん.mp3","ろくにん。","Roku nin."],
						["Expressions/images/かぞく/ななにん.png","Expressions/Audio/かぞく/ななにん.mp3","ななにん・しちにん。",'Nana nin, Shichi ninThere are two ways to read "7 people": " shichi nin" and "nana nin".'],
						["Expressions/images/かぞく/はちにん.png","Expressions/Audio/かぞく/はちにん.mp3","はちにん。","Hachi nin."],
						["Expressions/images/かぞく/くにん.png","Expressions/Audio/かぞく/くにん きゅうにん.mp3","くにん・きゅうにん。","Ku nin,  Kyū nin."],
						["Expressions/images/かぞく/じゅうにん.png","Expressions/Audio/かぞく/じゅうにん.mp3","じゅうにん。","Jū nin."],

					],
					[
						'3. なんにんかぞくですか。How many people are in your family?',
						["Expressions/images/かぞく/なんにんかぞくですか.png","Expressions/Audio/かぞく/なんにんかぞくですか.mp3","なんにんかぞくですか。","Nan nin kazoku desu ka. How many people are in your family?"],
						["Expressions/images/かぞく/なんにんかぞくですか.png","Expressions/Audio/かぞく/よにんかぞくです.mp3","よにんかぞくです。","Yo nin kazoku desu. We're a family of four."],
						["Expressions/images/かぞく/かぞくは なんにんですか.png","Expressions/Audio/かぞく/かぞくは なんにんですか.mp3","かぞくは なんにんですか。","Kazoku ha nan nin desuka. How many people are in your family?"],
						["Expressions/images/かぞく/ろくにんかぞくです.png","Expressions/Audio/かぞく/ろくにんかぞくです.mp3","ろくにんかぞくです。","Roku nin kazoku desu. We're a family of six."],
						["Expressions/images/かぞく/かぞくは なんにんですか.png","Expressions/Audio/かぞく/さんにんです.mp3","さんにんです。","San nin desu. There're three (people) in my family."],
						["Expressions/images/かぞく/わたしの かぞくです.png","Expressions/Audio/かぞく/ななにんです.mp3","ななにんです。しちにんです。","Shichi nin desu. Nana nin desu. There're seven (people) in my family."],

					],
				],
				[
				    [
						'1. いろ iro color',
						["Expressions/images/いろかたち/しろい　シャツ.png","Expressions/Audio/いろかたち/しろいシャツ.mp3","しろい　シャツ。","shiroi shatsu. White shirt."],
						["Expressions/images/いろかたち/あおい ジーンズ.png","Expressions/Audio/いろかたち/あおいジーンズ.mp3","あおい ジーンズ。","Aoi jīnzu. Blue Jeans."],
						["Expressions/images/いろかたち/くろい かさ.png","Expressions/Audio/いろかたち/くろい かさ.mp3","くろい かさ。","kuroi kasa. Black umbrella."],
						["Expressions/images/いろかたち/ちゃいろい くつ.png","Expressions/Audio/いろかたち/ちゃいろいくつ.mp3","ちゃいろい くつ。","Chairoi kutsu. Brown shoes."],
						["Expressions/images/いろかたち/きいろい ぼうし.png","Expressions/Audio/いろかたち/きいろいぼうし.mp3","きいろい ぼうし。","Kiiroi boushi. Yelloow cap."],
						["Expressions/images/いろかたち/みずいろの ソックス.png","Expressions/Audio/いろかたち/みずいろのソックス.mp3","みずいろの ソックス。","Mizuiro no sokkusu. Light blue socks."],
						["Expressions/images/いろかたち/ピンクの ドレス.png","Expressions/Audio/いろかたち/ピンクのドレス.mp3","ピンクの ドレス。","Pinku no doresu. Pink dress."],
					],
					[
						'2. かたち　katachi Shape',
						["Expressions/images/いろかたち/まるい ボール.png","Expressions/Audio/いろかたち/まるいボール.mp3","まるい ボール。","Marui ball. Cubic Ball."],
						["Expressions/images/いろかたち/さんかくの やね.png","Expressions/Audio/いろかたち/さんかくのやね.mp3","さんかくの やね。","Sankaku no yane. Triangular Roof."],
						["Expressions/images/いろかたち/しかくい まど.png","Expressions/Audio/いろかたち/しかくいまど.mp3","しかくい まど。","Shikakui mado. Recyangular Window."],
					],
					[
						'3. はんたいことば hantaikotoba Opposite',
						["Expressions/images/いろかたち/みじかい えんぴつ.png","Expressions/Audio/いろかたち/みじかいえんぴつ.mp3","みじかい えんぴつ。","Mizikai enpitsu. Short pencil."],
						["Expressions/images/いろかたち/ながい えんぴつ.png","Expressions/Audio/いろかたち/ながい えんぴつ.mp3","ながい えんぴつ。","Nagai enpitsu. Long pencil."],
						["Expressions/images/いろかたち/たくさん.png","Expressions/Audio/いろかたち/たくさん.mp3","たくさん。","Takusan. A lot."],
						["Expressions/images/いろかたち/すこし.png","Expressions/Audio/いろかたち/すこし.mp3","すこし。","Sukoshi. A few."],
					],
					[
						'4. XはYです。 X wa Y desu. X is Y(adjective).',
						["Expressions/images/いろかたち/ぞう は おおきい です.png","Expressions/Audio/いろかたち/ぞう は おおきい です.mp3","ぞう は おおきい です。","Zou wa ooki desu. An elephant is big."],
						["Expressions/images/いろかたち/ねずみ は ちいさい です.png","Expressions/Audio/いろかたち/ねずみ は ちいさい です.mp3","ねずみ は ちいさい です。","Nezumi wa chiisai desu. A mouse is small."],
						["Expressions/images/いろかたち/すこし.png","Expressions/Audio/いろかたち/いちごは あかい です.mp3","いちごは あかい です。","Ichigo wa akai desu. Strawberries are red."],
						["Expressions/images/いろかたち/ぶどうは むらさき です.png","Expressions/Audio/いろかたち/ぶどうは むらさき です.mp3","ぶどうは むらさき です。","Budou wa murasaki desu. Grapes are purple."],
						["Expressions/images/いろかたち/きゅうりは　みどり です.png","Expressions/Audio/いろかたち/きゅうりは　みどり です.mp3","きゅうりは　みどり です。","Kyuuri wa midori desu. Cucumbers are green."],

					],
				],
				[
				    [
						'1. Thank you. ありがとう。',
						["Expressions/images/きもち/ありがとう.jfif","Expressions/Audio/きもち/ありがとう.mp3","ありがとう。","Arigatou. Thank you."],
						["Expressions/images/きもち/ありがとう ございます.png","Expressions/Audio/きもち/ありがとうございます.mp3","ありがとう ございます。","Arigatō gozaimasu. (polite) Thank you very much."],
						["Expressions/images/きもち/どういたしまして.png","Expressions/Audio/きもち/どういたしまして.mp3","どういたしまして。","Douitashimashite. You're welcome."],

					],
					[
						'2. Sorry, ごめんなさい。',
						["Expressions/images/きもち/ごめんなさい.png","Expressions/Audio/きもち/ごめんなさい.mp3","ごめんなさい。","gomennasai. I'm sorry."],
						["Expressions/images/きもち/ごめんね.png","Expressions/Audio/きもち/ごめんね.mp3","ごめんね。","Gomenne. I'm sorry."],

					],
					[
						'3. きもち　Expressing Feelings',
						["Expressions/images/きもち/うれしい.png","Expressions/Audio/きもち/うれしい.mp3","うれしい。","ueshii. Happy."],
						["Expressions/images/きもち/かなしい.png","Expressions/Audio/きもち/かなしい.mp3","かなしい。","kanashii. Sad."],
						["Expressions/images/きもち/こわい.png","Expressions/Audio/きもち/こわい.mp3","こわい。","kowai. frightening."],
						["Expressions/images/きもち/おこっている.png","Expressions/Audio/きもち/おこっている.mp3","おこっている。","okottuteiru. angry."],
						["Expressions/images/きもち/たのしい.png","Expressions/Audio/きもち/たのしい.mp3","たのしい。","tanoshii. fun."],

					],
				],
				[
					[
						'1. My classroom わたしのきょうしつ',
						["Expressions/images/がっこうのいちにち/わたしの きょうしつです.png","Expressions/Audio/がっこうのいちにち/わたしのきょうしつです.mp3","わたしの きょうしつです。","Watashi no kyōshitsudesu. This is my classroom."],
						["Expressions/images/がっこうのいちにち/わたしの せんせいです.png","Expressions/Audio/がっこうのいちにち/わたしのせんせいです.mp3","わたしの せんせいです。","Watashi no senseidesu. This is my teacher."],
						["Expressions/images/がっこうのいちにち/わたしは せいとです.png","Expressions/Audio/がっこうのいちにち/わたしは せいと です.mp3","わたしは せいとです。","Watashi wa seito desu. I am a student"],
						["Expressions/images/がっこうのいちにち/わたしの ともだちです.png","Expressions/Audio/がっこうのいちにち/わたしの ともだちです.mp3","わたしの ともだちです。","Watashi no tomodachi desu. This is my friend."],

					],
					[
						'2. My day at school. がっこうのいちにち',
						["Expressions/images/がっこうのいちにち/テキストを よみます.png","Expressions/Audio/がっこうのいちにち/テキストをよみます.mp3","テキストを よみます。","Tekisuto o yomimasu.I read the text."],
						["Expressions/images/がっこうのいちにち/えを かきます.png","Expressions/Audio/がっこうのいちにち/えをかきます.mp3","えをかきます。","E o kakimasu. I draw a picture."],
						["Expressions/images/がっこうのいちにち/ひらがなを かきます.png","Expressions/Audio/がっこうのいちにち/ひらがなをかきます.mp3","ひらがなをかきます。","Hiragana o kakimasu. I write Hiragana."],
						["Expressions/images/がっこうのいちにち/えほんを みます.png","Expressions/Audio/がっこうのいちにち/えほんをみます.mp3","えほんをみます。","Ehon o mimasu. I look at the picture book."],
						["Expressions/images/がっこうのいちにち/べんきょうします.png","Expressions/Audio/がっこうのいちにち/べんきょうします.mp3","べんきょうします。","Benkyō shimasu. I study."],
						["Expressions/images/がっこうのいちにち/わたしは ほんを よみます.png","Expressions/Audio/がっこうのいちにち/わたしはほんをよみます.mp3","わたしは ほんを よみます。","Watashi wa hon o yomimasu. I read a book."],
						["Expressions/images/がっこうのいちにち/ともだちは  えを かきます.png","Expressions/Audio/がっこうのいちにち/ともだちはえをかきます.mp3","ともだちは  えを かきます。","Tomodachi wa e o kakimasu. My friend draw pictures."],
						["Expressions/images/がっこうのいちにち/せんせいは えを みます.png","Expressions/Audio/がっこうのいちにち/せんせいはえをみます.mp3","せんせいは えを みます。","Sensei wa e o mimasu. The teacher looks at the picture."],
					],
					[
						"3. Let's play あそぼう。あそびましょう。",
						["Expressions/images/がっこうのいちにち/あそぼう.png","Expressions/Audio/がっこうのいちにち/あそぼう.mp3","あそぼう。","Asobou. Let's play."],
						["Expressions/images/がっこうのいちにち/あそびましょう.png","Expressions/Audio/がっこうのいちにち/あそびましょう.mp3","あそびましょう。","Asobimashou. Let's play."],
					],
				],
				[
				[
						'1. ほしい です。want',
						["Expressions/images/ほしい/いえが ほしい です.png","Expressions/Audio/ほしい/いえがほしいです.mp3","いえが ほしい です。","Ie ga hoshii desu. We want a house."],
						["Expressions/images/ほしい/くるまが ほしい です.png","Expressions/Audio/ほしい/くるまがほしいです.mp3","くるまが ほしい です。","Kuruma ga hoshi desu. I want a car."],
						["Expressions/images/ほしい/でんわが ほしいです.png","Expressions/Audio/ほしい/でんわがほしいです.mp3","でんわが ほしいです。","Denwa ga hoshii desu. I want a cell phone."],
					],
					[
						'2. ください。Asking for things',
						["Expressions/images/ほしい/はさみを ください.png","Expressions/Audio/ほしい/はさみをください.mp3","はさみを ください。","Hasami o kudasai. May I get Scissors?"],
						["Expressions/images/ほしい/はさみを ください.png","Expressions/Audio/ほしい/はいどうぞ.mp3","はい どうぞ。","Hai douzo. Here it is."],
						["Expressions/images/ほしい/ジュースを ください.png","Expressions/Audio/ほしい/ジュースをください.mp3","ジュースを ください。","Juice o kudasai. May I have some Juice?"],
						["Expressions/images/ほしい/アイスクリームを ください.png","Expressions/Audio/ほしい/アイスクリームをください.mp3","アイスクリームを ください。","Icecream o kudasai. May I get some Icecream?"],
					],
					[
						'3. かいもの Shopping',
						["Expressions/images/ほしい/いらっしゃいませ.png","Expressions/Audio/ほしい/いらっしゃいませ.mp3","いらっしゃいませ。","Irasshaimase. Greeting, when welcoming a customer to a shop."],
						["Expressions/images/ほしい/おにぎりをください.png","Expressions/Audio/ほしい/おにぎりをください.mp3","おにぎりをください。","Onigiri  o kudasai. Onigiri, Please."],
						["Expressions/images/ほしい/どれですか.png","Expressions/Audio/ほしい/どれですか.mp3","どれですか。","Doredesuka. Which one is it?"],
						["Expressions/images/ほしい/それをください.png","Expressions/Audio/ほしい/それをください.mp3","それを ください。","Sore o kudasai. I'll take it."],
						["Expressions/images/ほしい/いくらですか.png","Expressions/Audio/ほしい/いくらですか.mp3","いくらですか。","Ikuradesuka. How much is it?"],
						["Expressions/images/ほしい/２ドル です.png","Expressions/Audio/ほしい/２ドルです.mp3","２ドル です。","Ni doru desu. Two dollars."],
					],
				],
				[
				[
						'1. XはYです。X is Y.',
						["Expressions/images/XはYです/これは りんごです.png","Expressions/Audio/XはYです/これはりんごです.mp3","これは りんごです。",'Kore wa ringo desu. これ kore refers to a thing that is close to you, the speaker("this thing here").'],
						["Expressions/images/XはYです/あれは りんごです.png","Expressions/Audio/XはYです/あれはりんごです.mp3","あれは りんごです。",'Are wa ringo desu. あれ is referred to a thing that is neither close to the speaker nor the listener("that one over there").'],
						["Expressions/images/XはYです/それは りんごです.png","Expressions/Audio/XはYです/それはりんごです.mp3","それは りんごです。",'So re wa ringo desu. それ sore is something that is close to the person you are talking to ("that thing in front of you").'],
					],
					[
						"2. Nounではありません。X isn't Y.",
						["Expressions/images/XはYです/バナナ じゃないです.png","Expressions/Audio/XはYです/バナナじゃないです.mp3","バナナ じゃないです。","Banana janai desu. It's not a banana"],
						["Expressions/images/XはYです/バナナ じゃないです.png","Expressions/Audio/XはYです/バナナじゃありません.mp3","バナナじゃありません。","Banana ja arimasen. It's not a banana."],
						["Expressions/images/XはYです/バナナ じゃないです.png","Expressions/Audio/XはYです/バナナではありません.mp3","バナナでは ありません。","Banana dewa arimasen. It's not a banana."],
					],
					[
						'3. これは　りんごですか。Yes-No question.',
						["Expressions/images/XはYです/これはりんごですか.png","Expressions/Audio/XはYです/これはりんごですか.mp3","これは　りんごですか。","Kore wa ringo desu ka. Is this an apple? You can just add ka(か) at the end of a statement and turn it into a question."],
						["Expressions/images/XはYです/はいそうです・ええそうです.png","Expressions/Audio/XはYです/はいそうです.mp3","はい、そうです。","Hai, so desu. Yes, it is."],
						["Expressions/images/XはYです/はいそうです・ええそうです.png","Expressions/Audio/XはYです/ええそうです.mp3","ええ、そうです。","Ee, so desu. Yes, it is."],
						["Expressions/images/XはYです/いいえ ちがいます・いいえそうではありません.png","Expressions/Audio/XはYです/いいえちがいます.mp3","いいえ、ちがいます。","Iie, chigai masu. No, it isn't."],
						["Expressions/images/XはYです/いいえ ちがいます・いいえそうではありません.png","Expressions/Audio/XはYです/いいえそうではありません.mp3","いいえ、そうでは ありません。","Iie, so dewa arimasen. No, it isn't."],

					],
					[
						'4. これは なんですか。What is this?',
						["Expressions/images/XはYです/これはなんですか.png","Expressions/Audio/XはYです/これはなんですか.mp3","これは なんですか。","Kore wa nan desu ka. What is this?"],
						["Expressions/images/XはYです/ボールです.png","Expressions/Audio/XはYです/それはボールです.mp3","それは ボール です。","Sore wa ball desu. It is a ball."],
					],
				],
				[
				[
						'1. いちにち Days',
						["Expressions/images/しょくじ/あさ.png","Expressions/Audio/しょくじ/あさ.mp3","あさ。","Asa. Morning."],
						["Expressions/images/しょくじ/ひる.png","Expressions/Audio/しょくじ/ひる.mp3","ひる。","Hiru. noon/daytime."],
						["Expressions/images/しょくじ/よる.png","Expressions/Audio/しょくじ/よる.mp3","よる。","Yoru. Night."],

					],
					[
						'2. ごはんMeals',
						["Expressions/images/しょくじ/あさごはん.png","Expressions/Audio/しょくじ/あさごはん.mp3","あさごはん。","Asa gohan. Breakfast."],
						["Expressions/images/しょくじ/ひるごはん.png","Expressions/Audio/しょくじ/ひるごはん.mp3","ひるごはん。","Hiru gohan. Lunch."],
						["Expressions/images/しょくじ/ゆうごはん ばんごはん.png","Expressions/Audio/しょくじ/ゆうごはんばんごはん.mp3","ゆうごはん。ばんごはん。","Yū gohan. Ban gohan. Dinner."],
						["Expressions/images/しょくじ/おやつ.png","Expressions/Audio/しょくじ/おやつ.mp3","おやつ。","Oyatsu. snack."],

					],
					[
						'3. たべます　のみます Eat & Drink',
						["Expressions/images/しょくじ/たべます.png","Expressions/Audio/しょくじ/たべます.mp3","たべます。","Tabemasu. eat."],
						["Expressions/images/しょくじ/のみます.png","Expressions/Audio/しょくじ/のみます.mp3","のみます。","Nomimasu. drink."],
						["Expressions/images/しょくじ/さかなをたべます.png","Expressions/Audio/しょくじ/さかなをたべます.mp3","さかなを たべます。","Sakana o tabemasu. I eat fish."],
						["Expressions/images/しょくじ/おちゃをのみます.png","Expressions/Audio/しょくじ/おちゃをのみます.mp3","おちゃを のみます。","Ocha o nomimasu. I drink tea."],
						["Expressions/images/しょくじ/おいしい.png","Expressions/Audio/しょくじ/おいしい。.mp3","おいしい。","Oishii. delicious/tasty."],
					],
					[
						'4. なにを たべますか。Nani o tabemasuka. What do you eat?',
						["Expressions/images/しょくじ/ハンバーガーをたべます.png","Expressions/Audio/しょくじ/ハンバーガーをたべます。.mp3","ハンバーガーをたべます。","Hanbāgā o tabemasu. I eat a hamburger."],
						["Expressions/images/しょくじ/やさいを たべません.png","Expressions/Audio/しょくじ/やさいをたべません.mp3","やさいを たべません。","Yasai o tabemasen. I don't eat vegetables."],
						["Expressions/images/しょくじ/ミルクをのみます.png","Expressions/Audio/しょくじ/ミルクをのみます.mp3","ミルクを のみます。","Miruku o nomimasu. I drink milk."],
						["Expressions/images/しょくじ/ビールをのみません。.png","Expressions/Audio/しょくじ/ビールをのみません.mp3","ビールを のみません。","Bīru o nomimasen. I don't drink beer."],
					],
				],
				[
					[
						'1. There is あります。ありません。',
						["Expressions/images/あります/ほんがあります.png","Expressions/Audio/あります/ほんがあります.mp3","ほんが あります。","Hon ga arimasu. There is a book."],
						["Expressions/images/あります/ほんがありません.png","Expressions/Audio/あります/ほんがありません.mp3","ほんが ありません。","Hon ga arimasen. There is no book."],
						["Expressions/images/あります/ぼうしが あります.png","Expressions/Audio/あります/ぼうしがあります.mp3","ぼうしが あります。","Bōshi ga arimasu. There is a hat."],
						["Expressions/images/あります/ぼうしが ありません.png","Expressions/Audio/あります/ぼうしがありません.mp3","ぼうしが ありません。","Bōshi ga arimasen. There is no hat."],
					],
					[
						'2. Question',
						["Expressions/images/あります/たべものが ありますか.png","Expressions/Audio/あります/たべものがありますか.mp3","たべものが ありますか。","Tabe mono ga arimasu ka. Is there food?"],
						["Expressions/images/あります/はい あります.png","Expressions/Audio/あります/はいあります.mp3","はい あります。","Hai arimasu. Yes, there is."],

						["Expressions/images/あります/いいえ ありません.png","Expressions/Audio/あります/いいえありません.mp3","いいえ ありません。","Iie arimasen. No, there isn't."],
						["Expressions/images/あります/なにがありますか.png","Expressions/Audio/あります/なにがありますか.mp3","なにが ありますか。","Nani ga arimasu ka. What is there?"],
						["Expressions/images/あります/じゅーすがあります.png","Expressions/Audio/あります/ジュースがあります.mp3","ジュースが あります。","Jūsu ga arimasu. There is juice."],
					],
					[
						'3. Location',
						["Expressions/images/あります/うえ.png","Expressions/Audio/あります/うえ.mp3","うえ。","Ue. on/above."],
						["Expressions/images/あります/した.png","Expressions/Audio/あります/した.mp3","した。","Shita. under/below/beneath."],
						["Expressions/images/あります/なか.png","Expressions/Audio/あります/なか.mp3","なか。","Naka. in/inside."],
						["Expressions/images/あります/つくえの うえ.png","Expressions/Audio/あります/つくえのうえ.mp3","つくえの うえ。","Tukue no ue. On the desk."],
						["Expressions/images/あります/つくえの した.png","Expressions/Audio/あります/つくえのした.mp3","つくえの した。","Tukue no shita. Under the desk."],
						["Expressions/images/あります/なか.png","Expressions/Audio/あります/はこのなか.mp3","はこのなか。","Hako no naka. In the box."],

					],
					[
						'4. Talking about Location',
						["Expressions/images/あります/ほんは つくえの うえに あります.png","Expressions/Audio/あります/ほんはつくえのうえにあります.mp3","ほんは つくえの うえに あります。","Hon wa tsukue no ue ni arimasu. The book is on the desk."],
						["Expressions/images/あります/おもちゃは はこの なか あります.png","Expressions/Audio/あります/おもちゃははこのなかあります.mp3","おもちゃは はこの なか あります。","Omocha wa wa kono naka ni arimasu. The toys are in the box."],
						["Expressions/images/あります/つくえの した.png","Expressions/Audio/あります/りんごはつくえのしたにあります.mp3","りんごは つくえの したに あります。","Ringo wa tsuku e no shita ni arimasu. The apple is under the desk."],

					],
				],
				[

					[
						"1. います & いませ There is (are) & There isn't (aren't)",
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/とりがいます.mp3","とりが います。","Tori ga imasu. There is a bird."],
						["Expressions/images/います/とりが いません.png","Expressions/Audio/います/とりがいません.mp3","とりが いません。","Tori ga imasen. There is not a bird."],
						["Expressions/images/います/いぬが います.png","Expressions/Audio/います/いぬがいます.mp3","いぬが います。","Inu ga imasu. There is a dog."],
						["Expressions/images/います/いぬが いますか.png","Expressions/Audio/います/いぬがいません.mp3","いぬが いません。","Inu ga imasen. There is not a dog."],

					],
					[
						'2. Question',
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/なにがいますか.mp3","なにがいますか。","Nani ga imasu ka. What are there?"],
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/きのしたにぞうがいます。.mp3","きのしたにぞうがいます。","Konoshita ni zō ga imasu. There is an elephant under the tree."],
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/きのうえにとりがいます。.mp3","きのうえにとりがいます。","Ki no ue ni tori ga imasu. There are birds on the tree."],
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/あなのなかにりすがいます。.mp3","あなのなかにりすがいます。","Ana no naka ni risu ga imasu. There is a squirrel in the tree hole."],

					],
					[
						'3. Yes-No question',
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/ぞうがいますか.mp3","ぞうが いますか。","Zō ga imasu ka. Is there an elephant?"],
						["Expressions/images/います/なにが いますか.png","Expressions/Audio/います/はい います.mp3","はい、います。","Hai, imasu. Yes, there is."],
						["Expressions/images/います/いぬが いますか.png","Expressions/Audio/います/いぬがいますか.mp3","いぬが いますか。","Inu ga imasu ka. Is there a dog?"],
						["Expressions/images/います/いぬが いますか.png","Expressions/Audio/います/いいえいません.mp3","いいえ、いません。","Iie, imasen. No, there isn't."],
					],
					[
						'4. Location',
						["Expressions/images/います/まえ.png","Expressions/Audio/います/まえ.mp3","まえ。","mae. in front of."],
						["Expressions/images/います/うしろ.png","Expressions/Audio/います/うしろ.mp3","うしろ。","ushiro. behind."],
						["Expressions/images/います/animal_dance.png","Expressions/Audio/います/うさぎはくまのまえにいます.mp3","うさぎは くまの まえに います。","Usagi wa kuma no mae ni imasu. The rabbit is in front of the bear."],
						["Expressions/images/います/animal_dance.png","Expressions/Audio/います/いぬはねこのうしろにいます.mp3","いぬは ねこの うしろにいます。","Inu wa neko no ushiro ni imasu. The dog is behind the cat."],
					],
				],
				[
					[
						'1. すき Likes',
						["Expressions/images/すきです/だいすきです.png","Expressions/Audio/すきです/すきです。.mp3","すきです。","Suki desu. I like."],
						["Expressions/images/すきです/やきゅうが すきです.png","Expressions/Audio/すきです/やきゅうがすきです.mp3","やきゅうが すきです。","Yakyū ga sukidesu. I like baseball."],
						["Expressions/images/すきです/けんどうが すきです.png","Expressions/Audio/すきです/けんどうがすきです.mp3","けんどうが すきです。","Kendō ga sukidesu. I like kendo."],
						["Expressions/images/すきです/すもうが すきです.png","Expressions/Audio/すきです/すもうがすきです.mp3","すもうが すきです。","Sumou ga sukidesu. I like sumo."],
						["Expressions/images/すきです/バスケットボールが すきです.png","Expressions/Audio/すきです/バスケットボールがすきです.mp3","バスケットボールが すきです。","Basukettobōru ga sukidesu. I like basketball."],
						["Expressions/images/すきです/サッカーが すきです.png","Expressions/Audio/すきです/サッカーがすきです.mp3","サッカーが すきです。","Sakkā ga sukidesu. I like soccer."],

					],
					[
						'4. きらい Dislikes',
						["Expressions/images/すきです/やさいがすきです.png","Expressions/Audio/すきです/やさいがすきです.mp3","やさいが すきです。","Yasai ga suki desu. I like vegetables."],
						["Expressions/images/すきです/きらいです.png","Expressions/Audio/すきです/きらいです.mp3","きらいです。","Kirai desu. I hate."],
						["Expressions/images/すきです/やさいがきらいです.png","Expressions/Audio/すきです/やさいがきらいです.mp3","やさいが きらいです。","Yasai ga kirai desu. I hate vegetables."],
						["Expressions/images/すきです/すきじゃないです.png","Expressions/Audio/すきです/すきじゃないです.mp3","すきじゃないです。","Suki Janai desu. I don't like it."],
						["Expressions/images/すきです/だいすきです.png","Expressions/Audio/すきです/だいすきです.mp3","だいすきです。","Daisuki desu. I love."],
						["Expressions/images/すきです/ハンバーガーがだいすきです.png","Expressions/Audio/すきです/ハンバーガーがだいすきです.mp3","ハンバーガーが だいすきです。","Hanbāgā ga dai sukidesu. I love hamburgers."],
					],
					[
						'3. いちばん すきです Talk about your favorite things.',
						["Expressions/images/すきです/ピンクが いちばん すきです.png","Expressions/Audio/すきです/ピンクがいちばんすきです。.mp3","ピンクが いちばん すきです。","Pinku ga ichiban sukidesu. I like pink the best."],
						["Expressions/images/すきです/きいろが いちばん すきです.png","Expressions/Audio/すきです/きいろがいちばんすきです.mp3","きいろが いちばん すきです。","Kiiro ga ichiban sukidesu.I like yellow the best."],
						["Expressions/images/すきです/いぬが いちばんすきです.png","Expressions/Audio/すきです/いぬがいちばんすきです.mp3","いぬが いちばん すきです。","Inu ga ichiban sukidesu.I like dogs the best."],

					],
				],
				[
					[
						'1. いきます',
						["Expressions/images/ばしょ/がっこういきます.png","Expressions/Audio/ばしょ/わたしはがっこうにいきます。.mp3","わたしは がっこうに いきます。","Watashi wa gakkō ni ikimasu. I go to school."],
						["Expressions/images/ばしょ/おかあさんは みせに いきます.png","Expressions/Audio/ばしょ/おかあさんはみせにいきます.mp3","おかあさんは みせに いきます。","Okāsan wa mise ni ikimasu. Mom goes to the store."],
						["Expressions/images/ばしょ/ともだちはうみにいきます.png","Expressions/Audio/ばしょ/ともだちはうみにいきます.mp3","ともだちは うみに いきます。","Tomodachi wa umi ni ikimasu. My friends go to the sea."],
						["Expressions/images/ばしょ/ぼくは やまに いきます.png","Expressions/Audio/ばしょ/ぼくはやまにいきます.mp3","ぼくは やまに いきます。","Boku wa yama ni ikimasu. I go to the mountains."],

					],
					[
						'2. のります。ride.',
						["Expressions/images/ばしょ/わたしは じてんしゃに のります.png","Expressions/Audio/ばしょ/わたしはじてんしゃにのります.mp3","わたしは じてんしゃに のります。","Watashi wa jitensha ni norimasu. I ride a bicycle."],
						["Expressions/images/ばしょ/おねえさんは うまに のります.png","Expressions/Audio/ばしょ/おねえさんはうまにのります.mp3","おねえさんは うまに のります。","Onēsan wa uma ni norimasu. My older sister rides a horse."],
						["Expressions/images/ばしょ/ぼくは バスに のります.png","Expressions/Audio/ばしょ/ぼくはバスにのります.mp3","ぼくは バスに のります。","Boku wa basu ni norimasu. I get on the bus."],

					],
					[
						'3. でいきます。 transportation.',
						["Expressions/images/ばしょ/ふねでいきます.png","Expressions/Audio/ばしょ/ふねでいきます.mp3","ふねで いきます。","Fune de ikimasu. I go by ship."],
						["Expressions/images/ばしょ/ひこうきでいきます.png","Expressions/Audio/ばしょ/ひこうきでいきます.mp3","ひこうきで いきます。","Hikōki de ikimasu. I go by plane."],
						["Expressions/images/ばしょ/くるまでいきます.png","Expressions/Audio/ばしょ/くるまでいきます.mp3","くるまで いきます。","Kuruma de ikimasu. I go by car."],

					],
				],
				[

					[
						'1. なん what',
						["Expressions/images/なに なん だれ どこ/なんですか あたまです.png","Expressions/Audio/なに なん だれ どこ/なんですか.mp3","なんですか。","Nan desuka. What is it?"],
						["Expressions/images/なに なん だれ どこ/なんですか あたまです.png","Expressions/Audio/なに なん だれ どこ/あたまです.mp3","あたま です。","Atama desu. It's a head."],
						["Expressions/images/なに なん だれ どこ/なんですか てです.png","Expressions/Audio/なに なん だれ どこ/なんですか.mp3","なんですか。","Nan desuka.What is it?"],
						["Expressions/images/なに なん だれ どこ/なんですか てです.png","Expressions/Audio/なに なん だれ どこ/てです.mp3","て です。","Te desu. It's a hand."],
						["Expressions/images/なに なん だれ どこ/なんですか　あしです.png","Expressions/Audio/なに なん だれ どこ/なんですか.mp3","なんですか。","Nan desuka.What is it?"],
						["Expressions/images/なに なん だれ どこ/なんですか　あしです.png","Expressions/Audio/なに なん だれ どこ/あしです.mp3","あし です。","Ashi desu.It's a foot."],

					],
					[
						'2. なに what',
						["Expressions/images/なに なん だれ どこ/なにをたべますか　ハンバーガー.png","Expressions/Audio/なに なん だれ どこ/なにをたべますか.mp3","なにを たべますか。","Nani o tabemasu ka. What do you eat?"],
						["Expressions/images/なに なん だれ どこ/なにをたべますか　ハンバーガー.png","Expressions/Audio/なに なん だれ どこ/ハンバーガーをたべます.mp3","ハンバーガーを たべます。","Hanbāgā o tabemasu. I eat a hamburger."],
						["Expressions/images/なに なん だれ どこ/ミルクをのみます.png","Expressions/Audio/なに なん だれ どこ/なにをのみますか.mp3","なにを のみますか。","Nani o nomimasu ka. What do you drink?"],
						["Expressions/images/なに なん だれ どこ/ミルクをのみます.png","Expressions/Audio/なに なん だれ どこ/ミルクをのみます.mp3","ミルクを のみます。","Miruku o nomimasu. I drink milk."],
						["Expressions/images/なに なん だれ どこ/なにがすきですか　いぬがすきです.png","Expressions/Audio/なに なん だれ どこ/なにがすきですか.mp3","なにが すきですか。","Nani ga sukidesu ka. What do you like?"],
						["Expressions/images/なに なん だれ どこ/なにがすきですか　いぬがすきです.png","Expressions/Audio/なに なん だれ どこ/いぬがすきです.mp3","いぬが すきです。","Inu ga sukidesu. I like dogs."],
						["Expressions/images/なに なん だれ どこ/なにがほしいですか。くるまがほしいです。.png","Expressions/Audio/なに なん だれ どこ/なにがほしいですか.mp3","なにが ほしいですか。","Nani ga hoshīdesu ka. What do you want?"],
						["Expressions/images/なに なん だれ どこ/なにがほしいですか。くるまがほしいです。.png","Expressions/Audio/ほしい/くるまがほしいです.mp3","くるまが ほしいです。","Kuruma ga hoshii desu. I want a car."],

					],
					[
						'3. だれ who',
						["Expressions/images/なに なん だれ どこ/だれですか。せんせいです。.png","Expressions/Audio/なに なん だれ どこ/だれですか.mp3","だれですか。","Dare desu ka. who?"],
						["Expressions/images/なに なん だれ どこ/だれですか。せんせいです。.png","Expressions/Audio/なに なん だれ どこ/せんせいです.mp3","せんせい です。","Sensei desu. She is a teacher."],
						["Expressions/images/なに なん だれ どこ/おかあさんです.png","Expressions/Audio/なに なん だれ どこ/だれですか.mp3","だれですか。","Dare desu ka. who?"],
						["Expressions/images/なに なん だれ どこ/おかあさんです.png","Expressions/Audio/なに なん だれ どこ/おかあさんです.mp3","おかあさん です。","Okāsan desu. She is a mom."],
						["Expressions/images/なに なん だれ どこ/おとうさんです.png","Expressions/Audio/なに なん だれ どこ/だれですか.mp3","だれですか。","Dare desu ka. who?"],
						["Expressions/images/なに なん だれ どこ/おとうさんです.png","Expressions/Audio/なに なん だれ どこ/おとうさんです.mp3","おとうさん です。","Otousan desu. He is a dad."],

					],
					[
						'4. どこ where',
						["Expressions/images/なに なん だれ どこ/がっこうへいきます.png","Expressions/Audio/なに なん だれ どこ/どこにいきますか.mp3","どこに いきますか。","Doko ni ikimasu ka. Where are you going?"],
						["Expressions/images/なに なん だれ どこ/がっこうへいきます.png","Expressions/Audio/なに なん だれ どこ/がっこうにいきます.mp3","がっこうに いきます。","Gakkō ni ikimasu. I go to school."],
						["Expressions/images/なに なん だれ どこ/ほんはどこにありますか.png","Expressions/Audio/なに なん だれ どこ/ほんはどこにありますか.mp3","ほんは どこに ありますか。","Hon wa doko ni arimasu ka. Where is the book?"],
						["Expressions/images/なに なん だれ どこ/ほんはどこにありますか.png","Expressions/Audio/なに なん だれ どこ/ほんはつくえのうえにあります.mp3","ほんは つくえの うえに あります。","Hon wa tsuku e no ue ni arimasu. The book is on the desk."],
						["Expressions/images/なに なん だれ どこ/おとこのこはどこにいますか.png","Expressions/Audio/なに なん だれ どこ/おとこのこはどこにいますか.mp3","おとこのこは どこに いますか。","Otoko no ko wa doko ni imasu ka. Where is the boy?"],
						["Expressions/images/なに なん だれ どこ/おとこのこはどこにいますか.png","Expressions/Audio/なに なん だれ どこ/おとこのこはきのしたにいます.mp3","おとこのこは きの したにいます。","Otoko no ko wa Kino shita ni imasu. The boy is under the tree."],

					],
				],
				[
					[
						'1. What time is it?',
						["Expressions/images/なんじですか/なんじですか.png","Expressions/Audio/なんじですか/なんじですか.mp3","なんじですか。","Nanji desuka.What time is it?"],
						["Expressions/images/なんじですか/clock_0100.png","Expressions/Audio/なんじですか/いちじです.mp3","いちじです。","Ichiji desu. It's 1 o'clock."],
						["Expressions/images/なんじですか/clock_0200.png","Expressions/Audio/なんじですか/にじです.mp3","にじです。","Niji desu. It's 2 o'clock."],
						["Expressions/images/なんじですか/clock_0300.png","Expressions/Audio/なんじですか/さんじです.mp3","さんじです。","Sanji desu. It's 3 o'clock."],
						["Expressions/images/なんじですか/clock_0400.png","Expressions/Audio/なんじですか/よじです.mp3","よじです。","Yoji desu. It's 4 o'clock."],
						["Expressions/images/なんじですか/clock_0500.png","Expressions/Audio/なんじですか/ごじです.mp3","ごじです。","Goji desu. It's 5 o'clock."],
						["Expressions/images/なんじですか/clock_0600.png","Expressions/Audio/なんじですか/ろくじです.mp3","ろくじです。","Rokuji desu. It's 6 o'clock."],
						["Expressions/images/なんじですか/clock_0700.png","Expressions/Audio/なんじですか/しちじです.mp3","しちじです。","Shichiji desu. It's 7 o'clock."],
						["Expressions/images/なんじですか/clock_0800.png","Expressions/Audio/なんじですか/はちじです.mp3","はちじです。","Hachiji desu. It's 8 o'clock."],
						["Expressions/images/なんじですか/clock_0900.png","Expressions/Audio/なんじですか/くじです.mp3","くじです。","Kuji desu. It's 9 o'clock."],
						["Expressions/images/なんじですか/clock_1000.png","Expressions/Audio/なんじですか/じゅうじです.mp3","じゅうじです。","Juuji desu. It's 10 o'clock."],
						["Expressions/images/なんじですか/clock_1100.png","Expressions/Audio/なんじですか/じゅういちじです.mp3","じゅういちじです。","Juuichiji desu. It's 11 o'clock."],
						["Expressions/images/なんじですか/clock_1200.png","Expressions/Audio/なんじですか/じゅうにじです.mp3","じゅうにじです。","Juuniji desu. It's 12 o'clock."],
					],

				],
        ]


# Function to transform the data
def transform_data(sources):
    reformatted_data = []
    for category_index, category in enumerate(sources):
        category_name = f"Category {category_index + 1}"
        category_description = f"Content for {category_name}"
        category_items = []
        
        for group in category:
            group_name = group[0]  # First element in the group is the title
            for content in group[1:]:
                category_items.append({
                    "title": content[2],
                    "explanation": content[3],
                    "image": content[0],
                    "alt": content[2],
                    "audioSrc": content[1]
                })
        
        reformatted_data.append({
            "name": category_name,
            "description": category_description,
            "image": f"/images/{category_name.replace(' ', '_').lower()}.jpg",
            "items": category_items
        })
    return reformatted_data

# Transforming the data
formatted_data = transform_data(ListOfSources)

# Print JSON output
print(json.dumps(formatted_data, ensure_ascii=False, indent=4))

# Writing the JSON output to a file
with open("data.json", "w", encoding="utf-8") as file:
    json.dump(formatted_data, file, ensure_ascii=False, indent=4)
