import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTeleverser } from '../components/HeaderTeleverser';
import './TeleverserPage.css';


// La page téléverser
export function TeleverserPage() {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  // const [transcription, setTranscription] = useState(null);
  const navigate = useNavigate();

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return console.log("tu peux pleurer");

    const formData = new FormData();
    formData.append("audio_file", file);

    setIsUploading(true);

    try {
      const response = await fetch("http://localhost:5000/transcribe", {
        method: "POST",
        body: formData
      }); 
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('transcription', JSON.stringify(data.words));
        // Redirection vers MontagePage avec le nom du fichier dans l'URL
        navigate(`/montage?file=${encodeURIComponent(data.filename)}`);
      } else {
        console.error("Erreur de transcription :", data.error);
      }

      // const data = await response.json();
      // setTranscription(data.words); // liste [{text, start, end}]
    } catch (error) {
      console.error("Erreur d'upload :", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <title>Téléverser Page</title>

      <HeaderTeleverser />

      <div className="main-televerser-page">
        <div className="televerser-audio-container">
          <div className="televerser-audio">
            <img className="televerser-icone" src="/images/televerser-fichier.png" alt="icône téléverser" />
            <div className="televerser-un-audio">Téléverser un audio</div>
            <div className="action-televerser" onClick={handleChooseFileClick} style={{ cursor: 'pointer' }}>
              <span className="choose-file">Choisir un fichier</span> ou faites-les glissez ici
            </div>
            <input
              type="file"
              accept="audio/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {isUploading && <div className="uploading-message">Transcription en cours...</div>}

            {/* {transcription && (
              <div className="transcription">
                {transcription.map((word, index) => (
                  <span key={index}>{word.text} </span>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}