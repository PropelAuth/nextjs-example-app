/** @type {import('next').NextConfig} */

// Workaround to support multiline env variables
// https://github.com/vercel/next.js/discussions/37935#discussioncomment-3041338
const result = require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  env: result.parsed,
}

module.exports = nextConfig
