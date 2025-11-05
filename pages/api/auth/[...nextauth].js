
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
// Riot provider is custom - example placeholder
const RiotProvider = (options) => ({
  id: 'riot',
  name: 'Riot',
  type: 'oauth',
  version: '2.0',
  params: { grant_type: 'authorization_code' },
  accessTokenUrl: 'https://auth.riotgames.com/api/v1/authorization',
  requestTokenUrl: '',
  authorizationUrl: 'https://auth.riotgames.com/authorize?response_type=code',
  profile(profile) {
    return { id: profile.sub, name: profile.name || profile.puuid, email: profile.email || null }
  },
  options,
})
export const authOptions = {
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID || '', clientSecret: process.env.GOOGLE_CLIENT_SECRET || '' }),
    GitHubProvider({ clientId: process.env.GITHUB_ID || '', clientSecret: process.env.GITHUB_SECRET || '' }),
    DiscordProvider({ clientId: process.env.DISCORD_CLIENT_ID || '', clientSecret: process.env.DISCORD_CLIENT_SECRET || '' }),
    // Riot needs manual setup - keep as placeholder
    // RiotProvider({ clientId: process.env.RIOT_CLIENT_ID || '', clientSecret: process.env.RIOT_CLIENT_SECRET || '' }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'change_this_secret',
  session: { strategy: 'jwt' },
}
export default NextAuth(authOptions)
