import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div class= "meio"/><img src="https://s3-alpha-sig.figma.com/img/5f3a/f703/4087795e8b61a1155d8e286718174bbf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QLB4rpbN2oJfIw71o~jKMBJeMHfOCQCkxmrX2NyxpivQWcLLUVpe4Skzsv6jZ3f-BnBoa76msBkwKxAIXOfAcsUAlNV-r2qyG2FUNn2Ehn5VsRhxGs-wgxAdwyk~dMDR~jCWYcwS3MurJS63Lc-9iTLHBMuA4AZtJ8Xz5DuSMUlTLEUEtwaSJYZIUPpXeND7qbulzAeNkcKcuXldPoQ-1eiEf99tcBD8MN0xUVNA8NUGxHyuGDabyOsFW4nbH7SPA8G9FjE9F5X8KLgmVuLGPVSq81FINPVctQPdUSQuXYKU14IegqBIGVgbTAyS~xbD9R34Lrxsqh9p2R2jnUvYKg__" alt="Descrição da imagem"/>
                <form action="file:///C:/Users/Cliente/OneDrive/Área%20de%20Trabalho/git/fabrica/segunda.html"/>
                <label  for="email">email</label>
                <br></br>
                <input class="email" type="email" id="email" name="email_Usuario"/>
                <br></br>
                <label  for="senha">senha</label>
                <br></br>
                <input class="senha" type="number" id="senha" name="senha_usuario"/>
                <br></br>
            <input class="botao" type="submit" value="enviar"/>
                
    </main>
  );
}
