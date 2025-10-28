import React from 'react';

export const VegIcon: React.FC<{className?: string}> = ({ className }) => (
  <div className={`border-2 border-green-500 p-0.5 w-6 h-6 flex items-center justify-center ${className}`}>
    <div className="bg-green-500 rounded-full w-3 h-3"></div>
  </div>
);

export const NonVegIcon: React.FC<{className?: string}> = ({ className }) => (
  <div className={`border-2 border-red-500 p-0.5 w-6 h-6 flex items-center justify-center ${className}`}>
    <div style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="bg-red-500 w-3 h-3"></div>
  </div>
);

export const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const SortIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
);

export const CartIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const CloseIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const TrashIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

export const SteamingFoodIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 20H15" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34297 16H17.656" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4C12 4 13.5 6 12.5 8C11.5 10 9.5 10 9.5 12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 5C16 5 17.5 7 16.5 9C15.5 11 13.5 11 13.5 13" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 5C8 5 6.5 7 7.5 9C8.5 11 10.5 11 10.5 13" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 16.5C3 15.1193 4.11929 14 5.5 14H18.5C19.8807 14 21 15.1193 21 16.5V17.5C21 18.8807 19.8807 20 18.5 20H5.5C4.11929 20 3 18.8807 3 17.5V16.5Z"/>
    </svg>
);

