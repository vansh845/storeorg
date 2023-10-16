/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'overlays.co',
            },
            {
                protocol:'https',
                hostname:'static.nike.com'
            },
            {
                protocol:'https',
                hostname:'images.vegnonveg.com'
            },
            {
                protocol:'https',
                hostname:'i.imgur.com'
            },
            {
                protocol:'https',
                hostname:'avatars.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
