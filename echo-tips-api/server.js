const express = require('express');
const app = express();
const port = 3000;

const tipsData = {
  "energy": [
    {
      "text": "Turn off lights when you leave a room to save energy.",
      "image": "https://example.com/images/turn-off-lights.jpg"
    },
    {
      "text": "Unplug devices when not in use to prevent phantom energy usage.",
      "image": "https://example.com/images/unplug-devices.jpg"
    }
  ],
  "recycling": [
    {
      "text": "Recycle paper, plastic, and glass to reduce waste.",
      "image": "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "text": "Reuse containers and jars instead of throwing them away.",
      "image": "https://example.com/images/reuse-containers.jpg"
    }
  ],
  "transportation": [
    {
      "text": "Walk or bike instead of driving to reduce carbon emissions.",
      "image": "https://example.com/images/walk-or-bike.jpg"
    },
    {
      "text": "Carpool with others to save fuel and reduce traffic.",
      "image": "https://example.com/images/carpool.jpg"
    }
  ]
};

app.get('/tips', (req, res) => {
  res.json(tipsData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});