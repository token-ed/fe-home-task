# Contactz

![image](https://github.com/user-attachments/assets/11a534be-92a6-4efa-bcc9-d4782fd0a3f0)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#what">What?</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
     <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation-and-usage">Installation and Usage</a></li>
      </ul>
    </li>
    <li>
      <a href="#why">Why?</a>
      <ul>
        <li>
          <a href="#overview">Overview</a>
          <ul>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#project-structure">Project Structure</a></li>
            <li><a href="#branching-strategy">Branching Strategy</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#how">How?</a>
      <ul>
        <li>
          <a href="#testing-contactz">Testing Contactz</a>
          <ol>
            <li><a href="#1-landing-page">Landing Page</a></li>
            <li><a href="#2-dashboard-page">Dashboard Page</a></li>
            <li><a href="#3-contacts-list-page">Contacts List Page</a></li>
            <li><a href="#4-contact-details-modal">Contact Details Modal</a></li>
            <li><a href="#5-adding-a-contact">Adding a contact</a></li>
            <li><a href="#6-deleting-a-contact">Deleting a contact</a></li>
            <li><a href="#7-updating-contact-details">Updating Contact Details</a></li>
            <li><a href="#8-pagination">Pagination</a></li>
            <li><a href="#9-unique-email-check">Unique Email check</a></li>
            <li><a href="#10-filtering-by-name-input">Filtering by Name Input</a></li>
          </ol>
        </li>
      </ul>
    </li>
    <li><a href="#analysis">Analysis</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>

## What?

Contactz is a React-based application designed to manage your contacts
efficiently. Whether you're building a personal address book or a more complex
contact management system, Contactz provides a robust and extendable solution.

With Contactz, you can:

- Add new contacts with details such as name, email, gender, and position.
- Edit existing contacts to keep information up-to-date.
- Delete contacts when they are no longer needed.
- Ensure that each contact's email is unique to avoid duplicates.
- Have graphical visuals (latest contacts table + analytics graph) about your contacts

The application leverages React hooks and TypeScript for a type-safe and
maintainable codebase, making it easy to scale and adapt to your specific needs.
Additionally, it includes powerful validation using zod schemas and local
storage to persist contact data across sessions.

This is part of a Home Task for **[COMPANY-NAME]** _(anonymized)_ to apply for a Senior Front-End
Developer role.

### Built With

- [![Nextjs][Nextjs]][NextJS-url]
- [![Tailwind][Tailwind]][Tailwind-url]
- [![React][React]][React-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Zod][Zod]][Zod-url]
- [![Shadcn][Shadcn]][Shadcn-url]
- [![ReactHookForm][ReactHookForm]][ReactHookForm-url]

## Demo

