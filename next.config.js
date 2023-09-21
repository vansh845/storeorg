/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true,
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
            }
        ]
    }
}

module.exports = nextConfig
