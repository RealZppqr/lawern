# Lawern - Discord Bot (Mono-Guild Framework)

Lawern is a Discord bot framework built with Node.js, Discord.js, and MongoDB. It is architected specifically for small-scale deployments (1–2 servers maximum) and is unsuitable for wide distribution across many guilds. Lawern includes core moderation features, XP tracking, slash command support, and a flexible command loader.

> ⚠️ Do not attempt to scale Lawern beyond 2 Discord servers. It lacks the architectural features required for sharded, distributed, or high-load deployments. For a scalable global bot, use [Kyuta](https://github.com/RealZppqr/kyuta).

---

## Features

- Command loader with automatic prefix and slash command support
- MongoDB-driven configuration and persistent user data
- Pretty duration formatting using `pretty-ms`
- Leveling, utility, and moderation systems
- Modular file structure for clean scalability (within limits)
- Built-in cooldown logic, guild config, and event binding
- Docker-ready deployment

---

## Requirements

- Node.js v16.9.0 or later
- A working MongoDB instance (local or remote)
- A Discord bot application and token

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/RealZppqr/lawern.git
cd lawern
npm install

> All necessary dependencies including discord.js, mongoose, dotenv, pretty-ms, and others will be installed via npm.
```

Configuration

Copy .env.example to .env and fill in your credentials:

```
cp .env.example .env
```

Then edit .env:
```
TOKEN=your_discord_token
MONGODB_URI=your_mongodb_connection_string
```

> No other environment variables are required unless you explicitly add new features



---

Running the Bot (Manual)

To start Lawern manually using Node:

```
node index.js
```

Recommend:
To run in development mode using nodemon (for automatic restarts on file save):

```
npm install -g nodemon
nodemon index.js
```


---

Docker Deployment

1. Environment Configuration

Make sure you have a valid .env file in the root directory (see .env.example).

2. Create a Dockerfile

```
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]

```
3. Build and Run the Image
 
```
docker build -t lawern-bot .
docker run --env-file .env lawern-bot
```
> Docker assumes all configs are handled through .env. The image installs production dependencies only.




---

Slash Command Behavior

Lawern registers global slash commands on startup. This may take time to propagate across Discord’s API. Make sure your bot has the applications.commands scope enabled.


---

Limitations

No Redis caching layer or shard management

No Redis-backed cooldown or concurrency control

No web dashboard or OAuth2 integration

MongoDB operations assume isolated use-case

No error boundaries for user misconfigurations


This is intentional. Lawern is meant for controlled deployments in personal or small community servers. Using this bot on multiple servers will eventually lead to rate-limiting, scalability problems, and poor reliability.


---

Development

Keep all commands under /commands

Use consistent structure: name, description, execute

MongoDB schemas go in models

Log errors to console.error() only; external logging is not configured

No TypeScript is used — plain modern JavaScript only



---

License

MIT. See LICENSE for terms and conditions.


---

Project Author

Created and maintained by RealZppqr. If you're building a global bot, switch to Kyuta, which supports sharding, scaling, and multiple-server orchestration.

