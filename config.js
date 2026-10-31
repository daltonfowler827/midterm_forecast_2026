// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "DFowl",

  // One short line under the name (optional).
  tagline: "Polls + Fundamentals (weighted)",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
  method: [
    "My forecast predicts each race from three things: (1) how the district or state typically votes, (2) whether an incumbent is running, (3) where both campaigns have spent at least $10,000, it factors in which side is outspending the other. I excluded data prior to 2018, because the advantage of being an incumbent has noticeably shrunk since then. In Senate races, I also mix in each state's polls, and they count for more when a race has been polled often. I combined two forecasts for the national environment: (1) my own economic model built on changes in inflation, unemployment, and consumer confidence plus the president's approval rating. The other is the generic-ballot polls, lowered to account for how often they have overstated Democrats in past elections. The polls have been the more accurate of the two, so they count for a little more than half of the weight.",
    "Uncertainty combines one national error shared by every race with a separate error for each race, sized by how accurately each part of the model has predicted past elections. Seat totals come from 10,000 simulated elections, with the House and Senate sharing the same national error in each one."
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast.csv",
  sims_file: "seat_sims.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
