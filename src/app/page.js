import Image from "next/image";
import { FiMoon } from "react-icons/fi";
import Profile from "../components/Profile";
export default function Home() {
  return (
    <div className="h-screen w-full ">
      <section className="w-full flex px-20 items-center  justify-between ">
        <header className="w-[80%]   flex items-center  justify-center py-10   ">
          <nav className="w-full flex items-center   justify-end">
            <div className="w-1/2 max-w-lg flex ml-40 justify-end mx-auto rounded-full overflow-hidden ">
              <img
                className="w-80  mx-10 object-cover object-center "
                src="./logo-removebg-preview.png"
                alt=""
              />
            </div>

            <div className="w-1/2 h-full flex px-10 items-center justify-end right  ">
              <FiMoon size={"25"} className="text-end" />
            </div>
          </nav>
        </header>
      </section>
      <main className="w-full flex  px-40 ">
        <Profile />
      </main>
    </div>
  );
}
