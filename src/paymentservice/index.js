// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0
const express = require('express');
const body = require('body-parser')
const opentelemetry = require('@opentelemetry/api')
const charge = require('./charge')
const logger = require('./logger')

async function closeGracefully(signal) {
  server.close()
  process.kill(process.pid, signal)
}

const app = express();
app.use(body.json());

app.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }

  res.status(200).send(data);
});

app.post('/api/v1/pay', (req, res) => {
  const span = opentelemetry.trace.getActiveSpan();

  try {
    if (req.body == null || req.body.amount == null || req.body.creditCard == null) {
      throw new Error('Invalid input.');
    }

    const amount = req.body.amount
    span.setAttributes({
      'app.payment.amount': parseFloat(`${amount.units}.${amount.nanos}`)
    })
    logger.info({ request: req.body }, "Charge request received.")

    const response = charge.charge(req.body)
    res.status(200).send(response)
  } catch (err) {
    logger.warn({ err })

    span.recordException(err)
    span.setStatus({ code: opentelemetry.SpanStatusCode.ERROR })

    res.status(400).send({ error: err.message })
  }
});

const port = Number(process.env.PAYMENT_SERVICE_PORT)
const server = app.listen(port, () => logger.info("Starting server on port %d", port))

process.once('SIGINT', closeGracefully)
process.once('SIGTERM', closeGracefully)
