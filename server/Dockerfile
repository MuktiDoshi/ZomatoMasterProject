FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://Mukti_2310:muku2006@zomato-master.5kjjd.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=848273402409-82vffrbts5emj9a56mk9sitmqvbjdbr2.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=c6OZl2TtSKph_UmnGqwYpU10
ENV AWS_S3_ACCESS_KEY=AKIAZ677NUY2TI5FZL64
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN_API_KEY=7e89f36d4f912482c5c887dc2653dd99-dbdfb8ff-432c39d6
ENV MAILGUN_DOMAIN=sandbox5a156e083355403390965fd471dd0d98.mailgun.org
ENV RZR_PAY_ID=rzp_test_gapsgKlyYAVQUO
ENV RZR_PAY_SECRET=z7GxGOmRBWh5G6RwrCx3Pewg

CMD ["npm", "run", "start"]