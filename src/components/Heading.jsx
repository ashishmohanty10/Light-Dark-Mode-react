import React, { useState } from "react";

const Heading = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="container dark:bg-black h-screen">
        <button className="dark:text-white" onClick={toggleTheme}>
          CLick Me
        </button>

        <div className="flex justify-center ">
          <h1 className="text-center py-5 dark:text-white">
            Light & Dark Mode Practice
          </h1>
        </div>

        <div className="dark:text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quae nam minima ab officia. Fuga iure possimus saepe, qui debitis
            commodi, sed quod praesentium reprehenderit nihil illo iste natus
            rerum deleniti officiis quas omnis! Fuga, commodi! Dolor cupiditate
            dolore ipsa reiciendis nulla quis neque delectus, quod vitae
            accusantium blanditiis aut.
          </p>

          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            similique aspernatur voluptatem soluta blanditiis temporibus unde
            nostrum fugit quisquam sint, natus consectetur. Distinctio unde aut,
            libero at veritatis iste totam, voluptates mollitia architecto
            quaerat officia atque asperiores rerum ab modi. Assumenda eaque
            fugit praesentium accusamus accusantium libero blanditiis doloribus
            labore maiores reprehenderit laudantium maxime numquam, ducimus at
            ipsam asperiores a, itaque aperiam aspernatur eos perferendis.
            Voluptatem commodi sapiente impedit! Mollitia sit asperiores eius
            minima neque illum error fugiat recusandae ducimus sapiente
            veritatis, officia officiis dolore iusto hic doloremque tenetur,
            praesentium magni illo totam, perferendis doloribus omnis. Vitae
            nulla voluptates ex?
          </p>
        </div>

        <div>
          <form action="">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Heading;