A live demo can be found online in **[here](https://contactz-git-develop-tokenizers-projects.vercel.app/)**.

## Getting Started

### Installation and Usage

If you would like to test the application on your local machine, please follow
these instructions:

1. Clone the repository to a directory of your preference

```bash
git clone git@github.com:token-ed/fe-home-task.git
```

2. **_cd_** into the repository directory

```bash
cd fe-home-task/
```

3. Check out `develop` branch

```bash
git checkout develop
```

> By default, git checks out the `main` branch. However, as required for this
> project, the work has been delivered as a Pull Request from another branch (in
> this case, `develop`) to `main` (see PR
> [here](https://github.com/token-ed/fe-home-task/pull/2)), so nothing has been
> merged into the `main` branch yet. The entire development is currently on the
> `develop` branch.

4. Install all project dependencies and start the local server

```bash
npm i && npm run dev
```

5. Open the URL of the running local server

```bash
http://localhost:3000
```

## Why?

This project was developed as a home task for the position of Senior Front End
Developer at **[COMPANY-NAME]** _(anonymized)_. The aim is to showcase skills in building
user-friendly web applications using React.js and Next.js, with a strong focus
on code quality, functionality, and usability. Next.js was chosen for this
project due to its powerful features, including server-side rendering, static
site generation, and API routes, making it an excellent choice for modern web
applications. My familiarity with Next.js also contributed to this decision. By
using Next.js, the application is not only performant but also optimized for SEO
and scalability. However, it's important to note that in a team environment,
such a choice should be thoroughly discussed and agreed upon.

### Overview

_Contactz_ is built with a modern tech stack centered around React.js and
Next.js. The project utilizes **TypeScript** for static type-checking, which
enhances code reliability and developer productivity by catching errors at
compile-time rather than runtime.

#### Tech Stack:

- **React.js**: The core library for building the user interface.
- **Next.js**: A React framework that provides opinionated features like
  server-side rendering and static site generation, which are essential for
  performance optimization and SEO. It obeys a directory based routing system,
  which I personally like.
- **TypeScript**: The type safety flavor of the written code which I think
  improves the developer experience ensuring fewer bugs and better code
  readability.
- **Zod**: A TypeScript-first schema declaration and validation library used to
  validate form inputs, ensuring data integrity.
- **Shadcn** open source components

Next.js was chosen because it extends React’s capabilities by adding features
that are essential for modern web development. Server-side rendering (SSR) and
static site generation (SSG) improve the application's performance and SEO,
making it more accessible and faster for users. Moreover, Next.js simplifies
routing with its opinionated directory-based routing system and supports API
routes (although not in use in this project), enabling easy integration with
backend services or third-party APIs. To quickly build an appealing user
interface taking into consideration the best patterns for accessibility and
styling

**Shadcn** open source components were used. **Shadcn** is a collection of UI
components built with accessibility and developer experience in mind. It
provides a set of pre-built, customizable, and accessible components that can be
easily integrated into React applications. In _Contactz_, **Shadcn** was used to
quickly build out UI elements (specially interactive components, like drawers,
modals and inputs), ensuring that they are both visually appealing and
accessible. The library's emphasis on best practices and modern design patterns
allows for rapid development while maintaining a high standard of UI/UX.

Building lists is quite challenging if we take into consideration pagination,
filtering, adding, deleting etc. For this matter, I took the liberty to use
**TanStack Table** library which provides an incredible amount of
functionalities and tweaks that otherwise would not be possible to develop if
created from scratch in such a short amount of time.

To build up the forms, **react-hook-form** library was chosen to integrate along
with **Shadcn** components and using validation provided by **zod** library
functions.

The whole styling of the application was achieved by using **TailwindCSS**, a
modern CSS framework that uses inline directives to build the whole
look-and-feel of the project.

#### Project Structure

Here is a compact version of the project structure: this is how this project is
currently set up - It abides by some of the Next.js rules for routing and some
of the components may have been placed in a way to avoid forcing the root
layouts to be rendered as client components.

```ascii
fe-home-task            // Root project directory
┣ public                // Public assets
┃ ┗ images
┣ src/                  // All code source resides in /src
┃ ┣ app/
┃ ┃ ┣ (landing-page)/   // This is a route grouping technique designed to hide the name of the route (it corresponds to the path "/" in the browser)
┃ ┃ ┃ ┗ components/     // All components used only in (landing-page)
┃ ┃ ┣ dashboard/        // This is the "/dashboard" route
┃ ┃ ┃ ┣ components/     // All components used only in dashboard
┃ ┃ ┃ ┃ ┗ forms/
┃ ┃ ┃ ┣ contacts/       // Leaf route steming from "/dashboard" - in this case this yields to "/dashboard/contacts" im the browser
┃ ┃ ┃ ┃ ┗ components/   // All componentes used only in contacts
┃ ┃ ┃ ┣ helpers/
┃ ┃ ┃ ┗ hooks/
┃ ┃ ┗ favicon.ico
┃ ┗ components/         // All shared components used in both (landing-page) and dashboard
┃ ┃ ┗ ui/               // All ui components installed with shadcn (some may have suffered with some customizations for this project)
┃ ┣ lib/
┃ ┃ ┗ utils.ts
┃ ┗ styles/
┃   ┗ globals.css
┗ README.md (📍 YOU ARE HERE)

```

#### Branching Strategy

To manage concurrent work effectively and maintain a clean and organized
codebase, _Contactz_ utilizes something that would resonate with **GitFlow**
branching strategy. **GitFlow** is a popular branching model that provides a
structured workflow for handling features, bug fixes, releases, and hotfixes.
This strategy is particularly useful for teams working on complex projects with
multiple contributors. I've kept a rule of 1-1 (branch-feature) relation, so
each branch is designed to pack all the development of one single feature that
is later on merged to the `develop` branch which can be merged to `main` once
the team has green light to release (so in practicality it could be named
`release` for that matter).

Since I am the only one wokring on the project, the branches followed a perfect
chronological timeline in which they were merged to `develop`. Each pull request
packs one or more commits related to a single feature/bugfix/chore and once
they're created they're populated with a title and a description with a few
screenshots of that particular development - I personally find it useful to have
a few screenshots of the current development being merged (or even quick videos
of a certain behavior) to ease up code reviews between team members.

Here’s a list of all the PRs created for this project (feel free to visit them
for a visual overview of the concepts discussed above):

- https://github.com/token-ed/fe-home-task/pull/1
- https://github.com/token-ed/fe-home-task/pull/3
- https://github.com/token-ed/fe-home-task/pull/4
- https://github.com/token-ed/fe-home-task/pull/5
- https://github.com/token-ed/fe-home-task/pull/6
- https://github.com/token-ed/fe-home-task/pull/7
- https://github.com/token-ed/fe-home-task/pull/8
- https://github.com/token-ed/fe-home-task/pull/9
- https://github.com/token-ed/fe-home-task/pull/10
- https://github.com/token-ed/fe-home-task/pull/11
- https://github.com/token-ed/fe-home-task/pull/12
- https://github.com/token-ed/fe-home-task/pull/13
- https://github.com/token-ed/fe-home-task/pull/14
- https://github.com/token-ed/fe-home-task/pull/15
- https://github.com/token-ed/fe-home-task/pull/16
- https://github.com/token-ed/fe-home-task/pull/17
- https://github.com/token-ed/fe-home-task/pull/18
- https://github.com/token-ed/fe-home-task/pull/19
- https://github.com/token-ed/fe-home-task/pull/20
- https://github.com/token-ed/fe-home-task/pull/21
- https://github.com/token-ed/fe-home-task/pull/22
- https://github.com/token-ed/fe-home-task/pull/23

The main Pull Request created for delivery (`develop` -> `main`), as outlined in the requirements
document, can be viewed here:

- https://github.com/token-ed/fe-home-task/pull/2

## How?

Contactz is designed to mimic the user experience of a real SaaS platform. It
includes both a **landing page** and a **dashboard** to provide a realistic
interaction scenario. Here's a detailed guide on how to test the application:

### Testing Contactz

#### 1. Landing Page

Upon navigating to the root URL (`/`), users are greeted with a landing page. This
page serves as an introductory interface, showcasing some marketing content. In
a full-fledged SaaS application, this would typically include features such as:

- Overview of Features: Highlights of the main features and benefits of the
  platform.
- Call-to-Action (CTA): Encourages users to sign up, register, or log in.
- For the purpose of this project, the landing page is simplified and includes a
  button to proceed directly to the dashboard and also a mock button to contact sales team (this is just a mock and does not do anything upon clicking on it). While a true SaaS application
  would have a more complex authentication process, this project redirects users
  directly to the dashboard for ease of testing and development.

![image](https://github.com/user-attachments/assets/989da06f-b6e6-486f-8cd0-c63ce0b79334)

#### 2. Dashboard page

After clicking the button on the landing page, users are redirected to the
`/dashboard` URL. The dashboard is the primary interface where users can manage
their contacts. It includes two main sections:

a. At the top of the dashboard, there is a
status information banner. This section provides real-time updates or important
information related to the application, such as:

- Notifications: Important message on the current status on the contact list (at
  the moment it has binary behavior: it shows different copies if the user has
  already added contacts or not) This banner is designed to give users immediate
  feedback and updates about their contact data.
  ![image](https://github.com/user-attachments/assets/ea7bad19-f9d8-4617-832b-6e33a0297bf6)

b. Below the status information banner, the empty state
section is presented. This section is visible only when there are no contacts in
the list and includes:

- Instructional Message: A friendly message guiding users on how to start adding
  contacts.
- Add Contact Button: A prominent button that, when clicked, opens a form or
  dialog to add a new contact. This feature allows users to begin populating
  their contact list immediately.

![image](https://github.com/user-attachments/assets/a7c5be96-3067-4825-b88a-444996a7eae3)

![image](https://github.com/user-attachments/assets/7897b276-92f9-4ea1-b60a-dbe8ccb68d23)

After adding a contact:

- Status Banner Update: The status banner will automatically update. This
  ensures users receive immediate feedback about their actions.
  ![image](https://github.com/user-attachments/assets/31f58472-f26e-4ed8-b551-a1c279a6ea27)

- Recent contacts module: The recent contacts component shows a list of a maximum of 5 users that have been lately edited or added.
  ![image](https://github.com/user-attachments/assets/11386008-4ee1-42c1-bc59-0d85430a6fa8)

- Overview module: The overview component shows a visual summary (as a graph) of how many contacts have been added through the whole year
  ![image](https://github.com/user-attachments/assets/203814d8-4243-49d5-baaa-a264d22ad381)

- Empty State Section Removal: The empty state section will no longer be visible
  once a contact has been added. This change indicates that there are now
  contacts in the list and transitions the dashboard from its initial empty
  state to an active contact management interface.

#### 3. Contacts List Page

After adding a contact, you can use the side navigation bar to explore
additional sections of the application:

- Side Navigation Bar: The navigation bar provides links to various sections of
  the app (at the moment only "Contacts" link is available along side with two
  premium features mock which are not available). Click on the "Contacts" link
  to navigate to the "/contacts" page.
- Contacts Page: On the "/contacts" page, you will see a list of all the
  contacts you have added. This page displays detailed information about each
  contact and allows for further management. If you navigate to this page early
  without having added anything, you will see an empty state section similar to
  the one in the Dashboard.

![image](https://github.com/user-attachments/assets/80effe50-47b4-4663-aa8b-caba913e5c40)

In the contacts list page, there are key functionalities to provide the user to
some CRUD interactions:

#### 4. Contact Details Modal

Clicking on a contact row in the contact list opens a modal displaying detailed
information about that contact. This modal allows users to view all the relevant
details such as name, email, gender, and position.
![image](https://github.com/user-attachments/assets/7762c78f-3c95-406a-b019-c22d3bcedf3e)

#### 5. Adding a contact

Users can add a new contact by clicking the "Add contact" button. This action
opens a form where users can input details such as name, email, gender, and
position - name and email are required fields while others are not (gender will
default to `male` value). Once the form is submitted, the new contact is added
to the list and displayed in the list.
![image](https://github.com/user-attachments/assets/946c0087-fc6a-4a9c-81b8-39ef238b3371)

#### 6. Deleting a contact

Contacts can be deleted in two ways:

- From the Details Modal: Users can delete a contact directly from the contact
  details modal, providing a quick way to remove the contact while viewing its
  details.
- From the Row: Each contact row includes a "rubbish bin" icon for deleting the
  contact directly from the contact list.
  ![image](https://github.com/user-attachments/assets/4614e5fb-a25d-4215-8ab1-943cc1d4c9ec)

#### 7. Updating Contact Details

Users can update contact information in two ways:

- From the Details Modal: Edit contact details directly within the modal that
  appears when clicking a contact row.
- From the Row: Each contact row includes a "pencil" icon that allows users to
  quickly edit the contact details without opening the modal.
  ![image](https://github.com/user-attachments/assets/5543068d-9509-4b6d-b850-e71db6396337)

#### 8. Pagination

The contact list is paginated to handle large numbers of contacts efficiently.
These pagination controls allow the user to navigate between pages of contacts
and to set maximum number of records per page (right now a default of 10 is set,
but it can be changed to 5, 15, 20), making it easier to manage and view
extensive contact lists.
![Screenshot from 2024-08-14 16-13-51](https://github.com/user-attachments/assets/e8b5b024-792a-4335-8607-694a4d44677f)
![Screenshot from 2024-08-14 16-14-03](https://github.com/user-attachments/assets/a9ac6601-64cc-490f-9ecd-1eee52608737)

#### 9. Unique Email check

The application performs a unique email check when adding or editing contacts.
This functionality ensures that no two contacts have the same email address,
preventing duplicate entries and maintaining data integrity.
![image](https://github.com/user-attachments/assets/bc3c25e7-af92-479a-957a-3e2970b3373d)

#### 10. Filtering by Name Input

Users can filter the contact list by typing into a name input field. This
filtering functionality allows users to quickly find contacts by entering part
or all of a contact’s `name`. As users type, the list dynamically updates to
show only those contacts whose names match the entered criteria.
![image](https://github.com/user-attachments/assets/a0a67956-3d06-4d4a-a912-8d085d24518b)

## Analysis

Contactz has been a fulfilling project, allowing me to showcase my skills in
building a user-friendly web application with React.js and Next.js. The
development process was both challenging and rewarding and I've enjoyed
developing it. However, due to time constraints and the prioritization of
essential features, there are a few improvements that I wanted to address but
have not yet had the opportunity to implement. These include:

- Impossibility of returning to the root path with the hero section (unless via
  the browser URL search bar);
- In mobile view, side navigation panel is not closing when clicking the overlay
  area (only clicking back on the hamburguer icon) nor when the user navigates
  through paths;
- In mobile view, the "premium features" are blurred but no tooltips are
  presented like they are on Desktop (may cause confusion to the user);
- Theme mode implementation was probably unnecessary having took some time to
  test both Dark and Light themes.
- Adding unit tests for logic heavily relying on business (`useContacts` hook's
  functions for instance)

## Support

I welcome and encourage feedback on the _Contactz_ project. If you have any
suggestions for improvements, notice areas where the code could be enhanced
please feel free to open pull requests or submit issues. I can answer your
questions if any doubts arise too. Your insights are appreciated. To the
**[COMPANY-NAME]** _(anonymized)_ team: thanks for the opportunity!

## Authors

**Eduardo Miguel Fernandes**

- emiguel.dev@gmail.com
- github@token-ed

[NextJS]: https://img.shields.io/badge/-Next.js-919191?logo=nextdotjs&logoColor=black
[Tailwind]: https://img.shields.io/badge/-Tailwind-26214d?logo=tailwindcss&logoColor=lightblue
[React]: https://img.shields.io/badge/-React.js-26214d?logo=react&logoColor=lightblue
[TypeScript]: https://img.shields.io/badge/-Typescript-8282fa?logo=typescript&logoColor=white
[Zod]: https://img.shields.io/badge/-Zod-776a8a?logo=zod&logoColor=614391
[Shadcn]: https://img.shields.io/badge/-Shadcn-white?logo=shadcnui&logoColor=614391
[ReactHookForm]: https://img.shields.io/badge/-react--hook--form-pink?logo=reacthookform&logoColor=black
[NextJS-url]: https://nextjs.org/
[Shadcn-url]: https://ui.shadcn.com/
[Tailwind-url]: https://tailwindcss.com/
[TypeScript-url]: https://www.typescriptlang.org/
[Zod-url]: https://zod.dev/
[React-url]: https://react.dev/
[ReactHookForm-url]: https://react-hook-form.com/
