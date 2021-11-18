FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN npm set progress=false && npm install

EXPOSE 8086

CMD ["npm", "run", "storybook"]