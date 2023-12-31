import Image from "next/image";
import anime from "animejs"
import { useEffect, useState } from "react";


const SplashScreen = ({finishLoading}) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.15,
        duration: 500,
        easing: "easeInOutExpo",
      }).add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 50,
        duration: 500,
        easing: "easeInOutExpo",
      });
  }
 
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="splash-screen  h-screen flex justify-center items-center flex-col gap-10">
          <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="85.709px"
      height="100px"
      viewBox="0 0 85.709 100"
      enableBackground="new 0 0 85.709 100"
      xmlSpace="preserve"
    >
      <path
        id="camera-body"
        fill="#FFFFFF"
        fillOpacity="0.95"
        d="M51.561-0.011c-0.895-0.01-1.805,0.058-2.719,0.188 c-7.825,1.11-13.726,7.15-15.031,14.531c-3.309-6.727-10.674-10.891-18.5-9.781C5.573,6.308-1.194,15.311,0.187,25.052 c0.844,5.947,4.537,10.788,9.5,13.344l0.906,6.438l15.608-2.275c1.4-0.199,2.748,0.602,2.937,1.938s-0.88,2.52-2.281,2.719 l-15.608,2.275l1.156,8.188c0.188,1.318,1.431,2.25,2.75,2.063l49.093-6.969c1.318-0.188,2.25-1.432,2.063-2.75l-2.75-19.25 c4.057-3.834,6.281-9.522,5.438-15.469C67.747,6.474,60.212,0.083,51.561-0.011z M51.28,3.739c6.889-0.1,12.945,4.936,13.938,11.938 c1.078,7.592-4.189,14.642-11.781,15.719s-14.641-4.221-15.718-11.813C36.641,11.988,41.939,4.972,49.53,3.896 C50.124,3.812,50.698,3.748,51.28,3.739z M17.562,8.521c6.888-0.1,12.945,4.936,13.938,11.938 C32.576,28.05,27.31,35.1,19.718,36.177S5.076,31.956,3.999,24.364C2.922,16.77,8.22,9.753,15.812,8.677 C16.406,8.593,16.979,8.529,17.562,8.521z M79.718,27.458l-12.781,6.188l1.594,11.156l14,2.406L79.718,27.458z M51.53,57.208 l-22.906,3.219c0,2.842,0,1.064,0,3.906h2.281h1.5L17.218,97.458c-0.414,0.902-0.027,1.961,0.875,2.375s1.961,0.027,2.375-0.875 l15.875-34.625h1.938v33.875c0,0.993,0.788,1.781,1.781,1.781s1.813-0.788,1.813-1.781V64.333h1.812l16.031,34.625 c0.418,0.9,1.475,1.293,2.375,0.875c0.902-0.418,1.293-1.506,0.875-2.406L47.655,64.333h1.438h2.438V57.208z"
      ></path>
      <path
        id="reel-1"
        fill="#FFFFFF"
        fillOpacity="0.95"
        d="M17.763,10.823c-1.85,0-3.35,1.5-3.35,3.35c0,1.85,1.5,3.349,3.35,3.349 s3.349-1.499,3.349-3.349C21.112,12.323,19.613,10.823,17.763,10.823z M9.71,16.674c-1.851,0-3.351,1.5-3.351,3.35 c0,1.85,1.5,3.35,3.351,3.35c1.85,0,3.35-1.5,3.35-3.35C13.059,18.174,11.559,16.674,9.71,16.674z M25.811,16.674 c-1.851,0-3.351,1.5-3.351,3.35c0,1.85,1.5,3.35,3.351,3.35c1.85,0,3.349-1.5,3.349-3.35C29.16,18.174,27.661,16.674,25.811,16.674z M12.787,26.135c-1.85,0-3.35,1.5-3.35,3.35c0,1.85,1.5,3.349,3.35,3.349c1.851,0,3.351-1.499,3.351-3.349 C16.137,27.635,14.637,26.135,12.787,26.135z M22.738,26.135c-1.85,0-3.349,1.5-3.349,3.35c0,1.85,1.499,3.349,3.349,3.349 s3.35-1.499,3.35-3.349C26.088,27.635,24.588,26.135,22.738,26.135z"
      >
        <animateTransform
          type="rotate"
          fill="remove"
          additive="replace"
          to="360 17.66 22.74"
          calcMode="linear"
          from="0 17.66 22.74"
          dur="2s"
          restart="always"
          accumulate="none"
          begin="0"
          attributeName="transform"
          attributeType="XML"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
      <path
        id="reel-2"
        fill="#FFFFFF"
        fillOpacity="0.95"
        d="M51.484,6.031c-1.851,0-3.351,1.5-3.351,3.35c0,1.85,1.5,3.349,3.351,3.349 c1.85,0,3.349-1.499,3.349-3.349C54.833,7.531,53.334,6.031,51.484,6.031z M43.429,11.882c-1.85,0-3.35,1.5-3.35,3.35 c0,1.85,1.5,3.35,3.35,3.35c1.851,0,3.351-1.5,3.351-3.35C46.78,13.382,45.28,11.882,43.429,11.882z M59.532,11.882 c-1.851,0-3.351,1.5-3.351,3.35c0,1.85,1.5,3.35,3.351,3.35c1.85,0,3.349-1.5,3.349-3.35C62.881,13.382,61.382,11.882,59.532,11.882 z M46.508,21.342c-1.85,0-3.35,1.5-3.35,3.35c0,1.85,1.5,3.349,3.35,3.349c1.851,0,3.351-1.499,3.351-3.349 C49.858,22.842,48.358,21.342,46.508,21.342L46.508,21.342z M56.459,21.342c-1.85,0-3.349,1.5-3.349,3.35 c0,1.85,1.499,3.349,3.349,3.349s3.35-1.499,3.35-3.349C59.808,22.842,58.308,21.342,56.459,21.342z"
      >
        <animateTransform
          type="rotate"
          fill="remove"
          additive="replace"
          to="360 51.4 17.7"
          calcMode="linear"
          from="0 51.4 17.7"
          dur="3.6s"
          restart="always"
          accumulate="none"
          begin="0"
          attributeName="transform"
          attributeType="XML"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
      <div> 

        <p className="md:text-xl text-xl font-bold mx-2 text-white">
          Loading...
        </p>
        {/* <p className="text-black text-center">
          Delivering health to your doorstep.
        </p> */}
      </div>
    </div>
  );
};

export default SplashScreen;