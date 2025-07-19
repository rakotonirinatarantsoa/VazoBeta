import os
from flask import Flask, request, jsonify
import whisper
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permet les requêtes entre ton frontend React et ton backend Flask

UPLOAD_FOLDER = "uploads"
AUDIO_OUTPUT = "static/audio"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(AUDIO_OUTPUT, exist_ok=True)

model = whisper.load_model("small", device="cpu")

@app.route("/api/transcribe", methods=["POST"])
def transcribe_audio():
    if "audio" not in request.files:
        return jsonify({"error": "Aucun fichier audio fourni."}), 400

    audio_file = request.files["audio"]
    filepath = os.path.join(UPLOAD_FOLDER, audio_file.filename)
    audio_file.save(filepath)

    # Transcription avec Whisper simple
    result = model.transcribe(filepath)
    text = result["text"]
    
    # Traitement basique ligne par ligne
    lyrics = text.strip().split(",")
    lyrics = [line.strip() for line in lyrics if line.strip()]

    # Copie du fichier dans static/audio (si tu veux le rejouer depuis le frontend)
    output_audio_path = os.path.join(AUDIO_OUTPUT, audio_file.filename)
    with open(filepath, "rb") as src, open(output_audio_path, "wb") as dst:
        dst.write(src.read())

    return jsonify({
        "lyrics": lyrics,
        "audioUrl": f"/static/audio/{audio_file.filename}"
    })

if __name__ == "__main__":
    app.run(debug=True)
