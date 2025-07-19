import requests

def get_synced_lyrics(track, artist):
    url = f"https://lrclib.net/api/get"
    params = {
        "track_name": track,
        "artist_name": artist,
    }
    r = requests.get(url, params=params)
    if r.status_code == 200:
        data = r.json()
        if data.get("syncedLyrics"):
            with open(f"D:/VazoBeta/backend/Lyrics/{artist}_{track}.lrc","a") as file:
                file.write(data["syncedLyrics"])
                file.close()
                print("Done")
            # return data["syncedLyrics"]  # paroles avec timestamps
        # elif data.get("plainLyrics"):
        #     return data["plainLyrics"]  # paroles sans timestamps
        # else:
        #     return "Aucune parole trouvée."
    else:
        return "Erreur API."

get_synced_lyrics("Only-You", "Ric-Hassani")
# get_synced_lyrics()