export const DeliveryScooterIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5C8 18.6716 8.67157 18 9.5 18C10.3284 18 11 18.6716 11 19.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 19.5C20 20.3284 19.3284 21 18.5 21C17.6716 21 17 20.3284 17 19.5C17 18.6716 17.6716 18 18.5 18C19.3284 18 20 18.6716 20 19.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 19H4.28922C3.25011 19 2.51864 17.9142 2.89327 16.9601L5.89327 9.96015C6.12642 9.3883 6.66699 9 7.27941 9H12L14.6515 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 19H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 13H21.5L18.5 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const HistoryIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export const HeartIcon: React.FC<{className?: string; filled?: boolean}> = ({ className, filled }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={filled ? 0 : 2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

export const StarIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const GooglePlayIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 46" fill="none">
        <rect width="152" height="46" rx="6" fill="black"/>
        <path d="M10.8333 7.83331L10.8333 38.1666L31.625 23L10.8333 7.83331Z" fill="#00A049"/>
        <path d="M37.063 26.6358L31.625 23L10.8333 38.1667L24.8433 45.1667L37.063 26.6358Z" fill="#00D05F"/>
        <path d="M37.063 19.3641L24.8433 0.833313L10.8333 7.83331L31.625 23L37.063 19.3641Z" fill="#FFC900"/>
        <path d="M41.75 23C41.75 21.6521 41.3417 20.3541 40.625 19.3641L37.0625 26.6358C38.0725 25.7558 38.6875 24.4579 38.6875 23C38.6875 21.5421 38.0725 20.2441 37.0625 19.3641L40.625 26.6358C41.3417 25.6458 41.75 24.3479 41.75 23Z" fill="#FF3921"/>
        <path d="M51.8488 20.8404V18.8921H57.1852V20.8404H54.9961V27H52.9209V20.8404H51.8488Z" fill="white"/>
        <path d="M66.4429 24.3638C66.4429 25.9613 65.1763 27.1311 63.6304 27.1311C62.0845 27.1311 60.8179 25.9613 60.8179 24.3638C60.8179 22.7662 62.0845 21.5964 63.6304 21.5964C65.1763 21.5964 66.4429 22.7662 66.4429 24.3638ZM64.3677 24.3638C64.3677 23.5181 64.0673 22.724 63.6304 22.724C63.1934 22.724 62.893 23.5181 62.893 24.3638C62.893 25.2094 63.1934 26.0035 63.6304 26.0035C64.0673 26.0035 64.3677 25.2094 64.3677 24.3638Z" fill="white"/>
        <path d="M75.6985 24.3638C75.6985 25.9613 74.4319 27.1311 72.886 27.1311C71.3401 27.1311 70.0735 25.9613 70.0735 24.3638C70.0735 22.7662 71.3401 21.5964 72.886 21.5964C74.4319 21.5964 75.6985 22.7662 75.6985 24.3638ZM73.6233 24.3638C73.6233 23.5181 73.3229 22.724 72.886 22.724C72.449 22.724 72.1486 23.5181 72.1486 24.3638C72.1486 25.2094 72.449 26.0035 72.886 26.0035C73.3229 26.0035 73.6233 25.2094 73.6233 24.3638Z" fill="white"/>
        <path d="M78.6016 18.8921H80.6768L83.078 23.361L85.4792 18.8921H87.5544L84.2125 25.2517V27H82.1373V25.2517L78.6016 18.8921Z" fill="white"/>
        <path d="M90.3533 18.8921H95.4293V20.2796H92.4285V22.2895H94.9897V23.677H92.4285V25.6152H95.4293V27H90.3533V18.8921Z" fill="white"/>
        <path d="M49.6582 17.562C49.6582 17.0607 49.3323 16.709 48.8824 16.709C48.4325 16.709 48.1066 17.0607 48.1066 17.562C48.1066 18.0632 48.4325 18.4149 48.8824 18.4149C49.3323 18.4149 49.6582 18.0632 49.6582 17.562ZM49.4678 17.562V17.5828H48.297V17.562C48.297 17.1843 48.5562 16.9251 48.8824 16.9251C49.2086 16.9251 49.4678 17.1843 49.4678 17.562Z" fill="white"/>
        <path d="M101.444 14.6548H106.84V16.3197H103.519V18.4332H106.251V20.0981H103.519V22.3152H107.03V23.9801H101.444V14.6548Z" fill="white"/>
        <path d="M115.82 20.443C115.82 22.4239 114.249 24.0837 112.11 24.0837C109.97 24.0837 108.4 22.4239 108.4 20.443C108.4 18.4622 109.97 16.8024 112.11 16.8024C114.249 16.8024 115.82 18.4622 115.82 20.443ZM113.626 20.443C113.626 19.3328 113.067 18.2832 112.11 18.2832C111.152 18.2832 110.593 19.3328 110.593 20.443C110.593 21.5537 111.152 22.6033 112.11 22.6033C113.067 22.6033 113.626 21.5537 113.626 20.443Z" fill="white"/>
        <path d="M124.968 20.443C124.968 22.4239 123.398 24.0837 121.258 24.0837C119.119 24.0837 117.548 22.4239 117.548 20.443C117.548 18.4622 119.119 16.8024 121.258 16.8024C123.398 16.8024 124.968 18.4622 124.968 20.443ZM122.775 20.443C122.775 19.3328 122.216 18.2832 121.258 18.2832C120.301 18.2832 119.741 19.3328 119.741 20.443C119.741 21.5537 120.301 22.6033 121.258 22.6033C122.216 22.6033 122.775 21.5537 122.775 20.443Z" fill="white"/>
        <path d="M127.425 17.0252H129.692L131.758 21.5796L133.824 17.0252H136.091L132.855 23.4079V25.2633H130.661V23.4079L127.425 17.0252Z" fill="white"/>
        <path d="M139.02 14.6548H141.287V23.9801H139.02V14.6548Z" fill="white"/>
    </svg>
);

export const AppStoreIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 46" fill="none">
        <rect width="152" height="46" rx="6" fill="black"/>
        <path d="M30.7349 17.8443C30.7645 15.808 32.2217 14.7358 34.027 14.6766C34.8876 14.647 36.1963 15.0021 37.2685 15.9189C37.3573 15.8597 38.6068 14.795 40.0936 14.795C42.2255 14.795 43.6234 16.0345 44.3752 18.0412C42.4211 19.1134 41.2012 21.564 41.2308 24.1627C41.2308 26.8797 42.688 29.2123 44.731 30.2253C43.8704 32.2912 42.2513 33.4418 40.1528 33.4418C38.6068 33.4418 37.4752 32.6599 36.403 31.7431C35.2418 32.6599 34.1992 33.501 32.3938 33.4418C30.5884 33.3826 27.6186 31.9847 27.6186 28.0939C27.6186 24.8851 29.7505 23.0105 32.6025 21.8007C32.1329 20.8247 30.7053 19.5556 30.7349 17.8443Z" fill="white"/>
        <path d="M35.6133 13.344C36.6558 12.0453 37.3873 10.2991 37.2389 8.52329C35.679 8.64161 33.8736 9.68415 32.8311 10.9828C32.0793 11.5445 31.2483 12.3857 30.9127 13.344H35.6133Z" fill="white"/>
        <path d="M52.417 14.6548H57.813V16.3197H54.492V18.4332H57.224V20.0981H54.492V22.3152H57.993V23.9801H52.417V14.6548Z" fill="white"/>
        <path d="M66.793 20.443C66.793 22.4239 65.222 24.0837 63.083 24.0837C60.943 24.0837 59.373 22.4239 59.373 20.443C59.373 18.4622 60.943 16.8024 63.083 16.8024C65.222 16.8024 66.793 18.4622 66.793 20.443ZM64.599 20.443C64.599 19.3328 64.04 18.2832 63.083 18.2832C62.125 18.2832 61.566 19.3328 61.566 20.443C61.566 21.5537 62.125 22.6033 63.083 22.6033C64.04 22.6033 64.599 21.5537 64.599 20.443Z" fill="white"/>
        <path d="M75.941 20.443C75.941 22.4239 74.371 24.0837 72.231 24.0837C70.092 24.0837 68.521 22.4239 68.521 20.443C68.521 18.4622 70.092 16.8024 72.231 16.8024C74.371 16.8024 75.941 18.4622 75.941 20.443ZM73.748 20.443C73.748 19.3328 73.189 18.2832 72.231 18.2832C71.274 18.2832 70.714 19.3328 70.714 20.443C70.714 21.5537 71.274 22.6033 72.231 22.6033C73.189 22.6033 73.748 21.5537 73.748 20.443Z" fill="white"/>
        <path d="M78.3984 17.0252H80.6654L82.7314 21.5796L84.7974 17.0252H87.0644L83.8284 23.4079V25.2633H81.6344V23.4079L78.3984 17.0252Z" fill="white"/>
        <path d="M90.0132 14.6548H92.2802V23.9801H90.0132V14.6548Z" fill="white"/>
        <path d="M99.5082 14.6548L103.264 20.4134L107.02 14.6548H109.841V23.9801H107.828V17.3718L104.288 22.8079H102.245L98.7052 17.3718V23.9801H96.6922V14.6548H99.5082Z" fill="white"/>
        <path d="M117.151 14.6548H119.418V19.463L123.056 14.6548H126.132L122.15 19.9501L126.446 23.9801H123.279L120.375 20.7285L119.418 21.719V23.9801H117.151V14.6548Z" fill="white"/>
        <path d="M49.3379 13.0654H53.0649V14.7303H49.3379V13.0654Z" fill="white"/>
        <path d="M133.097 11.7246H135.364V16.5328L139.002 11.7246H142.078L138.096 17.0199L142.392 21.05H139.225L136.321 17.7983L135.364 18.7888V21.05H133.097V11.7246Z" fill="white"/>
    </svg>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.64 1.64 0 0013 14.19a1.53 1.53 0 00-1 1.54V19H9v-9h3v1.36A3.48 3.48 0 0115.05 10a3.64 3.64 0 013.95 3.95z"></path>
    </svg>
);

