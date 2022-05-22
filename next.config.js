const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['i.ibb.co','i.postimg.cc','cnnespanol.cnn.com'],
  },
  compress:true,
  distDir:'./build',

}

module.exports = nextConfig;
