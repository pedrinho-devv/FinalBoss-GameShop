import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Home() {
  return (
    <div id="home-main" className="w-full h-full">
      <header className="flex w-full justify-between items-center backdrop-blur-sm bg-white/30 px-24 py-4">
        <div>
          <h1 className="font-orbitron text-3xl">FinalBoss</h1>
        </div>

        <nav className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-5 font-poppins font-bold text-[#ffff] text-[20px] cursor-pointer">
            <li className="hover:text-[#7FB319] transition duration-300">
              <a href="#">Home</a>
            </li>
         
            <li className="hover:text-[#7FB319] transition duration-300">
              <a href="#">Catálogo</a>
            </li>
            <li className="hover:text-[#7FB319] transition duration-300">
              <a href="#">BestSellers</a>
            </li>
            <li className="hover:text-[#7FB319] transition duration-300">
              <a href="#">Promoções</a>
            </li>
            <li className="hover:text-[#7FB319] transition duration-300">
              <a href="#">FQA</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-6 items-center">
          <FiShoppingCart
            className="text-white text-xl cursor-pointer hover:text-[#7FB319] transition duration-300"
            title="Carrinho de compras"
          />
          <AiFillHeart
            className="text-white text-xl cursor-pointer hover:text-[#7FB319] transition duration-300"
            title="Coração"
          />
          <FaUser
            className="text-white text-xl cursor-pointer hover:text-[#7FB319] transition duration-300"
            title="Usuário"
          />
        </div>
      </header>

      <main className="w-full mx-14">
        <div className="flex flex-col p-7 m-8 gap-4 mt-32 mb-5">
          <h2 className="font-poppins text-[48px] text-[#ffff] font-bold">
            Jogue agora o God of War
          </h2>
          <p className="font-poppins text-[18px] text-[#ffff]">
            God of War é uma saga de jogos de ação com mitologia grega e
            nórdica.
          </p>
        </div>
        <div className="flex mt-3">
          <div className="flex gap-3 p-5 ml-9">
            <button className="py-3 px-10 bg-transparent border border-[#7FB319] text-[#ffff]  rounded-[10px] hover:bg-[#7FB319] transition duration-300 ">
              Ver Mais
            </button>
            <button className="py-3 px-10 bg-[#7FB319] text-[#ffff]  rounded-[10px] hover:bg-[#72A116] transition duration-300">
              Comprar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
