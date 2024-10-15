#!/bin/bash
cd /var/www/app.auctionegypt.com
git stash
git pull origin main
npm install
pm2 restart all
