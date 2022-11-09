import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --bs-blue: #0d6efd;
        --bs-indigo: #6610f2;
        --bs-purple: #6f42c1;
        --bs-pink: #d63384;
        --bs-red: #dc3545;
        --bs-orange: #fd7e14;
        --bs-yellow: #ffc107;
        --bs-green: #198754;
        --bs-teal: #20c997;
        --bs-cyan: #0dcaf0;
        --bs-white: #fff;
        --bs-gray: #6c757d;
        --bs-gray-dark: #343a40;
        --bs-gray-100: #f8f9fa;
        --bs-gray-200: #e9ecef;
        --bs-gray-300: #dee2e6;
        --bs-gray-400: #ced4da;
        --bs-gray-500: #adb5bd;
        --bs-gray-600: #6c757d;
        --bs-gray-700: #495057;
        --bs-gray-800: #343a40;
        --bs-gray-900: #212529;
        --bs-primary: #0d6efd;
        --bs-secondary: #6c757d;
        --bs-success: #198754;
        --bs-info: #0dcaf0;
        --bs-warning: #ffc107;
        --bs-danger: #dc3545;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
        --bs-primary-rgb: 13,110,253;
        --bs-secondary-rgb: 108,117,125;
        --bs-success-rgb: 25,135,84;
        --bs-info-rgb: 13,202,240;
        --bs-warning-rgb: 255,193,7;
        --bs-danger-rgb: 220,53,69;
        --bs-light-rgb: 248,249,250;
        --bs-dark-rgb: 33,37,41;
        --bs-white-rgb: 255,255,255;
        --bs-black-rgb: 0,0,0;
        --bs-body-color-rgb: 33,37,41;
        --bs-body-bg-rgb: 255,255,255;
        --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
        --bs-body-font-family: var(--bs-font-sans-serif);
        --bs-body-font-size: 1rem;
        --bs-body-font-weight: 400;
        --bs-body-line-height: 1.5;
        --bs-body-color: #212529;
        --bs-body-bg: #fff;
        --joinchat-ico: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M3.516 3.516c4.686-4.686 12.284-4.686 16.97 0 4.686 4.686 4.686 12.283 0 16.97a12.004 12.004 0 0 1-13.754 2.299l-5.814.735a.392.392 0 0 1-.438-.44l.748-5.788A12.002 12.002 0 0 1 3.517 3.517zm3.61 17.043.3.158a9.846 9.846 0 0 0 11.534-1.758c3.843-3.843 3.843-10.074 0-13.918-3.843-3.843-10.075-3.843-13.918 0a9.846 9.846 0 0 0-1.747 11.554l.16.303-.51 3.942a.196.196 0 0 0 .219.22l3.961-.501zm6.534-7.003-.933 1.164a9.843 9.843 0 0 1-3.497-3.495l1.166-.933a.792.792 0 0 0 .23-.94L9.561 6.96a.793.793 0 0 0-.924-.445 1291.6 1291.6 0 0 0-2.023.524.797.797 0 0 0-.588.88 11.754 11.754 0 0 0 10.005 10.005.797.797 0 0 0 .88-.587l.525-2.023a.793.793 0 0 0-.445-.923L14.6 13.327a.792.792 0 0 0-.94.23z'/%3E%3C/svg%3E");
        --joinchat-font: -apple-system,blinkmacsystemfont,"Segoe UI",roboto,oxygen-sans,ubuntu,cantarell,"Helvetica Neue",sans-serif;
    }
`