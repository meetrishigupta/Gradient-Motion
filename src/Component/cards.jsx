import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import maindata from "./data.js";

function Cards() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <>
      <div className="flex  justify-center items-center h-screen">
        <div className="flex  space-x-5 ">
          {maindata.map((data) => (
            <div
              className="group relative max-w-md rounded-3xl	 border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl	 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
              />
              <h3 className="text-base text-1xl font-semibold leading-7 text-sky-500">
                {data.lifetime}
              </h3>
              <div className="mt-2 flex items-center gap-x-2">
                <span className="text-3xl font-bold tracking-tight line-through	 text-slate-300	">
                  ${data.cutoutprice}
                </span>
                <span className="text-6xl font-bold ml-5 tracking-tight text-sky-500	">
                  ${data.price}
                </span>
              </div>
              <p className="mt-6 text-lg	 tracking-wide font-normal  text-base leading-7 text-yellow-500">
                {data.planheading}
              </p>
              <p className="mt-6 text-base	leading-7 text-gray-300">
                {data.plandescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
