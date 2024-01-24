# React Basic - Practice Two

## Overview

This document provides requirements and estimation for React practice two.

## Authors

- This is the author [Hoa Nguyen](https://gitlab.asoft-python.com/hoa.nguyen)

### Time line

- Time line: 15 days (Jan 22, 2024 - Feb 16, 2024)

### Design

[Figma](https://www.figma.com/file/VMA2SkCZX23ZOng2CIFM3B/Shopping-Ecommerce-Website-UI-Kit---UI8-(Community)?type=design&node-id=113-7674&mode=design&t=n8n2sM9YmDrd8Q6y-0)

### Editor

- Visual Studio Code

## Target

- Apply main knowledge of React (BASIC CONCEPT)
  - React Hook
  - React Router
- Apply knowledge of Typescript to React
- Use Storybook to build UI components and pages on React practice

## Requirements

- Home page:
  - User can view products
  - User can add products to the cart
  - User can redirect to login page after clicking on login button
  - User can view promotion information
  - User can view feedback and reviews from other users
  - User can go to the product list page after clicking on the product list link
  - User can go to the product detail page when the user clicks on the product
  - User can search for products
  - User can view the products added to the cart and the amount to pay after clicking on the cart
  - User can click the checkout button to go to the Cart page to complete the ordering process
  - User can add items to the cart on the home page after entering the correct email and password
  - User can see header
  - User can see banner
  - User can see slider
  - User can see footer
- Login page
  - User is able to see the Login Form
  - User is able to see error message when enter blank or wrong user’s name, user’s password
  - User can switch to the registration page after clicking the link if they do not have an account
- Sign up page
  - User is able to see the Sign up Form
  - User may see an error message when entering an empty or incorrect first name, last name, email, and password
  - User can go to the login page if they enter the first name, last name, email, and password fields correctly.
- Product page
  - User can view product list
  - User can add products to the cart after clicking the Add to cart button
  - User can filter products according to their needs in the sidebar
  - User can move to the next product page by clicking on the page transition button
  - User can return to the home page after clicking on the website logo
  - User can search for products
  - User can view the products added to the cart and the amount to pay after clicking on the cart
  - User can click the checkout button to go to the Cart page to complete the ordering process
  - User can see header
  - User can see footer
  - Users can see the sidebar
- Product detail page
  - User can view details of a product
  - User can choose the quantity to order
  - User can choose size and color for the product
  - User can add products to the cart after clicking the Add to cart button
  - User can view many different images of the product
  - User can view the product's description
  - User can view related products
  - User can view the products added to the cart and the amount to pay after clicking on the cart
  - User can click the checkout button to go to the Cart page to complete the ordering process
  - User can return to the home page after clicking on the website logo
  - User can see header
  - User can see footer
- Cart page
  - User can return to the home page after clicking on the website logo
  - User can view all products added to the cart
  - Users can edit quantities or remove products from the cart
  - Users can enter promotional codes to receive discounts
  - Users can click on the payment button to complete the ordering process
  - Users can view the reduced amount and the amount to be paid
  - User can see header
  - User can see footer

## Technical

- [Vite](https://vitejs.dev/) (Version: 5.0.0): A JavaScript application building tool, along with React, a popular JavaScript library for building user interfaces. Vite is a fast and efficient development tool for React projects, helping to speed up the development process.
- [TypeScript](https://www.typescriptlang.org/) (Version: 5.2.2): TypeScript: typed JavaScript, compiles to plain JS, catches errors early, supports modern JS features, interfaces, enums, and type annotations, fosters robust and scalable apps, enhances dev experience
- [React](https://react.dev/learn) (Version: 18.2.0): React is a JavaScript library for building reusable user interfaces efficiently. It uses a virtual DOM for optimal rendering and updates only what's necessary. With a component-based approach, React simplifies application development and maintenance. It's popular for its simplicity, flexibility, and strong community support.
- [StoryBook](https://storybook.js.org/docs/get-started/install) (Version: 7.6.7): Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.
- [ESLint](https://eslint.org/) (Version: 8.56.0): ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- [Prettier](https://prettier.io/) (Version: 3.2.4): Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- [React Router v6](https://reactrouter.com/en/main) (Version: 6.21.3): React Router is an API for React applications. React router uses client-side dynamic routing allowing to build SPA (Single Page Application) with navigation without page refresh. This is an increasingly popular way to deliver a better user experience.
- [Tailwind CSS](https://tailwindcss.com/) (Version: 3.0): A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

## Prerequisites

- [npm](https://www.npmjs.com/) (Version: 10.1.0)
- [node](https://nodejs.org/en) (Version: 20.9.0)

# Folder structure

```
├── src
    ├── assets
        ├── images
    ├── stories
    ├── components
        ├── Common
            ├── Button
            ├── Input
            ├── Header
            ├── Footer
            ├── CardInfo
            ├── DropDown
            ├── Pagination
            ├── NumberAction
            ├── Checkbox
            ├── Contact
        ├── Sidebar
        ├── Banner
        ├── RadioGroup
        ├── RadioItem
        ├── CardDetails
        ├── Slider
        ├── CartPopup
        ├── index.ts
    ├── constants
    ├── helpers
    ├── pages
        ├── HomePage
        ├── LoginPage
        ├── SignUpPage
        ├── ProductPage
        ├── ProductDetailPage
        ├── CartPage
    ├── services
    ├── styles
    ├── types
    ├── validates
    ├── App.css
    ├── App.tsx
    ├── main.tsx
    ├── vite-env.d.ts
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting started

| **Command**                                                                | **Action**                                   |
| -------------------------------------------------------------------------- | ---------------------------------------------|
| `$git clone git@gitlab.asoft-python.com:hoa.nguyen/react-training.git`     | Clone repository with SSH                    |
| `$git clone https://gitlab.asoft-python.com/hoa.nguyen/react-training.git` | Clone repository with HTTPS                  |
| `$cd react-training`                                                       | Redirect to folder                           |
| `$git checkout feature/practice-two`                                       | Checkout branch                              |
| `$pnpm install`                                                            | Install dependencies                         |
| `$pnpm run dev`                                                            | Start local server at http://localhost:5173/ |
| `$pnpm run storybook`                                                      | Start local server at http://localhost:6006/ |
