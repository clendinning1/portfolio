## Acceptance Criteria

```md
- page containing a header, a section for content, and a footer
- header = the developer's name and navigation with titles corresponding to different sections of the portfolio
- navigation titles = About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
- click on a navigation title = the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
- WHEN I load the portfolio the first time THEN the About Me title and section are selected by default
- About Me section = a recent photo or avatar of the developer and a short bio about them
- Portfolio section = titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
- Contact section = a contact form with fields for a name, an email address, and a message
- WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
- WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
-  Resume section = link to a downloadable resume and a list of the developer’s proficiencies
- footer = I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Getting Started

You’ll use `vite` to build your portfolio, which will include the following:

* A single `Header` component that appears on multiple pages

* A single `Navigation` component within the header that will use `Link` components from `react-router-dom` to conditionally render the different sections of your portfolio

* A single `Project` component that will be used multiple times in the Portfolio section

* A single `Footer` component that appears on multiple pagescd 

**Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.

### gen

* Use mobile-first design.

* Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

* Application has a single `Project` component that’s used multiple times in the Portfolio section.

* Application has a single `Footer` component that appears on multiple pages.

* readme

* Application must be deployed to Netlify.

### Projects

For each project that is featured in your portfolio, include the following:

* An image of the deployed application (either a short animated GIF or screenshot)

* The title of the project

* A link to the deployed application

* A link to the corresponding GitHub repository