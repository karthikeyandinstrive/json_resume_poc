import React from 'react';

function VerifiedCredentialsIcon({ fill }) {
  return (
    <svg
      className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  '
      width='1rem'
      height='1rem'
      // fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.6.003a.667.667 0 0 1 .5.158l4.667 4a.667.667 0 0 1 .233.506V14a2 2 0 0 1-2 2H4.667a2 2 0 0 1-2-2v-1.289l-1.02.544a.667.667 0 0 1-.98-.588V8a3.334 3.334 0 0 1 2-5.267V2a2 2 0 0 1 2-2h5.866c.023 0 .045.001.067.003Zm-.6 1.33H4.667A.667.667 0 0 0 4 2v.733A3.334 3.334 0 0 1 6 8v4.667a.666.666 0 0 1-.98.588L4 12.71V14c0 .368.298.667.667.667H14a.667.667 0 0 0 .667-.667V5.333H12a2 2 0 0 1-2-2v-2ZM13.492 4l-2.159-1.799v1.132c0 .369.299.667.667.667h1.492ZM4.667 9.056c-.409.178-.86.277-1.334.277-.474 0-.925-.099-1.333-.277v2.5l1.02-.544a.667.667 0 0 1 .627 0l1.02.543V9.056ZM3.333 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z'
        // fill={
        //   fill !== false && fill !== undefined ? fill?.toString() : '#333333'
        // }
      />
    </svg>
  );
}
// VerifiedCredentialsIcon.prototype = {
//   fill: PropTypes.string,
// };

export default VerifiedCredentialsIcon;
