import React, { useRef } from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiFilter2Line } from "react-icons/ri";

import { FaChevronDown } from "react-icons/fa";

type Item = {
  id: number;
  name: string;
  quote: string;
  category: string;
  author: string;
  url: string;
};

const TMCCard = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Item 1",
      quote:
        "The aim of this course is to explore how a spiritual person - a child of God - can live in and make impact on the social and political context of the world.",
      author: "Dr. Lanre Amodu",
      category: "Bible",
      url: "https://ng.linkedin.com/in/lanre-olaolu-amodu-959b3a17",
    },
    {
      id: 2,
      name: "Item 2",
      quote:
        "So we are Christ’s ambassadors, God making His appeal as it were through us. We [as Christ’s personal representatives] beg you for His sake to lay hold of the divine favor [now offered you] and be reconciled to God.",
      author: "2 Corinthians 5:20 (Amp)",
      category: "Bible",
      url: "https://www.bible.com/bible/8/2CO.5.20.AMPC",
    },
    {
      id: 3,
      name: "Item 3",
      quote:
        "“God’s will and desire — His pleasure — is that we love Him. We cannot please God unless we love Him. We cannot love Him unless we know Him, and we cannot know Him unless we have faith in Him.”",
      author: "Myles Munroe",
      category: "Bible",
      url: "https://www.google.com/search?q=myles+munroe&oq=MYLES&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAYjwIyBwgEEAAYjwLSAQgxNTM0ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 4,
      name: "Item 4",
      quote:
        "Your lives are like salt among the people. But if you, like salt, become bland, how can your ‘saltiness’ be restored? Flavorless salt is good for nothing and will be thrown out and trampled on by others. Your lives light up the world… And who would light a lamp and then hide it in an obscure place? … Let it shine brightly before others, so that your commendable works will shine as light upon them, and then they will give their praise to your Father in heaven.",
      author: "Matthew 5:13-16",
      category: "Bible",
      url: "https://www.bible.com/bible/1849/MAT.5.13-16.TPT",
    },
    {
      id: 5,
      name: "Item 5",
      quote:
        "This world and its desires are in the process of passing away, but those who love to do the will of God live forever.",
      author: "1 John 2:15-17",
      category: "quote",
      url: "https://www.bible.com/bible/1849/1JN.2.17.TPT",
    },
    {
      id: 6,
      name: "Item 6",
      quote:
        "Whose end is destruction, whose God is their belly, and whose glory is in their shame, who mind earthly things.",
      author: "Philippians 3:19",
      category: "quote",
      url: "https://www.bible.com/bible/1/PHP.3.19.KJV",
    },
    {
      id: 7,
      name: "Item 7",
      quote: "For none of us liveth to himself, and no man dieth to himself.",
      author: "Romans 14:7",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.14.7",
    },
    {
      id: 8,
      name: "Item 8",
      quote:
        "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets.",
      author: "Matthew 22:37-40",
      category: "quote",
      url: "https://www.bible.com/bible/1/MAT.22.37-40.KJV",
    },
    {
      id: 9,
      name: "Item 9",
      quote:
        "But as it is written, Eye hath not seen, nor ear heard, Neither have entered into the heart of man, The things which God hath prepared for them that love him.",
      author: "1 Corinthians 2:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/1CO.2.9.KJV",
    },
    {
      id: 10,
      name: "Item 10",
      quote:
        "But whoso hath this world's good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him? My little children, let us not love in word, neither in tongue; but in deed and in truth.",
      author: "1 John 3:17-18",
      category: "quote",
      url: "https://www.bible.com/bible/1/1JN.3.17-18.KJV",
    },
    {
      id: 11,
      name: "Item 11",
      quote: "Bear ye one another's burdens, and so fulfil the law of Christ.",
      author: "Galatians 6:2",
      category: "quote",
      url: "https://www.bible.com/bible/1/GAL.6.2.KJV",
    },
    {
      id: 12,
      name: "Item 12",
      quote:
        "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
      author: "Galatians 6:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/GAL.6.9.KJV",
    },
    {
      id: 13,
      name: "Item 13",
      quote: "With good will doing service, as to the Lord, and not to men.",
      author: "Ephesians 6:7",
      category: "quote",
      url: "https://www.bible.com/bible/1/EPH.6.7.KJV",
    },
    {
      id: 14,
      name: "Item 14",
      quote:
        "For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in: naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me. Then shall the righteous answer him, saying, Lord, when saw we thee an hungred, and fed thee? or thirsty, and gave thee drink? When saw we thee a stranger, and took thee in? or naked, and clothed thee? Or when saw we thee sick, or in prison, and came unto thee? And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
      author: "Matthew 25:35-40",
      category: "quote",
      url: "https://www.bible.com/bible/1/MAT.25.35-40.KJV",
    },
    {
      id: 15,
      name: "Item 15",
      quote:
        "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
      author: "Matthew 5:16",
      category: "quote",
      url: "https://www.bible.com/bible/1/MAT.5.16.KJV",
    },
    {
      id: 16,
      name: "Item 16",
      quote:
        "Charge them that are rich in this world, that they be not highminded, nor trust in uncertain riches, but in the living God, who giveth us richly all things to enjoy; that they do good, that they be rich in good works, ready to distribute, willing to communicate.",
      author: "1 Timothy 6:17-18",
      category: "quote",
      url: "https://www.bible.com/bible/1/1TI.6.17-18.KJV",
    },
    {
      id: 17,
      name: "Item 17",
      quote:
        "I the LORD search the heart, I try the reins, even to give every man according to his ways, and according to the fruit of his doings.",
      author: "Jeremiah 17:10",
      category: "quote",
      url: "https://www.bible.com/bible/1/JER.17.10.KJV",
    },
    {
      id: 18,
      name: "Item 18",
      quote:
        "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal. And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing. And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing.",
      author: "1 Corinthians 13:1-3",
      category: "quote",
      url: "https://www.bible.com/bible/1/1CO.13.1-3.KJV",
    },
    {
      id: 19,
      name: "Item 19",
      quote:
        "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
      author: "Ephesians 4:32",
      category: "quote",
      url: "https://www.bible.com/bible/1/EPH.4.32.KJV",
    },
    {
      id: 20,
      name: "Item 20",
      quote:
        "And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.",
      author: "Romans 5:5",
      category: "quote",
      url: "https://www.bible.com/bible/1/ROM.5.5.KJV",
    },
    {
      id: 21,
      name: "Item 21",
      quote:
        "And this they did, not as we hoped, but first gave their own selves to the Lord, and unto us by the will of God.",
      author: "2 Corinthians 8:5",
      category: "quote",
      url: "https://www.bible.com/bible/1/2CO.8.5.KJV",
    },
    {
      id: 22,
      name: "Item 22",
      quote:
        "Look not every man on his own things, but every man also on the things of others.",
      author: "Philippians 2:4",
      category: "quote",
      url: "https://www.bible.com/bible/1/PHP.2.4.KJV",
    },
    {
      id: 23,
      name: "Item 23",
      quote:
        "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
      author: "Galatians 6:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/gal.6.9",
    },
    {
      id: 24,
      name: "Item 24",
      quote:
        "But if ye have respect to persons, ye commit sin, and are convinced of the law as transgressors.",
      author: "James 2:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/jas.2.9",
    },
    {
      id: 25,
      name: "Item 25",
      quote:
        "For God is not the author of confusion, but of peace, as in all churches of the saints.",
      author: "1 Corinthians 14:33a",
      category: "quote",
      url: "https://www.bible.com/bible/1/1co.14.33",
    },
    {
      id: 26,
      name: "Item 26",
      quote:
        "The way of the just is uprightness: thou, most upright, dost weigh the path of the just.",
      author: "Isaiah 26:7",
      category: "quote",
      url: "https://www.bible.com/bible/1/isa.26.7",
    },
    {
      id: 27,
      name: "Item 27",
      quote:
        "My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children.",
      author: "Hosea 4:6a",
      category: "quote",
      url: "https://www.bible.com/bible/1/hos.4.6",
    },
    {
      id: 28,
      name: "Item 28",
      quote:
        "He that hath pity upon the poor lendeth unto the LORD; And that which he hath given will he pay him again.",
      author: "Proverbs 19:17",
      category: "quote",
      url: "https://www.bible.com/bible/1/pro.19.17",
    },
    {
      id: 29,
      name: "Item 29",
      quote:
        "There shall be an handful of corn in the earth upon the top of the mountains; The fruit thereof shall shake like Lebanon: And they of the city shall flourish like grass of the earth.",
      author: "Psalm 72:16",
      category: "quote",
      url: "https://www.bible.com/bible/1/psa.72.16",
    },
    {
      id: 30,
      name: "Item 30",
      quote:
        "Two are better than one; because they have a good reward for their labour.",
      author: "Ecclesiastes 4:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/ecc.4.9",
    },
    {
      id: 31,
      name: "Item 31",
      quote:
        "And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work.",
      author: "2 Corinthians 9:8",
      category: "quote",
      url: "https://www.bible.com/bible/1/2co.9.8",
    },
    {
      id: 32,
      name: "Item 32",
      quote:
        "Take fast hold of instruction; let her not go: Keep her; for she is thy life.",
      author: "Proverbs 4:13",
      category: "quote",
      url: "https://www.bible.com/bible/1/pro.4.13",
    },
    {
      id: 33,
      name: "Item 33",
      quote:
        "Blessed is he that considereth the poor: The LORD will deliver him in time of trouble.",
      author: "Psalm 41:1",
      category: "quote",
      url: "https://www.bible.com/bible/1/psa.41.1",
    },
    {
      id: 34,
      name: "Item 34",
      quote:
        "Then they cried unto the LORD in their trouble, And he delivered them out of their distresses. And he led them forth by the right way, that they might go to a city of habitation.",
      author: "Psalm 107:6-7",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Psalm%20107%3A6-7&version=KJV",
    },
    {
      id: 35,
      name: "Item 35",
      quote: "Click the link",
      author: "Job 29:4-18",
      category: "quote",
      url: "https://thekingjamesversionbible.com/job-29-4-18",
    },
    {
      id: 36,
      name: "Item 36",
      quote:
        "The LORD will preserve him, and keep him alive; and he shall be blessed upon the earth: And thou wilt not deliver him unto the will of his enemies.",
      author: "Psalm 41:2",
      category: "quote",
      url: "https://www.bible.com/bible/1/psa.41.2",
    },
    {
      id: 37,
      name: "Item 37",
      quote:
        "Thou shalt arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come. For thy servants take pleasure in her stones, and favour the dust thereof. So the heathen shall fear the name of the Lord, and all the kings of the earth thy glory.",
      author: "Psalm 102:13-15",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Psalm+102%3A13-15&version=KJV",
    },
    {
      id: 38,
      name: "Item 38",
      quote:
        "But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.",
      author: "2 Cor. 3:18",
      category: "quote",
      url: "https://www.bible.com/bible/1/2co.3.18",
    },
    {
      id: 39,
      name: "Item 39",
      quote:
        "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
      author: "John 15:5",
      category: "quote",
      url: "https://www.bible.com/bible/1/jhn.15.5",
    },
    {
      id: 40,
      name: "Item 40",
      quote:
        "Finally, be ye all of one mind, having compassion one of another, love as brethren, be pitiful, be courteous.",
      author: "1 Peter 3:8",
      category: "quote",
      url: "https://www.bible.com/bible/1/1pe.3.8",
    },
    {
      id: 41,
      name: "Item 41",
      quote:
        "Learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.",
      author: "Isaiah 1:17",
      category: "quote",
      url: "https://www.bible.com/bible/1/isa.1.17",
    },
    {
      id: 42,
      name: "Item 42",
      quote:
        "There shall be an handful of corn in the earth upon the top of the mountains; The fruit thereof shall shake like Lebanon: And they of the city shall flourish like grass of the earth.",
      author: "Psalm 72:16",
      category: "quote",
      url: "https://www.bible.com/bible/1/psa.72.16",
    },
    {
      id: 43,
      name: "Item 43",
      quote:
        "As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.",
      author: "1 Peter 4:10",
      category: "quote",
      url: "https://www.bible.com/bible/1/1pe.4.10",
    },
    {
      id: 44,
      name: "Item 44",
      quote: "Even so faith, if it hath not works, is dead, being alone.",
      author: "James 2:17",
      category: "quote",
      url: "https://www.bible.com/bible/1/jas.2.17",
    },
    {
      id: 45,
      name: "Item 45",
      quote:
        "“We make a living by what we get, but we make a life by what we give”",
      author: "Winston Churchill",
      category: "quote",
      url: "https://hungryfaces.files.wordpress.com/2020/05/we-make-a-living-by-what-we-get.-we-make-a-life-by-what-we-give.-e1590431584229.png",
    },
    {
      id: 46,
      name: "Item 46",
      quote:
        "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?",
      author: "Romans 8:35",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.8.35",
    },
    {
      id: 47,
      name: "Item 47",
      quote:
        "And let us not be weary in well doing: for in due season we shall reap, if we faint not. As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith.",
      author: "Galatians 6:9-10",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Galatians+6%3A9-10&version=KJV",
    },
    {
      id: 48,
      name: "Item 48",
      quote:
        "He that saith he is in the light, and hateth his brother, is in darkness even until now.",
      author: "1 John 2:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/1jn.2.9",
    },
    {
      id: 49,
      name: "Item 49",
      quote:
        "If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?",
      author: "1 John 4:20",
      category: "quote",
      url: "https://www.bible.com/bible/1/1jn.4.20",
    },
    {
      id: 50,
      name: "Item 50",
      quote: "Compassion: A Reflection on the Christian Life ",
      author: "By: Henri J.M. Nouwen",
      category: "quote",
      url: "https://justfaith.org/wp-content/uploads/2015/03/IMG_0536.jpg",
    },
    {
      id: 51,
      name: "Item 51",
      quote:
        "When Helping Hurts: How to Alleviate Poverty Without Hurting the Poor... and Yourself ",
      author: "By: Steve Corbett and Brian Fikkert",
      category: "quote",
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328823049i/6595233.jpg",
    },
    {
      id: 52,
      name: "Item 52",
      quote:
        "The Power of Half: One Family's Decision to Stop Taking and Start Giving Back",
      author: "By: Kevin Salwen and Hannah Salwen",
      category: "quote",
      url: "https://pictures.abebooks.com/inventory/30376598361.jpg",
    },
    {
      id: 53,
      name: "Item 53",
      quote: "Understanding Financial Prosperity ",
      author: "By: Bishop David O. Oyedepo",
      category: "quote",
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577798497i/5697353.jpg",
    },
    {
      id: 54,
      name: "Item 54",
      quote: "Breaking Financial Hardship",
      author: "By: Bishop David O. Oyedepo",
      category: "quote",
      url: "https://m.media-amazon.com/images/I/71n7Se+jYkL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 55,
      name: "Item 55",
      quote: "The Hidden Covenants of Blessings",
      author: "By: Bishop David O. Oyedepo",
      category: "quote",
      url: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/2486852/1.jpg?0284",
    },
    {
      id: 56,
      name: "Item 56",
      quote:
        "“The central task of citizenship is learning how to be 	good to one another and live peaceably with one another under the control of the rule of law”",
      author: "A.J. Patrick Liszkiewicz",
      category: "quote",
      url: "https://www.google.com/search?q=A.J.+Patrick+Liszkiewicz&source=lmns&bih=610&biw=1280&hl=en-US&sa=X&ved=2ahUKEwiysLe2zNqCAxWqtCcCHeguDTsQ_AUoAHoECAEQAA",
    },
    {
      id: 57,
      name: "Item 57",
      quote:
        "“Citizenship is a collection of rights and obligations which gives an individual a formal legal identity”",
      author: "Turner, 2004",
      category: "quote",
      url: "https://www.google.com/search?q=Citizenship+is+a+collection+of+rights+and+obligations+which+gives+an+individual+a+formal+legal+identity+Turner,+2004&source=lmns&bih=610&biw=1280&hl=en-US&sa=X&ved=2ahUKEwiUodTHzNqCAxWNlycCHVRBCeMQ_AUoAHoECAEQAA",
    },
    {
      id: 58,
      name: "Item 58",
      quote:
        "“Intelligence is not enough. Intelligence plus character, that is the goal of true education”",
      author: "Martin Luther King Jr",
      category: "quote",
      url: "https://www.azquotes.com/quote/370661",
    },
    {
      id: 59,
      name: "Item 59",
      quote:
        "Everyone must submit to governing authorities. For all authority comes from God, and those in positions of authority have been placed there by God.",
      author: "Romans 13:1",
      category: "quote",
      url: "https://www.bible.com/bible/1/ROM.13.1.KJV",
    },
    {
      id: 60,
      name: "Item 60",
      quote:
        "So you must submit to them, not only to avoid punishment, but also to keep a clear conscience. ",
      author: "Romans 13:5",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.13.5",
    },
    {
      id: 61,
      name: "Item 61",
      quote:
        "Pay your taxes, too, for these same reasons. For government workers need to be paid. They are serving God in what they do",
      author: "Romans 13:6",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.13.6",
    },
    {
      id: 62,
      name: "Item 62",
      quote:
        "“Owe nothing to anyone—except for your obligation to love one another. If you love your neighbor, you will fulfill the requirements of God’s law”",
      author: "Romans 13:8",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.13.8",
    },
    {
      id: 63,
      name: "Item 63",
      quote:
        "“Love does no wrong to others, so love fulfills the requirements of God’s law”",
      author: "Romans 13:10",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.13.10",
    },
    {
      id: 64,
      name: "Item 64",
      quote:
        "Because we belong to the day, we must live decent lives for all to see. Don’t participate in the darkness of wild parties and drunkenness, or in sexual promiscuity and immoral living, or in quarreling and jealousy.",
      author: "Romans 13:13",
      category: "quote",
      url: "https://www.bible.com/bible/1/rom.13.13",
    },
    {
      id: 65,
      name: "Item 65",
      quote:
        "Always be humble and gentle. Be patient with each other, making allowance for each other’s faults because of your love. Make every effort to keep yourselves united in the Spirit, binding yourselves together with peace",
      author: "Ephesians 4:2-3",
      category: "quote",
      url: "https://www.bible.com/bible/111/EPH.4.2-3.NIV",
    },
    {
      id: 66,
      name: "Item 66",
      quote:
        "“No one lights a lamp and then puts it under a basket. Instead, a lamp is placed on a stand, where it gives light to everyone in the house. E.g. Volunteer for community service, help the needy & the poor. In the same way, let your good deeds shine out for all to see, so that everyone will praise your heavenly Father”",
      author: "Matthew 5:15-16",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Matthew%205%3A15-16&version=NIV",
    },
    {
      id: 67,
      name: "Item 67",
      quote: "Pray for peace in Jerusalem. May all who love this city prosper.",
      author: "Psalm 122:6",
      category: "quote",
      url: "https://www.bible.com/bible/1/PSA.122.6.KJV",
    },
    {
      id: 68,
      name: "Item 68",
      quote:
        "For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.",
      author: "Romans 12:4–5",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Romans+12%3A4%E2%80%935&version=NIV",
    },
    {
      id: 69,
      name: "Item 69",
      quote: "Click the link",
      author: "Ecclesiastes 4:9-12 NIV",
      category: "quote",
      url: "https://www.biblegateway.com/passage/?search=Ecclesiastes+4%3A9-12+&version=NIV",
    },
    {
      id: 70,
      name: "Item 70",
      quote: "Can two walk together except they agree?’",
      author: "Amos 3:3",
      category: "quote",
      url: "https://www.bible.com/bible/1/amo.3.3",
    },
    {
      id: 71,
      name: "Item 71",
      quote:
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      author: "Maya Angelou",
      category: "quote",
      url: "https://www.goodreads.com/quotes/5934-i-ve-learned-that-people-will-forget-what-you-said-people",
    },
    {
      id: 72,
      name: "Item 72",
      quote:
        "Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.",
      author: "Matthew 5:24",
      category: "quote",
      url: "https://www.bible.com/bible/1/mat.5.24",
    },
    {
      id: 73,
      name: "Item 73",
      quote:
        "Blessed are the peacemakers: for they shall be called the children of God.",
      author: "Matthew 5:9",
      category: "quote",
      url: "https://www.bible.com/bible/1/mat.5.9",
    },
    {
      id: 74,
      name: "Item 74",
      quote: "“Life is not a funfair; it is a warfare”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://www.goodreads.com/quotes/447963-life-is-not-a-funfair-life-is-a-warfare",
    },
    {
      id: 75,
      name: "Item 75",
      quote:
        "For thus saith the LORD that created the heavens; God himself that formed the earth and made it; he hath established it, he created it not in vain, he formed it to be inhabited: I am the LORD; and there is none else.",
      author: "Isaiah 45:18 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/ISA.45.18.KJV",
    },
    {
      id: 76,
      name: "Item 76",
      quote:
        "“There is no mountain anywhere; everybody's mountain is his ignorance”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://www.azquotes.com/quote/1383945",
    },
    {
      id: 77,
      name: "Item 77",
      quote:
        "But as truly as I live, all the earth shall be filled with the glory of the LORD.",
      author: "Numbers 14:21 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/num.14.21",
    },
    {
      id: 78,
      name: "Item 78",
      quote:
        "For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.",
      author: "Habakkuk 2:14 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/hab.2.14",
    },
    {
      id: 79,
      name: "Item 79",
      quote:
        "“Knowing what God has promised is information, but knowing what to do to actualize it is revelation.”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://thegospel.ng/quote-of-the-day-10th-march-2021/",
    },
    {
      id: 80,
      name: "Item 80",
      quote: "And he said, I beseech thee, shew me thy glory.",
      author: "Exodus 33:18 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/exo.33.18",
    },
    {
      id: 81,
      name: "Item 81",
      quote: "“Nothing finishes until you finish it with your mouth”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bis&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgcIBBAAGI8CMgcIBRAAGI8CMgcIBhAAGI8CMgYIBxBFGDzSAQgyNTY2ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 82,
      name: "Item 82",
      quote:
        "And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.",
      author: "Exodus 34:6 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/exo.34.6",
    },
    {
      id: 83,
      name: "Item 83",
      quote: "“You are either spiritual or carnal; you cannot be neutral.”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://quotefancy.com/quote/2921920/David-O-Oyedepo-You-are-either-spiritual-or-carnal-you-cannot-be-neutral",
    },
    {
      id: 84,
      name: "Item 84",
      quote: "Understanding Divine Direction",
      author: "By: Bishop David Oyedepo",
      category: "quote",
      url: "https://winnerschapelcalgarydbs.org/understanding-divine-direction/",
    },
    {
      id: 85,
      name: "Item 85",
      quote: "In Pursuit of Vision",
      author: "By: Bishop David Oyedepo",
      category: "quote",
      url: "https://winnerschapelcalgarydbs.org/in-pursuit-of-vision/",
    },
    {
      id: 86,
      name: "Item 86",
      quote: "Understanding Vision",
      author: "By: Bishop David Oyedepo",
      category: "quote",
      url: "https://winnerschapelcalgarydbs.org/understanding-vision/",
    },
    {
      id: 87,
      name: "Item 87",
      quote: "Message on Understanding God’s Plan For Me From His Book",
      author: "By: Bishop David Oyedepo",
      category: "quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bi&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgzMDc1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 88,
      name: "Item 88",
      quote: "“Until you begin to work, nothing works.”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bi&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgxODc0ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 89,
      name: "Item 89",
      quote:
        "Wherefore, my beloved, as ye have always obeyed, not as in my presence only, but now much more in my absence, work out your own salvation with fear and trembling.",
      author: "Philippians 2:12 (KJV)",
      category: "quote",
      url: "https://www.bible.com/bible/1/php.2.12",
    },
    {
      id: 90,
      name: "Item 90",
      quote: "“A glorious result demands a serious approach”",
      author: "Bishop David Oyedepo",
      category: "quote",
      url: "https://www.google.com/search?q=bishop+david+oyedepo&oq=bi&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgxODc0ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 91,
      name: "Item 91",
      quote: "Thank You!",
      author: "Rerel'Oluwa Tooki",
      category: "quote",
      url: "https://linkedin.com/in/rerel-oluwa-tooki-b53396253/",
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Define the state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Define the state to keep track of the visibility of the input box
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the search results box
  const [isVisible2, setIsVisible2] = useState<boolean>(false);

  // Define the state to keep track of the visibility of the options box
  const [optionsIsVisible, setOptionsIsVisible] = useState<boolean>(false);

  // Define the state to update the text f the options box
  const [optionsBoxText, setOptionsBoxText] = useState<string>("Option");

  // Define the state to keep track of the visibility of the list options box
  const [optionsListIsVisible, setOptionsListIsVisible] =
    useState<boolean>(false);

  // Define the state for the search input and search results
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  // Use useEffect to focus on the input field when it becomes visible
  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  // // Function to handle the next button click and iterate through the array
  // const handleNextButtonClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  // };

  // Function to handle the next button click and iterate through the array
  const handleNextButtonClick = () => {
    console.log("sr length is:");
    console.log(searchResults.length);
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch + 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      console.log("sr equalts to 0");
    }
  };

  // // Function to handle the previous button click and iterate through the array
  // const handlePrevButtonClick = () => {
  //   if (currentIndex !== 0) {
  //     setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
  //   } else {
  //     setCurrentIndex((prevIndex) => (prevIndex = 90));
  //   }
  // };

  // Function to handle the previous button click and iterate through the array
  const handlePrevButtonClick = () => {
    if (searchResults.length > 0) {
      console.log("sr >0");
      // Find the index of the current item in searchResults
      const currentIndexInSearch = searchResults.findIndex(
        (item) => item.id === items[currentIndex].id
      );

      // Calculate the next index in searchResults
      const nextIndexInSearch =
        (currentIndexInSearch - 1) % searchResults.length;

      // Find the corresponding item in items array
      const nextItemInSearchResults = searchResults[nextIndexInSearch];

      // Find the index of nextItemInSearchResults in the items array
      const nextIndexInItems = items.findIndex(
        (item) => item.id === nextItemInSearchResults.id
      );

      // Set the currentIndex to the next index in items array
      setCurrentIndex(nextIndexInItems);
    } else {
      // If searchResults is empty, simply increment the index
      if (currentIndex !== 0) {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex = 90));
      }
    }
  };

  // Function to handle the search button click
  const handleSearchButtonClick = () => {
    isVisible == false
      ? setIsVisible(true)
      : searchText
      ? setIsVisible(true)
      : setIsVisible(false);

    searchText && setIsVisible2(true);

    optionsIsVisible && setOptionsIsVisible(false);
    // Filter the items based on the search text or show all if no text
    const results = searchText
      ? items.filter(
          (item) =>
            item.quote.toLowerCase().includes(searchText.toLowerCase()) ||
            item.author.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
    console.log("results length:");
    console.log(results.length);
    console.log("search results length1: ");
    console.log(searchResults.length);

    setSearchResults(results);
    console.log("search results length2: ");
    console.log(searchResults.length);

    setOptionsBoxText("Option");
    !searchText && setIsVisible2(false);

    // !searchText && setOptionsBoxText("ALL");
  };

  // Function to handle the list button click. it also acts as a clear search button
  const handleListButtonClick = (id: number) => {
    setCurrentIndex(id - 1);
    setIsVisible2(false);

    setSearchgText("");
    setIsVisdible(false);
    setIsVisible2(false);
    setSearchgResults([]);
  };

  const handleFilterButtonClick = () => {
    console.log("filter button");
    isVisible && setIsVisible(false);
    !optionsIsVisible ? setOptionsIsVisible(true) : setOptionsIsVisible(false);
    optionsListIsVisible && setOptionsListIsVisible(false);
  };

  // Function to handle the options button click. Displays the list of options
  const handleOptionsButtonClick = () => {
    console.log("options button");
    !optionsListIsVisible
      ? setOptionsListIsVisible(true)
      : setOptionsListIsVisible(false);
  };

  // Function to handle the options button click. Displays everything.
  const handleAllButtonClick = () => {
    console.log("ALL button");
    setOptionsListIsVisible(false);
    const allResults = items;
    setSearchResults(allResults);
    setOptionsBoxText("ALL");
    console.log(allResults);
    setIsVisible2(true);
  };

  // Function to handle the options button click. Displays all the books.
  const handleBooksButtonClick = () => {
    console.log("Books button");
    setOptionsListIsVisible(false);
    const bookResults = items.filter((item) => item.author.includes("By: "));
    setSearchResults(bookResults);
    setOptionsBoxText("Book");
    setIsVisible2(true);
  };

  // Function to handle the options button click. Displays all the quotes.
  const handleQuotesButtonClick = () => {
    console.log("Quotes button");
    setOptionsListIsVisible(false);
    const quoteResults = items.filter((item) => item.quote.includes("“"));
    setSearchResults(quoteResults);
    setOptionsBoxText("Quote");
    setIsVisible2(true);
  };

  // Function to handle the options button click. Displays all the scriptures.
  const handleScripturesButtonClick = () => {
    console.log("Scriptures button");
    setOptionsListIsVisible(false);
    setOptionsBoxText("Scripture");
    const scriptureResults = items.filter((item) => item.quote.includes(":"));
    setSearchResults(scriptureResults);
    setIsVisible2(true);
    //     const scriptureResults = items.filter((item) => item.category === "Bible");
    // setSearchResults(scriptureResults);
  };

  // Function to handle Enter key press in the input field
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      handleSearchButtonClick();
    }
  };

  return (
    <>
      {/* <div>
        <h1>Current Item: {items[currentIndex].quote}</h1>
        <button onClick={handleButtonClick}>Next Item</button>
      </div> */}

      <div className="bg-dark-blues flex flex-col items-center justify-center min-h-screen">
        <div className="whitespace-nowrap text-[4.5vw] md:text-[3.15vw] lg:text-[2.25vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none mb-[2.5vw] flex flex-row w-[85vw] md:w-[75vw] lg:w-[80vw]">
          <div className="flex flex-row ml-[36%] md:ml-[39%] lg:ml-[43%] w-[100%] justify-between ">
            <div className="underline underline-offset-4  ">TMC 311</div>
            {/* Search input and button */}
            <div className="flex flex-row gap-[2vw] justify-between pl-[2vw]">
              {isVisible && (
                <div className="">
                  <input
                    id="signUp"
                    type="text"
                    ref={inputRef}
                    placeholder="Search..."
                    value={searchText}
                    onKeyDown={handleInputKeyPress}
                    className="w-[100%] relative top-[3px] xl:h-[90%] text-black px-[1.2vw] nxl:px-[0.8vw] pb-[0.2vw] nxl:pb-[0.4vw] nxl:pt-[0.3vw] rounded-md"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              )}
              {optionsIsVisible && (
                <div className="relative text-left">
                  <div className="w-[100%]">
                    <div className="">
                      <button
                        onClick={handleOptionsButtonClick}
                        className="flex flex-row w-full items-center gap-x-1.5 rounded-md bg-white gap-[2vw] px-[1.2vw] py-[1.5vw] md:py-[0.8vw] lg:py-[0.4vw] xl:py-[0.8vw] nxl:px-3 nxl:py-2 nxl:text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 w-[100%] text-[2.8vw] md:text-[12px] lg:text-[14px] relative top-[0.4vw]"
                      >
                        <div className="borsder-2">
                          {optionsBoxText === "ALL"
                            ? optionsBoxText
                            : optionsBoxText + "s"}
                        </div>
                        <FaChevronDown
                          className="-msr-1  text-gray-400 bosrder-2"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>{" "}
                  {optionsListIsVisible && (
                    <div className="absolute right-0 z-10 mt-2.5 md:mt-[2.1vw] lg:mt-[1.8vw] min-w-[25vw] lg:min-w-[20vw] xl:min-w-[15vw] rounded-lg bg-white leading-snug nxl:leading-tight text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[24px] xl:text-[26px] text-dark-grayish-blues z-30 shadow-2xl border-2 ">
                      <div className="border-t2 hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleAllButtonClick}
                          className=" w-full"
                        >
                          All
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleBooksButtonClick}
                          className="w-full"
                        >
                          Books
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md border-light-cyans">
                        <button
                          onClick={handleQuotesButtonClick}
                          className=" w-full "
                        >
                          Quotes
                        </button>
                      </div>
                      <div className="border-t-2 hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md border-light-cyans text-[4.8vw] md:text-[17px] lg:text-[19px] nxl:text-[24px] xl:text-[26px]">
                        <button
                          onClick={handleScripturesButtonClick}
                          className="w-full "
                        >
                          Scriptures
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="">
                <button className="h-[100%]" onClick={handleSearchButtonClick}>
                  <IoMdSearch
                    color="aquamarine"
                    title="Search for any Book, Quote or Scripture"
                  />
                </button>
              </div>
              <div className="">
                <button className="h-[100%]" onClick={handleFilterButtonClick}>
                  <RiFilter2Line
                    color="aquamarine"
                    title="Sort by Books, Quotes or Scriptures"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[5vw] bg-dark-grayish-blues w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[19px] nxl:pt-[35px] text-[5.5vw] md:text-[17px] lg:text-[21px] nxl:text-[28px] xl:text-[37px] leading-snug lg:leading-normal nxl:leading-snug">
          <div className="font-manrope mb-[6vw] md:mb-[18px] nxl:mb-[30px] xl:mb-[35px]  text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none">
            <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.5vw] lg:w-[26.7vw] border-light-cyans"></div>
              <div>
                {optionsBoxText === "ALL" || optionsBoxText === "Option"
                  ? "ADVICE"
                  : optionsBoxText.toUpperCase()}
              </div>
              <div className="text-neon-greens underline underline-offset-4 tracking-wider decoration-light-cyans/70">
                #{items[currentIndex].id}
              </div>
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[21.5vw] md:w-[20.3vw] lg:w-[26.7vw] border-neon-greens"></div>
            </div>
          </div>
          {/* Display quotes/all results */}
          {(searchResults.length == 0 || isVisible2 == false) && (
            <div className="scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw] text-light-cyans text-center selection:bg-light-cyans selection:text-dark-grayish-blues overflow-y-auto max-h-[28.8vh] ">
              <div>{items[currentIndex].quote}</div>
            </div>
          )}
          {/* Display search results */}
          {isVisible2 == true && (
            <div className="border-2 absoluste overflow-x-hidden overflow-y-scroll w-full scroll rounded-md bg-white text-dark-grayish-blues z-20 scroll pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.04vw]  text-center selection:text-light-cyans selection:bg-dark-grayish-blues max-h-[28.8vh] text-[5.5vw] md:text-[17px] lg:texts-[21px] nxl:text-[22px] xl:text-[25px]">
              <h2>Search Results:</h2>
              <ul className="list-decimal list-inside flex flex-col ">
                {searchResults.map((result) => (
                  <button
                    onClick={() => handleListButtonClick(result.id)}
                    className="border-t-2 border-light-cyans w-[100%] text-start hover:text-light-cyans hover:bg-dark-grayish-blues hover:rounded-md"
                  >
                    <li
                      className="whitespace-nowrap text-ellipsis overflow-hidden "
                      key={result.id}
                    >
                      {optionsBoxText === "ALL" || optionsBoxText === "Option"
                        ? result.quote
                        : result.author + " - " + result.quote}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          )}

          <div className="flex self-end mr-[1.5vw] md:mr-[4.8vw] lg:mr-[3.3vw] hover:scale-[1.1] hover:mr-[4.8vw] hover:md:scale-[1.2] hover:md:mr-[5.8vw] hover:md:mr-[8.1vw] hover:lg:mr-[5.8vw] select-none">
            <div className="border-t-[0.2vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] w-[10vw] md:w-[7vw] lg:w-[5vw] border-neon-greens mr-[1.5vw] md:mr-[1vw]"></div>
            <div className="text-light-cyans text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] underline underline-offset-4 tracking-wider decoration-neon-greens/70">
              <a
                href={items[currentIndex].url}
                target="_blank"
                className=""
                title={items[currentIndex].author}
              >
                {items[currentIndex].author}
              </a>
            </div>
          </div>

          <div className="relative top-[5vw] md:top-[3.9vw] lg:top-[2.5vw] select-none flex flex-row gap-[3.5vw] lg:gap-[2vw]">
            <div className="" title="Previous">
              <button
                className="bg-neon-greens w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={handlePrevButtonClick}
              >
                <MdSkipPrevious />
              </button>
            </div>
            <div className="" title="Next">
              <button
                className="bg-neon-greens w-[12vw] md:w-[7.8vw] lg:w-[5vw] h-[12vw] md:h-[7.8vw] lg:h-[5vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={handleNextButtonClick}
              >
                <MdSkipNext />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 ml-[2vw] pb-[1.2vw] text-light-cyans underline-offset-4 md:pb-[1.2vw] text-[2vw] nsm:text-[1.2vw] xl:text-[1vw] select-none">
          © 2023{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
            className="underline text-neon-greens tracking-wide"
            title="About Rerel'Oluwa Tooki"
          >
            Rerel'Oluwa Tooki
          </a>
        </div>
      </div>
    </>
  );
};

export default TMCCard;
