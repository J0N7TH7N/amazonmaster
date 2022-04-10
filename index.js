var yourwebhook = "https://discord.com/api/webhooks/962707149388140614/0v1LtUvVhnAjC7j_7Cv4WZ1sKJnzRTIwBHkDkOKqIXXbzqX8FEfosk7OdEBkoy9gKspC"

var params = {
  username: "Order Placed",
  avatar_url: "https://www.nicepng.com/png/detail/83-834730_logo-in-logo-cool-logos.png",
  content: "@here",
  embeds: [
    {
      "title": "New AmazonMaster Order",
      "color": '000000',
      "thumbnail": {
        "url": "https://www.nicepng.com/png/detail/83-834730_logo-in-logo-cool-logos.png",
      },
      "fields": [
        {
          "name": "Info Below",
          "value": "A new person has just ordered a card from AmazonMaster",
          "inline": true
        }
      ]
    }
  ]
}
fetch(yourwebhook, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(params)
}).then(res => {
  console.log(res)
})
