import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Heading = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-[#2D3250] h-screen">
        <div className="container ">
          <div className="flex justify-center space-x-10 py-5">
            <h1 className="text-4xl font-bold dark:text-slate-200">
              Ligh-Dark-Mode
            </h1>

            <button onClick={toggleTheme}>
              <FontAwesomeIcon
                size="2x"
                icon={darkTheme ? faSun : faMoon}
                color={darkTheme ? "#FFA500" : "#F0C420"}
              />
            </button>
          </div>

          <div>
            <p className="font-medium dark:text-slate-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              facere eos cumque blanditiis saepe odit, iusto quo tempore velit
              veniam corporis. Amet qui incidunt suscipit accusamus veniam
              explicabo dolorum placeat laboriosam modi voluptas? At magni
              suscipit dolorem alias delectus neque, optio temporibus, autem
              quae maxime sapiente? Cum vitae, architecto minus eius fuga nobis
              libero sit. Suscipit magni atque voluptatibus totam eligendi
              explicabo, vero consequatur ex optio voluptatem veniam esse iste
              dicta dolorum nemo hic harum adipisci itaque voluptatum. Modi odit
              aperiam debitis ullam, quia quae, quis rem quas tempora sint
              sequi, eveniet ut illum perspiciatis! Iste eveniet odit quam?
              Aspernatur.
            </p>
          </div>

          <div className="py-3">
            <p className="font-medium dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea
              dolorem ad nesciunt recusandae. Iure similique, quos dignissimos
              harum voluptas repellendus eligendi necessitatibus qui laudantium
              doloremque consequuntur veritatis sint modi, corporis illum
              adipisci error esse possimus ullam amet minus itaque quis labore.
              Ad harum optio ullam obcaecati necessitatibus maxime ipsam libero
              totam eligendi quidem omnis officia labore quod vitae iusto,
              corporis fuga delectus dolores? Sit ipsam voluptate tempora
              debitis sed doloremque esse at. Veniam dicta, quam, velit cum quos
              nisi placeat odit nesciunt natus minima laboriosam odio, ea
              impedit rerum aut! Similique recusandae nihil expedita. Asperiores
              est dolorum eaque itaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
