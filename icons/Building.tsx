import React from 'react'

const Building = () => {
  return (
    <svg
      version="1.1"
      id="building-svg"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="30 125 672 544"
    >
      <style jsx>
        {`
          #building-svg {
            enable-background: new 30 125 672 544;
          }
          .building-blob {
            fill: var(--lighter);
            filter: drop-shadow(3px 5px 2px rgb(120 120 120 / 0.4));
          }
          .building-fill {
            fill: var(--lighter-blue);
          }
          .building-outline {
            fill: none;
            stroke: #000;
          }
        `}
      </style>
      <path
        className="building-blob"
        d="M634.5 509.8c-3.3-27.1-16.7-38.7-27.2-58.3-12.8-24-21.2-41.1-9.9-64.5 18.4-38.2 48.6-137.8-74.2-156.6-44-6.7-85.6 13.5-118 36.1-27.6 19.3-65.8 11.4-97.6 9.1-39.1-2.8-79.9-2.2-118.5 4.3-79.6 13.5-113.2 54.5-126.4 115-4 18.3-8.7 47.5 16.5 89.9 34 57.2 99.2 81.2 185.2 82.1 19.7.2 39.1-2.5 58.7-3.2 20.4-.7 41 .7 61.3 4.3 47.3 8.4 93.3 28.5 140.9 28 25.2-.2 49.9-6.4 71.1-17.8 26.6-14.2 41.5-39.8 38.1-68.4z"
      />
      <path
        className="building-fill"
        d="M447.7 337.1h-70c-6.4 0-11.7 5.2-11.7 11.7v35h-23.3v-81.7c0-6.4-5.2-11.7-11.7-11.7h-93.3c-6.4 0-11.7 5.2-11.7 11.7v186.7c0 6.4 5.2 11.7 11.7 11.7h210c6.4 0 11.7-5.2 11.7-11.7v-140c-.1-6.4-5.3-11.7-11.7-11.7zM296 325.5h23.3v23.3H296v-23.3zm-23.3 116.6h-23.3v-23.3h23.3v23.3zm0-46.6h-23.3v-23.3h23.3v23.3zm0-46.7h-23.3v-23.3h23.3v23.3zm46.6 93.3H296v-23.3h23.3v23.3zm0-46.6H296v-23.3h23.3v23.3zm105 46.6H401v-23.3h23.3v23.3zm0-46.6H401v-23.3h23.3v23.3z"
      />
      <path
        className="building-outline"
        d="M456.7 333.1h-70c-6.4 0-11.7 5.2-11.7 11.7v35h-23.3v-81.7c0-6.4-5.2-11.7-11.7-11.7h-93.3c-6.4 0-11.7 5.2-11.7 11.7v186.7c0 6.4 5.2 11.7 11.7 11.7h210c6.4 0 11.7-5.2 11.7-11.7v-140c-.1-6.4-5.3-11.7-11.7-11.7zM305 321.5h23.3v23.3H305v-23.3zm-23.3 116.6h-23.3v-23.3h23.3v23.3zm0-46.6h-23.3v-23.3h23.3v23.3zm0-46.7h-23.3v-23.3h23.3v23.3zm46.6 93.3H305v-23.3h23.3v23.3zm0-46.6H305v-23.3h23.3v23.3zm105 46.6H410v-23.3h23.3v23.3zm0-46.6H410v-23.3h23.3v23.3z"
      />
    </svg>
  )
}

export default Building
