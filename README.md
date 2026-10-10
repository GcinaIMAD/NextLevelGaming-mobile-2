# Next Level Gaming & Esports Arena – Mobile App

A mobile app for **Next Level Gaming & Esports Arena**, a Johannesburg gaming venue. Customers can browse gaming packages and individual experiences, calculate fees with the multi-booking discount, and request a booking quotation.

Built with **React Native** and **Expo** for the XHAW5112MM Task 2 group assignment (Phase 2: Mobile Application).

## Features

- 12 screens: Splash, Home, Gaming Packages, Package Detail, Individual Experiences, Experience Detail, Booking Request, Calculate Fees, Quotation, Events & Tournaments, About Us and Contact Us
- Bottom tab navigation with a live booking counter on the Fees tab
- Booking cart shared across all screens
- Multi-booking discount calculated automatically
- Booking request form with date, time slot, group size and validation
- Quotation with a reference number
- Events and contact forms with validation

## Packages and fees

| Item | Type | Fee |
|---|---|---|
| Ultimate Gamer Pass | Package | R1 500 |
| VIP Gaming Experience | Package | R1 500 |
| Esports Training Package | Package | R1 500 |
| Birthday Party Package | Package | R1 500 |
| Virtual Reality Experience | Experience | R750 |
| Racing Simulator Challenge | Experience | R750 |
| Escape Room Challenge | Experience | R750 |

## Discount rules

| Bookings | Discount |
|---|---|
| 1 | None |
| 2 | 5% |
| 3 | 10% |
| More than 3 | 15% |

Each package or experience added counts as one booking.

## Tech stack

- React Native with Expo (SDK 57)
- React Navigation (native stack and bottom tabs)
- React Context for booking state
- @expo/vector-icons

## How to run

You need [Node.js](https://nodejs.org) (LTS) and the **Expo Go** app on your phone.

1. Clone or download this repository.
2. Open a terminal in the project folder and install the packages:

```bash
   npm install
```

3. Start the app:

```bash
   npx expo start
```

4. Scan the QR code with **Expo Go** (your phone and computer must be on the same Wi-Fi). Press `s` in the terminal if it says "development build" and you want Expo Go.

## Project structure

```
App.js                       App entry point
src/
  theme.js                   Colours and spacing
  components/                Reusable UI (UI.js, ItemCard.js, ItemDetail.js)
  context/BookingContext.js  Shared booking cart
  data/                      Packages, experiences and business details
  navigation/AppNavigator.js Tabs and screen navigation
  screens/                   The 12 app screens
  utils/                     Fee calculation and form validation
```

## Notes

- Contact details in `src/data/business.js` are placeholders and should be replaced.
- Booking requests, event registrations and contact messages are not sent to a server; they are confirmed on screen only.

## Team Rose
