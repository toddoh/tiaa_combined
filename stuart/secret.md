


guide https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04

nginx setup https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04

https://premium.wpmudev.org/forums/topic/git-push-deploying-file-permission

https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps



#!/bin/sh
git --work-tree=/home/brooklynfivefive/www/public --git-dir=/home/brooklynfivefive/repo/website.git checkout -f


upstream website{
        server 127.0.0.1:8081;
}

# HTTPS - proxy requests on to local Node.js app:
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name inthenewsrooms.com www.inthenewsrooms.com;
    return 301 https://$server_name$request_uri;
}

server {
        listen 443 ssl http2 default_server;
        listen [::]:443 ssl http2 default_server;
        include snippets/ssl-inthenewsrooms.com.conf;
        include snippets/ssl-params.conf;
    
        root /home/brooklynfivefive/www/public/;
        index index.html
        server_name inthenewsrooms.com www.inthenewsrooms.com;


        ssl on;
        # Use certificate and key provided by Let's Encrypt:
        ssl_certificate /etc/letsencrypt/live/inthenewsrooms.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/inthenewsrooms.com/privkey.pem;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

        # Pass requests for / to localhost:8080:
        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://localhost:8081/;
                proxy_ssl_session_reuse off;
                proxy_set_header Host $http_host;
                proxy_cache_bypass $http_upgrade;
                proxy_redirect off;
        }

}

# HTTP - redirect all requests to HTTPS:
upstream backend {
        server localhost:8080;
}

server {
        listen 80;
        listen [::]:80 default_server ipv6only=on;
        return 301 https://$host$request_uri;
}

# HTTPS - proxy requests on to local Node.js app:
server {
        listen 443 ssl http2 default_server;
        listen [::]:443 ssl http2 default_server;
        include snippets/ssl-swoosh.inthenewsrooms.com.conf;
        include snippets/ssl-params.conf;
        root /home/brooklynfivefive/www/nsrbackend/;
        server_name swoosh.inthenewsrooms.com;
        
        ssl on;
        # Use certificate and key provided by Let's Encrypt:
        ssl_certificate /etc/letsencrypt/live/swoosh.inthenewsrooms.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/swoosh.inthenewsrooms.com/privkey.pem;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';

        # Pass requests for / to localhost:8080:
        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://localhost:8080/;
                proxy_ssl_session_reuse off;
                proxy_set_header Host $http_host;
                proxy_cache_bypass $http_upgrade;
                proxy_redirect off;
        }
}
