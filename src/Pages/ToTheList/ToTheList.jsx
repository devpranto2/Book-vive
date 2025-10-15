import React from 'react';


const books = [
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "1984",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "The Hobbit",
  "Harry Potter and the Sorcerer’s Stone",
  "The Lord of the Rings",
  "The Alchemist",
  "Moby Dick",
  "War and Peace",
  "Anna Karenina",
  "The Odyssey",
  "The Divine Comedy",
  "Crime and Punishment",
  "Jane Eyre",
  "Wuthering Heights",
  "The Brothers Karamazov",
  "Les Misérables",
  "Brave New World",
  "The Chronicles of Narnia",
  "Don Quixote",
  "The Kite Runner",
  "Life of Pi",
  "The Book Thief",
  "The Little Prince",
  "Frankenstein",
  "Dracula",
  "Fahrenheit 451",
  "The Grapes of Wrath",
  "The Picture of Dorian Gray",
  "Gone with the Wind",
  "The Fault in Our Stars",
  "The Hunger Games",
  "A Tale of Two Cities",
  "The Shining",
  "It Ends with Us",
  "The Silent Patient",
  "Dune",
  "Animal Farm",
  "Lord of the Flies",
  "A Game of Thrones",
  "Catching Fire",
  "Mockingjay",
  "The Da Vinci Code",
  "Angels & Demons",
  "Inferno",
  "Twilight",
  "New Moon",
  "Eclipse",
  "Breaking Dawn",
  "The Maze Runner",
  "Divergent",
  "Insurgent",
  "Allegiant",
  "The Girl on the Train",
  "Gone Girl",
  "The Night Circus",
  "A Man Called Ove",
  "The Road",
  "The Old Man and the Sea",
  "Of Mice and Men",
  "The Outsiders",
  "The Color Purple",
  "Beloved",
  "The Handmaid’s Tale",
  "The Bell Jar",
  "Norwegian Wood",
  "Kafka on the Shore",
  "The Wind-Up Bird Chronicle",
  "The Shadow of the Wind",
  "The Name of the Rose",
  "Memoirs of a Geisha",
  "The Time Traveler’s Wife",
  "The Girl with the Dragon Tattoo",
  "The Goldfinch",
  "Educated",
  "Becoming",
  "Sapiens",
  "The Power of Habit",
  "Atomic Habits",
  "Think and Grow Rich",
  "Rich Dad Poor Dad",
  "The 7 Habits of Highly Effective People",
  "How to Win Friends and Influence People",
  "The Subtle Art of Not Giving a F*ck",
  "Can’t Hurt Me",
  "The Psychology of Money",
  "The 48 Laws of Power",
  "Deep Work",
  "Start with Why",
  "Man’s Search for Meaning",
  "The Four Agreements",
  "The Art of War",
  "Meditations",
  "The Prince",
  "The Prophet",
  "The Secret"
];
const ToTheList = () => {
    return (
          <section className="py-20 bg-gradient-to-br from-green-100 via-yellow-50 to-green-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full text-center px-4">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 mb-12 drop-shadow-md">
          🌿 100 World’s Most Popular Books 📖
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 font-semibold text-lg">
                  #{index + 1}
                </span>
                <span className="text-yellow-500 text-sm font-medium">
                  ⭐ {(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {book}
              </h3>
              <p className="text-sm text-gray-500 mt-1 italic">
                Timeless classic loved by readers worldwide.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic text-sm">
            Crafted with ❤️ by{" "}
            <span className="font-semibold text-green-600">
              Dabashis Roy Pranto
            </span>
          </p>
        </div>
      </div>
    </section>
    );
};

export default ToTheList;