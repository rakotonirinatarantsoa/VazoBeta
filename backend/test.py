import subprocess 
import re


# audio_path = r"D:/VAZO/backend/static/audio/hira4.mp3"
# image_path = r"D:/VAZO/backend/static/bg/background3.jpg"
# output_path = r"D:/VAZO/backend/static/hira7.mp4" 
# font_path = r"C:/Windows/Fonts/Arial.ttf" 
# lrc_path = r"D:/VAZO/backend/static/lyrics/hira3.lrc"

block = 7

def drawertext(parag, sta, end):
    return (
        f"drawtext=fontfile='Arial.ttf':text='{parag}':"
        f"x=(w-text_w)/2:y=(h-text_h)/2:"
        f"fontsize=25:fontcolor=white:box=1:boxcolor=black@0.3:"
        f"enable='between(t,{sta},{end})'"
    )

def without_tm(out_pth,name,audio_path,image_path,lrc_path):
    output_path = f"{out_pth}/{name}.mp4"
    with open(lrc_path, "r") as file:

        text = file.readlines()
        reste = len(text)%block
        parags = []

        for i in range(0,len(text)-reste,block):
            t = ''
            for j in range(i,i+block):
                t += text[j].replace("'", "")
            parags.append(t)

        if reste != 0:
            t = ''
            for i in range(len(text)-reste,len(text)):
                t += text[i].replace("'", "")
            parags.append(t)



    t = 218
    t_parag = t / (len(text)/block)
    print(t_parag)
    vf_filter = "scale=720:640"
    sr = 2
    end = sr+t_parag
    for parag in parags:
        vf_filter += f",{drawertext(parag, sr, end)}"
        if end + t_parag<t and sr + t_parag<t:
            sr += t_parag
            end += t_parag
        else:
            sr += t_parag
            end += (t - sr) - 1
        print(int(end))


    command =[
        "ffmpeg",
        "-loop","1",
        "-i", image_path,
        "-i", audio_path,
        "-vf",vf_filter,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-tune", "stillimage",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        "-pix_fmt", "yuv420p",
        output_path
    ]
    subprocess.run(command)

def with_tempstamp(out_pth,name,audio_path,image_path,lrc_path):
    output_path = f"{out_pth}/{name}.mp4"
    with open(lrc_path, "r") as file:
    
        lrcx = file.readlines()
        reste = len(lrcx)%block
        tm = []
        for lrc in lrcx:
            matches = re.findall(r"\[(\d+):(\d+)(?:\.(\d+))?\]", lrc)
            for matche in matches:
                minute = int(matche[0])
                seconds = int(matche[1])
                hundredths = int(matche[2])

                total_sec = minute*60 +seconds+hundredths /100
                lrc.replace(f"{matche}","")
                tm.append(total_sec)

        lrcxx = []
        for x in lrcx:  
            x = re.sub(r"\[\d+:\d+(?:\.\d+)?\]","",x).strip()
            lrcxx.append(x + "\n"),
         

        for x in lrcxx:
            print(x)
        for x in tm:
            print(x)
        
        vr_tp = []
        reste = len(tm)%3
        for i in range(0,len(tm)-reste,3):
            vr_tp.append((tm[i],tm[i+3]))
        
        if reste != 0:
            print(reste)
            vr_tp.append((tm[len(tm)-2],tm[len(tm)-1]))

        print(vr_tp)
        print(lrcx)        
        
        reste1 = len(lrcxx)%3
        parags = []
        for i in range(0,len(lrcxx)-reste1,3):
            t = ''
            for j in range(i,i+3):
                t += lrcxx[j].replace("'", "`")
            parags.append(t)

        if reste != 0:
            t = ''
            for i in range(len(lrcxx)-reste1,len(lrcxx)):
                t += lrcxx[i].replace("'", "`")
            parags.append(t)
        
        vf_filter = "scale=1280:720"
        for i in range(0,len(parags)):
            vf_filter += f",{drawertext(parags[i], vr_tp[i][0], vr_tp[i][1])}"
          
        print(parags)
        command =[
        "ffmpeg",
        "-loop","1",
        "-i", image_path,
        "-i", audio_path,
        "-vf",vf_filter,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-tune", "stillimage",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        "-pix_fmt", "yuv420p",
        output_path
    ]
    subprocess.run(command)

with_tempstamp()
# without_tm()
