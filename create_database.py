import pymongo

client = pymongo.MongoClient("mongodb+srv://spaceshark:spaceshark@spaceshark-6dxwt.mongodb.net/test?retryWrites=true&w=majority")

db = client.spaces

parking = db.parking
rooms = db.rooms
users = db.users

parkingDoc = {
        "number": "1",
        "claim": {
            "user": "",
            "tradeable": 0,
            "asking": 0,
            },
        "bids": [],
}

roomDoc = {
        "number": "A101",
        "claim": {
            "user": "",
            "tradeable": 0,
            "asking": 0,
            },
        "bids": [],
}

userDoc1 = {
        "username": "alulushi",
        "heldspaces": [],
        "placedbids": [],
}

userDoc2 = {
        "username": "gmarsillac",
        "heldspaces": [],
        "placedbids": [],
}

userDoc3 = {
        "username": "msingson",
        "heldspaces": [],
        "placedbids": [],
}

parking.insert_one(parkingDoc)
rooms.insert_one(roomDoc)
users.insert_one(userDoc1)
users.insert_one(userDoc2)
users.insert_one(userDoc3)
