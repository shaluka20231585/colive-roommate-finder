const AnimatedBackground = () => {
  return (
    <div className="absolute inset-[-1em] -z-10">
      <style>{`
        .animated-bg {
          --c: 7px;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          background-image: 
            radial-gradient(circle at 50% 50%, #0000 1.5px, #000 0 var(--c), #0000 var(--c)),
            radial-gradient(circle at 50% 50%, #0000 1.5px, #000 0 var(--c), #0000 var(--c)),
            radial-gradient(circle at 50% 50%, #f00, #f000 60%),
            radial-gradient(circle at 50% 50%, #ff0, #ff00 60%),
            radial-gradient(circle at 50% 50%, #0f0, #0f00 60%),
            radial-gradient(ellipse at 50% 50%, #00f, #00f0 60%);
          background-size: 
            12px 20.7846097px,
            12px 20.7846097px,
            200% 200%,
            200% 200%,
            200% 200%,
            200% 20.7846097px;
          --p: 0px 0px, 6px 10.39230485px;
          background-position: 
            var(--p),
            0% 0%,
            0% 0%,
            0% 0px;
          animation: wee 40s linear infinite, filt 6s linear infinite;
        }

        @keyframes filt {
          0% {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(360deg);
          }
        }

        @keyframes wee {
          0% {
            background-position: 
              var(--p),
              800% 400%,
              1000% -400%,
              -1200% -600%,
              400% 41.5692194px;
          }
          to {
            background-position: 
              var(--p),
              0% 0%,
              0% 0%,
              0% 0%,
              0% 0%;
          }
        }
      `}</style>
      <div className="animated-bg" />
    </div>
  );
};

export default AnimatedBackground; 