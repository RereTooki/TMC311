import React from "react";
import "../App.css";
import dice from "../assets/images/icon-dice.svg";
import iconarrow from "../assets/images/icon-arrow-light.svg";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { getDatabase, onValue, ref, set } from "firebase/database";

type Item = {
  id: number;
  name: string;
  quote: string;
  url: string;
};

const TMCCard = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([] as any);

  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1", quote: "do not play", url: "url lol" },
    { id: 2, name: "Item 2", quote: "2do not play", url: "2url lol" },
    { id: 3, name: "Item 3", quote: "3do not play", url: "3url lol" },
  ]);

  // Define the state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to handle the button click and iterate through the array
  const handleButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // const [tags, setTags] = useState(["happy", "cheerful"]);
  // const [bugs, setBugs] = useState([] as any);

  // const handleTodoChange = (e: any) => {
  //   setTodo(e.target.value);
  // };

  //read
  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     const data = snapshot.val();
  //     // setTags([...data, "exciting"]);
  //     console.log("rere");
  //     console.log(tags);
  //     console.log("The data is");
  //     console.log(data);
  //     console.log("The object.value property is");
  //     console.log(Object.values(data));
  //     const obj = Object.values(data);
  //     for (const [country, capital] of Object.entries(obj)) {
  //       console.log(country, capital);
  //     }
  //     console.log("jomi");
  //     if (data !== null) {
  //       console.log(Object.values(data));
  //       console.log(data);
  //       Object.values(data).map((todo) => {
  //         setTodos((oldArray: any) => [...oldArray, todo]);
  //       });
  //     }
  //   });
  // }, []);

  // //write
  // const writeToDB = () => {
  //   const uuid = uid();
  //   set(ref(db, `/${uuid}`), {
  //     todo,
  //     uuid,
  //   });
  // };
  return (
    <>
      <div>
        <h1>Current Item: {items[currentIndex].quote}</h1>
        <button onClick={handleButtonClick}>Next Item</button>
      </div>
      {/* <div>
        <input
          className="bg-dark-blues text-white"
          type="text"
          value={todo}
          onChange={handleTodoChange}
        />
        <button onClick={writeToDB}>Submit</button>
        {todos.map(
          (todo: {
            todo:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <>
              <h1>{tags}</h1>
            </>
          )
        )}
      </div> */}
      {/* <div className="bg-dark-blues flex flex-col items-center justify-center min-h-screen lg:min-h-d0">
        <div className="whitespace-nowrap text-[4.5vw] md:text-[3.15vw] lg:text-[2.25vw] text-light-cyans tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none underline underline-offset-4 mb-[2.5vw]">
          TMC 311
        </div>
        <div className="mb-[5vw] bg-dark-grayish-blues w-[85vw] md:w-[75vw] lg:w-[80vw] mx-[7.5vw] md:mx-[12.5vw] rounded-[1.8vw] flex flex-col items-center justify-center px-[4vw] md:px-[2.8vw] lg:px-[2vw] pt-[6vw] md:pt-[4.2vw] lg:pt-[3vw] text-[6.5vw] md:text-[4.5vw] lg:text-[3.25vw]">
          <div className="font-manrope mb-[6vw] md:mb-[4.2vw] lg:mb-[3vw] text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] text-neon-greens tracking-[1vw] md:tracking-[0.7vw] lg:tracking-[0.5vw] select-none">
            <div>ADVICE #</div>
          </div>
          <div className="badge pr-[1vw] md:pr-[0.5vw] mb-[5vw] md:mb-[3.5vw] lg:mb-[2.5vw] tracking-[-0.2vw] md:tracking-[-0.14vw] lg:tracking-[-0.1vw] text-light-cyans text-center selection:bg-light-cyans selection:text-dark-grayish-blues overflow-y-auto max-h-[18.8vh]">
            <div>
              "Knowing what God has promised is information, but knowing what to
              do to actualise it is revelation"
            </div>
          </div>
          <div className="flex self-end mr-[1.5vw] md:mr-[4.8vw] lg:mr-[3.3vw] mb-[4vw] md:mb-[2.8vw] lg:mb-[2vw] hover:scale-[1.2] hover:mr-[5.8vw] hover:md:mr-[8.1vw] hover:lg:mr-[5.8vw] select-none">
            <div className="border-t-[0.2vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] w-[10vw] md:w-[7vw] lg:w-[5vw] border-neon-greens mr-[1.5vw] md:mr-[1vw]"></div>
            <div className="text-light-cyans text-[3.5vw] md:text-[2.45vw] lg:text-[1.75vw] underline underline-offset-4 tracking-wider decoration-neon-greens/70">
              <a
                href="https://www.google.com/search?q=bishop+david+oyedepo&sca_esv=573962864&sxsrf=AM9HkKn77XeDA5Z9BXtWfenZdT3kV5lAPw%3A1697547900092&ei=fIYuZfqkBcqAhbIP5PKB0AI&ved=0ahUKEwj60svckv2BAxVKQEEAHWR5ACoQ4dUDCBA&uact=5&oq=bishop+david+oyedepo&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGJpc2hvcCBkYXZpZCBveWVkZXBvSABQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAOIDBBgAIEE&sclient=gws-wiz-serp"
                target="_blank"
                className=""
                title="About Bishop David Oyedepo"
              >
                Bishop David Oyedepo
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-[3vw] md:gap-[2.1vw] lg:gap-[1.5vw]">
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-light-cyans"></div>
            <div className="flex flex-row gap-[2vw] md:gap-[1.4vw]">
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-neon-greens"></div>
              <div className=" border-[2.8vw] md:border-[1.96vw] lg:border-[1.4vw] rounded-[0.78vw] md:rounded-[0.54vw] lg:rounded-[0.39vw] border-double border-light-cyans"></div>
            </div>
            <div className="border-t-[0.2vw] md:border-t-[0.14vw] lg:border-t-[0.1vw] relative top-[2.5vw] md:top-[1.75vw] lg:top-[1.25vw] w-[28vw] md:w-[23.6vw] lg:w-[30vw] border-neon-greens"></div>
          </div>
          <div className="relative top-[7vw] md:top-[4.9vw] lg:top-[3.5vw] select-none flex flex-row gap-[1.5vw]">
            <div className="" title="Reset">
              <button
                className="bg-neon-greens w-[14vw] md:w-[9.8vw] lg:w-[7vw] h-[14vw] md:h-[9.8vw] lg:h-[7vw] rounded-full flex flex-col items-center justify-center hover:shadow-[0_0_30px_5px_rgba(0,0,0,0.9)] hover:shadow-neon-greens cursor-pointer"
                onClick={() => {}}
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
      </div> */}
    </>
  );
};

export default TMCCard;
