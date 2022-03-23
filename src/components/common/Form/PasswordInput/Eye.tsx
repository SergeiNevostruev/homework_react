import React from 'react';

type EyePropsType = {
  click: boolean;
  clicker: React.MouseEventHandler;
};

const styleButton: React.CSSProperties = {
  padding: 0,
  border: 'none',
  font: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  position: 'absolute',
  top: '55%',
  right: '0%',
};

const Eye = ({ click, clicker }: EyePropsType) => (
  <button type="button" onClick={clicker} style={styleButton}>
    {click && (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.125 3L21.875 21"
          stroke="#070707"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0249 10.5869C10.634 10.9619 10.4143 11.4707 10.4141 12.0012C10.4139 12.5317 10.6332 13.0406 11.0239 13.4159C11.4145 13.7912 11.9444 14.0021 12.4971 14.0023C13.0497 14.0025 13.5798 13.7919 13.9707 13.4169"
          stroke="#070707"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0801 17.3491C16.3812 18.4491 14.5228 19.0001 12.4999 19.0001C8.33325 19.0001 4.86138 16.6671 2.08325 12.0001C3.50929 9.60506 5.11763 7.82506 6.90825 6.65906M9.75304 5.36506C10.6462 5.11978 11.571 4.9969 12.4999 5.00006C16.6666 5.00006 20.1385 7.33306 22.9166 12.0001C22.1062 13.3611 21.2374 14.5241 20.3093 15.4881L9.75304 5.36506Z"
          stroke="#070707"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
    {!click && (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5001 14C13.6507 14 14.5834 13.1046 14.5834 12C14.5834 10.8954 13.6507 10 12.5001 10C11.3495 10 10.4167 10.8954 10.4167 12C10.4167 13.1046 11.3495 14 12.5001 14Z"
          stroke="#070707"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9166 12C20.1385 16.667 16.6666 19 12.4999 19C8.33325 19 4.86138 16.667 2.08325 12C4.86138 7.333 8.33325 5 12.4999 5C16.6666 5 20.1385 7.333 22.9166 12Z"
          stroke="#070707"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </button>
);

export default Eye;
