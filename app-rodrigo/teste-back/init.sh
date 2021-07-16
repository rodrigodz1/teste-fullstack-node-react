#!/bin/sh

echo "Running project"
./wait-for-it.sh -t 0 mysql-fullstack:3306
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npm run dev