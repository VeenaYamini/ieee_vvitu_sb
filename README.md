# IEEE Student Branch VVITU

A responsive multi-page React website for the IEEE Student Branch at Vasireddy Venkatadri Institute of Technology, with an Express API starter. Content data is kept separate from page components and layout so future Webmasters can update branch information without rewriting the UI.

## Technology and commands

React 18, Vite, React Router, Tailwind CSS, Lucide, Express 4, Node.js, and dotenv.

```sh
npm install
npm --prefix client install
npm --prefix server install
```

Copy `.env.example` to `server/.env`, configure the values, and run `npm run dev` from the repository root. The client uses port 5173 and API defaults to 5000. Use `npm run dev:client` or `npm run dev:server` to run one service. Build with `npm run build`; start the API with `npm start`.

## Structure

```text
client/src/components/       Shared header, footer, and site layout
client/src/pages/            Route views and presentation
client/src/data/site.js      Branch identity, logo paths, university link
client/src/data/home.js      Home text and placeholder statistic values
client/src/data/about.js     About, vision, mission, objectives, history
client/src/data/people/      Separate data modules for seven people groups
client/src/data/events.js    Event records
client/src/data/gallery.js   Year/event categorized photo records
client/src/data/resources.js Resource cards
client/src/data/contact.js   Contact address, email, map, social links
client/public/assets/        Supplied IEEE SB VVITU and VVITU logos
server/routes/               API route declarations
server/controllers/          Request handling and validation
server/models/                In-memory data store
server/data/sampleData.js     API starter records
```

## Updating site information

Page layouts and shared UI live under `client/src/components` and `client/src/pages`. Edit the data modules instead of changing those layouts for content updates.

- **Site and branch information:** `client/src/data/site.js` contains organization names, university website, logo paths, postal address, official email, and social links. Replace fields marked “to be confirmed” when verified.
- **Home:** `client/src/data/home.js` contains the hero and introduction copy, four official statistic fields, upcoming events heading, and call-to-action copy. Statistics start as “To be confirmed.”
- **About:** `client/src/data/about.js` contains the IEEE, branch, and institute sections; vision, mission, objectives, history, and faculty coordinator message.
- **People:** Edit all seven explicit arrays in `client/src/data/people/teamMembers.js`. Every person has `name`, `position`, `department`, `photo`, `linkedin`, and `github`. Replace clearly labeled placeholder values with approved details. `committees.js` maps the arrays to the existing Team page sections.
- **Events:** add confirmed entries to `client/src/data/events.js`. Each record supports `name`, `slug`, `poster`, `date`, `time`, `venue`, `shortDescription`, `fullDescription`, `photos` (objects with `src` and `alt`), `registrationUrl`, and `detailsUrl`. Use approved event imagery only.
- **Gallery:** add approved photos to `client/src/data/gallery.js` using `name`, `year`, `event`, `src`, and `alt`; the page filters by year and event.
- **Resources:** `client/src/data/resources.js` contains title, description, URL, and category entries.
- **Contact:** `client/src/data/contact.js` uses site identity contact values and provides map and social link fields.

No member names, exact contact details, branch statistics, specific events, or event photographs are prefilled without verification. Empty event and gallery collections show an explanatory empty state. The provided logos remain in the shared header/footer and use `object-fit: contain` to preserve their proportions.

## Routes

React Router keeps navigation in one tab: `/`, `/about`, `/team`, `/events`, `/events/:eventSlug`, `/gallery`, `/contact`, and `/resources`. Each route uses the shared header and footer. Configure production hosting to rewrite application routes to `client/index.html`.

## API overview

- `GET /api/health` — health check.
- `GET /api/events` and `GET /api/events/:slug` — event list and details.
- `GET /api/resources` — resource list.
- `POST /api/contact` — validates name, email, subject, and message.

The API starter currently uses an in-memory store that resets when the server restarts. Connect persistent storage and an approved message delivery workflow before production use. `CLIENT_ORIGIN`, `PORT`, and `VITE_API_URL` are configured through environment variables. Never commit `.env` secrets.

## Deployment and handover

Build the client with `npm run build`, deploy `client/dist` to a static host with SPA route fallback, and deploy the Express server to a Node host. Configure environment variables in the host dashboard and set the production API URL before building. Use HTTPS and persistent storage before collecting actual contact submissions.

Before publishing, ask branch leadership to verify the roster, titles, departments, official contacts, address, social profiles, statistics, branch history, coordinator message, event details, and images. Review each route on mobile and desktop and keep the data modules updated when content changes.
