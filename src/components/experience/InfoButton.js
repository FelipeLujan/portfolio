import React from "react";
import { Link } from "react-router-dom";

const InfoButton = props => {
  return (
    <Link to={"/" + props.info}>
      <svg
        width="30 + '%'"
        height="40"
        viewBox="0 0 102 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddd)">
          <rect
            width="96"
            height="36"
            fill="black"
            fillOpacity="0"
            transform="translate(3)"
          />
          <rect x="3" width="96" height="36" rx="18" fill="#00BBD3" />
          <path
            d="M37.21 22.6H35.4873V12.6469H37.21V22.6ZM47.9814 22.6H46.252L41.8154 15.5385V22.6H40.0859V12.6469H41.8154L46.2656 19.7357V12.6469H47.9814V22.6ZM56.5107 18.3822H52.5049V22.6H50.7754V12.6469H57.0986V14.0414H52.5049V17.0013H56.5107V18.3822ZM67.166 17.8832C67.166 18.8584 66.9974 19.7152 66.6602 20.4535C66.3229 21.1872 65.8398 21.7523 65.2109 22.1488C64.5866 22.5407 63.8665 22.7367 63.0508 22.7367C62.2441 22.7367 61.5241 22.5407 60.8906 22.1488C60.2617 21.7523 59.7741 21.1895 59.4277 20.4603C59.0859 19.7312 58.9128 18.8903 58.9082 17.9379V17.3773C58.9082 16.4066 59.0791 15.5498 59.4209 14.807C59.7673 14.0642 60.2526 13.4968 60.877 13.1049C61.5059 12.7084 62.2259 12.5101 63.0371 12.5101C63.8483 12.5101 64.5661 12.7061 65.1904 13.098C65.8193 13.4854 66.3047 14.0459 66.6465 14.7797C66.9883 15.5088 67.1615 16.3588 67.166 17.3295V17.8832ZM65.4365 17.3636C65.4365 16.2608 65.2269 15.4154 64.8076 14.8275C64.3929 14.2396 63.8027 13.9457 63.0371 13.9457C62.2897 13.9457 61.7041 14.2396 61.2803 14.8275C60.861 15.4108 60.6468 16.238 60.6377 17.309V17.8832C60.6377 18.9769 60.8496 19.8223 61.2734 20.4193C61.7018 21.0163 62.2943 21.3148 63.0508 21.3148C63.8164 21.3148 64.4043 21.0232 64.8145 20.4398C65.2292 19.8565 65.4365 19.0043 65.4365 17.8832V17.3636Z"
            fill="#02131A"
          />
        </g>
        <defs>
          <filter
            id="filter0_ddd"
            x="0"
            y="-2"
            width="102"
            height="42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow"
              result="effect2_dropShadow"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow"
              result="effect3_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect3_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Link>
  );
};

InfoButton.propTypes = {};

export default InfoButton;
