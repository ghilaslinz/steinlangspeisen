require('dotenv').config();
const { google } = require('googleapis');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // S'assurer de pouvoir traiter les données JSON des requêtes entrantes.

const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

app.post('/api/reservations', async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  const eventStartTime = new Date(date);
  eventStartTime.setHours(time.split(":")[0]);
  eventStartTime.setMinutes(time.split(":")[1]);

  const eventEndTime = new Date(eventStartTime);
  eventEndTime.setHours(eventEndTime.getHours() + 2); // Durée de la réservation de 2 heures.

  const event = {
    summary: `Reservation for ${name}`,
    description: `Booking for ${guests} guests, email: ${email}`,
    start: {
      dateTime: eventStartTime,
      timeZone: 'Europe/Vienna',
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'Europe/Vienna',
    },
    attendees: [{ email: email }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };

  try {
    await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    res.status(200).json({ result: 'success', message: 'Reservation added to Google Calendar.' });
  } catch (error) {
    console.error('Error adding reservation to Google Calendar:', error);
    res.status(500).json({ result: 'error', message: 'Error adding reservation to Google Calendar.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
