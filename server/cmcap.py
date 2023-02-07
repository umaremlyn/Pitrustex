import requests
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD"
parameters = {
  'start':'BTC',
  'limit':'BTC', 'ETH', 'BNB',
  'convert':'USD'
}

headers = {
  'Accepts': 'application/json',
  'X-CMC_Pro_API_Key': 'dd32svhj-c1d0-6b7a-bc5a-63cb9876bdf76e3'
}

session = Session()
session.headers.update(headers)
try:
  response = requests.get(url, headers=headers).json()
  btc_price = response["data"]["BTC"]["quote"]["USD"]["price"]
  eth_price = response["data"]["ETH"]["quote"]["USD"]["price"]
  bnb_price = response["data"]["BNB"]["quote"]["USD"]["price"]
  print("The current price of BTC:", btc_price)
  print("The current price of ETH:", eth_price)
  print("The current price of BNB:", bnb_price)
except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)
