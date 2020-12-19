import React, { useState } from "react";
import "./styles.css";

const booksDB = {
  Programming: [
    {
      name: "The C Programming Language",
      by: "Dennis Ritchie",
      rating: "5/5",
      comments:
        "When the creater himself gets down to teach, what would take many lines of code gets written in a very few lines without using any libraries.That is what is called pure BEAUTY or code poetry. A must read, re-read, and keep forever."
    },
    {
      name: "Cracking the Coding Interview",
      by: "Gayle Laakmann McDowell",
      rating: "4/5",
      comments:
        "If you are on this webpage, you already have this book! 'Indispensable' in a word!"
    },
    {
      name: "The Art of Computer Programming Series",
      by: "Donald Ervin Knuth",
      rating: "6/5",
      comments:
        "'If you can finish this book, send me your resume.' - Bill Gates. I don't think I have to anything more."
    },
    {
      name: "Clean Code: A Handbook of Agile Software Craftsmanship",
      by: "Robert C. Martin",
      rating: "4/5",
      comments:
        "This is the book that makes your code as beautiful as the output, or maybe more!"
    },
    {
      name:
        "Effective C++ : 55 Specific Ways to Improve Your Programs and Designs",
      by: "Scott Meyers",
      rating: "4/5",
      comments:
        "Talent without wisdom is like using supernatural powers to toast your bread. This book gives you the wisdom you need as a programming wizard!"
    },
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      by: "Marijn Haverbeke",
      rating: "4/5",
      comments:
        "Its difficult to find a good JS book. But when you do find one, you can't help but share about it. You need this book if you are serious about JS."
    },
    {
      name: "Coders at Work: Reflections on the Craft of Programming",
      by: "Peter Seibel",
      rating: "3/5",
      comments:
        "You may buy this book if you want to know how the best programmers living today think. Full of wisdom and advices, as the author interviews most of the best coders all around the world."
    },
    {
      name: " You Don't Know JS : All Volumes",
      by: "Kyle Simpson",
      rating: "5/5",
      comments:
        "Its difficult to find a good JS book. But when you do find one, you can't help but share about it. You need this book if you have cmpleted Eloquent Javascript and are serious about JS."
    }
  ],

  SelfHelp: [
    {
      name: "Karma: A Yogi's Guide to Crafting Your Own Destiny",
      by: "Sadhguru Jaggi Vasudev",
      rating: "5/5",
      comments: "Gets you right back on the driver's seat of your life!"
    },
    {
      name: "Complete Works of Swami Vivekananda",
      by: "Swami Vivekananda",
      rating: "6/5",
      comments: "This doesn't any introduction. Ignore this at your own peril!"
    },
    {
      name:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      by: "James Clear",
      rating: "5/5",
      comments: "If you don't need this book, you are God Gifted!"
    },
    {
      name: "The Power of NOW",
      by: "Eckhart Tolle",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend. It will be there for you forever. So think twice before ignoring!"
    },
    {
      name: "A New Earth: Awakening to Your Life’s Purpose",
      by: "Eckhart Tolle",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend. It will be there for you forever. So think twice before ignoring!"
    },
    {
      name:
        "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
      by: "Steven Pressfield",
      rating: "4/5",
      comments:
        "If you are struggling with Procrastination, this book can help isolate the reason behind it."
    },
    {
      name: "Flow: The Psychology of Optimal Experience",
      by: "Mihaly Csikszentmihalyi",
      rating: "5/5",
      comments:
        "If you want to keep yourself ignorant about the real way of getting Happy forever, ignore this book!"
    },
    {
      name: "Rich Dad Poor Dad",
      by: "Robert T. Kiyosaki",
      rating: "4/5",
      comments:
        "Probability is, you already have this book. If you don't, you must have misplaced it."
    },
    {
      name: "12 Rules for Life: An Antidote to Chaos",
      by: "Jordan B. Peterson",
      rating: "4/5",
      comments: "A good book to gain clarity in chaotic life situatuation."
    },
    {
      name: "The Untethered Soul: The Journey Beyond Yourself",
      by: "Michael A. Singer",
      rating: "4/5",
      comments:
        "Beaware, you wont be able to keep this book down the moment you start reading it. It will suck you in. Ignore at you own risk!"
    },
    {
      name: "The Shallows: What the Internet Is Doing to Our Brains",
      by: "Nicholas Carr",
      rating: "4/5",
      comments: "You know you need this book, Don't you?"
    },
    {
      name: "Autobiography of a Yogi",
      by: "Paramahansa Yogananda",
      rating: "5/5",
      comments:
        "If you don't need this book, you don't have interest in knowing the secrets of life!"
    },
    {
      name: "Yoga Sutras of Patanjali",
      by: "originally by Maharishi Patanjali, restored by Swami Vivekananda",
      rating: "6/5",
      comments:
        "THE GRATEST DOCUMENT HUMANITY HAS EVER PRODUCED AND CAN EVER PRODUCE!"
    },
    {
      name: "Awareness: The Key to Living in Balance",
      by: "Osho",
      rating: "5/5",
      comments:
        "I am sure you will reach out to me on any of my social handles just to say thank you if you read this book. Also, your book-shelf will then start becoming mostly Osho books!"
    },
    {
      name: "Wings of Fire and All Books by Dr. A.P.J. Abdul Kalam",
      by: "Arun Tiwari and Dr. A.P.J. Abdul Kalam",
      rating: "5/5",
      comments:
        "If you are looking for inspiration, look nowhere else! If you have not read books by APJ Abdul Kalam, I feel sorry for you!"
    },
    {
      name: "The First and Last Freedom",
      by: "Jiddu Krishnamurti",
      rating: "5/5",
      comments:
        "This is not a book. Its a living friend who will be there for you forever and has the potential to clear you off of all the bullshit. So think twice before ignoring!"
    }
  ],
  Fiction: [
    {
      name: "Sherlock Holmes Complete Collection",
      by: "Sir Arthur Conan Doyle",
      rating: "5/5",
      comments:
        "Don't buy the All-in-One fat but small book, you won't be able to read. Buy the 2 voulme big sized hardcover one."
    },
    {
      name: "The Alchemist",
      by: "Paulo Coelho",
      rating: "5/5",
      comments:
        "You probably already have this book, if you don't, go get it! You won't regret."
    },
    {
      name: "The Monk Who Sold His Ferrari",
      by: "Robin Sharma",
      rating: "5/5",
      comments: "A great read!"
    },
    {
      name: "Jonathan Livingston Seagull",
      by: "Richard Bach",
      rating: "5/5",
      comments: "A masterpiece!"
    },
    {
      name: "Major Novels by Fyodor Dostoevsky",
      by: "Fyodor Dostoevsky",
      rating: "4/5",
      comments: "You need this, unless you like being influenced by non-sense!"
    },
    {
      name: "Collected Works of Khalil Gibran",
      by: "Khalil Gibran",
      rating: "4/5",
      comments: "Beautiful read!"
    },
    {
      name: "The Mahabharata",
      by: "Maharishi Vyasa",
      rating: "6/5",
      comments: "THE EVER RELEVANT, GREATEST STORY EVER TOLD!"
    },
    {
      name: "A Christmas Carol",
      by: "Charles Dickens",
      rating: "4/5",
      comments: "To melt that stone of heart you've got!"
    },
    {
      name: "2001: A Space Odyssey",
      by: "Arthur C. Clarke",
      rating: "4/5",
      comments: "If you have seen the movie, you will buy it for sure!"
    }
  ]
};

