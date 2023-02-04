import requests

api_key = "YOUR_API_KEY"
headers = {
    "Authorization": "Bearer {}".format(api_key)
}

data = {
    "type": "individual",
    "country": "US",
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "birthdate": "1980-01-01",
}

response = requests.post("https://api.mati.com/v1/identity", headers=headers, json=data)

if response.status_code == 200:
    identity_id = response.json()["data"]["id"]
    print("Identity created with ID:", identity_id)
else:
    print("Error creating identity:", response.text)
