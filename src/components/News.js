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
        <div className="row m-5">
          {this.articles.map((e)=>{return <div className="col-md-4">
            <NewItems title={this.articles.title}/>
          </div>}) }

        </div>
      </>
    )
  }
}