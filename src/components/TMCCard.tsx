import React from "react";
import "../App.css";
import dice from "../assets/images/icon-dice.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";
import { useState, useEffect } from "react";

type Item = {
  id: number;
  name: string;
  quote: string;
  author: string;
  url: string;
};

const TMCCard = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Item 1",
      quote:
        "The aim of this course is to explore how a spiritual person- a child of God- can live in and make impact on the social and political context of the world",
      author: "Dr. Lanre Amodu",
      url: "https://ng.linkedin.com/in/lanre-olaolu-amodu-959b3a17",
    },
    {
      id: 2,
      name: "Item 2",
      quote:
        "So we are Christ’s ambassadors, God making His appeal as it were through us. We [as Christ’s personal representatives] beg you for His sake to lay hold of the divine favor [now offered you] and be reconciled to God",
      author: "2 Corinthians 5:20 (Amp)",
      url: "https://www.bible.com/bible/8/2CO.5.20.AMPC",
    },
    {
      id: 3,
      name: "Item 3",
      quote:
        "God’s will and desire—His pleasure—is that we love Him. We cannot please God unless we love Him. We cannot love Him unless we know Him, and we cannot know Him unless we have faith in Him",
      author: "Myles Munroe",
      url: "https://www.google.com/search?q=myles+munroe&oq=MYLES&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAYjwIyBwgEEAAYjwLSAQgxNTM0ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      id: 4,
      name: "Item 4",
      quote:
        "Your lives are like salt among the people. But if you, like salt, become bland, how can your ‘saltiness’ be restored? Flavorless salt is good for nothing and will be thrown out and trampled on by others.Your lives light up the world… And who would light a lamp and then hide it in an obscure place? … Let it shine brightly before others, so that your commendable works will shine as light upon them, and then they will give their praise to your Father in heaven",
      author: "Matthew 5:13-16",
      url: "https://www.bible.com/bible/1849/MAT.5.13-16.TPT",
    },
    {
      id: 5,
      name: "Item 5",
      quote:
        "This world and its desires are in the process of passing away, but those who love to do the will of God live forever",
      author: "1 John 2:15-17",
      url: "https://www.bible.com/bible/1849/1JN.2.17.TPT",
    },
    {
      id: 6,
      name: "Item 6",
      quote:
        "Whose end is destruction, whose God is their belly, and whose glory is in their shame, who mind earthly things",
      author: "Philippians 3:19",
      url: "https://www.bible.com/bible/1/PHP.3.19.KJV",
    },
    {
      id: 7,
      name: "Item 7",
      quote: "For none of us liveth to himself, and no man dieth to himself.",
      author: "Romans 14:7",
      url: "https://www.bible.com/bible/1/rom.14.7",
    },
    {
      id: 8,
      name: "Item 8",
      quote:
        "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets.",
      author: "Matthew 22:37-40",
      url: "https://www.bible.com/bible/1/MAT.22.37-40.KJV",
    },
    {
      id: 9,
      name: "Item 9",
      quote:
        "But as it is written, Eye hath not seen, nor ear heard, Neither have entered into the heart of man, The things which God hath prepared for them that love him",
      author: "1 Corinthians 2:9",
      url: "https://www.bible.com/bible/1/1CO.2.9.KJV",
    },
    {
      id: 10,
      name: "Item 10",
      quote:
        "But whoso hath this world's good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him? My little children, let us not love in word, neither in tongue; but in deed and in truth.",
      author: "1 John 3:17-18",
      url: "https://www.bible.com/bible/1/1JN.3.17-18.KJV",
    },
    {
      id: 10,
      name: "Item 10",
      quote:
        "But whoso hath this world's good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him? My little children, let us not love in word, neither in tongue; but in deed and in truth.",
      author: "1 John 3:17-18",
      url: "https://www.bible.com/bible/1/1JN.3.17-18.KJV",
    },
  ]);

  // Define the state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to handle the button click and iterate through the array
  const handleButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <>
      {/* <div>
        <h1>Current Item: {items[currentIndex].quote}</h1>
        <button onClick={handleButtonClick}>Next Item</button>
      </div> */}

      <div className="bg-dark-blues flex flex-col items-center justify-center min-h-screen lg:min-h-d0">
        <div className="whitespace-nowrap text-[4.5vw] md:text-[3.15vw] lg:text-[2.25vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none underline underline-offset-4 mb-[2.5vw]">
          TMC 311
        </div>
        <div className="mb-[5vw] bg-dark-grayish-blues w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[4.2vw] text-[6.5vw] md:text-[4.5vw] lg:text-[3.25vw]">
          <div className="font-manrope mb-[6vw] md:mb-[4.2vw] lg:mb-[3vw] text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none">
            <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[17.5vw] md:w-[20.5vw] lg:w-[26.7vw] border-light-cyans"></div>
              <div>ADVICE</div>
              <div className="text-neon-greens underline underline-offset-4 tracking-wider decoration-light-cyans/70">
                #{items[currentIndex].id}
              </div>

              <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[17.5vw] md:w-[20.3vw] lg:w-[26.7vw] border-neon-greens"></div>
            </div>
          </div>
          <div className="badge pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.14vw] lg:tracking-[-0.1vw] text-light-cyans text-center selection:bg-light-cyans selection:text-dark-grayish-blues overflow-y-auto max-h-[28.8vh]">
            <div>{items[currentIndex].quote}</div>
          </div>
          <div className="flex self-end mr-[1.5vw] md:mr-[4.8vw] lg:mr-[3.3vw] mbq-[4vw] mqd:mb-[2.8vw] lqg:mb-[2vw] hover:scale-[1.2] hover:mr-[5.8vw] hover:md:mr-[8.1vw] hover:lg:mr-[5.8vw] select-none">
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
          {/* <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-light-cyans"></div>
            <div className="flex flex-row gap-[2vw] md:gap-[1.4vw]">
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-neon-greens"></div>
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-light-cyans"></div>
            </div>
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-neon-greens"></div>
          </div> */}
          <div className="relative top-[7vw] md:top-[4.9vw] lg:top-[3.5vw] select-none flex flex-row gap-[1.5vw]">
            <div className="" title="Reset">
              <button
                className="bg-neon-greens w-[14vw] md:w-[9.8vw] lg:w-[7vw] h-[14vw] md:h-[9.8vw] lg:h-[7vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={handleButtonClick}
              >
                <img
                  className="w-[7vw] md:w-[4.9vw] lg:w-[3.5vw]"
                  src={dice}
                  alt="A dice"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 ml-[2vw] pb-[1.2vw] text-light-cyans underline-offset-4 md:pb-[1.2vw] text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] nsm:text-[13px] lg:text-[15px] xl:text-[1vw]">
          © 2023{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
            className="underline text-neon-greens tracking-wide"
          >
            Rerel'Oluwa Tooki
          </a>
        </div>
      </div>
    </>
  );
};

export default TMCCard;
