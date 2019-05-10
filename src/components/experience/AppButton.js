import React, { Component } from "react";

class AppButton extends Component {


  render() {
    return (
      <a href={this.props.app}>
        <svg
            length="30 + '%'"
          height="40"
          viewBox="0 0 102 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ddd)">
            <rect
                length="96"
              height="36"
              fill="black"
              fillOpacity="0"
              transform="translate(3)"
            />
            <rect x="3" width="96" height="36" rx="18" fill="#FCD450" />
            <path
              d="M43.3408 20.2826H39.4854L38.6787 22.6H36.8809L40.6406 12.6469H42.1924L45.959 22.6H44.1543L43.3408 20.2826ZM39.9707 18.8881H42.8555L41.4131 14.7592L39.9707 18.8881ZM49.5732 18.9017V22.6H47.8438V12.6469H51.6514C52.7633 12.6469 53.6452 12.9362 54.2969 13.515C54.9531 14.0938 55.2812 14.8594 55.2812 15.8119C55.2812 16.7872 54.96 17.5459 54.3174 18.0883C53.6794 18.6306 52.7839 18.9017 51.6309 18.9017H49.5732ZM49.5732 17.514H51.6514C52.2666 17.514 52.736 17.3705 53.0596 17.0834C53.3831 16.7917 53.5449 16.3724 53.5449 15.8256C53.5449 15.2878 53.3809 14.8594 53.0527 14.5404C52.7246 14.2168 52.2734 14.0505 51.6992 14.0414H49.5732V17.514ZM59.2783 18.9017V22.6H57.5488V12.6469H61.3564C62.4684 12.6469 63.3503 12.9362 64.002 13.515C64.6582 14.0938 64.9863 14.8594 64.9863 15.8119C64.9863 16.7872 64.665 17.5459 64.0225 18.0883C63.3844 18.6306 62.4889 18.9017 61.3359 18.9017H59.2783ZM59.2783 17.514H61.3564C61.9717 17.514 62.4411 17.3705 62.7646 17.0834C63.0882 16.7917 63.25 16.3724 63.25 15.8256C63.25 15.2878 63.0859 14.8594 62.7578 14.5404C62.4297 14.2168 61.9785 14.0505 61.4043 14.0414H59.2783V17.514Z"
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
      </a>
    );
  }
}

export default AppButton;
