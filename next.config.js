const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'i.ibb.co',
      'i.postimg.cc',
    ],
  },
  compress:true,
};

module.exports = nextConfig;