export const InstagramIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.53.012-4.766.069-2.784.127-4.014 1.357-4.141 4.141-.057 1.236-.068 1.595-.068 4.766s.011 3.53.068 4.766c.127 2.784 1.357 4.014 4.141 4.141 1.236.057 1.595.068 4.766.068s3.53-.011 4.766-.068c2.784-.127 4.014-1.357 4.141-4.141.057-1.236.068-1.595.068-4.766s-.011-3.53-.068-4.766c-.127-2.784-1.357-4.014-4.141-4.141-1.236-.057-1.595-.068-4.766-.068z"></path><path d="M12 6.845c-2.84 0-5.155 2.315-5.155 5.155s2.315 5.155 5.155 5.155 5.155-2.315 5.155-5.155S14.84 6.845 12 6.845zm0 8.865c-2.041 0-3.71-1.669-3.71-3.71s1.669-3.71 3.71-3.71 3.71 1.669 3.71 3.71-1.669 3.71-3.71 3.71z"></path><circle cx="16.95" cy="7.05" r="1.241"></circle>
    </svg>
);

export const FacebookIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H8.313v-2.73h2.125v-2.006c0-2.108 1.265-3.25 3.16-3.25.902 0 1.865.166 1.865.166v2.32h-1.18c-1.034 0-1.39.617-1.39 1.325v1.55h2.59l-.42 2.73h-2.17v7.054C18.343 21.128 22 16.991 22 12z"></path>
    </svg>
);

export const PinterestIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.174 2.002c-5.202 0-9.434 4.232-9.434 9.434 0 4.142 2.677 7.653 6.333 8.895.048-.186.113-.456.14-.593.03-.153.193-.783.193-.783s-.05-.1-.05-.248c0-.234.144-.41.325-.41.152 0 .226.114.226.252 0 .153-.098.38-.148.593-.04.167-.234.685-.234.685s.262 1.096 1.258 1.096c1.488 0 2.62-1.563 2.62-3.84 0-2.18-1.583-3.71-3.78-3.71-2.583 0-4.142 1.93-4.142 3.96 0 .736.287 1.52.656 2.01.07.09.08.167.06.262-.02.09-.14.56-.18.72-.03.11-.22.18-.32.13-.58-.29-1-1.12-1-2.26 0-2.8 2.05-5.3 5.8-5.3 3.05 0 5.38 2.17 5.38 5.03 0 3.01-1.92 5.4-4.56 5.4-1.18 0-2.29-.61-2.67-1.33 0 0-.58 2.31-.72 2.87-.24.96-.99 2.19-1.42 2.85.93.28 1.91.43 2.93.43 5.2 0 9.43-4.23 9.43-9.43S17.37 2 12.17 2z"></path>
    </svg>
);

export const TwitterIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
    </svg>
);