const myBooksDB = Object.keys(booksDB);

export default function App() {
  const [currentGenre, setCurrentGenre] = useState("Fiction");

  function genreClickHandler(genreKeySelected) {
    setCurrentGenre(genreKeySelected);
  }
  return (
    <div className="App">
      <h1
        style={{
          border: "0.3rem yellow ridge",
          fontFamily: "Langar",
          color: "red"
        }}
      >
        📚Books Recommendation from Jacky!📚
      </h1>
      <p>
        These are the books I loved and I am sure you would love them too. Its a
        highly curated list, so please check them out even if you are not
        plannig to buy them right away!
      </p>
      <hr />
      <h2
        style={{
          fontFamily: "Langar",
          color: "red",
          fontWeight: "lighter"
        }}
      >
        Select a genre to get started!
      </h2>

      <div>
        {myBooksDB.map((genreKey) => {
          return (
            <button onClick={() => genreClickHandler(genreKey)}>
              {genreKey}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "center", margin: "1rem 5rem" }}>
        <ul>
          {booksDB[currentGenre].map((book) => {
            return (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "0.5rem ridge purple",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    margin: "0.5rem",
                    fontFamily: "Langar",
                    fontWeight: "bold",
                    color: "yellow"
                  }}
                >
                  {book.name}
                </div>
                <div
                  style={{
                    fontSize: "large",
                    margin: "0.5rem",
                    fontStyle: "italic",
                    color: "green"
                  }}
                >
                  {book.by}
                </div>
                <div
                  style={{
                    fontSize: "smaller",
                    margin: "0.5rem",
                    color: "red"
                  }}
                >
                  {book.rating}
                </div>
                <div style={{ fontSize: "normal", margin: "0.5rem" }}>
                  {book.comments}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <hr />
    </div>
  );
}
