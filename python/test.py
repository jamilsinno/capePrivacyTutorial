import os
import requests
import openai

openai.api_key = os.getenv('OPENAI_API_KEY')

def deidentify(content, entities=[]):
    resp = requests.post(
        "https://api.capeprivacy.com/v1/privacy/deidentify/text",
        headers={"Authorization": f"Bearer {os.getenv('CAPE_API_KEY')}"},
        json={"content": content, "entities": entities}
    )

    return resp.json().get("content"), resp.json().get("entities")

document, entities = deidentify("Bob is a software engineer who works at Cape Privacy!")
question, entities = deidentify("Where does Bob work?", entities=entities)

resp = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant. You are to be given a redacted document and you will answer questions about it. Use the redacted placeholders in your answer, don't say that you do not know"},
        {"role": "system", "content": document},
        {"role": "user", "content": question},
    ]
)
print(resp)