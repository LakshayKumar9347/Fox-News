import React, { Component } from 'react'
import NewItems from './NewsItems'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Ankit Gohel",
            "title": "RBI Monetary Policy Live: MPC decides to keep policy repo rate unchanged at 6.5% | Mint - Mint",
            "description": "The Reserve Bank of India (RBI) is set to announce its monetary policy decision later today after the three-day meeting of its rate-setting panel, Monetary Policy Committee (MPC), headed by Governor Shaktikanta Das. The central bank is largely expected to kee…",
            "url": "https://www.livemint.com/economy/rbi-monetary-policy-live-rbi-to-announce-monetary-policy-today-likely-to-hold-repo-rate-at-65-11686135649418.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/07/600x338/shaktikantarbiani_1680755770535_1686135849578.jpg",
            "publishedAt": "2023-06-08T04:38:26Z",
            "content": "The Reserve Bank of Indias (RBI) Monetary Policy Committee (MPC) will announce its policy decision today. The second bi-monthly monetary policy meeting of FY24 was held from June 6 to 8 and its outco… [+20877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Unstable sunspot explodes, sparks BLACKOUTS on Earth; Solar storm in the offing? - HT Tech",
            "description": "An unstable sunspot, AR3327, has exploded producing a solar flare that triggered radio blackouts over Africa. More solar flares are expected to erupt in the days to come. Will a major solar storm hit the Earth soon?",
            "url": "https://tech.hindustantimes.com/tech/news/unstable-sunspot-explodes-sparks-blackouts-on-earth-solar-storm-in-the-offing-71686197049683.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/08/1600x900/sun-2224937_1280_1677654423439_1686197093584.jpg",
            "publishedAt": "2023-06-08T04:08:29Z",
            "content": "The National Oceanic and Atmospheric Administration (NOAA) reported on Monday that the high number of sunspots on the Earth-facing side of the Sun can become a concern as some of them could go unstab… [+2741 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "‘Shameless’ - Adipurush director Om Raut gives goodbye kiss to Kriti Sanon inside Tirupati temple premises, gets criticised - Indiatimes.com",
            "description": "Controversies never seem to end for the film ‘Adipurush’. In the latest, Kriti Sanon, Prabhas and director Om Raut visited the Tirupati temple to seek blessings ahead of their film’s release. And a video of the actress and Raut has surfaced on social",
            "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/adipurush-director-om-raut-gives-goodbye-kiss-to-kriti-sanon-inside-tirupati-temple-premises-gets-criticised/videoshow/100837568.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/100837568/size-50238/100837568.jpg",
            "publishedAt": "2023-06-08T04:07:02Z",
            "content": "Controversies never seem to end for the film Adipurush\r\n. In the latest, Kriti Sanon\r\n, Prabhas\r\n and director Om Raut\r\n visited the Tirupati temple\r\n to seek blessings ahead of their films release. … [+696 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Our Lives At Stake\": Indian Students In Canada Face Deportation Risk - NDTV",
            "description": "Hundreds of Indian students in Canada have hit the streets in protest against the possibility of deportation. The students, mostly from Punjab, claim that they were admitted to Canadian universities and colleges on the basis of fake offer letters.",
            "url": "https://www.ndtv.com/indians-abroad/our-lives-at-stake-indian-students-in-canada-facing-deportation-risk-4103588",
            "urlToImage": "https://c.ndtvimg.com/2023-06/5ff5o3ag_canada-students-_625x300_08_June_23.jpg",
            "publishedAt": "2023-06-08T03:47:00Z",
            "content": "The Punjab NRI Affairs Minister has sought the intervention of External Affairs Minister S Jaishankar.\r\nNew Delhi: Hundreds of Indian students in Canada have hit the streets in protest against the po… [+3512 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Harman Baweja explains what happened on family ‘vacation’ post Love Story 2050 - Hindustan Times",
            "description": "Harman Baweja was launched in Bollywood by father Harry Baweja, who directed him in Love Story 2050. The film, which also featured Priyanka Chopra, flopped. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/harman-baweja-on-love-story-2050-flop-box-office-101686192417234.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/08/1600x900/love_story_2050_1686192493829_1686192499190.jpg",
            "publishedAt": "2023-06-08T03:35:52Z",
            "content": "Actor Harman Baweja of Love Story 250 fame is back with his new web series Scoop. He doesn't remind people of Hrithik Roshan anymore the way he was compared during his early days and sports a moustac… [+2184 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Kanishka Singharia",
            "title": "ChatGPT creator Sam Altman warns of job cuts. Then points to silver lining - Hindustan Times",
            "description": "Altman, in an interview stressed that while certain jobs may become obsolete due to automation, new opportunities would emerge. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/chatgpt-creator-sam-altman-warns-of-job-cuts-then-points-to-silver-lining-101686190550928.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/08/1600x900/FRANCE-SCIENCE-TECHNOLOGY-AI-9_1686194865241_1686194910870.jpg",
            "publishedAt": "2023-06-08T03:35:42Z",
            "content": "OpenAI CEO Sam Altman who kicked off his India visit on Wednesday shared his perspective on the disruptive nature of artificial intelligence and its potential impact on jobs. Altman acknowledged that… [+2222 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Ankita Chakravarti",
            "title": "Realme 11 Pro series India launch today: expected price, specifications, how to watch livestream - India Today",
            "description": "Apart from having an interesting bunch of specifications, the Realme 11 Pro series also features an eye-catching design.",
            "url": "https://www.indiatoday.in/technology/news/story/realme-11-pro-series-india-launch-today-expected-price-specifications-how-to-watch-livestream-2390225-2023-06-08",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/screenshot_2023-06-08_at_8.52.04_am-sixteen_nine.png?VersionId=l3eMuZc92gM0LTuASKCRoQ3szgs5Mfp7",
            "publishedAt": "2023-06-08T03:28:31Z",
            "content": "By Ankita Chakravarti: Realme is all set to unveil the Realme 11 Pro series in India today. It is expected that Realme will launch two phonesthe Realme 11 Pro and the Realme 11 Pro+. Since these phon… [+4721 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Zee Media Bureau",
            "title": "AUS: 327-3 (85) | IND VS AUS WTC Final, Day 2 LIVE Cricket Score and Updates: India Defend Dropping - Zee News",
            "description": "AUS: 327-3 (85) | IND VS AUS WTC Final, Day 2 LIVE Cricket Score and Updates: Rohit Sharma Loses His",
            "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-aus-wtc-final-2023-day-2-world-test-championship-match-today-india-vs-australia-live-updates-the-oval-stadium-london-rohit-sharma-pat-cummins-2618294",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/06/08/1215861-indausblogday2.jpg",
            "publishedAt": "2023-06-08T02:36:44Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Award winning Doordarshan anchor Gitanjali Aiyar no more - Economic Times",
            "description": "Award-winning anchor Gitanjali Aiyar was in her mid-70s. Aiyar graduated from Kolkata's Loreto College, joining Doordarshan in 1971. She was awarded the honour of best anchor four times. She also won the Indira Gandhi Priyadarshini Award for Outstanding Women…",
            "url": "https://economictimes.indiatimes.com/news/india/award-winning-doordarshan-anchor-gitanjali-aiyar-no-more/articleshow/100835212.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-100835383,width-1070,height-580,imgsize-1269724,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-08T02:26:00Z",
            "content": "One of India's first English news presenters, Gitanjali Aiyar, passed away on Wednesday. The award-winning anchor was in her mid-70s. Reports say that Aiyar collapsed after she came home from a walk.… [+1268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Grace Cyril",
            "title": "Zara Hatke Zara Bachke box office collection Day 6: Vicky Kaushal, Sara Ali Khan's film remains strong - India Today",
            "description": "Zara Hatke Zara Bachke remains steady at the box office. On Day 6, June 7, Vicky Kaushal and Sara Ali Khan's film minted Rs 3 crore.",
            "url": "https://www.indiatoday.in/movies/bollywood/story/zara-hatke-zara-bachke-box-office-collection-day-6-vicky-kaushal-sara-ali-khans-film-remains-strong-2390202-2023-06-08",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/1020502392_zara-hatke-zara-bachke-day-5_1280_720-sixteen_nine.jpg?VersionId=u_QBptJOpx9rWhjMQas5tyxTAhuIQwrH",
            "publishedAt": "2023-06-08T02:25:15Z",
            "content": "By Grace Cyril: Vicky Kaushal and Sara Ali Khan's Zara Hatke Zara Bachke is putting up strong numbers at the box office. Fans have loved the pair's chemistry in the film. While the film witnessed a m… [+1700 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Told Kohli 'No, you're wrong': Hussain after India's 'brave man' overrules Virat - Hindustan Times",
            "description": "A 'brave man' in the Indian team managed to change Virat Kohli's mind regarding a DRS call on Day 1 of the WTC final between India and Australia at The Oval. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/he-went-up-to-kohli-and-said-no-youre-wrong-hussain-after-indias-brave-man-overrules-virat-in-wtc-final-101686166727066.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/07/1600x900/AP06-07-2023-000097A-0_1686166790234_1686166814836.jpg",
            "publishedAt": "2023-06-08T02:18:12Z",
            "content": "India were in for a long day at The Oval as Australia belted 327/3 on Day 1 of the World Test Championship final. After India raced away to three wickets dismissing Usman Khawaja, David Warner and Ma… [+3076 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Nitin Naik",
            "title": "India vs Australia WTC Final: Ravichandran Ashwin remains conspicuous by his absence - Indiatimes.com",
            "description": "Cricket News: \"We have got four seamers and one spinner and that is Ravindra Jadeja,\" India skipper Rohit Sharma told former England skipper Nasser Hussain after wi",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-test-championship/india-vs-australia-wtc-final-ravichandran-ashwin-remains-conspicuous-by-his-absence/articleshow/100834983.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-100834951,width-1070,height-580,imgsize-38454,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-06-08T02:17:00Z",
            "content": "India vs Australia WTC Final: Aussies get Head start against India on Day 1Mohammed Shami had just produced one of those deliveries that he does when he's in rhythm. A rare full ball, his first after… [+170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Garena Free Fire MAX Redeem Codes for June 8, 2023: Unreal rewards await you; Claim them now - HT Tech",
            "description": "Garena Free Fire MAX Redeem Codes for June 8, 2023:",
            "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-june-8-2023-unreal-rewards-await-you-claim-them-now-71686186822321.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/08/1600x900/bda3ef1394e93d39b36a9aa6305e7c64jpg_1_1686187890851_1686187891061.jpg",
            "publishedAt": "2023-06-08T01:37:36Z",
            "content": "Garena Free Fire MAX Redeem Codes for June 8, 2023: Garena Free Fire MAX is the higher-quality version of Garena Free Fire. On Free Fire MAX, players can get an optimized Free Fire experience with en… [+2276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Agence France-Presse",
            "title": "Lionel Messi To Join Bottom-Placed MLS Side Inter Miami After PSG Exit - NDTV Sports",
            "description": "The Argentine forward, 35, has spent the last two seasons at Paris Saint-Germain, playing his final game for the club on Saturday, after moving from Barcelona in 2021, where he spent the majority of his career.",
            "url": "https://sports.ndtv.com/football/lionel-messi-to-join-bottom-placed-mls-side-inter-miami-after-psg-exit-4103569",
            "urlToImage": "https://c.ndtvimg.com/2023-06/s5eufm28_lionel-messi-afp_625x300_08_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-08T01:56:22Z",
            "content": "Lionel Messi on Wednesday announced he will sign for Major League Soccer side Inter Miami, choosing the United States as his next destination over a Barcelona reunion or blockbuster deal to play in S… [+4869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Air India's replacement flight takes off from Russia for San Francisco | Mint - Mint",
            "description": "The San Francisco bound flight which was made to land in Russia due to technical glitch, began its returning flight to San Francisco, said Air India",
            "url": "https://www.livemint.com/news/air-indias-replacement-flight-takes-off-from-russia-for-san-francisco-delhi-magadan-11686185443137.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/08/600x338/Air_India_1686185623435_1686185623582.jpg",
            "publishedAt": "2023-06-08T01:06:12Z",
            "content": "Two days after the emergency landing of a San-Francisco bound Air India flight in Russia, its replacement flight took off for San Fransisco on Wednesday. Air India sent the replacement flight on Wedn… [+1834 chars]"
        }
    ]
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            count: 0
        }
    }
    render() {
        return (
    <>
        <div className="container row" style={{ width: "80%", margin: "2rem auto auto auto" }}>
            {this.articles.map((e) => {
                return <div className="col-lg-4 col-md-6 p-3" key={e.url} >
                    <NewItems title={e.title} description={e.description} urlToImage={e.urlToImage} newsUrl={e.url} />
                </div>
            })}
        </div>
    </>
        )
    }
}