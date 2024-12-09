import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const refresh_token = process.env.STRAVA_REFRESH_TOKEN;
    const client_id = process.env.STRAVA_CLIENT_ID;
    const client_secret = process.env.STRAVA_CLIENT_SECRET;

    const tokenResponse = await axios.post('https://www.strava.com/oauth/token', {
      client_id,
      client_secret,
      refresh_token,
      grant_type: 'refresh_token',
    });

    const { access_token } = tokenResponse.data;

    // Get user profile data to get the user ID
    const athleteResponse = await axios.get('https://www.strava.com/api/v3/athlete', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const getLoggedInAthlete = athleteResponse.data;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!getLoggedInAthlete || !getLoggedInAthlete.id) {
      return NextResponse.json({ error: 'Failed to retrieve user ID' }, { status: 500 });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const athleteId = getLoggedInAthlete.id;

    // Get user activity stats based on the user ID
    const statsResponse = await axios.get(`https://www.strava.com/api/v3/athletes/${athleteId}/stats`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const ActivityStats = statsResponse.data;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const milesRan = ActivityStats.all_run_totals.distance / 1609.34; // Convert meters to miles
    return NextResponse.json({ milesRan });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
